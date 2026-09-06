import { a as __nuxt_component_0, b as _sfc_main$6 } from './server.mjs';
import { defineComponent, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, openBlock, createBlock, toDisplayString, useSSRContext } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/index.mjs';
import { ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    text: {},
    to: {},
    number: {}
  },
  setup(__props) {
    const props = __props;
    const NuxtLinkComp = __nuxt_component_0;
    const tag = props.to ? NuxtLinkComp : "div";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$6;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(tag)), mergeProps({
        to: __props.to,
        class: ["block bg-surface border border-line rounded-xl2 py-9 px-8 shadow-card no-underline transition-shadow", __props.to ? "hover:shadow-lift" : ""]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.number) {
              _push2(`<span class="text-xs font-bold text-blue"${_scopeId}>${ssrInterpolate(__props.number)}</span>`);
            } else {
              _push2(ssrRenderComponent(_component_AppIcon, {
                name: __props.icon,
                size: "w-[30px] h-[30px]",
                class: "text-blue"
              }, null, _parent2, _scopeId));
            }
            _push2(`<h4 class="mt-[18px] font-sans text-[17px] text-navy dark:text-ink"${_scopeId}>${ssrInterpolate(__props.title)}</h4><p class="mt-2.5 text-[14.5px] text-ink-muted leading-[1.6]"${_scopeId}>${ssrInterpolate(__props.text)}</p>`);
          } else {
            return [
              __props.number ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-xs font-bold text-blue"
              }, toDisplayString(__props.number), 1)) : (openBlock(), createBlock(_component_AppIcon, {
                key: 1,
                name: __props.icon,
                size: "w-[30px] h-[30px]",
                class: "text-blue"
              }, null, 8, ["name"])),
              createVNode("h4", { class: "mt-[18px] font-sans text-[17px] text-navy dark:text-ink" }, toDisplayString(__props.title), 1),
              createVNode("p", { class: "mt-2.5 text-[14.5px] text-ink-muted leading-[1.6]" }, toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=IconCard-u_G9J4LH.mjs.map
