<script setup lang="ts">
    import SearchGeneral from '~/components/search/SearchGeneral';
</script>

<template>
    <div class="layout_recipes">
        Hello
        <header class="layout_recipes-header">
            <SearchGeneral />
        </header>

        <main class="layout_recipes-main">
            <div class="container mx-auto">
                <slot></slot>
            </div>
        </main>
    </div>
</template>
