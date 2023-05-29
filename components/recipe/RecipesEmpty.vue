<script lang="ts" setup>

</script>

<template>
    <div class="recipes_empty text-center">
        <h5 class="font-bold recipes_empty-title">
            Пока нет рецептов
        </h5>
        <p class="recipes_empty-description">
            Создайте свою первую категорию<br />
            и добавьте в неё статьи.
        </p>
        <NuxtLink class="btn primary recipes_empty-add"
                  to="/recipes/null"
        >
            Добавить
        </NuxtLink>
    </div>
</template>

<style scoped lang="less">
    .recipes_empty {
        margin: 4rem 0 1rem;

        &-title {
            font-size: 20px;
        }

        &-description {
            margin: .5rem 0;
        }

        &-add {
            display: inline-block;
        }
    }
</style>