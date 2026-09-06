import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CtaBand",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative text-white py-[96px] overflow-hidden" }, _attrs))}><img src="https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?w=1600&amp;q=80&amp;fit=crop" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover object-center" loading="lazy"><div class="absolute inset-0 bg-black/60"></div><div class="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy-deep/85"></div><div class="relative z-10 max-w-content mx-auto px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 flex-wrap"><div><h2 class="text-white text-[clamp(19px,3.2vw,36px)] max-w-[560px]">${ssrInterpolate(__props.title)}</h2>`);
      if (__props.description) {
        _push(`<p class="mt-3 text-[#B9C6DE] text-[13px] sm:text-base">${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-4 flex-wrap">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaBand.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CtaBand-CcI-OiHG.mjs.map
