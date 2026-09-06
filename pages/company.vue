<script setup lang="ts">
const coreValues = [
  { icon: 'shield-check', title: 'Safety & integrity', text: 'Non-negotiable, embedded in every plan.' },
  { icon: 'award', title: 'Technical excellence', text: 'Engineering judgement backed by process.' },
  { icon: 'clipboard-check', title: 'Accountability & transparency', text: 'Clear ownership, clear reporting.' },
  { icon: 'check-circle', title: 'Quality & reliability', text: 'Documented, traceable, repeatable.' },
  { icon: 'users', title: 'Collaboration & respect', text: 'One team with the client and contractors.' },
  { icon: 'refresh', title: 'Continuous improvement', text: 'Lessons learned, fed back into the plan.' }
]

const ourPeople = [
  {
    label: 'Wells & Operations',
    src: 'https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?w=600&q=80&fit=crop',
  },
  {
    label: 'Project Management',
    src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80&fit=crop',
  },
  {
    label: 'Quality & Inspection',
    src: 'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?w=600&q=80&fit=crop',
  },
  {
    label: 'HSE & Field Support',
    src: 'https://images.unsplash.com/photo-1681812508281-7589b75b2e46?w=600&q=80&fit=crop',
  },
]

const whyOptimaLeft = [
  'Focused technical organization built around wells, projects, people and quality.',
  "Vendor-neutral engineering and assurance aligned to the client's objectives.",
  'Ability to integrate office engineering with field execution support.',
  'Flexible engagement models: consultancy, embedded personnel, managed team, or integrated project support.'
]

const whyOptimaRight = [
  'Strong emphasis on readiness, interface management and contingency planning.',
  'Scalable access to specialist expertise while maintaining a single accountable focal point.',
  'Commitment to local-content development, mentoring and knowledge transfer.'
]

// ── SEO ──────────────────────────────────────────────────────────────────────
useSeoMeta({
  title: 'Company Profile | Optima Global Energy Services',
  description:
    'Learn about Optima Global Energy Services Limited — our vision, mission, core values and multi-disciplinary team delivering well engineering and project management from Port Harcourt, Nigeria.',
  keywords:
    'Optima Global Energy Services company, oil gas company Port Harcourt Nigeria, energy services company West Africa, well engineering firm Nigeria, drilling engineering company Rivers State',
  ogTitle: 'Company Profile | Optima Global Energy Services',
  ogDescription:
    'Built around wells, projects, people and quality. Discover our vision, mission, core values and the multi-disciplinary team behind every delivery.',
  ogImage: 'https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=1200&h=630&fit=crop&q=80',
  ogType: 'website',
  ogUrl: 'https://www.ogesenergy.com/company',
  ogSiteName: 'Optima Global Energy Services Limited',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Company Profile | Optima Global Energy Services',
  twitterDescription: 'Our vision, mission, core values and multi-disciplinary team — delivering wells engineering and project management across Nigeria.',
  twitterImage: 'https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=1200&h=630&fit=crop&q=80',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.ogesenergy.com/company' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Optima Global Energy Services Limited',
        url: 'https://www.ogesenergy.com/company',
        description:
          'Optima Global Energy Services Limited is a Port Harcourt-based engineering company providing well engineering, project management, manpower outsourcing and QA/QC services to the oil and gas sector.',
        mainEntity: {
          '@type': 'Organization',
          name: 'Optima Global Energy Services Limited',
          url: 'https://www.ogesenergy.com',
          foundingLocation: 'Port Harcourt, Nigeria',
          slogan: 'Engineering Excellence. Reliable Energy Solutions.',
        },
      }),
    },
  ],
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="pt-16 pb-16">
      <div class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="eyebrow">Company Profile</span>
          <h1 class="mt-[18px] text-[clamp(24px,5vw,58px)] max-w-[820px] reveal" v-reveal>Built around wells, projects, people and quality.</h1>
          <p class="mt-[22px] text-[15px] sm:text-[19px] text-ink-muted leading-[1.7] max-w-[560px] reveal" v-reveal>
            A trusted energy-services partner recognized for engineering excellence, dependable execution, quality
            and measurable client value across Nigeria and West Africa.
          </p>
        </div>
        <div class="reveal" v-reveal>
          <PhotoBlock
            ar="4/3"
            label="Our team — Port Harcourt"
            src="https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=900&q=80&fit=crop"
          />
        </div>
      </div>
    </section>

    <!-- Vision / Mission -->
    <section class="py-20">
      <div class="max-w-content mx-auto px-8 grid md:grid-cols-2 gap-16">
        <div class="reveal rounded-xl2 py-9 px-8 shadow-card bg-navy" v-reveal>
          <AppIcon name="target" size="w-[34px] h-[34px]" class="text-[#E7B98A]" />
          <h3 class="text-white text-[17px] sm:text-[22px] mt-[18px]">Vision</h3>
          <p class="text-white/[.82] mt-3 text-base leading-[1.7]">
            To be a trusted energy-services partner recognized for engineering excellence, dependable execution,
            quality and measurable client value.
          </p>
        </div>
        <div class="reveal rounded-xl2 py-9 px-8 shadow-card bg-blue" v-reveal>
          <AppIcon name="compass" size="w-[34px] h-[34px]" class="text-white" />
          <h3 class="text-white text-[17px] sm:text-[22px] mt-[18px]">Mission</h3>
          <p class="text-white/90 mt-3 text-base leading-[1.7]">
            To provide fit-for-purpose engineering, project management, technical manpower and quality-assurance
            solutions that improve safety, efficiency, reliability and project outcomes.
          </p>
        </div>
      </div>
    </section>

    <!-- Core values -->
    <section class="bg-paper-2 py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading class="reveal" v-reveal eyebrow="Core values" title="What guides how we work." />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal" v-reveal>
          <IconFeature v-for="v in coreValues" :key="v.title" v-bind="v" />
        </div>
      </div>
    </section>

    <!-- Our people -->
    <section class="py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading
          class="reveal" v-reveal
          eyebrow="Our people"
          title="A multi-disciplinary team, in the office and in the field."
          description="Wells and operations, subsea, project management, quality and inspection, HSE, supply chain and technical support — one accountable delivery model."
        />
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal" v-reveal>
          <PhotoBlock
            v-for="p in ourPeople"
            :key="p.label"
            ar="3/4"
            :label="p.label"
            :src="p.src"
          />
        </div>
      </div>
    </section>

    <!-- Why Optima -->
    <section class="bg-paper-2 py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading class="reveal" v-reveal eyebrow="Why Optima" title="What makes the delivery model different." />
        <div class="grid lg:grid-cols-[320px_1fr] gap-16 items-start reveal" v-reveal>
          <!-- Real visible photo — stands on its own, no text overlay needed -->
          <div class="hidden lg:block">
            <PhotoBlock
              ar="3/4"
              label="Integrated delivery — from concept to close-out"
              src="https://images.unsplash.com/photo-1648369000096-109763c11e8e?w=600&q=80&fit=crop"
            />
          </div>
          <div class="grid md:grid-cols-2 gap-12">
            <BulletList :items="whyOptimaLeft" />
            <BulletList :items="whyOptimaRight" />
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Meet the team behind the delivery model."
      description="Integrated Engineering · Reliable Execution · Sustainable Energy Solutions"
    >
      <AppButton to="/contact" variant="white">
        Get in touch <AppIcon name="arrow-right" size="w-[15px] h-[15px]" />
      </AppButton>
    </CtaBand>
  </main>
</template>
