import { defineComponent, mergeProps, unref, useSSRContext } from 'file://C:/projects/recipes1/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://C:/projects/recipes1/node_modules/vue/server-renderer/index.mjs';
import { H as HeaderGeneral } from './HeaderGeneral-9bc9d46f.mjs';
import '../server.mjs';
import 'file://C:/projects/recipes1/node_modules/ofetch/dist/node.mjs';
import 'file://C:/projects/recipes1/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/recipes1/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/projects/recipes1/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout_default" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(HeaderGeneral), null, null, _parent));
      _push(`<main><div class="container mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-8b82cd27.mjs.map
