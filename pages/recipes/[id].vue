<script lang="ts" setup>
    import {ref} from 'vue';
    import { useRecipes } from '~/store/recipes';

    import ListItems from '~/components/form/ListItems';
    import LoadFile from '~/components/form/LoadFile';
    import Crumbs from '~/components/crumbs/CrumbsGeneral';

    import {IRecipe} from "~/interfaces/Recipe";
    import {IListOption} from "~/interfaces/Form";
    import {IRoute} from "~/interfaces/Route";

    type TRecipe = Partial<IRecipe>;

    const recipe = ref<TRecipe>({});
    const RefLoadFile = ref(null);
    const RefIngredients = ref<string[]>([]);
    const invalidOptions = ref<string[]>([]);
    const isLoading = ref<boolean>(false);
    const recipesStore = useRecipes();
    const {id} = useRoute().params;
    const title = ref('Создание рецепта');
    const isShowContent = ref(false);

    const options:IListOption[] = [
        {key: 'name', label: 'Имя', type: 'input', subtype: 'text', isRequired: true},
        {key: 'image', label: 'Картинка', type: 'image', isRequired: true},
        {key: 'ingredients', label: 'Ингредиенты', type: 'listItems', isRequired: true},
        {key: 'time', label: 'Время готовка(мин)', type: 'input', subtype: 'number', isRequired: true},
        {key: 'description', label: 'Описание', type: 'textarea'}
    ];
    const navList = ref<IRoute[]>([]);

    const isValidRecipe = ():boolean => {
        invalidOptions.value = [];

        if(!recipe.value) return false;

        for(let option of options) {
            const value:unknown = recipe.value[option.key as keyof IRecipe];

            if(option.isRequired) {
                if(!value) {
                    invalidOptions.value.push(option.key);
                    continue
                }

                if(option.subtype === 'text' && !value.trim()) {
                    invalidOptions.value.push(option.key);
                }

                if(option.subtype === 'number' && (Number(value) && Number.isNaN(value))) {
                    invalidOptions.value.push(option.key);
                }

                if(
                    option.type === 'listItems' &&
                    (!Array.isArray(value) || value.length === 0)
                ) {
                    invalidOptions.value.push(option.key);
                }
            }
        }

        return invalidOptions.value.length === 0;
    }

    const onSave = async () =>  {
        try {
            if(!recipe.value.id || !recipe.value.image) {
                recipe.value.image = RefLoadFile.value[0].getValue();
            }
            
            recipe.value.ingredients = RefIngredients.value[0].getValue();

            if(!isValidRecipe()) return

            isLoading.value = true;
            if(!recipe.value.id) {
                recipe.value.id = new Date().getTime();
                await recipesStore.create(recipe.value);

            } else {
                await recipesStore.edit(recipe.value);
            }
            
            location.href = '/';

        } catch(err) {
            console.error(err);

        } finally {
            setTimeout(() => {
                isLoading.value = false;
            }, 1000);
        }
    }

    const refresh = () => recipe.value = {};

    const setNavList = () => {
        let name = 'Рецепт';

        if(recipe.value && recipe.value.hasOwnProperty('id')) {
            name = recipe.value.name || '';
        }

        const route:IRoute = {path: 'recipes/' + id, name: name};
        navList.value.push(route);
    }

    const onClear = () => {
        recipe.value = {};
        RefIngredients.value[0].clear();
    }

    onMounted(async () => {
        try {
            if(id !== 'null') {
                recipe.value = await recipesStore.getRecipe(id);
                title.value = 'Редактирование ' + recipe.value.name;
            }

            recipesStore.setLoading();
            setNavList();
            isShowContent.value = true;


        } catch(err) {
            console.error(err);
            isShowContent.value = false;
        }
    })
</script>

<template>
    <div class="recipe">
        <div v-if="isShowContent"
             v-show="!isLoading"
        >
            <Crumbs :navList="navList" />

            <h1 class="recipe-title font-bold">{{ title }}</h1>

            <div class="grid grid-cols-1 gap-6">
                <div class="form-group"
                     v-for="option in options"
                     :key="option.key"
                     :class="{'invalid': invalidOptions.includes(option.key)}"
                >
                    <label class="form-group-label font-bold"
                           :for="option.key"
                    >
                        {{ option.label }}
                        <span class="required-item" v-if="option.isRequired">
                        *
                    </span>
                    </label>

                    <input v-if="option.type === 'input'"
                           :placeholder="'Введите ' + option.label.toLowerCase()"
                           :type="option.subtype"
                           :id="option.key"
                           class="recipe_input"
                           :class="{'invalid': invalidOptions.includes(option.key)}"
                           v-model.trim="recipe[option.key as keyof IRecipy]"
                    />

                    <textarea v-if="option.type === 'textarea'"
                              :id="option.key"
                              :placeholder="'Введите ' + option.label.toLowerCase()"
                              v-model.trim="recipe[option.key as keyof IRecipy]"
                              class="recipe_textarea"
                    ></textarea>

                    <ListItems v-if="option.type === 'listItems'"
                               :defaultValue="recipe[option.key as keyof IRecipy]"
                               ref="RefIngredients"
                    />

                    <LoadFile v-if="option.type === 'image'"
                              ref="RefLoadFile"
                              :recipe="recipe"
                    />
                </div>
            </div>

            <div class="recipe-control flex">
                <button class="btn btn-link"
                        @click="onClear"
                >Очистить</button>
                <button class="btn primary"
                        @click="onSave"
                >Сохранить</button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .recipe {
        &-title {
            margin: 1rem 0 2rem;
            font-size: 30px;
        }

        & .form-group {
            margin-bottom: 1rem;

            &.invalid {
                & label {
                    color: #FF0000
                }
            }

            & .required-item {
                margin-left: .5rem;
                color: #FF0000;
            }
        }

        &-control {
            margin-top: 2rem;
            justify-content: space-between;
        }
    }
</style>