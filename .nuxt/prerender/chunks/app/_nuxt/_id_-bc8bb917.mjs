import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'file://C:/projects/recipes1/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file://C:/projects/recipes1/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import 'file://C:/projects/recipes1/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
import 'file://C:/projects/recipes1/node_modules/ofetch/dist/node.mjs';
import 'file://C:/projects/recipes1/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/projects/recipes1/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/projects/recipes1/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/projects/recipes1/node_modules/destr/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/projects/recipes1/node_modules/scule/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/klona/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/ohash/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/projects/recipes1/node_modules/radix3/dist/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CrumbsGeneral",
  __ssrInlineRender: true,
  setup(__props) {
    const nav = [
      {
        path: "/",
        name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
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
      { key: "name", label: "\u0418\u043C\u044F" },
      { key: "image", label: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430" },
      { key: "ingredients", label: "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B" },
      { key: "time", label: "\u0412\u0440\u0435\u043C\u044F \u0433\u043E\u0442\u043E\u0432\u043A\u0430(\u043C\u0438\u043D)" },
      { key: "description", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recipe" }, _attrs))}><div class="recipe-header">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<div class="grid grid-cols-2"><h1 class="font-bold title title-section">${ssrInterpolate(recipe.name)}</h1><div class="recipe-header-control text-right"><button class="btn btn-danger"> \u0423\u0434\u0430\u043B\u0438\u0442\u044C </button><button class="btn primary recipe_edit"> \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C </button></div></div></div><div class="recipe-content"><div class="flex item-start"><div class="recipe-img"><img${ssrRenderAttr("src", recipe.image)}${ssrRenderAttr("alt", recipe.name)} loading="lazy"></div><ul class="recipe-options"><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<li class="recipe-options-item"><div class="option-name">${ssrInterpolate(option.label)}</div><div class="option-value">${ssrInterpolate(recipe[option.key].toString())}</div></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipe/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-bc8bb917.mjs.map
