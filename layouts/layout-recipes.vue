<script setup lang="ts">
    import SearchRecipes from '~/components/search/SearchRecipes.vue';
</script>

<template>
    <div class="layout_recipes">
        <header class="layout_recipes-header">
            <SearchRecipes />
        </header>

        <main class="layout_recipes-main">
            <div class="container mx-auto">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<style lang="less">
    .layout_recipes {
        &-header {
            height: 56px;
            margin-bottom: 2rem;
            border-bottom: 1px solid #E8E8E8;
            padding: 1rem 0;
            display: flex;
            justify-content: center;
        }
    }
</style>