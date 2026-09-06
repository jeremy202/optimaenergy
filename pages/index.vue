<script setup lang="ts">
const stats = [
  { value: "04", label: "Core service lines under one delivery model" },
  { value: "360°", label: "Well lifecycle, concept through abandonment" },
  { value: "3", label: "Environments — onshore, offshore, subsea" },
  {
    value: "API·ISO·NORSOK",
    label: "Governing standards & technical assurance",
  },
];

const whatWeDo = [
  {
    icon: "drop",
    title: "Well Engineering",
    text: "Concept through P&A — drilling, completions, subsea, intervention and testing.",
    to: "/services?tab=well",
  },
  {
    icon: "briefcase",
    title: "Project Management",
    text: "Planning, cost control, contracting, interfaces, risk and close-out.",
    to: "/services?tab=pm",
  },
  {
    icon: "users",
    title: "Manpower Outsourcing",
    text: "Competency-assured technical and project-control personnel.",
    to: "/services?tab=manpower",
  },
  {
    icon: "search",
    title: "Inspection & QA/QC",
    text: "Vendor surveillance, source inspection, NDT coordination, FAT/SIT.",
    to: "/services?tab=inspection",
  },
];

// Service showcase images — captions appear ON the photos, so gradient overlays are applied inline
const servicePhotos = [
  {
    src: "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?w=700&q=80&fit=crop",
    alt: "Offshore oil rig in the open ocean",
    service: "Well Engineering",
    caption: "Offshore & subsea operations",
  },
  {
    src: "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?w=700&q=80&fit=crop",
    alt: "Industrial worker performing quality inspection on metal",
    service: "Inspection & QA/QC",
    caption: "Verified conformance on every scope",
  },
  {
    src: "https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?w=700&q=80&fit=crop",
    alt: "Precision engineering components — gears and mechanical parts",
    service: "Project Management",
    caption: "Initiation through close-out",
  },
];

const whoWeServe = [
  { icon: "drop", label: "Oil & Gas Operators" },
  { icon: "layers", label: "Drilling Contractors" },
  { icon: "factory", label: "EPC Organizations" },
  { icon: "wrench", label: "Service Companies" },
  { icon: "anchor", label: "Marginal Field Developers" },
];

const valueBullets = [
  "End-to-end technical support from concept selection and Basis of Design through execution, close-out and lessons learned.",
  "Independent engineering and assurance focused on safe, technically sound and cost-effective solutions.",
  "Scalable project teams combining office engineering, field supervision and project controls.",
  "Quality and inspection systems that protect equipment integrity and readiness for operations.",
];

// WhyCards carry photos — images sit above text inside the card, no overlay needed
const whyCards = [
  {
    icon: "compass",
    title: "End-to-end technical support",
    text: "From concept selection and Basis of Design through execution, close-out and lessons learned.",
    src: "https://images.unsplash.com/photo-1578356058390-f58c575337a2?w=600&q=80&fit=crop",
  },
  {
    icon: "shield-check",
    title: "Independent engineering & assurance",
    text: "Focused on safe, technically sound and cost-effective solutions, aligned to client objectives.",
    src: "https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?w=600&q=80&fit=crop",
  },
  {
    icon: "users",
    title: "Scalable, competent teams",
    text: "Office engineering, field supervision and project controls combined under one accountable focal point.",
    src: "https://images.unsplash.com/photo-1735494032948-14ef288fc9d3?w=600&q=80&fit=crop",
  },
];

const partners = [
  { name: "OMASUP Energy", tag: "Service company" },
  { name: "SLB", tag: "Service Company" },
  { name: "Weatherford", tag: "Service Company" },
  { name: "Eni", tag: "Operator" },
  { name: "Baker Hughes", tag: "Service Company" },
];

// ── SEO ──────────────────────────────────────────────────────────────────────
useSeoMeta({
  title: "Well Engineering & Energy Project Management | Nigeria",
  description:
    "Optima Global Energy Services Limited delivers well engineering, project management, manpower outsourcing and inspection/QA-QC for oil and gas operators across Nigeria and West Africa.",
  keywords:
    "well engineering Nigeria, oil gas project management Port Harcourt, manpower outsourcing energy sector, QA QC inspection Nigeria, offshore engineering services, wells support West Africa, drilling contractor services Nigeria",
  ogTitle:
    "Optima Global Energy Services | Engineering Excellence. Reliable Energy Solutions.",
  ogDescription:
    "Integrated well engineering, project management, technical manpower and QA/QC for oil and gas operators in Nigeria and West Africa.",
  ogImage:
    "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1200&h=630&fit=crop&q=80",
  ogType: "website",
  ogUrl: "https://www.ogesenergy.com/",
  ogSiteName: "Optima Global Energy Services Limited",
  twitterCard: "summary_large_image",
  twitterTitle: "Optima Global Energy Services | Nigeria",
  twitterDescription:
    "Well engineering, project management, manpower & inspection for oil and gas operators across Nigeria and West Africa.",
  twitterImage:
    "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1200&h=630&fit=crop&q=80",
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
        description:
          "Integrated well engineering, project management, manpower outsourcing and inspection/QA-QC for oil and gas operators across Nigeria and West Africa.",
        url: "https://www.ogesenergy.com",
        logo: "https://www.ogesenergy.com/logo.png",
        image:
          "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=1200&h=630&fit=crop&q=80",
        email: "info@ogesenergy.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot 146, Trans-Amadi Industrial Layout",
          addressLocality: "Port Harcourt",
          addressRegion: "Rivers State",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 4.8156,
          longitude: 7.0498,
        },
        areaServed: [
          { "@type": "Country", name: "Nigeria" },
          { "@type": "Place", name: "West Africa" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Energy Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Well Engineering" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Project Management" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Manpower Outsourcing" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Inspection & QA/QC" },
            },
          ],
        },
        sameAs: ["https://www.ogesenergy.com"],
      }),
    },
  ],
});
</script>

<template>
  <main>
    <!-- ── Hero ───────────────────────────────────────────────────────────── -->
    <section class="bg-gradient-to-br from-navy to-navy-deep pt-16">
      <div
        class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center pb-[76px]"
      >
        <div class="reveal" v-reveal>
          <span class="eyebrow eyebrow-light"
            >Corporate Capability &amp; Services Proposal</span
          >
          <h1 class="text-white text-[clamp(22px,4.6vw,54px)] mt-[18px]">
            Engineering Excellence. Reliable Energy Solutions.
          </h1>
          <p
            class="mt-[22px] text-[15px] sm:text-[19px] text-[#B9C6DE] leading-[1.7] max-w-[640px]"
          >
            Optima Global Energy Services Limited supports oil and gas
            operators, drilling contractors, EPC organizations and service
            companies with disciplined engineering, competent people and
            integrated project controls — from concept selection to abandonment.
          </p>
          <div class="flex gap-4 flex-wrap mt-9">
            <AppButton to="/contact" variant="amber">
              Request a proposal
              <AppIcon name="arrow-right" size="w-[15px] h-[15px]" />
            </AppButton>
            <AppButton to="/services" variant="ghost"
              >Explore our services</AppButton
            >
          </div>
        </div>
        <div class="reveal" v-reveal>
          <HeroVisual />
        </div>
      </div>
    </section>

    <StatStrip :stats="stats" />

    <!-- ── What we do ──────────────────────────────────────────────────────── -->
    <section class="py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading
          class="reveal"
          v-reveal
          eyebrow="What we do"
          title="Four complementary service lines, one accountable team."
          description="Deployed independently, or integrated under a single project-management structure to reduce interfaces and strengthen accountability."
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal" v-reveal>
          <IconCard v-for="card in whatWeDo" :key="card.title" v-bind="card" />
        </div>

        <!--
          3-photo service showcase.
          Text IS on top of images here, so each photo needs a dark gradient overlay.
          Overlay: bg-gradient-to-t from-navy/85 via-navy/30 to-transparent
        -->
        <div class="mt-10 grid sm:grid-cols-3 gap-5 reveal" v-reveal>
          <div
            v-for="p in servicePhotos"
            :key="p.service"
            class="relative rounded-xl2 overflow-hidden aspect-[4/3] group cursor-default"
          >
            <img
              :src="p.src"
              :alt="p.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <!-- Dark overlay — text sits on top of this -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
            />
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <span
                class="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-amber"
                >{{ p.service }}</span
              >
              <p class="text-white text-[14px] font-medium mt-1">
                {{ p.caption }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 360° Well lifecycle — real 2-col image section (NOT a background) ─ -->
    <section class="bg-paper-2 py-[120px]">
      <div
        class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div class="reveal" v-reveal>
          <span class="eyebrow">360° Well Lifecycle</span>
          <h2 class="text-[clamp(18px,3.5vw,38px)] mt-4">
            From concept selection to abandonment — onshore, offshore and
            subsea.
          </h2>
          <p
            class="mt-5 text-ink-muted text-[14px] sm:text-[17px] leading-[1.7]"
          >
            Three environments. One accountable team. End-to-end technical
            support at every phase of the well lifecycle — from the initial
            Basis of Design through final abandonment documentation.
          </p>
          <AppButton to="/services" variant="primary" class="mt-8 inline-flex">
            Explore our services
            <AppIcon name="arrow-right" size="w-[14px] h-[14px]" />
          </AppButton>
        </div>
        <div class="reveal" v-reveal>
          <!-- Real visible image, not a background -->
          <PhotoBlock
            ar="16/10"
            label="Offshore drilling operations at sunset"
            src="https://images.unsplash.com/photo-1633829131104-e2134f75c6e5?w=900&q=80&fit=crop"
          />
        </div>
      </div>
    </section>

    <!-- ── Who we serve ────────────────────────────────────────────────────── -->
    <section class="py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading
          class="reveal"
          v-reveal
          eyebrow="Who we serve"
          title="Built for operators, contractors and service companies alike."
          description="One delivery model, scaled to the client and the scope of work."
        />
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[18px] reveal"
          v-reveal
        >
          <InfoTile
            v-for="tile in whoWeServe"
            :key="tile.label"
            v-bind="tile"
          />
        </div>
      </div>
    </section>

    <!-- ── Value proposition ───────────────────────────────────────────────── -->
    <section class="bg-paper-2 py-[120px]">
      <div
        class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div class="reveal" v-reveal>
          <span class="eyebrow">Our value proposition</span>
          <h2 class="text-[clamp(18px,3.5vw,36px)] mt-4">
            People and process, working the same plan.
          </h2>
          <BulletList class="mt-[26px]" :items="valueBullets" />
        </div>
        <div class="reveal" v-reveal>
          <PhotoBlock
            ar="1/1"
            label="On site, hands on the work"
            src="https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=900&q=80&fit=crop"
          />
        </div>
      </div>
    </section>

    <!-- ── Why clients choose Optima — cards with real photos at top ────────── -->
    <section class="py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading
          class="reveal"
          v-reveal
          eyebrow="Why clients choose Optima"
          title="A single, accountable partner across the well lifecycle."
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal" v-reveal>
          <WhyCard v-for="card in whyCards" :key="card.title" v-bind="card" />
        </div>
      </div>
    </section>

    <!-- ── Executive summary — quote with flanking photo ──────────────────── -->
    <section class="bg-navy py-24">
      <div class="max-w-content mx-auto px-8">
        <div class="grid lg:grid-cols-[320px_1fr] gap-14 items-center">
          <!-- Real visible photo — no text on this image, so no overlay -->
          <div class="hidden lg:block reveal" v-reveal>
            <PhotoBlock
              ar="3/4"
              label="Field operations — Niger Delta"
              src="https://images.unsplash.com/photo-1648369000096-109763c11e8e?w=600&q=80&fit=crop"
            />
          </div>
          <div class="reveal" v-reveal>
            <span
              class="font-serif text-5xl sm:text-7xl text-amber leading-none"
              >&ldquo;</span
            >
            <p
              class="font-serif text-[clamp(15px,2.4vw,22px)] leading-[1.6] text-white font-medium mt-2 max-w-[680px]"
            >
              Our delivery model combines disciplined engineering, competent
              personnel, robust quality assurance and integrated project
              controls — so clients execute safely, efficiently and predictably.
            </p>
            <p class="mt-5 font-sans text-sm text-[#7387A8]">
              Optima Global Energy Services Limited — Executive Summary
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Partners ────────────────────────────────────────────────────────── -->
    <section class="py-20">
      <div class="max-w-content mx-auto px-8">
        <div class="grid lg:grid-cols-2 gap-14 items-center mb-12">
          <div class="reveal" v-reveal>
            <span class="eyebrow">Operators, partners &amp; contractors</span>
            <h2 class="text-[clamp(18px,3.5vw,36px)] mt-4">
              Working alongside leading names in energy.
            </h2>
            <p class="mt-4 text-ink-muted leading-[1.7]">
              From national oil companies and international operators to
              drilling contractors and service companies — our delivery model is
              built to integrate with yours.
            </p>
          </div>
          <!-- Real visible photo -->
          <div class="reveal" v-reveal>
            <PhotoBlock
              ar="16/9"
              label="Partners in energy delivery"
              src="https://images.unsplash.com/photo-1759922378222-47ad736a174d?w=800&q=80&fit=crop"
            />
          </div>
        </div>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[18px] reveal"
          v-reveal
        >
          <PartnerBadge
            v-for="p in partners"
            :key="p.name"
            :name="p.name"
            :tag="p.tag"
          />
        </div>
      </div>
    </section>

    <CtaBand
      title="Let's scope your next well, project or inspection call-off."
      description="Integrated Engineering · Reliable Execution · Sustainable Energy Solutions"
    >
      <AppButton to="/contact" variant="white">
        Start a conversation
        <AppIcon name="arrow-right" size="w-[15px] h-[15px]" />
      </AppButton>
    </CtaBand>
  </main>
</template>
