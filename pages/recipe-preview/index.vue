<script lang="ts" setup>
    import {ref} from 'vue';

    import CrumbsGeneral from '~/components/crumbs/CrumbsGeneral';

    import {IRecipe} from "~/interfaces/Recipe";
    import {IListOption} from '~/interfaces/Form';
    import {useRecipes} from "~/store/recipes";

    definePageMeta({
        layout: 'default',
    });

    const options:IListOption[] = [
        {key: 'name', label: 'Имя'},
        {key: 'ingredients', label: 'Ингредиенты'},
        {key: 'time', label: 'Время готовка(мин)'},
        {key: 'description', label: 'Описание'}
    ];
    const {id, router} = useRoute().params;
    const recipesStore = useRecipes();

    const recipe = ref<IRecipe|null>(null);
    const isShowContent = ref<boolean>(false);

    const onEdit = () => recipesStore.setRecipe(recipe);

    const onRemove = () => {
        console.log('onremove');
    }

    onMounted(async() => {
        try {
            recipe.value = await recipesStore.getRecipe(id);

            if(!recipe.value) return;

            isShowContent.value = true;

        } catch(err) {
            console.error(err);
        }
    })
</script>

<template>
    <div class="recipe_preview toggle_view_effect"
         :class="{'active': isShowContent}"
    >
        <div v-if="isShowContent">
            <div class="recipe_preview-header">
                <CrumbsGeneral :navList="[]" />

                <div class="grid grid-cols-2 items-center">
                    <h1 class="font-bold title title-section">{{ recipe.name }}</h1>
                    <div class="recipe_preview-header-control text-right">
                        <button class="btn btn-danger"
                                @click="onRemove"
                        >
                            Удалить
                        </button>
                        <NuxtLink class="btn primary recipe_edit"
                                  @click="onEdit"
                                  to="/recipes/0"
                        >
                            Редактировать
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="recipe_preview-content">
                <div class="flex item-start">
                    <div class="recipe_preview-img">
                        <img :src="recipe.image"
                             :alt="recipe.name"
                             loading="lazy"
                        />
                    </div>

                    <ul class="recipe_preview-options">
                        <li class="recipe_preview-options-item"
                            v-for="option in options"
                            :key="option.key"
                        >
                            <div class="option-name">{{ option.label }}</div>
                            <div class="option-value"
                                 v-if="recipe"
                            >
                                {{ recipe[option.key as keyof IRecipe].toString() }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .recipe_preview {
        &-header {
            margin-bottom: 2rem;

            & .crumbs {
                margin-bottom: 2rem;
            }

            & .title {
                margin: 0;
            }

            &-control {
                & .recipe_edit {
                    margin-left: 1rem;
                }
            }
        }

        &-img {
            width: 500px;
            height: 500px
        }

        &-options {
            padding-left: 35px;

            &-item {
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid #ccc;

                &:last-child {
                    margin-bottom: 0;
                    border-bottom: none;
                }

                & .option-name {
                    margin-bottom: .2rem;
                    color: #7B7B7B;
                }
            }
        }
    }
</style>