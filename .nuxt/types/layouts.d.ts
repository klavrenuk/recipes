import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "layout-recipes"
declare module "C:/projects/recipes1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}