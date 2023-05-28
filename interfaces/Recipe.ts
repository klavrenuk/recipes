export interface IRecipe {
    id: number,
    name: string,
    description?: string,
    ingredients: string[],
    image: string,
    time: number
}