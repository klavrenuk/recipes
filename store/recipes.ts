import axios from 'axios';
import { defineStore } from 'pinia';
import {IRecipe} from "~/interfaces/Recipe";


interface TodoState {
    recipes: IRecipe[],
    isLoading: boolean
}

export const useRecipes = defineStore({
    id: 'recipes',

    state: (): TodoState => ({
        recipes: [],
        isLoading: true,
    }),

    actions: {
        async create(recipe:IRecipe):Promise<void> {
            const config = useRuntimeConfig();


            fetch('https://my-json-server.typicode.com/klavrenuk/recipes/recipes', {
                method: 'POST',
                body: JSON.stringify({
                    name: 'xxx'
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        },


        async loadRecipes():Promise<void> {
            this.isLoading = true;

            axios({
                url: 'https://my-json-server.typicode.com/klavrenuk/recipes/recipes',
                method: 'GET'
            })
                .then((response:unknown) => {
                    console.log('response', response);
                })
                .catch((err:Error) => {
                    console.error(err);
                })
                .finally(() => {
                    this.isLoading = false;
                })
        }
    },
});