import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, unref } from "vue";
import "vue-router";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import axios from "axios";
import { d as defineStore, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ufo";
import "defu";
const useRecipes = defineStore({
  id: "recipes",
  state: () => ({
    recipes: [],
    isLoading: true
  }),
  actions: {
    async create() {
      fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((response) => response.json()).then((json) => console.log(json));
    },
    async loadRecipes() {
      this.isLoading = true;
      axios({
        url: "http://localhost:3000/recipes",
        method: "GET"
      }).then((response) => {
        console.log("response", response);
      }).catch((err) => {
        console.error(err);
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardRecipe",
  __ssrInlineRender: true,
  props: {
    recipe: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card_recipe" }, _attrs))}><div class="card_recipe-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/recipe/" + _ctx.recipe.id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _ctx.recipe.image)}${ssrRenderAttr("alt", _ctx.recipe.name)} loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _ctx.recipe.image,
                alt: _ctx.recipe.name,
                loading: "lazy"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/recipe/" + _ctx.recipe.id,
        class: "card_recipe-name font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.recipe.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.recipe.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card_recipe-info"><div class="flex items-center"><span class="info-ingredients"><i class="info-ingredients-icon"></i><span class="info-ingredients-text">${ssrInterpolate(_ctx.recipe.ingredients.length)}</span></span><span class="info-time"><i class="info-time-icon"></i><span class="info-time-text">${ssrInterpolate(_ctx.recipe.time)}</span></span></div></div><p class="card_recipe-description break_text">${ssrInterpolate(_ctx.recipe.description)}</p></div>`);
    };
  }
});
const CardRecipe_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/recipe/CardRecipe.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LoaderFullHeight_vue_vue_type_style_index_0_scoped_673f62e3_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader_fill_height" }, _attrs))} data-v-673f62e3><i class="loader_fill_height-icon" data-v-673f62e3></i></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loader/LoaderFullHeight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LoaderFullHeight = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-673f62e3"]]);
const RecipesEmpty_vue_vue_type_style_index_0_scoped_5c8c4c17_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "recipes_empty text-center" }, _attrs))} data-v-5c8c4c17><h5 class="font-bold recipes_empty-title" data-v-5c8c4c17> Пока нет рецептов </h5><p class="recipes_empty-description" data-v-5c8c4c17> Создайте свою первую категорию<br data-v-5c8c4c17> и добавьте в неё статьи. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn primary recipes_empty-add",
    to: "/recipe"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Добавить `);
      } else {
        return [
          createTextVNode(" Добавить ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/recipe/RecipesEmpty.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RecipesEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5c8c4c17"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const recipesStore = useRecipes();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recipes" }, _attrs))}>`);
      if (unref(recipesStore).isLoading) {
        _push(ssrRenderComponent(unref(LoaderFullHeight), null, null, _parent));
      } else {
        _push(`<div>`);
        {
          _push(ssrRenderComponent(unref(RecipesEmpty), null, null, _parent));
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-1eb89c0d.js.map
