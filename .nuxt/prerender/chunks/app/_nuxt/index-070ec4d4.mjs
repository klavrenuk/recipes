import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'file://C:/projects/recipes1/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrRenderComponent } from 'file://C:/projects/recipes1/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "list_items" }, _attrs))}> List Itmes </div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/ListItems.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListItems = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      { key: "name", label: "\u0418\u043C\u044F", type: "input", subtype: "text" },
      { key: "image", label: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430", type: "image" },
      { key: "ingredients", label: "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B", type: "listItems" },
      { key: "time", label: "\u0412\u0440\u0435\u043C\u044F \u0433\u043E\u0442\u043E\u0432\u043A\u0430(\u043C\u0438\u043D)", type: "input", subtype: "number" },
      { key: "description", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", type: "textarea" }
    ];
    const recipe = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recipe" }, _attrs))} data-v-cdb2755e><form data-v-cdb2755e><div class="grid grid-cols-2 gap-6" data-v-cdb2755e><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<div class="form-group" data-v-cdb2755e><label class="form-group-label font-bold"${ssrRenderAttr("for", option.key)} data-v-cdb2755e>${ssrInterpolate(option.label)}</label>`);
        if (option.type === "input") {
          _push(`<input${ssrRenderAttr("placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 " + option.label.toLowerCase())}${ssrRenderAttr("type", option.subtype)}${ssrRenderAttr("id", option.key)} class="recipe_input"${ssrRenderDynamicModel(option.subtype, recipe.value[option.key], null)} data-v-cdb2755e>`);
        } else {
          _push(`<!---->`);
        }
        if (option.type === "textarea") {
          _push(`<textarea${ssrRenderAttr("id", option.key)}${ssrRenderAttr("placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 " + option.label.toLowerCase())} class="recipe_textarea" data-v-cdb2755e>${ssrInterpolate(recipe.value[option.key])}</textarea>`);
        } else {
          _push(`<!---->`);
        }
        if (option.type === "listItems") {
          _push(ssrRenderComponent(unref(ListItems), null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></form><div class="recipe-control flex" data-v-cdb2755e><button class="btn" data-v-cdb2755e>\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button><button class="btn primary" data-v-cdb2755e>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipe/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cdb2755e"]]);

export { index as default };
//# sourceMappingURL=index-070ec4d4.mjs.map
