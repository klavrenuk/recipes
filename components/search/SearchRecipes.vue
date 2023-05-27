<script setup lang="ts">
    import {ref} from 'vue';

    const str = ref<string>('');
</script>

<template>
    <div class="search_recipes">
        <input class="search_recipes-input"
               placeholder="Искать рецепт"
               v-model.trim="str"
        />
        <button class="search_recipes-btn_clear btn-icon"></button>
        <button class="search_recipes-btn_search btn btn-icon"></button>
    </div>
</template>

<style lang="less">
    @import 'assets/styles/config.less';

    .search_recipes {
        position: relative;
        min-width: 200px;
        width: 100%;
        max-width: 570px;
        height: 44px;

        &-input {
            height: 44px;
            width: 100%;
            border-radius: 6px;
            border: 2px solid @yellow;
            padding: 10px 60px 10px 15px;
            color: #7B7B7B;

            &:focus {
                border-color: @yellowDark;
            }
        }

        &-btn_clear,
        &-btn_search {
            position: absolute;
            top: 10px;
        }

        &-btn_clear {
            right: 35px;
            background-image: url('/images/icon-search-clear.svg');

            &:hover, &:active {
                background-image: url('/images/icon-search-clear-effect.svg');
            }
        }

        &-btn_search {
            right: 10px;
            background-image: url('/images/magnifier.svg');

            &:hover, &:active {
                background-image: url('/images/magnifier-effect.svg');
            }
        }
    }
</style>