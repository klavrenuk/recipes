<script lang="ts" setup>
    import { useRecipes } from '~/store/recipes';

    import CardRecipe from '~/components/recipe/CardRecipe';
    import LoaderFullHeight from '~/components/loader/LoaderFullHeight';
    import RecipesEmpty from '~/components/recipe/RecipesEmpty';
    import Crumbs from '~/components/crumbs/CrumbsGeneral';

    import {IRecipe} from "~/interfaces/Recipe";
    import {ISelectOption} from '~/interfaces/Form';

    definePageMeta({
        layout: 'layout-recipes'
    });


    const filterOptions:ISelectOption[] = [
        {value: 'ingredients', name: 'По кол-во ингредиентов'},
        {value: 'time', name: 'Времени приготовления'}
    ];
    const recipesStore = useRecipes();
    const sortType = ref<string|null>(null)

    const onChangeSortType = () => recipesStore.sortBy(sortType.value);

    onMounted(() => {
        recipesStore.loadRecipes();
    })
</script>

<template>
    <div class="recipes">
        <div v-if="!recipesStore.isLoading">
            <RecipesEmpty v-if="!recipesStore.recipes[0]" />

            <div v-else
                 class="toggle_view_effect"
                 :class="{'active': recipesStore.recipes[0]}"
            >

                <div class="recipes-control text-right">
                    <div class="grid grid-cols-2 items-start">
                        <Crumbs :navList="[]" />
                        <div>
                            <label class="font-bold recipes-control-label"
                                   for="RecipeSort"
                            >Сортировать по</label>
                            <select class="block w-full p-2 mb-6 text-sm text-gray-900 custom_select"
                                    id="RecipeSort"
                                    v-model="sortType"
                                    @change="onChangeSortType"
                            >
                                <option :value="null" selected>По дате создания</option>
                                <option v-for="option in filterOptions" :value="option.value">
                                    {{ option.name}}
                                </option>
                            </select>
                            <NuxtLink class="btn primary"
                                      to="recipes/null"
                            >Добавить рецепт</NuxtLink>
                        </div>
                    </div>
                </div>

                <h1 class="recipes-title font-bold title title-section">
                    Рецепты
                </h1>

                <ul class="recipes-list flex items-center">
                    <li class="recipes-list-item"
                        v-for="recipe in recipesStore.recipes"
                        :key="recipe.id"
                    >
                        <CardRecipe :recipe="recipe" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .recipes {
        &-title {
            line-height: 120%;
        }

        &-control {
            &-label {
                font-size: 14px;
            }
        }

        &-list {
            flex-wrap: wrap;
        }
    }
</style>