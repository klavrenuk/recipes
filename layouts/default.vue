<script setup lang="ts">
    import {useRecipes} from "~/store/recipes";

    import HeaderGeneral from '~/components/header/HeaderGeneral';

    const recipesStore = useRecipes();
</script>

<template>
    <div class="layout_default">
        <LoaderFullHeight v-if="recipesStore.isLoading" />

        <div v-show="!recipesStore.isLoading">
            <HeaderGeneral />

            <main>
                <div class="container mx-auto">
                    <slot></slot>
                </div>
            </main>
        </div>
    </div>
</template>