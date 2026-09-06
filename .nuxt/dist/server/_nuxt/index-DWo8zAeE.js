import { _ as _export_sfc, b as _sfc_main$6, c as _sfc_main$7 } from "../server.mjs";
import { mergeProps, useSSRContext, defineComponent, resolveDirective, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _sfc_main$8, a as _sfc_main$a } from "./PhotoBlock-C2bj8fPt.js";
import { _ as _sfc_main$9 } from "./IconCard-u_G9J4LH.js";
import { _ as _sfc_main$b } from "./BulletList-iGj9U8mC.js";
import { _ as _sfc_main$c } from "./CtaBand-CcI-OiHG.js";
import { a as useSeoMeta, u as useHead } from "./v3-DdFo27PU.js";
import "/Users/a202/Downloads/optima-nuxt-website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/a202/Downloads/optima-nuxt-website/node_modules/hookable/dist/index.mjs";
import "/Users/a202/Downloads/optima-nuxt-website/node_modules/unctx/dist/index.mjs";
import "/Users/a202/Downloads/optima-nuxt-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/a202/Downloads/optima-nuxt-website/node_modules/defu/dist/defu.mjs";
import "/Users/a202/Downloads/optima-nuxt-website/node_modules/ufo/dist/index.mjs";
import "/Users/a202/Downloads/optima-nuxt-website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-visual" }, _attrs))}><img src="https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=960&amp;q=80&amp;fit=crop" alt="Semi-submersible offshore drilling rig at harbour" class="absolute inset-0 w-full h-full object-cover" loading="eager"><div class="absolute inset-0 bg-gradient-to-br from-black/80 via-navy/65 to-navy/70"></div><svg class="relative z-10 w-full h-full" viewBox="0 0 220 260" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="110,14 168,230 52,230" stroke="rgba(255,255,255,0.55)"></polygon><line x1="80" y1="230" x2="140" y2="230" stroke="rgba(255,255,255,0.55)"></line><line x1="86" y1="180" x2="134" y2="180" stroke="rgba(255,255,255,0.35)"></line><line x1="93" y1="130" x2="127" y2="130" stroke="rgba(255,255,255,0.35)"></line><line x1="100" y1="80" x2="120" y2="80" stroke="rgba(255,255,255,0.35)"></line><line x1="52" y1="230" x2="168" y2="230" stroke="rgba(255,255,255,0.7)"></line><line x1="30" y1="244" x2="190" y2="244" stroke="rgba(255,255,255,0.7)"></line><circle cx="110" cy="244" r="9" fill="#C97A2E" stroke="none"></circle><circle cx="110" cy="130" r="46" stroke="rgba(224,161,92,0.65)" stroke-dasharray="2 6"></circle><circle cx="110" cy="130" r="70" stroke="rgba(224,161,92,0.35)" stroke-dasharray="2 6"></circle></svg></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroVisual.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StatStrip",
  __ssrInlineRender: true,
  props: {
    stats: {}
  },
  setup(__props) {
    function statClass(i, total) {
      const isLastDesktop = i === total - 1;
      const isLastMobileCol = i % 2 === 1;
      const isMobileSecondRow = i >= 2;
      return [
        !isLastMobileCol ? "border-r" : "border-r-0",
        !isLastDesktop ? "sm:border-r" : "sm:border-r-0",
        isMobileSecondRow ? "border-t" : "",
        "sm:border-t-0"
      ].filter(Boolean).join(" ");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-surface border-y border-line" }, _attrs))}><div class="max-w-content mx-auto grid grid-cols-2 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(__props.stats, (s, i) => {
        _push(`<div class="${ssrRenderClass([statClass(i, __props.stats.length), "py-9 px-7 border-line"])}"><div class="font-serif text-[17px] sm:text-[15px] font-semibold text-navy dark:text-ink">${ssrInterpolate(s.value)}</div><div class="mt-1.5 text-[11px] sm:text-sm text-ink-muted">${ssrInterpolate(s.label)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatStrip.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InfoTile",
  __ssrInlineRender: true,
  props: {
    icon: {},
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-surface border border-line rounded-[18px] py-[30px] px-[18px] text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: __props.icon,
        size: "w-[30px] h-[30px]",
        class: "text-blue mx-auto mb-4"
      }, null, _parent));
      _push(`<h4 class="font-sans text-[14.5px] font-bold text-navy dark:text-ink leading-[1.4]">${ssrInterpolate(__props.label)}</h4></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfoTile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WhyCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    text: {},
    src: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-surface border border-line rounded-xl2 overflow-hidden shadow-card transition-shadow hover:shadow-lift" }, _attrs))}>`);
      if (__props.src) {
        _push(`<div class="relative aspect-[16/9] overflow-hidden"><img${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([__props.src ? "pt-7" : "pt-[34px] pb-[34px]", "px-[30px] pb-[30px]"])}"><span class="inline-flex items-center justify-center bg-navy text-white rounded-[11px] p-[11px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: __props.icon,
        size: "w-[22px] h-[22px]"
      }, null, _parent));
      _push(`</span><h4 class="mt-[18px] font-sans text-[17.5px] font-bold text-navy dark:text-ink">${ssrInterpolate(__props.title)}</h4><p class="mt-2.5 text-[15px] text-ink-muted leading-[1.65]">${ssrInterpolate(__props.text)}</p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhyCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PartnerBadge",
  __ssrInlineRender: true,
  props: {
    name: {},
    tag: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center h-[104px] border border-line rounded-2xl bg-surface px-4 py-3 text-center transition-all duration-200 hover:border-blue hover:-translate-y-0.5" }, _attrs))}><span class="font-sans font-extrabold text-base text-navy dark:text-ink leading-[1.25]">${ssrInterpolate(__props.name)}</span><small class="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.09em] text-ink-soft">${ssrInterpolate(__props.tag)}</small></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnerBadge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "04", label: "Core service lines under one delivery model" },
      { value: "360°", label: "Well lifecycle, concept through abandonment" },
      { value: "3", label: "Environments — onshore, offshore, subsea" },
      {
        value: "API·ISO·NORSOK",
        label: "Governing standards & technical assurance"
      }
    ];
    const whatWeDo = [
      {
        icon: "drop",
        title: "Well Engineering",
        text: "Concept through P&A — drilling, completions, subsea, intervention and testing.",
        to: "/services?tab=well"
      },
      {
        icon: "briefcase",
        title: "Project Management",
        text: "Planning, cost control, contracting, interfaces, risk and close-out.",
        to: "/services?tab=pm"
      },
      {
        icon: "users",
        title: "Manpower Outsourcing",
        text: "Competency-assured technical and project-control personnel.",
        to: "/services?tab=manpower"
      },
      {
        icon: "search",
        title: "Inspection & QA/QC",
        text: "Vendor surveillance, source inspection, NDT coordination, FAT/SIT.",
        to: "/services?tab=inspection"
      }
    ];
    const servicePhotos = [
      {
        src: "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?w=700&q=80&fit=crop",
        alt: "Offshore oil rig in the open ocean",
        service: "Well Engineering",
        caption: "Offshore & subsea operations"
      },
      {
        src: "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?w=700&q=80&fit=crop",
        alt: "Industrial worker performing quality inspection on metal",
        service: "Inspection & QA/QC",
        caption: "Verified conformance on every scope"
      },
      {
        src: "https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?w=700&q=80&fit=crop",
        alt: "Precision engineering components — gears and mechanical parts",
        service: "Project Management",
        caption: "Initiation through close-out"
      }
    ];
    const whoWeServe = [
      { icon: "drop", label: "Oil & Gas Operators" },
      { icon: "layers", label: "Drilling Contractors" },
      { icon: "factory", label: "EPC Organizations" },
      { icon: "wrench", label: "Service Companies" },
      { icon: "anchor", label: "Marginal Field Developers" }
    ];
    const valueBullets = [
      "End-to-end technical support from concept selection and Basis of Design through execution, close-out and lessons learned.",
      "Independent engineering and assurance focused on safe, technically sound and cost-effective solutions.",
      "Scalable project teams combining office engineering, field supervision and project controls.",
      "Quality and inspection systems that protect equipment integrity and readiness for operations."
    ];
    const whyCards = [
      {
        icon: "compass",
        title: "End-to-end technical support",
        text: "From concept selection and Basis of Design through execution, close-out and lessons learned.",
        src: "https://images.unsplash.com/photo-1578356058390-f58c575337a2?w=600&q=80&fit=crop"
      },
      {
        icon: "shield-check",
        title: "Independent engineering & assurance",
        text: "Focused on safe, technically sound and cost-effective solutions, aligned to client objectives.",
        src: "https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=600&q=80&fit=crop"
      },
      {
        icon: "users",
        title: "Scalable, competent teams",
        text: "Office engineering, field supervision and project controls combined under one accountable focal point.",
        src: "https://images.unsplash.com/photo-1735494032948-14ef288fc9d3?w=600&q=80&fit=crop"
      }
    ];
    const partners = [
      { name: "OMASUP Energy", tag: "Service company" },
      { name: "SLB", tag: "Service Company" },
      { name: "Weatherford", tag: "Service Company" },
      { name: "Eni", tag: "Operator" },
      { name: "Baker Hughes", tag: "Service Company" }
    ];
    useSeoMeta({
      title: "Well Engineering & Energy Project Management | Nigeria",
      description: "Optima Global Energy Services Limited delivers well engineering, project management, manpower outsourcing and inspection/QA-QC for oil and gas operators across Nigeria and West Africa.",
      keywords: "well engineering Nigeria, oil gas project management Port Harcourt, manpower outsourcing energy sector, QA QC inspection Nigeria, offshore engineering services, wells support West Africa, drilling contractor services Nigeria",
      ogTitle: "Optima Global Energy Services | Engineering Excellence. Reliable Energy Solutions.",
      ogDescription: "Integrated well engineering, project management, technical manpower and QA/QC for oil and gas operators in Nigeria and West Africa.",
      ogImage: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1200&h=630&fit=crop&q=80",
      ogType: "website",
      ogUrl: "https://www.ogesenergy.com/",
      ogSiteName: "Optima Global Energy Services Limited",
      twitterCard: "summary_large_image",
      twitterTitle: "Optima Global Energy Services | Nigeria",
      twitterDescription: "Well engineering, project management, manpower & inspection for oil and gas operators across Nigeria and West Africa.",
      twitterImage: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1200&h=630&fit=crop&q=80"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://www.ogesenergy.com/" }],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Optima Global Energy Services Limited",
            description: "Integrated well engineering, project management, manpower outsourcing and inspection/QA-QC for oil and gas operators across Nigeria and West Africa.",
            url: "https://www.ogesenergy.com",
            logo: "https://www.ogesenergy.com/logo.png",
            image: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1200&h=630&fit=crop&q=80",
            email: "info@ogesenergy.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plot 146, Trans-Amadi Industrial Layout",
              addressLocality: "Port Harcourt",
              addressRegion: "Rivers State",
              addressCountry: "NG"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 4.8156,
              longitude: 7.0498
            },
            areaServed: [
              { "@type": "Country", name: "Nigeria" },
              { "@type": "Place", name: "West Africa" }
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Energy Engineering Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Well Engineering" }
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Project Management" }
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Manpower Outsourcing" }
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Inspection & QA/QC" }
                }
              ]
            },
            sameAs: ["https://www.ogesenergy.com"]
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = _sfc_main$7;
      const _component_AppIcon = _sfc_main$6;
      const _component_HeroVisual = __nuxt_component_2;
      const _component_StatStrip = _sfc_main$4;
      const _component_SectionHeading = _sfc_main$8;
      const _component_IconCard = _sfc_main$9;
      const _component_PhotoBlock = _sfc_main$a;
      const _component_InfoTile = _sfc_main$3;
      const _component_BulletList = _sfc_main$b;
      const _component_WhyCard = _sfc_main$2;
      const _component_PartnerBadge = _sfc_main$1;
      const _component_CtaBand = _sfc_main$c;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="bg-gradient-to-br from-navy to-navy-deep pt-16"><div class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center pb-[76px]"><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="eyebrow eyebrow-light">Corporate Capability &amp; Services Proposal</span><h1 class="text-white text-[clamp(22px,4.6vw,54px)] mt-[18px]"> Engineering Excellence. Reliable Energy Solutions. </h1><p class="mt-[22px] text-[15px] sm:text-[19px] text-[#B9C6DE] leading-[1.7] max-w-[640px]"> Optima Global Energy Services Limited supports oil and gas operators, drilling contractors, EPC organizations and service companies with disciplined engineering, competent people and integrated project controls — from concept selection to abandonment. </p><div class="flex gap-4 flex-wrap mt-9">`);
      _push(ssrRenderComponent(_component_AppButton, {
        to: "/contact",
        variant: "amber"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Request a proposal `);
            _push2(ssrRenderComponent(_component_AppIcon, {
              name: "arrow-right",
              size: "w-[15px] h-[15px]"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Request a proposal "),
              createVNode(_component_AppIcon, {
                name: "arrow-right",
                size: "w-[15px] h-[15px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppButton, {
        to: "/services",
        variant: "ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Explore our services`);
          } else {
            return [
              createTextVNode("Explore our services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      _push(ssrRenderComponent(_component_HeroVisual, null, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_StatStrip, { stats }, null, _parent));
      _push(`<section class="py-[120px]"><div class="max-w-content mx-auto px-8">`);
      _push(ssrRenderComponent(_component_SectionHeading, mergeProps({
        class: "reveal",
        eyebrow: "What we do",
        title: "Four complementary service lines, one accountable team.",
        description: "Deployed independently, or integrated under a single project-management structure to reduce interfaces and strengthen accountability."
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(whatWeDo, (card) => {
        _push(ssrRenderComponent(_component_IconCard, mergeProps({
          key: card.title
        }, { ref_for: true }, card), null, _parent));
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({ class: "mt-10 grid sm:grid-cols-3 gap-5 reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(servicePhotos, (p) => {
        _push(`<div class="relative rounded-xl2 overflow-hidden aspect-[4/3] group cursor-default"><img${ssrRenderAttr("src", p.src)}${ssrRenderAttr("alt", p.alt)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"><div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div><div class="absolute bottom-0 left-0 right-0 p-5"><span class="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-amber">${ssrInterpolate(p.service)}</span><p class="text-white text-[14px] font-medium mt-1">${ssrInterpolate(p.caption)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-paper-2 py-[120px]"><div class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center"><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="eyebrow">360° Well Lifecycle</span><h2 class="text-[clamp(18px,3.5vw,38px)] mt-4"> From concept selection to abandonment — onshore, offshore and subsea. </h2><p class="mt-5 text-ink-muted text-[14px] sm:text-[17px] leading-[1.7]"> Three environments. One accountable team. End-to-end technical support at every phase of the well lifecycle — from the initial Basis of Design through final abandonment documentation. </p>`);
      _push(ssrRenderComponent(_component_AppButton, {
        to: "/services",
        variant: "primary",
        class: "mt-8 inline-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore our services `);
            _push2(ssrRenderComponent(_component_AppIcon, {
              name: "arrow-right",
              size: "w-[14px] h-[14px]"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Explore our services "),
              createVNode(_component_AppIcon, {
                name: "arrow-right",
                size: "w-[14px] h-[14px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "16/10",
        label: "Offshore drilling operations at sunset",
        src: "https://images.unsplash.com/photo-1633829131104-e2134f75c6e5?w=900&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></div></section><section class="py-[120px]"><div class="max-w-content mx-auto px-8">`);
      _push(ssrRenderComponent(_component_SectionHeading, mergeProps({
        class: "reveal",
        eyebrow: "Who we serve",
        title: "Built for operators, contractors and service companies alike.",
        description: "One delivery model, scaled to the client and the scope of work."
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[18px] reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(whoWeServe, (tile) => {
        _push(ssrRenderComponent(_component_InfoTile, mergeProps({
          key: tile.label
        }, { ref_for: true }, tile), null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="bg-paper-2 py-[120px]"><div class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center"><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="eyebrow">Our value proposition</span><h2 class="text-[clamp(18px,3.5vw,36px)] mt-4"> People and process, working the same plan. </h2>`);
      _push(ssrRenderComponent(_component_BulletList, {
        class: "mt-[26px]",
        items: valueBullets
      }, null, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "1/1",
        label: "On site, hands on the work",
        src: "https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=900&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></div></section><section class="py-[120px]"><div class="max-w-content mx-auto px-8">`);
      _push(ssrRenderComponent(_component_SectionHeading, mergeProps({
        class: "reveal",
        eyebrow: "Why clients choose Optima",
        title: "A single, accountable partner across the well lifecycle."
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(whyCards, (card) => {
        _push(ssrRenderComponent(_component_WhyCard, mergeProps({
          key: card.title
        }, { ref_for: true }, card), null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="bg-navy py-24"><div class="max-w-content mx-auto px-8"><div class="grid lg:grid-cols-[320px_1fr] gap-14 items-center"><div${ssrRenderAttrs(mergeProps({ class: "hidden lg:block reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "3/4",
        label: "Field operations — Niger Delta",
        src: "https://images.unsplash.com/photo-1648369000096-109763c11e8e?w=600&q=80&fit=crop"
      }, null, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="font-serif text-5xl sm:text-7xl text-amber leading-none">“</span><p class="font-serif text-[clamp(15px,2.4vw,22px)] leading-[1.6] text-white font-medium mt-2 max-w-[680px]"> Our delivery model combines disciplined engineering, competent personnel, robust quality assurance and integrated project controls — so clients execute safely, efficiently and predictably. </p><p class="mt-5 font-sans text-sm text-[#7387A8]"> Optima Global Energy Services Limited — Executive Summary </p></div></div></div></section><section class="py-20"><div class="max-w-content mx-auto px-8"><div class="grid lg:grid-cols-2 gap-14 items-center mb-12"><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="eyebrow">Operators, partners &amp; contractors</span><h2 class="text-[clamp(18px,3.5vw,36px)] mt-4"> Working alongside leading names in energy. </h2><p class="mt-4 text-ink-muted leading-[1.7]"> From national oil companies and international operators to drilling contractors and service companies — our delivery model is built to integrate with yours. </p></div><div${ssrRenderAttrs(mergeProps({ class: "reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "16/9",
        label: "Partners in energy delivery",
        src: "https://images.unsplash.com/photo-1759922378222-47ad736a174d?w=800&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[18px] reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(partners, (p) => {
        _push(ssrRenderComponent(_component_PartnerBadge, {
          key: p.name,
          name: p.name,
          tag: p.tag
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, {
        title: "Let's scope your next well, project or inspection call-off.",
        description: "Integrated Engineering · Reliable Execution · Sustainable Energy Solutions"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppButton, {
              to: "/contact",
              variant: "white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Start a conversation `);
                  _push3(ssrRenderComponent(_component_AppIcon, {
                    name: "arrow-right",
                    size: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Start a conversation "),
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
                to: "/contact",
                variant: "white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Start a conversation "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DWo8zAeE.js.map
