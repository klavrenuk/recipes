<script lang="ts" setup>
    import {ref} from 'vue';

    import CrumbsGeneral from '~/components/crumbs/CrumbsGeneral';

    import {IRecipe} from "~/interfaces/Recipe";
    import {IListOption} from '~/interfaces/Form';

    definePageMeta({
        layout: 'default',
    });

    const recipe:IRecipe = ref({});

    const options:IListOption[] = [
        {key: 'name', label: 'Имя'},
        {key: 'image', label: 'Картинка'},
        {key: 'ingredients', label: 'Ингредиенты'},
        {key: 'time', label: 'Время готовка(мин)'},
        {key: 'description', label: 'Описание'}
    ];
</script>

<template>
    <div class="recipe">
        <div class="recipe-header">
            <CrumbsGeneral />

            <div class="grid grid-cols-2">
                <h1 class="font-bold title title-section">{{ recipe.name }}</h1>
                <div class="recipe-header-control text-right">
                    <button class="btn btn-danger">
                        Удалить
                    </button>
                    <button class="btn primary recipe_edit">
                        Редактировать
                    </button>
                </div>
            </div>
        </div>

        <div class="recipe-content">
            <div class="flex item-start">
                <div class="recipe-img">
                    <img :src="recipe.image"
                         :alt="recipe.name"
                         loading="lazy"
                    />
                </div>

                <ul class="recipe-options">
                    <li class="recipe-options-item"
                        v-for="option in options"
                        :key="option.key"
                    >
                        <div class="option-name">{{ option.label }}</div>
                        <div class="option-value">
                            {{ recipe[option.key as keyof IRecipe].toString() }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .recipe {
        &-header {
            & .crumbs {
                margin-bottom: 2rem;
            }

            &-control {
                & .recipe_edit {
                    margin-left: 1rem;
                }
            }
        }

        &-img {
            width: 500px;
            height: 500px
        }

        &-options {
            padding-left: 35px;

            &-item {
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid #ccc;

                &:last-child {
                    margin-bottom: 0;
                    border-bottom: none;
                }

                & .option-name {
                    margin-bottom: .2rem;
                    color: #7B7B7B;
                }
            }
        }
    }
</style>