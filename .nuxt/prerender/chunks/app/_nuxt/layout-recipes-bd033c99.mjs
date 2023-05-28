import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, ref } from 'file://C:/projects/recipes/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'file://C:/projects/recipes/node_modules/vue/server-renderer/index.mjs';
import { H as HeaderGeneral } from './HeaderGeneral-9bc9d46f.mjs';
import '../server.mjs';
import 'file://C:/projects/recipes/node_modules/ofetch/dist/node.mjs';
import 'file://C:/projects/recipes/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/projects/recipes/node_modules/ufo/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/projects/recipes/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/projects/recipes/node_modules/destr/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/projects/recipes/node_modules/scule/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/klona/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/ohash/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/unstorage/dist/index.mjs';
import 'file://C:/projects/recipes/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/projects/recipes/node_modules/radix3/dist/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchRecipes",
  __ssrInlineRender: true,
  setup(__props) {
    const str = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search_recipes" }, _attrs))}><input class="search_recipes-input" placeholder="\u0418\u0441\u043A\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442"${ssrRenderAttr("value", str.value)}><button class="search_recipes-btn_clear btn-icon"></button><button class="search_recipes-btn_search btn btn-icon"></button></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/SearchRecipes.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout-recipes",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout_recipes" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(HeaderGeneral), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<template${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</template>`);
          } else {
            return [
              createVNode("template", null, [
                createVNode(_sfc_main$1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main class="layout_recipes-main"><div class="container mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/layout-recipes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=layout-recipes-bd033c99.mjs.map
