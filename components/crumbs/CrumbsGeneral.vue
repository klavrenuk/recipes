<script lang="ts" setup>
    import {ref} from 'vue';
    import {IRoute} from "~/interfaces/Route";

    const {navList} = defineProps<{
        navList:IRoute[],
    }>();

    const nav:IRoute[] = ref([
        {
            path: '/',
            name: 'Рецепты'
        },
        ...navList
    ]);

    console.log('nav', nav.value);
</script>

<template>
    <nav class="crumbs">
        <NuxtLink v-for="(navItem,index) in nav"
                  :to="navItem.path"
                  class="crumbs-item"
                  :class="index < nav.length - 1 ? '' : 'last'"
        >
            {{ navItem.name }}
            <span v-if="index < nav.length - 1"
                  cass="list-item-arrow"
            > > </span>

        </NuxtLink>
    </nav>
</template>

<style lang="less" scoped>
    .crumbs {
        &-item {
            margin-right: 10px;
            color: #4074C1;
            fontsize: 14px;

            &-arrow {
                margin-left: 10px;
            }

            &.last {
                color: #7B7B7B;
            }
        }
    }
</style>