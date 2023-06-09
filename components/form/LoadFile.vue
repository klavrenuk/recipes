<script lang="ts" setup>
    import {ref} from 'vue';

    import {IRecipe} from "~/interfaces/Recipe";

    const {recipe} = defineProps<{
        recipe: IRecipe
    }>();

    const file = ref<File | null>(null);
    const fileName = ref<string | null>(null);
    const selectedImg = ref<string | null>(null);

    const getValue = ():string|null => {
        return selectedImg.value;
    }

    const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;

        if(target && target.files) {
            const type = target.files[0].type || null;
            if(
                type !== "application/pdf" && type !== "application/wps-office.pdf" &&
                type !== "image/jpg" && type !== "image/jpeg" && type !== "image/png"
            ) return false;

            file.value = target.files[0];
            fileName.value = file.value.name;
            convertImg();

        } else {
            fileName.value = null
            selectedImg.value = null;
        }
    }

    const convertImg = () => {
        const reader = new FileReader();

        reader.onload = (event:any) => {
            const img = event.target.result;
            selectedImg.value = img;
        }

        if(file.value) {
            reader.readAsDataURL(file.value);
        }
    }

    defineExpose({
        getValue
    });
</script>

<template>
    <div class="load_file">
        <div class="flex items-start">
            <div v-if="selectedImg || (recipe && recipe.image)"
                 class="load_file-wrap_img"
            >
                <img :src="selectedImg ? selectedImg : recipe.image"
                     class="load_file-img"
                     alt="выбранная картинка"
                />
            </div>

            <div>
                <input type="file" id="File" ref="file"
                       class="load_file-input"
                       accept="image/*"
                       @change="handleFileUpload($event)"
                />
                <span class="load_file-name"
                      v-if="fileName"
                >{{ fileName }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .load_file {
        &-wrap_img {
            padding-right: 2rem;
        }

        &-img {
            height: 200px;
            width: 200px;
            display: inline-block;
            object-fit: cover;
        }

        &-input {
            color: transparent;
        }

        &-input::-webkit-file-upload-button {
            visibility: hidden;
        }

        &-input::before {
            content: 'Выберите файл';
            border: 1px solid #ffc800;
            border-radius: 6px;
            padding: 10px 8px;
            color: #272727;
            cursor: pointer;
            font-size: 16px;
            display: inline-block;
            outline: none;
            white-space: nowrap;
            -webkit-user-select: none;
            background: #ffc800;
        }

        &-input:hover::before {
            border-color: #f7d145;
        }

        &-input:active {
            outline: 0;
        }

        &-input:active::before {
            background: #f7d145;
        }

        &-name {
            margin-top: .5rem;
            display: block;
        }
    }
</style>