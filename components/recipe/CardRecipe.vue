<script lang="ts" setup>
    import {IRecipe} from "~/interfaces/Recipe";

    const {recipe} = defineProps<{
        recipe:IRecipe
    }>()
</script>

<template>
    <div class="card_recipe">
        <div class="card_recipe-img">
            <NuxtLink :to="'/recipes/' + recipe.id">
                <img :src="recipe.image"
                     :alt="recipe.name"
                     loading="lazy"
                />
            </NuxtLink>
        </div>

        <NuxtLink :to="'/recipes/' + recipe.id"
                  class="card_recipe-name font-bold"
        >
            {{ recipe.name }}
        </NuxtLink>

        <div class="card_recipe-info">
            <div class="flex items-center">
                <span class="info-ingredients">
                    <i class="info-ingredients-icon" />
                    <span class="info-ingredients-text">
                        {{recipe.ingredients.length}}
                    </span>
                </span>
                <span class="info-time">
                    <i class="info-time-icon" />
                    <span class="info-time-text">{{ recipe.time }}</span>
                </span>
            </div>
        </div>

        <p class="card_recipe-description break_text">{{ recipe.description }}</p>
    </div>
</template>

<style lang="less">
    .card_recipe {
        height: 320px;
        width: 254px;
        margin: 0 1rem 1rem 0;
        padding: 0 1rem 24px;
        overflow: hidden;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);

        &-img {
            margin-bottom: 1rem;
            height: 110px;

            & img {
                height: 100%;
                width: 100%;
            }
        }

        &-name {
            font-size: 18px;
        }

        &-info {
            margin: .5rem 0;

            & .info-ingredients,
            & .info-time {
                color: #7B7B7B;
            }

            & .info-ingredients-icon,
            & .info-time-icon {
                height: 12px;
                width: 12px;
                display: inline-block;
            }

            & .info-ingredients {
                margin-right: 1rem;

                &-icon {
                    margin-right: .4rem;
                    background: url('/images/icon-ingredients.svg') center center no-repeat;
                }
            }

            & .info-time {
                &-icon {
                    margin-right: .4rem;
                    background: url('/images/icon-time.svg') center center no-repeat;
                }
            }
        }

        &-description {
            height: 95px;
            color: #141414;
            font-size: 15px;
            line-height: 130%;
            white-space: normal;
        }
    }
</style>