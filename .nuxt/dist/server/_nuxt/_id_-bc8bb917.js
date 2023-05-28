import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, unref } from "vue";
import "vue-router";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CrumbsGeneral",
  __ssrInlineRender: true,
  setup(__props) {
    const nav = [
      {
        path: "/",
        name: "Главная"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "crumbs" }, _attrs))}><!--[-->`);
      ssrRenderList(nav, (navItem) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: navItem.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(navItem.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(navItem.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/crumbs/CrumbsGeneral.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const recipe = {
      id: 1,
      name: "Recipes#1",
      description: "Arco is a not a theme but a special framework for website building. It is deeper than just a design. You can download this free WordPress theme along with the logo PSD file and create your own Logotype, upload it to your blog, band web page or corporate website. So all your web page appearance would be in the same style as it is supposed to be. Adjust several tooglers in the dashboard of your website and enjoy the visualization on the front end. So easy and fast! Get it and try out right away!\n",
      ingredients: ["Banana", "apple"],
      image: "/images/category-title.svg",
      time: 20
    };
    const options = [
      { key: "name", label: "Имя" },
      { key: "image", label: "Картинка" },
      { key: "ingredients", label: "Ингредиенты" },
      { key: "time", label: "Время готовка(мин)" },
      { key: "description", label: "Описание" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recipe" }, _attrs))}><div class="recipe-header">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<div class="grid grid-cols-2"><h1 class="font-bold title title-section">${ssrInterpolate(recipe.name)}</h1><div class="recipe-header-control text-right"><button class="btn btn-danger"> Удалить </button><button class="btn primary recipe_edit"> Редактировать </button></div></div></div><div class="recipe-content"><div class="flex item-start"><div class="recipe-img"><img${ssrRenderAttr("src", recipe.image)}${ssrRenderAttr("alt", recipe.name)} loading="lazy"></div><ul class="recipe-options"><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<li class="recipe-options-item"><div class="option-name">${ssrInterpolate(option.label)}</div><div class="option-value">${ssrInterpolate(recipe[option.key].toString())}</div></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
});
const _id__vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipe/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-bc8bb917.js.map
