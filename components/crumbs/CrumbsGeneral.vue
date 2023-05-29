<script lang="ts" setup>
    import {ref} from 'vue';
    import {IRoute} from "~/interfaces/Route";

    const {navList} = defineProps<{
        navList:IRoute[],
    }>();

    const nav = ref<IRoute[]>([
        {
            path: '/',
            name: 'Рецепты'
        },
        ...navList
    ]);
</script>

<template>
    <nav class="crumbs text-left">
        <a v-for="(navItem,index) in nav"
                  :href="navItem.path"
                  :class="index < nav.length - 1 ? '' : 'last'"
           class="crumbs-item"
        >
            {{ navItem.name }}
            <span v-if="index < nav.length - 1"
                  cass="list-item-arrow"
            > > </span>
        </a>
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