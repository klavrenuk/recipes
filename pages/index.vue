<script lang="ts" setup>
    console.log('start');

    import { useRecipes } from '~/store/recipes';
    import {IRecipe} from "~/interfaces/Recipe";
    import CardRecipe from '~/components/recipe/CardRecipe';

    const recipes:IRecipe[] = [];
    const recipesStore = useRecipes();

    console.log(recipesStore.recipes);
</script>

<template>
    <div class="recipes">
        <h1 class="recipes-title font-bold">
            Рецепты
        </h1>

        <ul class="recipes-list">
            <li class="recipes-list-item"
                v-for="recipe in recipes"
                :key="recipe.id"
            >
                <CardRecipe />
            </li>
        </ul>
    </div>
</template>