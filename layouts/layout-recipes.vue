<script setup lang="ts">
    import HeaderGeneral from '~/components/header/HeaderGeneral';
    import SearchRecipes from '~/components/search/SearchRecipes.vue';
</script>

<template>
    <div class="layout_recipes">
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
</template>

<style lang="less">
    .layout_recipes {}
</style>