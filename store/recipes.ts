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
        create(recipe:IRecipe):Promise<boolean> {
            return new Promise((resolve, reject) => {
                fetch('http://localhost:3000/recipes', {
                    method: 'POST',
                    body: JSON.stringify({
                        ...recipe,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => resolve(true))
                    .catch((err:Error) => reject(err))
            })
        },


        async loadRecipes():Promise<boolean> {
            return new Promise((resolve, reject) => {
                this.isLoading = true;

                axios({url: 'http://localhost:3000/recipes', method: 'GET'})
                    .then((response:any) => {
                        this.recipes = response.data;
                    })
                    .catch((err:Error) => {
                        console.error(err);
                        this.recipes = [];
                    })
                    .finally(() => {
                        this.isLoading = false;
                    })
            })
        }
    },
});