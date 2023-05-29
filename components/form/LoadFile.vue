<script lang="ts" setup>
    import {ref} from 'vue';

    const file = ref<File | null>(null);
    const fileName = ref<string | null>(null);
    const selectedImg = ref<string | null>(null);

    const getValue = ():string|null => {
        return selectedImg.value;
    }

    const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;

        if(target && target.files) {
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
        <input type="file" id="File" ref="file"
               class="load_file-input"
               @change="handleFileUpload($event)"
        />
        <span class="load_file-name"
              v-if="fileName"
        >{{ fileName }}</span>
    </div>
</template>

<style scoped lang="less">
    .load_file {
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