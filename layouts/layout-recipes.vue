<script setup lang="ts">
    import {useRecipes} from "~/store/recipes";

    import HeaderGeneral from '~/components/header/HeaderGeneral';
    import SearchRecipes from '~/components/search/SearchRecipes.vue';
    import LoaderFullHeight from '~/components/loader/LoaderFullHeight';

    import {IRecipe} from "~/interfaces/Recipe";

    const recipesStore = useRecipes();
</script>

<template>
    <div class="layout_recipes">
        <LoaderFullHeight v-if="recipesStore.isLoading" />

        <div v-show="!recipesStore.isLoading">
            <HeaderGeneral>
                <template>
                    <SearchRecipes />
                </template>
            </HeaderGeneral>

            <main class="layout_recipes-main">
                <div class="container mx-auto">
                    <slot></slot>
                </div>
            </main>
        </div>
    </div>
</template>

<style lang="less">
    .layout_recipes {}
</style>