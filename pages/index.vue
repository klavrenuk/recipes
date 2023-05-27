<script lang="ts" setup>
    import { useRecipes } from '~/store/recipes';
    import {IRecipe} from "~/interfaces/Recipe";
    import CardRecipe from '~/components/recipe/CardRecipe';

    definePageMeta({
        layout: 'layout-recipes'
    });

    const recipes:IRecipe[] = [];
    const recipesStore = useRecipes();

    console.log(recipesStore.recipes);
</script>

<template>
    <div class="recipes">
        <h1 class="recipes-title font-bold title title-section">
            Рецепты
        </h1>

        <ul class="recipes-list flex items-center">
            <li class="recipes-list-item"
                v-for="recipe in recipesStore.recipes"
                :key="recipe.id"
            >
                <CardRecipe :recipe="recipe" />
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    .recipes {
        &-title {
            line-height: 120%;
        }

        &-list {
            flex-wrap: wrap;
        }
    }
</style>