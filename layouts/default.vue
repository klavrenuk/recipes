<script setup lang="ts">
    import HeaderGeneral from '~/components/header/HeaderGeneral';
</script>

<template>
    <div class="layout_default">
        <HeaderGeneral />

        <main>
            <div class="container mx-auto">
                <slot></slot>
            </div>
        </main>
    </div>
</template>