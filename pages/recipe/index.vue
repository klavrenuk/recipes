<script lang="ts" setup>
    import {ref} from 'vue';

    import ListItems from '~/components/form/ListItems';

    import {IRecipe} from "~/interfaces/Recipe";
    import {IListOption} from "~/interfaces/Form";

    const options:IListOption[] = [
        {key: 'name', label: 'Имя', type: 'input', subtype: 'text'},
        {key: 'image', label: 'Картинка', type: 'image'},
        {key: 'ingredients', label: 'Ингредиенты', type: 'listItems'},
        {key: 'time', label: 'Время готовка(мин)', type: 'input', subtype: 'number'},
        {key: 'description', label: 'Описание', type: 'textarea'}
    ];

    const recipe = ref<IRecipe>({});

    onMounted(() => {
        // get recipy
    })
</script>

<template>
    <div class="recipe">
        <form>
            <div class="grid grid-cols-2 gap-6">
                <div class="form-group"
                     v-for="option in options"
                     :key="option.key"
                >
                    <label class="form-group-label font-bold"
                           :for="option.key"
                    >{{ option.label }}</label>

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

                    <ListItems v-if="option.type === 'listItems'" />
                </div>
            </div>
        </form>

        <div class="recipe-control flex">
            <button class="btn">Очистить</button>
            <button class="btn primary">Сохранить</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .recipe {
        & .form-group {
            margin-bottom: 1rem;
        }

        &-control {
            justify-content: space-between;
        }
    }
</style>