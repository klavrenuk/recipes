export interface IRecipe {
    id: number | null,
    name: string,
    description: string,
    ingredients: string[],
    image: string,
    time: number
}