<script lang="ts" setup>
    import {ref} from 'vue';
    import { useRecipes } from '~/store/recipes';

    import ListItems from '~/components/form/ListItems';
    import LoadFile from '~/components/form/LoadFile';
    import LoaderFullHeight from '~/components/loader/LoaderFullHeight';
    import Crumbs from '~/components/crumbs/CrumbsGeneral';

    import {IRecipe} from "~/interfaces/Recipe";
    import {IListOption} from "~/interfaces/Form";

    const options:IListOption[] = [
        {key: 'name', label: 'Имя', type: 'input', subtype: 'text', isRequired: true},
        {key: 'image', label: 'Картинка', type: 'image', isRequired: true},
        {key: 'ingredients', label: 'Ингредиенты', type: 'listItems', isRequired: true},
        {key: 'time', label: 'Время готовка(мин)', type: 'input', subtype: 'number'},
        {key: 'description', label: 'Описание', type: 'textarea'}
    ];

    type TRecipe = Partial<IRecipe>;

    const recipe = ref<TRecipe>({});
    const RefLoadFile = ref(null);
    const RefIngredients = ref<string[]>([]);
    const invalidOptions = ref<string[]>([]);
    const isLoading = ref<boolean>(false);
    const recipesStore = useRecipes();


    const isValidRecipe = ():boolean => {
        invalidOptions.value = [];

        if(!recipe.value) return false;

        for(let option of options) {
            const value:unknown = recipe.value[option.key as keyof IRecipe];

            if(option.isRequired) {
                if(!value) {
                    invalidOptions.value.push(option.key);
                    console.log('here');
                    continue
                }

                console.log('value', value);
                if(option.subtype === 'text' && !value.trim()) {
                    invalidOptions.value.push(option.key);
                }

                if(option.subtype === 'number' && (Number(value) || Number.isNaN(value))) {
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
            isLoading.value = true;
            recipe.value.image = RefLoadFile.value[0].getValue();
            recipe.value.ingredients = RefIngredients.value[0].getValue();

            console.log('onSave', recipe.value);

            if(!isValidRecipe()) return

            if(!recipe.value.id) recipe.value.id = new Date().getTime();

            await recipesStore.create(recipe.value);

        } catch(err) {
            console.error(err);

        } finally {
            isLoading.value = false;
        }
    }

    const refresh = () => {
        console.log('refresh');
        recipe.value = {};
    }

    onMounted(() => {
        // get recipy
        recipe.value = recipesStore.recipe;
    })
</script>

<template>
    <div class="recipe">
        <LoaderFullHeight v-if="isLoading" />
        <div v-else>
            <Crumbs />

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
                               ref="RefIngredients"
                    />

                    <LoadFile v-if="option.type === 'image'"
                              ref="RefLoadFile"
                    />
                </div>
            </div>

            <div class="recipe-control flex">
                <button class="btn btn-link">Очистить</button>
                <button class="btn primary"
                        @click="onSave"
                >Сохранить</button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .recipe {
        & .crumbs {
            margin-bottom: 2rem;
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