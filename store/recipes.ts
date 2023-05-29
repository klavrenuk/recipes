import { defineStore } from 'pinia';
import {IRecipe} from "~/interfaces/Recipe";

interface TodoState {
    recipes: IRecipe[],
    isLoading: boolean,
    recipe: Partial<IRecipe>
}

export const useRecipes = defineStore({
    id: 'recipes',

    state: (): TodoState => ({
        recipes: [],
        isLoading: true,
        recipe: {}
    }),

    actions: {
        setLoading(value:boolean = false) {
            this.isLoading = value;
        },

        setRecipe(recipe:IRecipe) {
            this.recipe = recipe;
        },

        clearRecipe() {
            this.recipe = null;
        },

        create(recipe:IRecipe):Promise<boolean> {
            return new Promise((resolve, reject) => {
                this.setLoading(true);
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
                    .finally(() => this.setLoading());
            })
        },


        getRecipe(id: number):Promise<IRecipe|null> {
            return new Promise((resolve, reject) => {
                this.isLoading = true;

                fetch('http://localhost:3000/recipes/' + id)
                    .then((response) => response.json())
                    .then((json) => {
                        resolve(json)
                    })
                    .catch((err) => reject(err))
                    .finally(() => {
                        this.isLoading = false;
                    })
            })
        },

        async loadRecipes(isSetLoading = true):Promise<boolean> {
            return new Promise((resolve, reject) => {
                if(isSetLoading) this.isLoading = true;

                fetch('http://localhost:3000/recipes/')
                    .then((response) => response.json())
                    .then((json) => {
                        this.recipes = json;
                        resolve(true);

                    })
                    .catch((err) => reject(err))
                    .finally(() => {
                        this.isLoading = false;
                    })
            })
        },

        sortBy(type:string) {
            if(type === null) {
                this.loadRecipes();
                return;
            }

            this.recipes.sort((a:IRecipe, b:IRecipe) => {
                switch (type) {
                    case 'ingredients':
                        return a.ingredients.length - b.ingredients.length;

                    case 'time':
                        return a.time - b.time;

                }
            });
        }
    },
});