import { _ as _sfc_main$1 } from './IconFeature-DPRYLypv.mjs';
import { b as _sfc_main$6, c as _sfc_main$7 } from './server.mjs';
import { a as _sfc_main$2, _ as _sfc_main$1$1 } from './PhotoBlock-C2bj8fPt.mjs';
import { _ as _sfc_main$3 } from './IconCard-u_G9J4LH.mjs';
import { _ as _sfc_main$4 } from './CtaBand-CcI-OiHG.mjs';
import { defineComponent, ref, resolveDirective, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/server-renderer/index.mjs';
import { u as useSeoMeta, a as useHead } from './v3-DdFo27PU.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/h3/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/destr/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'node:fs/promises';
import 'node:path';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/klona/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/scule/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/devalue/index.js';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Contact Us | Optima Global Energy Services",
      description: "Get in touch with Optima Global Energy Services Limited. Office: Plot 146, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria. Email: info@ogesenergy.com.",
      keywords: "contact Optima Global Energy Services, oil gas engineering Port Harcourt, energy services enquiry Nigeria, well engineering consultancy contact, Trans-Amadi Port Harcourt",
      ogTitle: "Contact Optima Global Energy Services",
      ogDescription: "Tell us about your scope \u2014 a single study, embedded support, or a fully integrated delivery team \u2014 and we'll come back with how Optima can help.",
      ogImage: "https://images.unsplash.com/photo-1620203853151-496c7228306c?w=1200&h=630&fit=crop&q=80",
      ogType: "website",
      ogUrl: "https://www.ogesenergy.com/contact",
      ogSiteName: "Optima Global Energy Services Limited",
      twitterCard: "summary_large_image",
      twitterTitle: "Contact Optima Global Energy Services",
      twitterDescription: "Reach out for well engineering, project management, manpower or inspection services across Nigeria and West Africa.",
      twitterImage: "https://images.unsplash.com/photo-1620203853151-496c7228306c?w=1200&h=630&fit=crop&q=80"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://www.ogesenergy.com/contact" }],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Optima Global Energy Services",
            url: "https://www.ogesenergy.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Optima Global Energy Services Limited",
              email: "info@ogesenergy.com",
              url: "https://www.ogesenergy.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot 146, Trans-Amadi Industrial Layout",
                addressLocality: "Port Harcourt",
                addressRegion: "Rivers State",
                addressCountry: "NG"
              }
            }
          })
        }
      ]
    });
    const startCards = [
      { icon: "book-open", title: "A defined study", text: "Technical consultancy \u2014 a review, calculation set or design package." },
      { icon: "users", title: "People to embed", text: "Individual specialists or a managed technical team." },
      { icon: "layers", title: "Full delivery", text: "Integrated wells support across engineering, PM, manpower and QA/QC." }
    ];
    const scopes = [
      "Well Engineering",
      "Project Management",
      "Manpower Outsourcing",
      "Inspection & QA/QC",
      "Integrated Wells Support",
      "Other / General Enquiry"
    ];
    const form = ref({
      name: "",
      company: "",
      email: "",
      phone: "",
      scope: "",
      message: ""
    });
    const status = ref("idle");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconFeature = _sfc_main$1;
      const _component_AppIcon = _sfc_main$6;
      const _component_PhotoBlock = _sfc_main$2;
      const _component_SectionHeading = _sfc_main$1$1;
      const _component_IconCard = _sfc_main$3;
      const _component_CtaBand = _sfc_main$4;
      const _component_AppButton = _sfc_main$7;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="pt-16 pb-16"><div class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16"><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="eyebrow">Contact</span><h1 class="mt-[18px]">Let&#39;s talk about your next well or project.</h1><p class="mt-[22px] text-[15px] sm:text-[19px] text-ink-muted leading-[1.7] max-w-[560px]"> Tell us about the scope \u2014 a single study, embedded support, or a fully integrated delivery team \u2014 and we&#39;ll come back with how Optima can help. </p><div class="mt-8 grid gap-[18px]">`);
      _push(ssrRenderComponent(_component_IconFeature, {
        icon: "map-pin",
        title: "Office",
        text: "Plot 146, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria."
      }, null, _parent));
      _push(`<div class="flex gap-[18px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "mail",
        size: "w-[30px] h-[30px]",
        class: "text-blue shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><h4 class="text-[17px] font-bold font-sans text-navy dark:text-ink mb-1.5">Email</h4><p class="text-[15.5px] leading-[1.6]"><a href="mailto:info@ogesenergy.com" class="text-blue hover:underline">info@ogesenergy.com</a></p></div></div><div class="flex gap-[18px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "globe",
        size: "w-[30px] h-[30px]",
        class: "text-blue shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><h4 class="text-[17px] font-bold font-sans text-navy dark:text-ink mb-1.5">Website</h4><p class="text-[15.5px] leading-[1.6]"><a href="https://www.ogesenergy.com" target="_blank" rel="noopener" class="text-blue hover:underline">www.ogesenergy.com</a></p></div></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      if (status.value === "success") {
        _push(`<div class="rounded-xl2 bg-paper-2 border border-line p-8 text-center">`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: "check-circle",
          size: "w-12 h-12",
          class: "text-blue mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-[22px] font-bold font-sans text-navy dark:text-ink mb-2">Message received</h3><p class="text-ink-muted leading-[1.7]"> Thank you for reaching out. A member of the Optima team will be in touch shortly. </p><button type="button" class="mt-6 text-blue text-[14.5px] font-semibold hover:underline"> Send another message </button></div>`);
      } else {
        _push(`<form class="grid gap-5"><div class="grid sm:grid-cols-2 gap-5"><div><label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-name">Full name <span class="text-[#E0765A]">*</span></label><input id="c-name"${ssrRenderAttr("value", form.value.name)} required type="text" placeholder="Jane Smith" class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"></div><div><label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-company">Company</label><input id="c-company"${ssrRenderAttr("value", form.value.company)} type="text" placeholder="ACME Energy Ltd" class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"></div></div><div class="grid sm:grid-cols-2 gap-5"><div><label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-email">Email <span class="text-[#E0765A]">*</span></label><input id="c-email"${ssrRenderAttr("value", form.value.email)} required type="email" placeholder="jane@example.com" class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"></div><div><label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-phone">Phone</label><input id="c-phone"${ssrRenderAttr("value", form.value.phone)} type="tel" placeholder="+234 800 000 0000" class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"></div></div><div><label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-scope">Scope of interest</label><select id="c-scope" class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink outline-none focus:border-blue transition-colors appearance-none"><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.scope) ? ssrLooseContain(form.value.scope, "") : ssrLooseEqual(form.value.scope, "")) ? " selected" : ""}>Select a service area\u2026</option><!--[-->`);
        ssrRenderList(scopes, (s) => {
          _push(`<option${ssrRenderAttr("value", s)}${ssrIncludeBooleanAttr(Array.isArray(form.value.scope) ? ssrLooseContain(form.value.scope, s) : ssrLooseEqual(form.value.scope, s)) ? " selected" : ""}>${ssrInterpolate(s)}</option>`);
        });
        _push(`<!--]--></select></div><div><label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-message">Message <span class="text-[#E0765A]">*</span></label><textarea id="c-message" required rows="5" placeholder="Describe the scope, timeline and any relevant context\u2026" class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors resize-none">${ssrInterpolate(form.value.message)}</textarea></div>`);
        if (status.value === "error") {
          _push(`<p class="text-[14px] text-[#E0765A] font-medium">${ssrInterpolate(errorMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit"${ssrIncludeBooleanAttr(status.value === "loading") ? " disabled" : ""} class="inline-flex items-center gap-2 self-start rounded-full bg-navy text-white font-semibold text-[14.5px] px-7 py-3.5 hover:bg-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed">`);
        if (status.value === "loading") {
          _push(`<span>Sending\u2026</span>`);
        } else {
          _push(`<span>Send message</span>`);
        }
        if (status.value !== "loading") {
          _push(ssrRenderComponent(_component_AppIcon, {
            name: "arrow-right",
            size: "w-[14px] h-[14px]"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button></form>`);
      }
      _push(`</div></div></section><section class="py-16"><div class="max-w-content mx-auto px-8">`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "21/9",
        label: "Industrial operations \u2014 Trans-Amadi, Port Harcourt",
        src: "https://images.unsplash.com/photo-1620203853151-496c7228306c?w=1400&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></section><section class="bg-paper-2 py-[120px]"><div class="max-w-content mx-auto px-8">`);
      _push(ssrRenderComponent(_component_SectionHeading, mergeProps({
        class: "reveal",
        eyebrow: "Where to start",
        title: "Pick the engagement that fits."
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(startCards, (c) => {
        _push(ssrRenderComponent(_component_IconCard, mergeProps({
          key: c.title
        }, { ref_for: true }, c), null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, {
        title: "Engineering Excellence. Reliable Energy Solutions.",
        description: "Integrated Engineering \xB7 Reliable Execution \xB7 Sustainable Energy Solutions"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppButton, {
              href: "mailto:info@ogesenergy.com",
              variant: "white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Optima `);
                  _push3(ssrRenderComponent(_component_AppIcon, {
                    name: "arrow-right",
                    size: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Email Optima "),
                    createVNode(_component_AppIcon, {
                      name: "arrow-right",
                      size: "w-[15px] h-[15px]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppButton, {
                href: "mailto:info@ogesenergy.com",
                variant: "white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Email Optima "),
                  createVNode(_component_AppIcon, {
                    name: "arrow-right",
                    size: "w-[15px] h-[15px]"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-D_lr1aU7.mjs.map
