<script lang="ts" setup>
    import RecipeTableCell from '~/components/table/RecipeTableCell';

    import {ITHead} from "~/interfaces/Table";
    import {IRecipe} from "~/interfaces/Recipe";

    definePageMeta({
        layout: 'default',
    });


    const listTableHeaders:ITHead[] = [
        {key: 'name', text: 'название'},
        {key: 'description', text: 'описание'},
        {key: 'ingredients', text: 'список ингредиентов'},
        {key: 'image', text: 'изображение'},
        {key: 'time', text: 'время приготовления'}
    ];
    const recipes:IRecipe[] = [];

</script>

<template>
    <div class="recipes">

        <p class="font-bold">Main page</p>
    </div>
</template>

<style lang="less">
    .recipes {

    }
</style>