<script setup lang="ts">
import { ref, onMounted } from 'vue'

// ── SEO ──────────────────────────────────────────────────────────────────────
useSeoMeta({
  title: 'Services | Well Engineering, Project Management, Manpower & Inspection',
  description:
    'Four integrated service lines: well engineering (concept to P&A), project management (initiation to close-out), technical manpower outsourcing, and inspection/QA-QC for the oil and gas sector in Nigeria.',
  keywords:
    'well engineering services Nigeria, drilling completion services, project management oil gas, technical manpower supply Nigeria, QA QC inspection services, vendor surveillance Nigeria, source inspection oil gas, NDT coordination Nigeria, OCTG inspection',
  ogTitle: 'Services | Four Service Lines. One Delivery Model. | Optima',
  ogDescription:
    'Well engineering, project management, manpower outsourcing and inspection/QA-QC — deployed independently or as a fully integrated delivery team.',
  ogImage: 'https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=1200&h=630&fit=crop&q=80',
  ogType: 'website',
  ogUrl: 'https://www.ogesenergy.com/services',
  ogSiteName: 'Optima Global Energy Services Limited',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Services | Optima Global Energy Services',
  twitterDescription: 'Well engineering, project management, manpower outsourcing and QA/QC services for oil and gas operators in Nigeria and West Africa.',
  twitterImage: 'https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=1200&h=630&fit=crop&q=80',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.ogesenergy.com/services' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Oil & Gas Engineering Services',
        provider: {
          '@type': 'Organization',
          name: 'Optima Global Energy Services Limited',
          url: 'https://www.ogesenergy.com',
        },
        serviceType: ['Well Engineering', 'Project Management', 'Manpower Outsourcing', 'Inspection & QA/QC'],
        areaServed: 'Nigeria',
        url: 'https://www.ogesenergy.com/services',
        description:
          'Optima provides four integrated service lines: well engineering, project management, manpower outsourcing and inspection/QA-QC — for the full oil and gas well lifecycle.',
      }),
    },
  ],
})

const route = useRoute()

const tabs = [
  { key: 'well', label: 'Well Engineering' },
  { key: 'pm', label: 'Project Management' },
  { key: 'manpower', label: 'Manpower Outsourcing' },
  { key: 'inspection', label: 'Inspection & QA/QC' }
]

const activeTab = ref('well')

function setTab(key: string) {
  activeTab.value = key
}

onMounted(() => {
  const q = route.query.tab
  if (typeof q === 'string' && tabs.some((t) => t.key === q)) {
    activeTab.value = q
  }
})

// ---- Project Management ----
const pmRows = [
  { label: 'Project Initiation', value: 'Project charter, objectives, scope definition, stakeholder mapping, governance and responsibility matrix.' },
  { label: 'Execution Planning', value: 'Project Execution Plan, work breakdown structure, contracting/procurement strategy, deliverables register and readiness plan.' },
  { label: 'Planning & Scheduling', value: 'Integrated schedules, critical path, look-aheads, progress measurement, recovery plans and milestone management.' },
  { label: 'Cost Management', value: 'Budget development, AFE/cost estimates, commitments, accruals, forecasting, variance analysis and cost-to-complete.' },
  { label: 'Contract Management', value: 'Scope of work, bid technical support, clarifications, contractor alignment, change orders, claims support and performance reviews.' },
  { label: 'Interface Management', value: 'Operator/rig/EPC/service-company interfaces, interface registers and action tracking / technical responsibility matrices.' },
  { label: 'Risk Management', value: 'Risk register, qualitative/quantitative assessment, mitigations, contingency plans, opportunities and escalation.' },
  { label: 'Readiness Assurance', value: 'Equipment/personnel/document readiness, FAT/SIT status, logistics, permits, certifications and pre-spud/pre-mob reviews.' },
  { label: 'Performance Management', value: 'KPIs, dashboards, NPT/ILT, service quality, schedule/cost performance and continuous-improvement actions.' },
  { label: 'Close-Out', value: 'Punch-list closure, final accounts, as-built/MDR handover, End-of-Project Report and lessons learned.' }
]

const deliveryFramework = ['ASSESS', 'PLAN', 'ENGINEER', 'MOBILIZE', 'EXECUTE', 'MONITOR', 'OPTIMIZE', 'CLOSE OUT']

const pmControlsDeliverables = [
  'Project Execution Plan and responsibility matrix (RACI).',
  'Integrated master schedule and rolling 14/30/90-day look-aheads.',
  'Cost report, forecast, commitments and variance commentary.',
  'Risk and opportunity register with accountable owners.',
  'Interface and action registers.',
  'Procurement/expediting and logistics trackers.',
  'Weekly/monthly project reports and management dashboards.',
  'Lessons-learned register and close-out report.'
]

// ---- Manpower Outsourcing ----
const manpowerRows = [
  { label: 'Wells & Operations', value: 'Drilling engineers, completion engineers, well intervention engineers, wellsite drilling/completion supervisors, drilling superintendents and well operations leaders.' },
  { label: 'Subsea', value: 'Subsea engineers, landing-string/SSTT specialists, IWOCS/control-system personnel, subsea supervisors and interface engineers.' },
  { label: 'Project Management', value: 'Project managers, project engineers, engineering coordinators, planners/schedulers, cost engineers, risk and interface coordinators.' },
  { label: 'Quality & Inspection', value: 'QA/QC engineers, vendor inspectors, welding/coating inspectors, NDT coordinators, expeditors and document-quality specialists.' },
  { label: 'HSE', value: 'HSE managers, advisors, offshore safety personnel, environmental specialists and permit/risk-assessment support.' },
  { label: 'Supply Chain', value: 'Procurement specialists, contract engineers, logistics coordinators, materials personnel and warehouse specialists.' },
  { label: 'Technical Support', value: 'Document controllers, data analysts, reporting specialists and engineering administrators.' }
]

const recruitmentBullets = [
  'Client-specific job description and competency matrix development.',
  'Targeted sourcing and structured CV screening.',
  'Technical interviews by relevant subject-matter personnel where required.',
  'Verification of qualifications, certifications, training and employment references.',
  'Medical, visa, work-permit and mobilization-document coordination as applicable.',
  'Competency-gap identification and pre-mobilization training requirements.',
  'Performance feedback, rotation management and replacement/backup planning.'
]

const workforceBullets = [
  'Timesheet and rotation administration, mobilization/demobilization tracking and travel coordination.',
  'Compliance with client HSE, security, code-of-conduct and site requirements.',
  'Performance reviews and issue escalation.',
  'Local-content and nationalization plans, mentoring and knowledge transfer.',
  'Single focal point for commercial, operational and personnel matters.'
]

// ---- Inspection & QA/QC ----
const inspectionRows = [
  { label: 'Vendor Surveillance', value: 'Review vendor quality plans, manufacturing schedules, ITPs, hold/witness points and document requirements.' },
  { label: 'Source Inspection', value: 'Independent inspection at manufacturer/sub-vendor facilities during critical manufacturing and testing stages.' },
  { label: 'OCTG & Tubulars', value: 'Visual/dimensional inspection coordination, thread/connection checks, drift, traceability, tally and storage/preservation verification.' },
  { label: 'Drilling & Completion Equipment', value: 'Inspection/readiness of wellheads, trees, completion tools, pressure-control equipment, handling tools and associated systems.' },
  { label: 'Fabrication QA/QC', value: 'Material identification, WPS/PQR/WPQ verification, welding surveillance, dimensional checks, coating and fabrication documentation.' },
  { label: 'NDT Coordination', value: 'Review/coordination of VT, PT, MT, UT and other approved NDT methods with qualified personnel and procedures.' },
  { label: 'FAT/SIT Witnessing', value: 'Test-procedure review, witnessing, punch-list management, test-record verification and release recommendation.' },
  { label: 'Expediting', value: 'Manufacturing progress monitoring, critical-path tracking, recovery actions and delivery-risk reporting.' },
  { label: 'NCR/CAR Management', value: 'Nonconformance identification, disposition tracking, corrective action, concession/deviation control and closure verification.' },
  { label: 'Load-out & Preservation', value: 'Packing, preservation, certification, lifting/transport readiness and shipment-release checks.' },
  { label: 'MDR / Final Documentation', value: 'Compilation/review of certificates, material traceability, inspection reports, test records, as-builts and manufacturing data records.' }
]

const qualityPlanningBullets = [
  'Project Quality Plan and inspection strategy.',
  'Inspection and Test Plans with hold, witness, review and surveillance points.',
  'Vendor/subcontractor qualification and audit support.',
  'Quality records, document control and traceability requirements.',
  'Quality KPIs, trend analysis and management reporting.'
]

const inspectionDisciplines = [
  'Mechanical and dimensional inspection.',
  'Welding and fabrication surveillance.',
  'Coating, painting and preservation inspection.',
  'Electrical/instrumentation inspection where required.',
  'Pressure and functional testing witness.',
  'Lifting equipment and certification verification.',
  'Materials receiving, storage and preservation audits.'
]

// ---- Engagement Models & Deliverables ----
const engagementModels = [
  { number: '01', title: 'Technical Consultancy', text: 'Defined engineering studies, reviews, calculations, programs, procedures or assurance activities.' },
  { number: '02', title: 'Embedded Resources', text: "Individual specialists integrated into the client's office or field organization." },
  { number: '03', title: 'Managed Technical Team', text: 'Multi-disciplinary Optima team managed under agreed deliverables and KPIs.' },
  { number: '04', title: 'Project Management Support', text: 'Dedicated PM/project-controls structure coordinating multiple work scopes and contractors.' },
  { number: '05', title: 'Inspection Call-Off', text: 'On-demand or resident inspection personnel deployed against inspection notifications.' },
  { number: '06', title: 'Integrated Wells Support', text: 'Combined well engineering, project management, manpower and QA/QC under a unified delivery model.' }
]

const typicalDeliverables = [
  'Basis of Design and well design reports.',
  'Drilling, completion, intervention, testing and abandonment programs.',
  'Engineering calculations and design-verification packages.',
  'Project Execution Plans, schedules, cost reports and risk registers.',
  'Technical scopes of work, bid evaluations and contractor clarifications.',
  'FAT/SIT procedures and readiness/assurance reports.',
  'Inspection reports, release notes and MDR reviews.',
  'Daily/weekly/monthly reports, KPI dashboards and End-of-Well/Project Reports.'
]
</script>

<template>
  <main>
    <section class="pt-16 pb-12">
      <div class="max-w-content mx-auto px-8">
        <span class="eyebrow">Service Portfolio</span>
        <h1 class="mt-[18px] text-[clamp(24px,5vw,58px)] max-w-[820px] reveal" v-reveal>Four service lines. One delivery model.</h1>
        <p class="mt-[22px] text-[15px] sm:text-[19px] text-ink-muted leading-[1.7] max-w-[640px] reveal" v-reveal>
          Select a service line below for its full scope of deliverables.
        </p>
      </div>
    </section>

    <section class="pb-20">
      <div class="max-w-content mx-auto px-8">
        <!-- Tab bar -->
        <div class="flex flex-wrap gap-2.5 mb-12 reveal" v-reveal>
          <button
            v-for="tab in tabs"
            :key="tab.key"
            type="button"
            class="py-3 px-[22px] rounded-full border text-[14.5px] font-semibold transition-colors"
            :class="activeTab === tab.key ? 'bg-navy border-navy text-white' : 'border-line-2 text-ink-muted'"
            @click="setTab(tab.key)"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Well Engineering -->
        <div v-show="activeTab === 'well'">
          <div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div>
              <span class="eyebrow">Well Engineering Services</span>
              <h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">Optima's flagship technical service</h3>
              <p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]">
                Supporting the complete well lifecycle for exploration, appraisal, development, injection, workover,
                intervention and abandonment wells in onshore, offshore and subsea environments.
              </p>
            </div>
            <div class="hidden lg:block">
              <PhotoBlock
                ar="16/10"
                label="Offshore drilling operations"
                src="https://images.unsplash.com/photo-1690508313456-bf8c851e8319?w=600&q=80&fit=crop"
              />
            </div>
          </div>
          <SectionsServicesWellEngineering />
        </div>

        <!-- Project Management -->
        <div v-show="activeTab === 'pm'">
          <div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div>
              <span class="eyebrow">Project Management Services</span>
              <h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">Structured delivery from initiation to close-out</h3>
              <p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]">
                Optima provides structured project-management support from project initiation through execution and
                close-out — aligning technical scope, people, suppliers, schedule, cost, quality and risk under a
                transparent governance model.
              </p>
            </div>
            <div class="hidden lg:block">
              <PhotoBlock
                ar="16/10"
                label="Project controls and planning"
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&q=80&fit=crop"
              />
            </div>
          </div>
          <SpecTable :rows="pmRows" />

          <div class="flex items-center gap-3 mt-[52px] mb-[22px]">
            <AppIcon name="refresh" size="w-5 h-5" class="text-blue" />
            <h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Project Delivery Framework</h4>
          </div>
          <PillRow :items="deliveryFramework" />

          <div class="flex items-center gap-3 mt-[52px] mb-[22px]">
            <AppIcon name="clipboard-list" size="w-5 h-5" class="text-blue" />
            <h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Typical Project Controls Deliverables</h4>
          </div>
          <BulletList grid :items="pmControlsDeliverables" />
        </div>

        <!-- Manpower Outsourcing -->
        <div v-show="activeTab === 'manpower'">
          <div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div>
              <span class="eyebrow">Manpower Outsourcing &amp; Technical Resources</span>
              <h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">A competency-assured workforce solution</h3>
              <p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]">
                Optima supplies qualified technical and project personnel on short-term, rotational, campaign or
                long-term assignments — designed as a competency-assured workforce solution rather than simple CV
                forwarding.
              </p>
            </div>
            <div class="hidden lg:block">
              <PhotoBlock
                ar="16/10"
                label="Competency-assured field personnel"
                src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?w=600&q=80&fit=crop"
              />
            </div>
          </div>

          <div class="flex items-center gap-3 mb-[22px]">
            <AppIcon name="network" size="w-5 h-5" class="text-blue" />
            <h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Personnel Categories</h4>
          </div>
          <SpecTable :rows="manpowerRows" />

          <div class="flex items-center gap-3 mt-[52px] mb-[22px]">
            <AppIcon name="user-check" size="w-5 h-5" class="text-blue" />
            <h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Recruitment and Competency Assurance</h4>
          </div>
          <BulletList grid :items="recruitmentBullets" />

          <div class="flex items-center gap-3 mt-[52px] mb-[22px]">
            <AppIcon name="calendar" size="w-5 h-5" class="text-blue" />
            <h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Workforce Management</h4>
          </div>
          <BulletList grid :items="workforceBullets" />
        </div>

        <!-- Inspection & QA/QC -->
        <div v-show="activeTab === 'inspection'">
          <div class="mb-10 pb-8 border-b border-line grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div>
              <span class="eyebrow">Inspection and QA/QC Services</span>
              <h3 class="text-[20px] sm:text-[30px] mt-2.5 mb-2.5">Verified conformance before it reaches the worksite</h3>
              <p class="text-ink-muted max-w-[660px] text-[13px] sm:text-[16.5px]">
                Optima's inspection and QA/QC services verify that materials, equipment, fabrication, testing and
                documentation conform to purchase-order, specification, code and project requirements before they reach
                the worksite.
              </p>
            </div>
            <div class="hidden lg:block">
              <PhotoBlock
                ar="16/10"
                label="Source inspection and vendor surveillance"
                src="https://images.unsplash.com/photo-1564182842834-681b7be6de4b?w=600&q=80&fit=crop"
              />
            </div>
          </div>
          <SpecTable :rows="inspectionRows" />

          <div class="flex items-center gap-3 mt-[52px] mb-[22px]">
            <AppIcon name="clipboard-list" size="w-5 h-5" class="text-blue" />
            <h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Quality Planning</h4>
          </div>
          <BulletList grid :items="qualityPlanningBullets" />

          <div class="flex items-center gap-3 mt-[52px] mb-[22px]">
            <AppIcon name="factory" size="w-5 h-5" class="text-blue" />
            <h4 class="text-[15px] sm:text-[15px] sm:text-[19px] font-bold font-sans text-navy dark:text-ink">Typical Inspection Disciplines</h4>
          </div>
          <BulletList grid :items="inspectionDisciplines" />
        </div>
      </div>
    </section>

    <!-- Engagement Models -->
    <section class="bg-paper-2 py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading
          class="reveal" v-reveal
          eyebrow="Engagement Models"
          title="Scoped to fit how you already work."
          description="From a single defined study to a fully integrated, multi-disciplinary delivery team under one accountable focal point."
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal" v-reveal>
          <IconCard
            v-for="m in engagementModels"
            :key="m.number"
            :number="m.number"
            :icon="''"
            :title="m.title"
            :text="m.text"
          />
        </div>

        <div class="mt-[72px]">
          <span class="eyebrow">Typical Deliverables</span>
          <h3 class="text-[26px] mt-[14px] mb-7">What clients receive.</h3>
          <BulletList grid :items="typicalDeliverables" />
        </div>
      </div>
    </section>
  </main>
</template>
