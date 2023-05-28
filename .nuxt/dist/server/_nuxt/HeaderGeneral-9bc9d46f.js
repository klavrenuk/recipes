import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const HeaderGeneral_vue_vue_type_style_index_0_scoped_c0a561c9_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header_general" }, _attrs))} data-v-c0a561c9>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/HeaderGeneral.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderGeneral = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c0a561c9"]]);
export {
  HeaderGeneral as H
};
//# sourceMappingURL=HeaderGeneral-9bc9d46f.js.map
