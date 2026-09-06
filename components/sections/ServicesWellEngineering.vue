<script setup lang="ts">
import { ref } from "vue";

const openIndex = ref(0);

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? -1 : i;
}

const drillingTable = [
  {
    label: "Well Architecture",
    value:
      "Hole sizes, casing/liner setting depths, contingency strings, wellhead and pressure-rating philosophy.",
  },
  {
    label: "Trajectory Design",
    value:
      "Surface location constraints, target definition, anti-collision, inclination/DLS limits, ERD considerations and directional-drilling requirements.",
  },
  {
    label: "Casing Design",
    value:
      "Burst, collapse, axial/triaxial loading, design factors, connection selection, wear, thermal and installation load cases.",
  },
  {
    label: "Hydraulics",
    value:
      "ECD, pressure-loss modelling, hole cleaning, surge/swab, pump-rate windows and equivalent circulating density management.",
  },
  {
    label: "Torque & Drag",
    value:
      "Drillstring/casing/liner running loads, hookload, torque, buckling, friction sensitivity and operational envelopes.",
  },
  {
    label: "Drilling Fluids",
    value:
      "Fluid-system requirements, rheology, density windows, inhibition, losses, displacement and interface planning.",
  },
  {
    label: "Cementing",
    value:
      "Slurry requirements, placement philosophy, TOC, centralization, displacement, losses and barrier objectives and contingency planning.",
  },
  {
    label: "Well Control",
    value:
      "Kick tolerance, MAASP, pressure-management philosophy, BOP requirements, shut-in/circulation considerations and contingency planning.",
  },
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
      "Support peer reviews, value-assurance reviews, HAZID/HAZOP and decision-gate documentation.",
    ],
  },
  {
    number: "4.2",
    title: "Drilling Engineering",
    table: drillingTable,
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
      "Running procedures, space-out, tally verification, pressure testing, contingency procedures and completion acceptance criteria.",
    ],
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
      "FAT, SIT, integration testing, load-out, offshore readiness and contingency planning.",
    ],
  },
  {
    number: "4.5",
    title: "Well Testing, Clean-up and Flow Assurance",
    bullets: [
      "Well-test objectives, test sequence, flow-period planning and surface/subsurface equipment interfaces.",
      "Clean-up strategy, choke schedule, production-rate envelope and separator/flare constraints.",
      "Hydrate-risk review, thermal/pressure transient considerations and inhibitor strategy support.",
      "Well-test barrier philosophy, pressure testing and emergency shutdown/interface requirements.",
      "Post-test displacement, suspension or completion handover planning.",
    ],
  },
  {
    number: "4.6",
    title: "Intervention, Workover and Well Integrity",
    bullets: [
      "Slickline, e-line, coiled-tubing, hydraulic workover and rig-based intervention engineering.",
      "Barrier verification, pressure diagnostics, leak investigation and well-integrity remediation planning.",
      "SCSSV, tubing, packer and completion-component intervention strategies.",
      "Fishing, milling, cutting, cleanout and contingency procedure development.",
      "Workover Basis of Design, equipment selection, well-control planning and operational programs.",
    ],
  },
  {
    number: "4.7",
    title: "Plug & Abandonment",
    bullets: [
      "P&A Basis of Design, regulatory/standard review and permanent-barrier philosophy.",
      "Barrier location, verification method, cement-plug design and formation-isolation requirements.",
      "Section milling, casing recovery, perforate/wash/cement and alternative barrier options.",
      "Rigless versus rig-based screening, cost/schedule estimates and execution planning.",
      "Final well-status documentation and abandonment assurance.",
    ],
  },
  {
    number: "4.8",
    title: "Operational Engineering & Performance",
    bullets: [
      "Daily engineering support, morning-call preparation, look-ahead and operational decision support.",
      "Drilling/completion performance tracking, NPT/ILT classification and root-cause review.",
      "Time-depth curves, KPI dashboards, technical-limit analysis and flat-time reduction.",
      "Management of change, deviation tracking, lessons learned and End-of-Well Reports.",
      "DWOP/CWOP/HAZOP facilitation and pre-job readiness reviews.",
    ],
  },
];
</script>

<template>
  <div>
    <AccordionItem
      v-for="(item, i) in items"
      :key="item.number"
      :title="item.title"
      :is-open="openIndex === i"
      @toggle="toggle(i)"
    >
      <SpecTable v-if="item.table" :rows="item.table" />
      <BulletList v-else :items="item.bullets ?? []" dense />
    </AccordionItem>
  </div>
</template>
