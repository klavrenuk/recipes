<script lang="ts" setup>
    import {ref} from 'vue';
    import { useRecipes } from '~/store/recipes';

    import ListItems from '~/components/form/ListItems';
    import LoadFile from '~/components/form/LoadFile';

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
    const recipesStore = useRecipes();

    const isValidRecipe = ():boolean => {
        invalidOptions.value = [];

        if(!recipe.value) return false;

        for(let option of options) {
            const value:unknown = recipe.value[option.key as keyof IRecipe];

            if(option.isRequired) {
                if(!value) {
                    invalidOptions.value.push(option.key);
                }

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

        return true;
    }

    const onSave = async () =>  {
        try {
            recipe.value.image = RefLoadFile.value[0].getValue();
            recipe.value.ingredients = RefIngredients.value[0].getValue();

            console.log('onSave', recipe.value);

            if(!isValidRecipe()) {
                console.log('isNotValid')
                return
            }




            // add new id if
            console.log('saving before');
            await recipesStore.create(recipe);

            console.log('after saving');


        } catch(err) {
            console.error(err);
        }
    }

    const refresh = () => {
        console.log('refresh');
        recipe.value = {};
    }

    onMounted(() => {
        // get recipy
    })
</script>

<template>
    <div class="recipe">
        invalidOptions - {{ invalidOptions }}

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
</template>

<style lang="less" scoped>
    .recipe {
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