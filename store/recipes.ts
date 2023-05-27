import { defineStore } from 'pinia';
import {IRecipe} from "~/interfaces/Recipe";

interface TodoState {
    recipes: IRecipe[],
    isLoading: boolean
}

export const useRecipes = defineStore({
    id: 'recipes',

    state: (): TodoState => ({
        recipes: [
            {
                id: 1,
                name: 'Recipes#1',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 2,
                name: 'Recipes#2',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 3,
                name: 'Recipes#3',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 4,
                name: 'Recipes#4',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 5,
                name: 'Recipes#5',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 6,
                name: 'Recipes#6',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 7,
                name: 'Recipes#7',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 8,
                name: 'Recipes#8',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },
            {
                id: 9,
                name: 'Recipes#9',
                description: 'Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n',
                ingredients: ['Banana', 'apple'],
                image: '/images/category-title.svg',
                time: 20
            },


        ],
        isLoading: false,
    }),

    actions: {

    },
});