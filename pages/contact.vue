<script setup lang="ts">
import { ref } from 'vue'

// ── SEO ──────────────────────────────────────────────────────────────────────
useSeoMeta({
  title: 'Contact Us | Optima Global Energy Services',
  description:
    'Get in touch with Optima Global Energy Services Limited. Office: Plot 146, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria. Email: info@ogesenergy.com.',
  keywords:
    'contact Optima Global Energy Services, oil gas engineering Port Harcourt, energy services enquiry Nigeria, well engineering consultancy contact, Trans-Amadi Port Harcourt',
  ogTitle: 'Contact Optima Global Energy Services',
  ogDescription:
    "Tell us about your scope — a single study, embedded support, or a fully integrated delivery team — and we'll come back with how Optima can help.",
  ogImage: 'https://images.unsplash.com/photo-1620203853151-496c7228306c?w=1200&h=630&fit=crop&q=80',
  ogType: 'website',
  ogUrl: 'https://www.ogesenergy.com/contact',
  ogSiteName: 'Optima Global Energy Services Limited',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Optima Global Energy Services',
  twitterDescription: 'Reach out for well engineering, project management, manpower or inspection services across Nigeria and West Africa.',
  twitterImage: 'https://images.unsplash.com/photo-1620203853151-496c7228306c?w=1200&h=630&fit=crop&q=80',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.ogesenergy.com/contact' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Optima Global Energy Services',
        url: 'https://www.ogesenergy.com/contact',
        mainEntity: {
          '@type': 'Organization',
          name: 'Optima Global Energy Services Limited',
          email: 'info@ogesenergy.com',
          url: 'https://www.ogesenergy.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Plot 146, Trans-Amadi Industrial Layout',
            addressLocality: 'Port Harcourt',
            addressRegion: 'Rivers State',
            addressCountry: 'NG',
          },
        },
      }),
    },
  ],
})

const startCards = [
  { icon: 'book-open', title: 'A defined study', text: 'Technical consultancy — a review, calculation set or design package.' },
  { icon: 'users', title: 'People to embed', text: 'Individual specialists or a managed technical team.' },
  { icon: 'layers', title: 'Full delivery', text: 'Integrated wells support across engineering, PM, manpower and QA/QC.' }
]

const scopes = [
  'Well Engineering',
  'Project Management',
  'Manpower Outsourcing',
  'Inspection & QA/QC',
  'Integrated Wells Support',
  'Other / General Enquiry'
]

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  scope: '',
  message: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

async function submitForm() {
  status.value = 'loading'
  errorMessage.value = ''

  try {
    const res = await fetch('/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    const data = await res.json()

    if (!res.ok || data.error) {
      throw new Error(data.error || 'Something went wrong. Please try again.')
    }

    status.value = 'success'
    form.value = { name: '', company: '', email: '', phone: '', scope: '', message: '' }
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err.message || 'Failed to send. Please try again or email us directly.'
  }
}
</script>

<template>
  <main>
    <!-- Hero: contact info + form -->
    <section class="pt-16 pb-16">
      <div class="max-w-content mx-auto px-8 grid lg:grid-cols-2 gap-16">

        <!-- Left: contact details -->
        <div class="reveal" v-reveal>
          <span class="eyebrow">Contact</span>
          <h1 class="mt-[18px]">Let's talk about your next well or project.</h1>
          <p class="mt-[22px] text-[15px] sm:text-[19px] text-ink-muted leading-[1.7] max-w-[560px]">
            Tell us about the scope — a single study, embedded support, or a fully integrated delivery team — and
            we'll come back with how Optima can help.
          </p>
          <div class="mt-8 grid gap-[18px]">
            <IconFeature icon="map-pin" title="Office" text="Plot 146, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria." />
            <div class="flex gap-[18px]">
              <AppIcon name="mail" size="w-[30px] h-[30px]" class="text-blue shrink-0 mt-0.5" />
              <div>
                <h4 class="text-[17px] font-bold font-sans text-navy dark:text-ink mb-1.5">Email</h4>
                <p class="text-[15.5px] leading-[1.6]">
                  <a href="mailto:info@ogesenergy.com" class="text-blue hover:underline">info@ogesenergy.com</a>
                </p>
              </div>
            </div>
            <div class="flex gap-[18px]">
              <AppIcon name="globe" size="w-[30px] h-[30px]" class="text-blue shrink-0 mt-0.5" />
              <div>
                <h4 class="text-[17px] font-bold font-sans text-navy dark:text-ink mb-1.5">Website</h4>
                <p class="text-[15.5px] leading-[1.6]">
                  <a href="https://www.ogesenergy.com" target="_blank" rel="noopener" class="text-blue hover:underline">www.ogesenergy.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: contact form -->
        <div class="reveal" v-reveal>
          <!-- Success state -->
          <div v-if="status === 'success'" class="rounded-xl2 bg-paper-2 border border-line p-8 text-center">
            <AppIcon name="check-circle" size="w-12 h-12" class="text-blue mx-auto mb-4" />
            <h3 class="text-[22px] font-bold font-sans text-navy dark:text-ink mb-2">Message received</h3>
            <p class="text-ink-muted leading-[1.7]">
              Thank you for reaching out. A member of the Optima team will be in touch shortly.
            </p>
            <button
              type="button"
              class="mt-6 text-blue text-[14.5px] font-semibold hover:underline"
              @click="status = 'idle'"
            >
              Send another message
            </button>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="submitForm" class="grid gap-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-name">Full name <span class="text-[#E0765A]">*</span></label>
                <input
                  id="c-name"
                  v-model="form.name"
                  required
                  type="text"
                  placeholder="Jane Smith"
                  class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"
                />
              </div>
              <div>
                <label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-company">Company</label>
                <input
                  id="c-company"
                  v-model="form.company"
                  type="text"
                  placeholder="ACME Energy Ltd"
                  class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"
                />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-email">Email <span class="text-[#E0765A]">*</span></label>
                <input
                  id="c-email"
                  v-model="form.email"
                  required
                  type="email"
                  placeholder="jane@example.com"
                  class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"
                />
              </div>
              <div>
                <label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-phone">Phone</label>
                <input
                  id="c-phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors"
                />
              </div>
            </div>

            <div>
              <label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-scope">Scope of interest</label>
              <select
                id="c-scope"
                v-model="form.scope"
                class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink outline-none focus:border-blue transition-colors appearance-none"
              >
                <option value="">Select a service area…</option>
                <option v-for="s in scopes" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>

            <div>
              <label class="block text-[13.5px] font-semibold font-sans text-navy dark:text-ink mb-1.5" for="c-message">Message <span class="text-[#E0765A]">*</span></label>
              <textarea
                id="c-message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Describe the scope, timeline and any relevant context…"
                class="w-full rounded-lg border border-line bg-white dark:bg-navy-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none focus:border-blue transition-colors resize-none"
              />
            </div>

            <!-- Error banner -->
            <p v-if="status === 'error'" class="text-[14px] text-[#E0765A] font-medium">
              {{ errorMessage }}
            </p>

            <button
              type="submit"
              :disabled="status === 'loading'"
              class="inline-flex items-center gap-2 self-start rounded-full bg-navy text-white font-semibold text-[14.5px] px-7 py-3.5 hover:bg-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span v-if="status === 'loading'">Sending…</span>
              <span v-else>Send message</span>
              <AppIcon v-if="status !== 'loading'" name="arrow-right" size="w-[14px] h-[14px]" />
            </button>
          </form>
        </div>

      </div>
    </section>

    <!-- Port Harcourt office photo -->
    <section class="py-16">
      <div class="max-w-content mx-auto px-8">
        <PhotoBlock
          ar="21/9"
          label="Industrial operations — Trans-Amadi, Port Harcourt"
          src="https://images.unsplash.com/photo-1620203853151-496c7228306c?w=1400&q=80&fit=crop"
        />
      </div>
    </section>

    <!-- Where to start -->
    <section class="bg-paper-2 py-[120px]">
      <div class="max-w-content mx-auto px-8">
        <SectionHeading class="reveal" v-reveal eyebrow="Where to start" title="Pick the engagement that fits." />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal" v-reveal>
          <IconCard v-for="c in startCards" :key="c.title" v-bind="c" />
        </div>
      </div>
    </section>

    <CtaBand
      title="Engineering Excellence. Reliable Energy Solutions."
      description="Integrated Engineering · Reliable Execution · Sustainable Energy Solutions"
    >
      <AppButton href="mailto:info@ogesenergy.com" variant="white">
        Email Optima <AppIcon name="arrow-right" size="w-[15px] h-[15px]" />
      </AppButton>
    </CtaBand>
  </main>
</template>
