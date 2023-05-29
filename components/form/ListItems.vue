<script lang="ts" setup>
    import {ref} from 'vue';

    import {IListItem} from '~/interfaces/Form';
    import {IRecipe} from "~/interfaces/Recipe";

    const {defaultValue} = defineProps<{
        defaultValue: string[]
    }>();

    const list = ref<string[]>(defaultValue ? defaultValue : ['']);
    const invalidItems = ref<number[]>([]);

    const add = () => list.value.push('');

    const remove = (index:number) => list.value.splice(index, 1);

    const isValid = ():boolean => {
        invalidItems.value = [];

        for(let i = 0; i < list.value.length; i++) {
            const item = list.value[i];

            if(!item || !item.trim()) invalidItems.value.push(i);
        }

        return invalidItems.value.length === 0
    }

    const getValue = ():string[]|null => {
        if(isValid()) return list.value

        return null;
    };

    const clear = () => {
        invalidItems.value = [];
        list.value = [];
    }

    defineExpose({
        getValue,
        clear
    });
</script>

<template>
    <ul class="list_items">
        <li class="list_items-item"
            v-for="(item,index) in list"
            :key="'item-' + index"
        >
            <div class="flex justify-between items-center gap-6">
                <input :placeholder="'Введите значение'"
                       class="recipe_input"
                       :class="{'invalid': invalidItems.includes(index)}"
                       v-model="list[index]"
                       @keyup.enter="add"
                />

                <button class="btn btn-icon list_items-item-icon"
                        type="button"
                        @click="remove(index)"
                >
                </button>
            </div>
        </li>
        <li class="list_items-item">
            <button class="btn primary"
                    @click="add"
            >Добавить</button>
        </li>
    </ul>
</template>

<style scoped lang="less">
    .list_items-item {
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }

        &-icon {
            background-image: url('/images/trash.svg');

            &:hover, &:active {
                background-image: url('/images/trash-effect.svg');
            }
        }
    }
</style>