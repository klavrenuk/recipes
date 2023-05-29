<script lang="less" setup>

</script>

<template>
    <header class="header_general">
        <slot name="container"></slot>
    </header>
</template>


<style lang="less" scoped>
    .header_general {
        margin-bottom: 2rem;
        border-bottom: 1px solid #E8E8E8;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
    }
</style>