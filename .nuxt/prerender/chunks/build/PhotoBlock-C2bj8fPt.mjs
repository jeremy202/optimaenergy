import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/server-renderer/index.mjs';
import { b as _sfc_main$6 } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionHeading",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    description: {},
    light: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[640px] mb-14" }, _attrs))}><span class="${ssrRenderClass([{ "eyebrow-light": __props.light }, "eyebrow"])}">${ssrInterpolate(__props.eyebrow)}</span><h2 class="${ssrRenderClass([__props.light ? "text-white" : "", "mt-4 text-[clamp(20px,3.6vw,44px)]"])}">${ssrInterpolate(__props.title)}</h2>`);
      if (__props.description) {
        _push(`<p class="${ssrRenderClass([__props.light ? "text-[#B9C6DE]" : "text-ink-muted", "mt-[18px] text-[15px] sm:text-lg leading-[1.7]"])}">${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHeading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PhotoBlock",
  __ssrInlineRender: true,
  props: {
    icon: { default: "user-circle" },
    label: {},
    ar: { default: "4/5" },
    src: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative rounded-xl3 overflow-hidden flex items-center justify-center text-white/85",
        style: { aspectRatio: __props.ar, background: __props.src ? "transparent" : "linear-gradient(150deg, var(--navy) 0%, var(--blue) 130%)" }
      }, _attrs))}>`);
      if (__props.src) {
        _push(`<img${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.label || "")} class="absolute inset-0 w-full h-full object-cover">`);
      } else {
        _push(ssrRenderComponent(_component_AppIcon, {
          name: __props.icon,
          size: "w-[30%] max-w-[96px] aspect-square",
          class: "opacity-90"
        }, null, _parent));
      }
      if (__props.src && __props.label) {
        _push(`<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.label) {
        _push(`<div class="${ssrRenderClass([__props.src ? "text-white" : "text-white/75", "absolute bottom-0 left-0 right-0 px-4 py-4 font-sans text-xs tracking-[0.07em] uppercase font-semibold"])}">${ssrInterpolate(__props.label)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhotoBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=PhotoBlock-C2bj8fPt.mjs.map
