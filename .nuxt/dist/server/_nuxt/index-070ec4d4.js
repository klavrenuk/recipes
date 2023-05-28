import { mergeProps, useSSRContext, defineComponent, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "vue-router";
import "ufo";
import "defu";
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
      { key: "name", label: "Имя", type: "input", subtype: "text" },
      { key: "image", label: "Картинка", type: "image" },
      { key: "ingredients", label: "Ингредиенты", type: "listItems" },
      { key: "time", label: "Время готовка(мин)", type: "input", subtype: "number" },
      { key: "description", label: "Описание", type: "textarea" }
    ];
    const recipe = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recipe" }, _attrs))} data-v-cdb2755e><form data-v-cdb2755e><div class="grid grid-cols-2 gap-6" data-v-cdb2755e><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<div class="form-group" data-v-cdb2755e><label class="form-group-label font-bold"${ssrRenderAttr("for", option.key)} data-v-cdb2755e>${ssrInterpolate(option.label)}</label>`);
        if (option.type === "input") {
          _push(`<input${ssrRenderAttr("placeholder", "Введите " + option.label.toLowerCase())}${ssrRenderAttr("type", option.subtype)}${ssrRenderAttr("id", option.key)} class="recipe_input"${ssrRenderDynamicModel(option.subtype, recipe.value[option.key], null)} data-v-cdb2755e>`);
        } else {
          _push(`<!---->`);
        }
        if (option.type === "textarea") {
          _push(`<textarea${ssrRenderAttr("id", option.key)}${ssrRenderAttr("placeholder", "Введите " + option.label.toLowerCase())} class="recipe_textarea" data-v-cdb2755e>${ssrInterpolate(recipe.value[option.key])}</textarea>`);
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
      _push(`<!--]--></div></form><div class="recipe-control flex" data-v-cdb2755e><button class="btn" data-v-cdb2755e>Очистить</button><button class="btn primary" data-v-cdb2755e>Сохранить</button></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_cdb2755e_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipe/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cdb2755e"]]);
export {
  index as default
};
//# sourceMappingURL=index-070ec4d4.js.map
