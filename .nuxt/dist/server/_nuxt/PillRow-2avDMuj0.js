import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PillRow",
  __ssrInlineRender: true,
  props: {
    items: {},
    surface: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-2.5" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<span class="${ssrRenderClass([__props.surface ? "bg-surface" : "", "text-[13px] font-semibold py-2.5 px-4 rounded-full border border-line-2 text-ink-muted whitespace-nowrap"])}">${ssrInterpolate(item)}</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PillRow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=PillRow-2avDMuj0.js.map
