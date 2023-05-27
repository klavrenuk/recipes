<script lang="ts" setup>
    const nav = [
        {
            path: '/',
            name: 'Главная'
        }
    ];
</script>

<template>
    <nav class="crumbs">
        <NuxtLink v-for="navItem in nav"
                :to="navItem.path"
        >
            {{ navItem.name }}
        </NuxtLink>
    </nav>
</template>

<style scoped>

</style>