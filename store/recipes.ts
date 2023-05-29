import { defineStore } from 'pinia';
import {IRecipe} from "~/interfaces/Recipe";

interface TodoState {
    recipes: IRecipe[],
    isLoading: boolean,
    recipe: Partial<IRecipe> | null,
    recipeCopy: IRecipe[]
}

export const useRecipes = defineStore({
    id: 'recipes',

    state: (): TodoState => ({
        recipes: [],
        recipeCopy: [],
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

        remove(id:number):Promise<boolean> {
            return new Promise((resolve, reject) => {
                fetch('http://localhost:3000/recipes/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then(() => resolve(true))
                    .catch((err:Error) => reject(err))
                    .finally(() => this.setLoading());
            })
        },

        edit(recipe:IRecipe):Promise<boolean> {
            return new Promise((resolve, reject) => {
                fetch('http://localhost:3000/recipes/' + recipe.id, {
                    method: 'PUT',
                    body: JSON.stringify({
                        ...recipe,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => resolve(true))
                    .catch((err:Error) => reject(err))
                    .finally(() => this.setLoading());
            })
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
                        this.recipeCopy = json;
                        resolve(true);
                    })
                    .catch((err) => {
                        this.recipes = [];
                        this.recipeCopy = [];
                        reject(err);
                    })
                    .finally(() => {
                        this.isLoading = false;
                    })
            })
        },

        searchArticle(str:string|null) {
            console.log('inner', str);
            if(str === null) {
                this.recipes = this.recipeCopy.slice();

            } else {
                this.recipes = this.recipeCopy.filter((recipe:IRecipe) => {
                    if(recipe.name.toLowerCase().search(str.toLowerCase()) > -1) {
                        return recipe;
                    }
                })
            }
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