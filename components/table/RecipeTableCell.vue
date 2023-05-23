<script setup lang="ts">
    import {defineProps} from 'vue';
    import {IRecipe} from "@/interfaces/Recipe";


    const {recipe, key} = defineProps({
        recipe: {
            type: Object,
            required: true
        },
        key: {
            type: String,
            required: true
        }
    });


</script>

<template>
    <div class="recipe_table_cell">
<!--        {{ recipe[key as keyof IRecipe] }}-->
    </div>
</template>