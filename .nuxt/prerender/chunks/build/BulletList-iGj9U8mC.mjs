import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BulletList",
  __ssrInlineRender: true,
  props: {
    items: {},
    grid: { type: Boolean, default: false },
    dense: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: __props.grid ? "grid sm:grid-cols-2 gap-x-8 gap-y-3.5" : "grid gap-4"
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li class="${ssrRenderClass([__props.dense ? "pl-6 text-[15.5px]" : "pl-[26px] text-base", "relative text-ink-muted leading-[1.65]"])}"><span class="${ssrRenderClass([__props.dense ? "top-[9px] w-3" : "top-[10px] w-3.5", "absolute left-0 bg-amber h-[1.5px]"])}"></span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BulletList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BulletList-iGj9U8mC.mjs.map
