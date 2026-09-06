<script setup lang="ts">
// ── SEO ──────────────────────────────────────────────────────────────────────
useSeoMeta({
  title: "Assurance & Governance | Safety, Quality & Technical Controls",
  description:
    "Optima embeds safety, quality and technical governance into every project — HAZID, HAZOP, SIMOPS, Management of Change, permit-to-work, NCR/CAR tracking and real-time digital performance dashboards.",
  keywords:
    "HSE assurance oil gas Nigeria, technical governance energy sector, HAZOP HAZID Nigeria, quality assurance QC drilling, management of change oil gas, permit to work offshore Nigeria, NPT analytics oil gas",
  ogTitle: "Assurance & Governance | Optima Global Energy Services",
  ogDescription:
    "Safety, quality and technical governance embedded — not bolted on. HAZID, HAZOP, SIMOPS, MoC, PTW and real-time project dashboards across every Optima project.",
  ogImage:
    "https://images.unsplash.com/photo-1578356058390-f58c575337a2?w=1200&h=630&fit=crop&q=80",
  ogType: "website",
  ogUrl: "https://www.ogesenergy.com/assurance",
  ogSiteName: "Optima Global Energy Services Limited",
  twitterCard: "summary_large_image",
  twitterTitle: "Assurance & Governance | Optima Global Energy Services",
  twitterDescription:
    "HSE and quality governance embedded in every project — HAZID, HAZOP, MoC, PTW, NCR tracking and live performance dashboards.",
  twitterImage:
    "https://images.unsplash.com/photo-1578356058390-f58c575337a2?w=1200&h=630&fit=crop&q=80",
});

useHead({
  link: [{ rel: "canonical", href: "https://www.ogesenergy.com/assurance" }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Assurance & Governance | Optima Global Energy Services",
        url: "https://www.ogesenergy.com/assurance",
        description:
          "How Optima embeds HSE, quality and technical governance into every project — from HAZID/HAZOP through permit-to-work, MoC, NCR tracking and digital dashboards.",
        keywords:
          "HSE assurance, HAZID, HAZOP, SIMOPS, Management of Change, permit-to-work, NPT analytics, quality assurance, oil and gas Nigeria",
      }),
    },
  ],
});

const features = [
  {
    icon: "shield-check",
    title: "Leadership & stop-work authority",
    text: "At every level of execution.",
  },
  {
    icon: "clipboard-list",
    title: "Task risk assessment",
    text: "JSA/JHA and toolbox-talk support.",
  },
  {
    icon: "alert-triangle",
    title: "HAZID, HAZOP & SIMOPS",
    text: "Structured operational risk reviews.",
  },
  {
    icon: "refresh",
    title: "Management of Change",
    text: "Formal review of deviations from the approved basis.",
  },
  {
    icon: "file-text",
    title: "Permit-to-work",
    text: "Client and site compliance on every assignment.",
  },
  {
    icon: "search",
    title: "Incident reporting",
    text: "Investigation and corrective actions.",
  },
  {
    icon: "check-circle",
    title: "Quality assurance audits",
    text: "NCR/CAR tracking and continual improvement.",
  },
  {
    icon: "shield",
    title: "Emergency preparedness",
    text: "Response and contingency planning.",
  },
  {
    icon: "database",
    title: "Digital reporting",
    text: "Dashboards keep assurance data visible in real time.",
  },
];

const standards = [
  "API",
  "ISO",
  "NORSOK",
  "ASME",
  "ASTM",
  "AWS",
  "National / Regulatory",
];

const gates = [
  "Basis of Design approval",
  "Independent / peer design review",
  "Program & procedure review",
  "Equipment & interface readiness",
  "Pre-mobilization / pre-spud assurance",
  "Management of Change approval",
];

const digitalBullets = [
  "Integrated engineering registers and controlled technical deliverables.",
  "Schedule, cost, risk and action dashboards.",
  "Daily operational reporting and automated KPI summaries.",
  "NPT analytics and root-cause trending.",
  "Equipment/personnel readiness dashboards.",
  "Lessons-learned databases and knowledge transfer.",
];

const nptBars = [35, 62, 24, 80, 44, 56, 30];
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="pt-16 pb-16">
      <div
        class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <span class="eyebrow">Assurance &amp; Governance</span>
          <h1
            class="mt-[18px] text-[clamp(24px,5vw,58px)] max-w-[820px] reveal"
            v-reveal
          >
            Safety, quality and technical governance, embedded — not bolted on.
          </h1>
          <p
            class="mt-[22px] text-[15px] sm:text-[19px] text-ink-muted leading-[1.7] max-w-[560px] reveal"
            v-reveal
          >
            Hazards are identified early, critical controls defined, readiness
            verified before work begins, and reporting kept transparent
            throughout execution.
          </p>
        </div>
        <div class="reveal" v-reveal>
          <PhotoBlock
            ar="4/3"
            label="Safety and quality embedded in every project"
            src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?w=900&q=80&fit=crop"
          />
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div
        class="max-w-content mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9 reveal"
        v-reveal
      >
        <IconFeature v-for="f in features" :key="f.title" v-bind="f" />
      </div>

      <!-- 3-photo visual row — real visible images, caption text sits below each photo (not on top) -->
      <div
        class="max-w-content mx-auto px-8 mt-14 grid sm:grid-cols-3 gap-6 reveal"
        v-reveal
      >
        <div>
          <div class="rounded-xl2 overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1681812508281-7589b75b2e46?w=600&q=80&fit=crop"
              alt="Worker in safety gear performing field operations"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p
            class="mt-3 text-[13.5px] font-semibold font-sans text-navy dark:text-ink"
          >
            HSE in Practice
          </p>
          <p class="text-[13px] text-ink-muted mt-0.5">
            Leadership and stop-work authority at every level.
          </p>
        </div>
        <div>
          <div class="rounded-xl2 overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1564182842834-681b7be6de4b?w=600&q=80&fit=crop"
              alt="Quality inspector measuring and verifying metal components"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p
            class="mt-3 text-[13.5px] font-semibold font-sans text-navy dark:text-ink"
          >
            Quality Assurance
          </p>
          <p class="text-[13px] text-ink-muted mt-0.5">
            NCR/CAR tracking and continual improvement.
          </p>
        </div>
        <div>
          <div class="rounded-xl2 overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=600&q=80&fit=crop"
              alt="Oil pump jack operating in an open field"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p
            class="mt-3 text-[13.5px] font-semibold font-sans text-navy dark:text-ink"
          >
            Operational Readiness
          </p>
          <p class="text-[13px] text-ink-muted mt-0.5">
            Hazards identified, controls defined before work begins.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-paper-2 py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading
          class="reveal"
          v-reveal
          eyebrow="Standards & Technical Governance"
          title="Executed against contract, client and recognized industry standards."
          description="Depending on scope, governing requirements may include the following bodies of standards — confirmed during project initiation rather than assumed."
        />
        <PillRow class="reveal" v-reveal :items="standards" surface />

        <div class="flex items-center gap-3 mt-14 mb-[22px]">
          <AppIcon name="book-open" size="w-5 h-5" class="text-blue" />
          <h4
            class="text-[15px] sm:text-[15px] font-bold font-sans text-navy dark:text-ink"
          >
            Technical Assurance Gates
          </h4>
        </div>
        <PillRow class="reveal" v-reveal :items="gates" />
      </div>
    </section>

    <section class="py-[120px]">
      <div class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16">
        <div class="reveal" v-reveal>
          <span class="eyebrow">Digital Engineering</span>
          <h2 class="text-[clamp(18px,3.5vw,36px)] mt-4">
            Performance made visible, at every level.
          </h2>
          <BulletList class="mt-6" :items="digitalBullets" />
        </div>

        <div
          class="reveal bg-surface border border-line rounded-xl2 shadow-card p-7"
          v-reveal
        >
          <div class="flex justify-between items-center mb-5">
            <span class="text-xs tracking-[0.06em] uppercase text-ink-soft"
              >Project Performance</span
            >
            <AppIcon
              name="monitor"
              size="w-[18px] h-[18px]"
              class="text-ink-soft"
            />
          </div>
          <div class="grid grid-cols-[1.3fr_1fr] gap-[18px]">
            <div class="border border-line rounded-2xl p-[18px]">
              <div class="text-xs text-ink-soft mb-3">NPT BY CAUSE (HRS)</div>
              <div class="flex items-end gap-2 h-[90px]">
                <i
                  v-for="(h, i) in nptBars"
                  :key="i"
                  class="flex-1 block rounded-t"
                  :style="{
                    height: h + '%',
                    background:
                      'linear-gradient(180deg,var(--blue),var(--navy))',
                  }"
                ></i>
              </div>
            </div>
            <div
              class="border border-line rounded-2xl p-[18px] flex flex-col justify-between gap-3.5"
            >
              <div>
                <div
                  class="font-serif text-[20px] sm:text-[28px] font-semibold text-navy dark:text-ink"
                >
                  96.4
                  <small
                    class="block font-sans text-xs font-normal text-ink-soft mt-1"
                    >Schedule adherence %</small
                  >
                </div>
              </div>
              <div>
                <div
                  class="font-serif text-[20px] sm:text-[28px] font-semibold text-amber"
                >
                  03
                  <small
                    class="block font-sans text-xs font-normal text-ink-soft mt-1"
                    >Open NCRs this period</small
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Assurance you can see, on every project."
      description="Ask us for a sample project-controls dashboard."
    >
      <AppButton to="/contact" variant="white">
        Get in touch <AppIcon name="arrow-right" size="w-[15px] h-[15px]" />
      </AppButton>
    </CtaBand>
  </main>
</template>
