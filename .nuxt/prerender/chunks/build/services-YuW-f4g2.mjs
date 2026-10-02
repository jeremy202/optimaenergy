import { a as _sfc_main$4, _ as _sfc_main$1$1 } from './PhotoBlock-C2bj8fPt.mjs';
import { u as useRoute, b as _sfc_main$6 } from './server.mjs';
import { defineComponent, ref, resolveDirective, mergeProps, withCtx, openBlock, createBlock, mergeDefaults, useSSRContext } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/a202/Downloads/optima-nuxt-website/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$7 } from './BulletList-iGj9U8mC.mjs';
import { _ as _sfc_main$5 } from './PillRow-2avDMuj0.mjs';
import { _ as _sfc_main$8 } from './IconCard-u_G9J4LH.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    title: {},
    number: {},
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-line first:border-t first:border-line" }, _attrs))}><button type="button" class="w-full flex items-center justify-between gap-4 py-6 px-1 text-left"><span class="flex items-center gap-4"><span class="font-sans text-[12.5px] font-semibold text-blue border border-line rounded-full py-1 px-2.5">${ssrInterpolate(__props.number)}</span><h4 class="text-[14px] sm:text-[17.5px] font-semibold font-sans text-ink">${ssrInterpolate(__props.title)}</h4></span>`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "chevron-down",
        size: "w-[18px] h-[18px]",
        class: ["text-ink-soft shrink-0 transition-transform duration-200", __props.isOpen ? "rotate-180 text-blue" : ""]
      }, null, _parent));
      _push(`</button><div class="overflow-hidden transition-[max-height] duration-300 ease-in-out" style="${ssrRenderStyle({ maxHeight: __props.isOpen ? "1400px" : "0px" })}"><div class="pt-0.5 pb-[30px] pl-[54px] pr-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SpecTable",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeDefaults({
    rows: {},
    headers: {}
  }, () => ({ headers: ["Service Area", "Scope / Deliverables"] })),
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto border border-line rounded-2xl" }, _attrs))}><table class="w-full border-collapse min-w-[560px]"><thead><tr><!--[-->`);
      ssrRenderList(__props.headers, (h, i) => {
        _push(`<th class="bg-navy text-white text-left font-sans text-[12.5px] tracking-[0.05em] uppercase font-semibold py-4 px-5">${ssrInterpolate(h)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.rows, (row, i) => {
        _push(`<tr class="hover:bg-paper-2"><td class="py-[18px] px-5 border-t border-line text-ink font-semibold w-[230px] align-top">${ssrInterpolate(row.label)}</td><td class="py-[18px] px-5 border-t border-line text-ink-muted text-[15px] align-top">${ssrInterpolate(row.value)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SpecTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServicesWellEngineering",
  __ssrInlineRender: true,
  setup(__props) {
    const openIndex = ref(0);
    function toggle(i) {
      openIndex.value = openIndex.value === i ? -1 : i;
    }
    const drillingTable = [
      {
        label: "Well Architecture",
        value: "Hole sizes, casing/liner setting depths, contingency strings, wellhead and pressure-rating philosophy."
      },
      {
        label: "Trajectory Design",
        value: "Surface location constraints, target definition, anti-collision, inclination/DLS limits, ERD considerations and directional-drilling requirements."
      },
      {
        label: "Casing Design",
        value: "Burst, collapse, axial/triaxial loading, design factors, connection selection, wear, thermal and installation load cases."
      },
      {
        label: "Hydraulics",
        value: "ECD, pressure-loss modelling, hole cleaning, surge/swab, pump-rate windows and equivalent circulating density management."
      },
      {
        label: "Torque & Drag",
        value: "Drillstring/casing/liner running loads, hookload, torque, buckling, friction sensitivity and operational envelopes."
      },
      {
        label: "Drilling Fluids",
        value: "Fluid-system requirements, rheology, density windows, inhibition, losses, displacement and interface planning."
      },
      {
        label: "Cementing",
        value: "Slurry requirements, placement philosophy, TOC, centralization, displacement, losses and barrier objectives and contingency planning."
      },
      {
        label: "Well Control",
        value: "Kick tolerance, MAASP, pressure-management philosophy, BOP requirements, shut-in/circulation considerations and contingency planning."
      }
    ];
    const items = [
      {
        number: "4.1",
        title: "Concept, Select and Basis of Design",
        bullets: [
          "Review subsurface objectives, reservoir uncertainties, pore-pressure/fracture-gradient windows and offset-well performance.",
          "Develop well objectives, functional requirements, design premises, success criteria and key technical assumptions.",
          "Prepare Basis of Design, well architecture options, design trade-offs and concept-selection recommendations.",
          "Develop preliminary time and cost estimates, long-lead equipment requirements and contracting strategies.",
          "Identify major well risks and develop prevention, mitigation and contingency philosophies.",
          "Support peer reviews, value-assurance reviews, HAZID/HAZOP and decision-gate documentation."
        ]
      },
      {
        number: "4.2",
        title: "Drilling Engineering",
        table: drillingTable
      },
      {
        number: "4.3",
        title: "Completion Engineering",
        bullets: [
          "Completion Basis of Design and selection of completion architecture based on reservoir, production and intervention requirements.",
          "Tubing design for pressure, axial, thermal, buckling, erosion/corrosion and life-cycle loading.",
          "Selection and specification of packers, SCSSVs, nipples, gauges, chemical-injection systems and completion accessories.",
          "Sand-control design support including screens, gravel/frac-pack, open-hole systems and inflow-control technologies.",
          "Intelligent/smart completion philosophy, interval control, downhole monitoring and control-line architecture.",
          "Artificial-lift interface engineering including ESP, gas lift and other fit-for-purpose lift systems.",
          "Completion fluids, displacement, wellbore cleanup, filtration and fluid-compatibility requirements.",
          "Running procedures, space-out, tally verification, pressure testing, contingency procedures and completion acceptance criteria."
        ]
      },
      {
        number: "4.4",
        title: "Subsea and Deepwater Well Engineering",
        bullets: [
          "Subsea wellhead/tree and completion interface management.",
          "Landing-string/SSTT, subsea test tree and emergency-disconnect philosophy support.",
          "IWOCS, MCS and control-system interface definition and integration planning.",
          "Riser, landing-string and rig-interface technical coordination.",
          "Subsea positioning, ROV interface, installation-readiness and marine-operation support.",
          "FAT, SIT, integration testing, load-out, offshore readiness and contingency planning."
        ]
      },
      {
        number: "4.5",
        title: "Well Testing, Clean-up and Flow Assurance",
        bullets: [
          "Well-test objectives, test sequence, flow-period planning and surface/subsurface equipment interfaces.",
          "Clean-up strategy, choke schedule, production-rate envelope and separator/flare constraints.",
          "Hydrate-risk review, thermal/pressure transient considerations and inhibitor strategy support.",
          "Well-test barrier philosophy, pressure testing and emergency shutdown/interface requirements.",
          "Post-test displacement, suspension or completion handover planning."
        ]
      },
      {
        number: "4.6",
        title: "Intervention, Workover and Well Integrity",
        bullets: [
          "Slickline, e-line, coiled-tubing, hydraulic workover and rig-based intervention engineering.",
          "Barrier verification, pressure diagnostics, leak investigation and well-integrity remediation planning.",
          "SCSSV, tubing, packer and completion-component intervention strategies.",
          "Fishing, milling, cutting, cleanout and contingency procedure development.",
          "Workover Basis of Design, equipment selection, well-control planning and operational programs."
        ]
      },
      {
        number: "4.7",
        title: "Plug & Abandonment",
        bullets: [
          "P&A Basis of Design, regulatory/standard review and permanent-barrier philosophy.",
          "Barrier location, verification method, cement-plug design and formation-isolation requirements.",
          "Section milling, casing recovery, perforate/wash/cement and alternative barrier options.",
          "Rigless versus rig-based screening, cost/schedule estimates and execution planning.",
          "Final well-status documentation and abandonment assurance."
        ]
      },
      {
        number: "4.8",
        title: "Operational Engineering & Performance",
        bullets: [
          "Daily engineering support, morning-call preparation, look-ahead and operational decision support.",
          "Drilling/completion performance tracking, NPT/ILT classification and root-cause review.",
          "Time-depth curves, KPI dashboards, technical-limit analysis and flat-time reduction.",
          "Management of change, deviation tracking, lessons learned and End-of-Well Reports.",
          "DWOP/CWOP/HAZOP facilitation and pre-job readiness reviews."
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccordionItem = _sfc_main$3;
      const _component_SpecTable = _sfc_main$2;
      const _component_BulletList = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(ssrRenderComponent(_component_AccordionItem, {
          key: item.number,
          title: item.title,
          "is-open": openIndex.value === i,
          onToggle: ($event) => toggle(i)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              if (item.table) {
                _push2(ssrRenderComponent(_component_SpecTable, {
                  rows: item.table
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_BulletList, {
                  items: (_a = item.bullets) != null ? _a : [],
                  dense: ""
                }, null, _parent2, _scopeId));
              }
            } else {
              return [
                item.table ? (openBlock(), createBlock(_component_SpecTable, {
                  key: 0,
                  rows: item.table
                }, null, 8, ["rows"])) : (openBlock(), createBlock(_component_BulletList, {
                  key: 1,
                  items: (_b = item.bullets) != null ? _b : [],
                  dense: ""
                }, null, 8, ["items"]))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesWellEngineering.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Services | Well Engineering, Project Management, Manpower & Inspection",
      description: "Four integrated service lines: well engineering (concept to P&A), project management (initiation to close-out), technical manpower outsourcing, and inspection/QA-QC for the oil and gas sector in Nigeria.",
      keywords: "well engineering services Nigeria, drilling completion services, project management oil gas, technical manpower supply Nigeria, QA QC inspection services, vendor surveillance Nigeria, source inspection oil gas, NDT coordination Nigeria, OCTG inspection",
      ogTitle: "Services | Four Service Lines. One Delivery Model. | Optima",
      ogDescription: "Well engineering, project management, manpower outsourcing and inspection/QA-QC \u2014 deployed independently or as a fully integrated delivery team.",
      ogImage: "https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=1200&h=630&fit=crop&q=80",
      ogType: "website",
      ogUrl: "https://www.ogesenergy.com/services",
      ogSiteName: "Optima Global Energy Services Limited",
      twitterCard: "summary_large_image",
      twitterTitle: "Services | Optima Global Energy Services",
      twitterDescription: "Well engineering, project management, manpower outsourcing and QA/QC services for oil and gas operators in Nigeria and West Africa.",
      twitterImage: "https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=1200&h=630&fit=crop&q=80"
    });
    useHead({
      link: [{ rel: "canonical", href: "https://www.ogesenergy.com/services" }],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Oil & Gas Engineering Services",
            provider: {
              "@type": "Organization",
              name: "Optima Global Energy Services Limited",
              url: "https://www.ogesenergy.com"
            },
            serviceType: ["Well Engineering", "Project Management", "Manpower Outsourcing", "Inspection & QA/QC"],
            areaServed: "Nigeria",
            url: "https://www.ogesenergy.com/services",
            description: "Optima provides four integrated service lines: well engineering, project management, manpower outsourcing and inspection/QA-QC \u2014 for the full oil and gas well lifecycle."
          })
        }
      ]
    });
    useRoute();
    const tabs = [
      { key: "well", label: "Well Engineering" },
      { key: "pm", label: "Project Management" },
      { key: "manpower", label: "Manpower Outsourcing" },
      { key: "inspection", label: "Inspection & QA/QC" }
    ];
    const activeTab = ref("well");
    const pmRows = [
      { label: "Project Initiation", value: "Project charter, objectives, scope definition, stakeholder mapping, governance and responsibility matrix." },
      { label: "Execution Planning", value: "Project Execution Plan, work breakdown structure, contracting/procurement strategy, deliverables register and readiness plan." },
      { label: "Planning & Scheduling", value: "Integrated schedules, critical path, look-aheads, progress measurement, recovery plans and milestone management." },
      { label: "Cost Management", value: "Budget development, AFE/cost estimates, commitments, accruals, forecasting, variance analysis and cost-to-complete." },
      { label: "Contract Management", value: "Scope of work, bid technical support, clarifications, contractor alignment, change orders, claims support and performance reviews." },
      { label: "Interface Management", value: "Operator/rig/EPC/service-company interfaces, interface registers and action tracking / technical responsibility matrices." },
      { label: "Risk Management", value: "Risk register, qualitative/quantitative assessment, mitigations, contingency plans, opportunities and escalation." },
      { label: "Readiness Assurance", value: "Equipment/personnel/document readiness, FAT/SIT status, logistics, permits, certifications and pre-spud/pre-mob reviews." },
      { label: "Performance Management", value: "KPIs, dashboards, NPT/ILT, service quality, schedule/cost performance and continuous-improvement actions." },
      { label: "Close-Out", value: "Punch-list closure, final accounts, as-built/MDR handover, End-of-Project Report and lessons learned." }
    ];
    const deliveryFramework = ["ASSESS", "PLAN", "ENGINEER", "MOBILIZE", "EXECUTE", "MONITOR", "OPTIMIZE", "CLOSE OUT"];
    const pmControlsDeliverables = [
      "Project Execution Plan and responsibility matrix (RACI).",
      "Integrated master schedule and rolling 14/30/90-day look-aheads.",
      "Cost report, forecast, commitments and variance commentary.",
      "Risk and opportunity register with accountable owners.",
      "Interface and action registers.",
      "Procurement/expediting and logistics trackers.",
      "Weekly/monthly project reports and management dashboards.",
      "Lessons-learned register and close-out report."
    ];
    const manpowerRows = [
      { label: "Wells & Operations", value: "Drilling engineers, completion engineers, well intervention engineers, wellsite drilling/completion supervisors, drilling superintendents and well operations leaders." },
      { label: "Subsea", value: "Subsea engineers, landing-string/SSTT specialists, IWOCS/control-system personnel, subsea supervisors and interface engineers." },
      { label: "Project Management", value: "Project managers, project engineers, engineering coordinators, planners/schedulers, cost engineers, risk and interface coordinators." },
      { label: "Quality & Inspection", value: "QA/QC engineers, vendor inspectors, welding/coating inspectors, NDT coordinators, expeditors and document-quality specialists." },
      { label: "HSE", value: "HSE managers, advisors, offshore safety personnel, environmental specialists and permit/risk-assessment support." },
      { label: "Supply Chain", value: "Procurement specialists, contract engineers, logistics coordinators, materials personnel and warehouse specialists." },
      { label: "Technical Support", value: "Document controllers, data analysts, reporting specialists and engineering administrators." }
    ];
    const recruitmentBullets = [
      "Client-specific job description and competency matrix development.",
      "Targeted sourcing and structured CV screening.",
      "Technical interviews by relevant subject-matter personnel where required.",
      "Verification of qualifications, certifications, training and employment references.",
      "Medical, visa, work-permit and mobilization-document coordination as applicable.",
      "Competency-gap identification and pre-mobilization training requirements.",
      "Performance feedback, rotation management and replacement/backup planning."
    ];
    const workforceBullets = [
      "Timesheet and rotation administration, mobilization/demobilization tracking and travel coordination.",
      "Compliance with client HSE, security, code-of-conduct and site requirements.",
      "Performance reviews and issue escalation.",
      "Local-content and nationalization plans, mentoring and knowledge transfer.",
      "Single focal point for commercial, operational and personnel matters."
    ];
    const inspectionRows = [
      { label: "Vendor Surveillance", value: "Review vendor quality plans, manufacturing schedules, ITPs, hold/witness points and document requirements." },
      { label: "Source Inspection", value: "Independent inspection at manufacturer/sub-vendor facilities during critical manufacturing and testing stages." },
      { label: "OCTG & Tubulars", value: "Visual/dimensional inspection coordination, thread/connection checks, drift, traceability, tally and storage/preservation verification." },
      { label: "Drilling & Completion Equipment", value: "Inspection/readiness of wellheads, trees, completion tools, pressure-control equipment, handling tools and associated systems." },
      { label: "Fabrication QA/QC", value: "Material identification, WPS/PQR/WPQ verification, welding surveillance, dimensional checks, coating and fabrication documentation." },
      { label: "NDT Coordination", value: "Review/coordination of VT, PT, MT, UT and other approved NDT methods with qualified personnel and procedures." },
      { label: "FAT/SIT Witnessing", value: "Test-procedure review, witnessing, punch-list management, test-record verification and release recommendation." },
      { label: "Expediting", value: "Manufacturing progress monitoring, critical-path tracking, recovery actions and delivery-risk reporting." },
      { label: "NCR/CAR Management", value: "Nonconformance identification, disposition tracking, corrective action, concession/deviation control and closure verification." },
      { label: "Load-out & Preservation", value: "Packing, preservation, certification, lifting/transport readiness and shipment-release checks." },
      { label: "MDR / Final Documentation", value: "Compilation/review of certificates, material traceability, inspection reports, test records, as-builts and manufacturing data records." }
    ];
    const qualityPlanningBullets = [
      "Project Quality Plan and inspection strategy.",
      "Inspection and Test Plans with hold, witness, review and surveillance points.",
      "Vendor/subcontractor qualification and audit support.",
      "Quality records, document control and traceability requirements.",
      "Quality KPIs, trend analysis and management reporting."
    ];
    const inspectionDisciplines = [
      "Mechanical and dimensional inspection.",
      "Welding and fabrication surveillance.",
      "Coating, painting and preservation inspection.",
      "Electrical/instrumentation inspection where required.",
      "Pressure and functional testing witness.",
      "Lifting equipment and certification verification.",
      "Materials receiving, storage and preservation audits."
    ];
    const engagementModels = [
      { number: "01", title: "Technical Consultancy", text: "Defined engineering studies, reviews, calculations, programs, procedures or assurance activities." },
      { number: "02", title: "Embedded Resources", text: "Individual specialists integrated into the client's office or field organization." },
      { number: "03", title: "Managed Technical Team", text: "Multi-disciplinary Optima team managed under agreed deliverables and KPIs." },
      { number: "04", title: "Project Management Support", text: "Dedicated PM/project-controls structure coordinating multiple work scopes and contractors." },
      { number: "05", title: "Inspection Call-Off", text: "On-demand or resident inspection personnel deployed against inspection notifications." },
      { number: "06", title: "Integrated Wells Support", text: "Combined well engineering, project management, manpower and QA/QC under a unified delivery model." }
    ];
    const typicalDeliverables = [
      "Basis of Design and well design reports.",
      "Drilling, completion, intervention, testing and abandonment programs.",
      "Engineering calculations and design-verification packages.",
      "Project Execution Plans, schedules, cost reports and risk registers.",
      "Technical scopes of work, bid evaluations and contractor clarifications.",
      "FAT/SIT procedures and readiness/assurance reports.",
      "Inspection reports, release notes and MDR reviews.",
      "Daily/weekly/monthly reports, KPI dashboards and End-of-Well/Project Reports."
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhotoBlock = _sfc_main$4;
      const _component_SectionsServicesWellEngineering = _sfc_main$1;
      const _component_SpecTable = _sfc_main$2;
      const _component_AppIcon = _sfc_main$6;
      const _component_PillRow = _sfc_main$5;
      const _component_BulletList = _sfc_main$7;
      const _component_SectionHeading = _sfc_main$1$1;
      const _component_IconCard = _sfc_main$8;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="pt-16 pb-12"><div class="max-w-content mx-auto px-8"><span class="eyebrow">Service Portfolio</span><h1${ssrRenderAttrs(mergeProps({ class: "mt-[18px] text-[clamp(24px,5vw,58px)] max-w-[820px] reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Four service lines. One delivery model.</h1><p${ssrRenderAttrs(mergeProps({ class: "mt-[22px] text-[15px] sm:text-[19px] text-ink-muted leading-[1.7] max-w-[640px] reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}> Select a service line below for its full scope of deliverables. </p></div></section><section class="pb-20"><div class="max-w-content mx-auto px-8"><div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-2.5 mb-12 reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === tab.key ? "bg-navy border-navy text-white" : "border-line-2 text-ink-muted", "py-3 px-[22px] rounded-full border text-[14.5px] font-semibold transition-colors"])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div><div style="${ssrRenderStyle(activeTab.value === "well" ? null : { display: "none" })}"><div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start"><div><span class="eyebrow">Well Engineering Services</span><h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">Optima&#39;s flagship technical service</h3><p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]"> Supporting the complete well lifecycle for exploration, appraisal, development, injection, workover, intervention and abandonment wells in onshore, offshore and subsea environments. </p></div><div class="hidden lg:block">`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "16/10",
        label: "Offshore drilling operations",
        src: "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?w=600&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_SectionsServicesWellEngineering, null, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(activeTab.value === "pm" ? null : { display: "none" })}"><div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start"><div><span class="eyebrow">Project Management Services</span><h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">Structured delivery from initiation to close-out</h3><p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]"> Optima provides structured project-management support from project initiation through execution and close-out \u2014 aligning technical scope, people, suppliers, schedule, cost, quality and risk under a transparent governance model. </p></div><div class="hidden lg:block">`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "16/10",
        label: "Project controls and planning",
        src: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_SpecTable, { rows: pmRows }, null, _parent));
      _push(`<div class="flex items-center gap-3 mt-[52px] mb-[22px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "refresh",
        size: "w-5 h-5",
        class: "text-blue"
      }, null, _parent));
      _push(`<h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Project Delivery Framework</h4></div>`);
      _push(ssrRenderComponent(_component_PillRow, { items: deliveryFramework }, null, _parent));
      _push(`<div class="flex items-center gap-3 mt-[52px] mb-[22px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "clipboard-list",
        size: "w-5 h-5",
        class: "text-blue"
      }, null, _parent));
      _push(`<h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Typical Project Controls Deliverables</h4></div>`);
      _push(ssrRenderComponent(_component_BulletList, {
        grid: "",
        items: pmControlsDeliverables
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(activeTab.value === "manpower" ? null : { display: "none" })}"><div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start"><div><span class="eyebrow">Manpower Outsourcing &amp; Technical Resources</span><h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">A competency-assured workforce solution</h3><p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]"> Optima supplies qualified technical and project personnel on short-term, rotational, campaign or long-term assignments \u2014 designed as a competency-assured workforce solution rather than simple CV forwarding. </p></div><div class="hidden lg:block">`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "16/10",
        label: "Competency-assured field personnel",
        src: "https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?w=600&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></div><div class="flex items-center gap-3 mb-[22px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "network",
        size: "w-5 h-5",
        class: "text-blue"
      }, null, _parent));
      _push(`<h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Personnel Categories</h4></div>`);
      _push(ssrRenderComponent(_component_SpecTable, { rows: manpowerRows }, null, _parent));
      _push(`<div class="flex items-center gap-3 mt-[52px] mb-[22px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "user-check",
        size: "w-5 h-5",
        class: "text-blue"
      }, null, _parent));
      _push(`<h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Recruitment and Competency Assurance</h4></div>`);
      _push(ssrRenderComponent(_component_BulletList, {
        grid: "",
        items: recruitmentBullets
      }, null, _parent));
      _push(`<div class="flex items-center gap-3 mt-[52px] mb-[22px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "calendar",
        size: "w-5 h-5",
        class: "text-blue"
      }, null, _parent));
      _push(`<h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Workforce Management</h4></div>`);
      _push(ssrRenderComponent(_component_BulletList, {
        grid: "",
        items: workforceBullets
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(activeTab.value === "inspection" ? null : { display: "none" })}"><div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start"><div><span class="eyebrow">Inspection and QA/QC Services</span><h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">Verified conformance before it reaches the worksite</h3><p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]"> Optima&#39;s inspection and QA/QC services verify that materials, equipment, fabrication, testing and documentation conform to purchase-order, specification, code and project requirements before they reach the worksite. </p></div><div class="hidden lg:block">`);
      _push(ssrRenderComponent(_component_PhotoBlock, {
        ar: "16/10",
        label: "Source inspection and vendor surveillance",
        src: "https://images.unsplash.com/photo-1564182842834-681b7be6de4b?w=600&q=80&fit=crop"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_SpecTable, { rows: inspectionRows }, null, _parent));
      _push(`<div class="flex items-center gap-3 mt-[52px] mb-[22px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "clipboard-list",
        size: "w-5 h-5",
        class: "text-blue"
      }, null, _parent));
      _push(`<h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Quality Planning</h4></div>`);
      _push(ssrRenderComponent(_component_BulletList, {
        grid: "",
        items: qualityPlanningBullets
      }, null, _parent));
      _push(`<div class="flex items-center gap-3 mt-[52px] mb-[22px]">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "factory",
        size: "w-5 h-5",
        class: "text-blue"
      }, null, _parent));
      _push(`<h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Typical Inspection Disciplines</h4></div>`);
      _push(ssrRenderComponent(_component_BulletList, {
        grid: "",
        items: inspectionDisciplines
      }, null, _parent));
      _push(`</div></div></section><section class="bg-paper-2 py-[120px]"><div class="max-w-content mx-auto px-8">`);
      _push(ssrRenderComponent(_component_SectionHeading, mergeProps({
        class: "reveal",
        eyebrow: "Engagement Models",
        title: "Scoped to fit how you already work.",
        description: "From a single defined study to a fully integrated, multi-disciplinary delivery team under one accountable focal point."
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><!--[-->`);
      ssrRenderList(engagementModels, (m) => {
        _push(ssrRenderComponent(_component_IconCard, {
          key: m.number,
          icon: "",
          title: m.title,
          text: m.text
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-[72px]"><span class="eyebrow">Typical Deliverables</span><h3 class="text-[26px] mt-[14px] mb-7">What clients receive.</h3>`);
      _push(ssrRenderComponent(_component_BulletList, {
        grid: "",
        items: typicalDeliverables
      }, null, _parent));
      _push(`</div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-YuW-f4g2.mjs.map
