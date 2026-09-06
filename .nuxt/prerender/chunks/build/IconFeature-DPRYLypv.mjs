import { b as _sfc_main$6 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-[18px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: __props.icon,
        size: "w-[30px] h-[30px]",
        class: "text-blue shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><h4 class="text-[17px] font-bold font-sans text-navy dark:text-ink mb-1.5">${ssrInterpolate(__props.title)}</h4><p class="text-[15.5px] text-ink-muted leading-[1.6]">${ssrInterpolate(__props.text)}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconFeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=IconFeature-DPRYLypv.mjs.map
