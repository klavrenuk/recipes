<script lang="ts" setup>
    import { useRecipes } from '~/store/recipes';

    import CardRecipe from '~/components/recipe/CardRecipe';
    import LoaderFullHeight from '~/components/loader/LoaderFullHeight';
    import RecipesEmpty from '~/components/recipe/RecipesEmpty';
    import Crumbs from '~/components/crumbs/CrumbsGeneral';

    import {IRecipe} from "~/interfaces/Recipe";

    definePageMeta({
        layout: 'layout-recipes'
    });

    const recipes:IRecipe[] = [];
    const recipesStore = useRecipes();

    onMounted(() => {
        recipesStore.loadRecipes();
    })
</script>

<template>
    <div class="recipes">
        <RecipesEmpty v-if="!recipesStore.recipes[0]" />

        <div v-else
             class="toggle_view_effect"
             :class="{'active': recipesStore.recipes[0]}"
        >
            <Crumbs :navList="[]" />

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