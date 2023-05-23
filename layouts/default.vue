<script setup lang="ts">
    import AppHeader from '~/components/AppHeader/AppHeader';

</script>

<template>
    <div class="layout_default">
        <AppHeader />

        <main>
            <div class="container mx-auto">
                <slot></slot>
            </div>
        </main>

        <footer>

        </footer>
    </div>
</template>

<style lang="less">
    .layout_default {

    }
</style>