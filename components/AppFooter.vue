<script setup lang="ts">
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())

const linkClass = 'text-[14.5px] text-[#C6D2E6] hover:text-white transition-colors'
const headClass = 'font-sans text-[12.5px] tracking-[0.08em] uppercase text-[#7387A8] mb-[18px] font-semibold'
</script>

<template>
  <footer class="bg-navy-deep text-[#C6D2E6] pt-10 sm:pt-20 pb-8">
    <div class="max-w-content mx-auto px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">
        <div>
          <span class="bg-white border border-line rounded-xl py-2 px-3.5 inline-flex items-center shadow-card">
            <img src="/logo.png" alt="Optima Global Energy Services Limited" class="h-7 w-auto" />
          </span>
          <p class="mt-[18px] text-[14.5px] text-[#93A3BF] leading-[1.7] max-w-[280px]">
            Engineering excellence. Reliable energy solutions. A single, accountable partner for well engineering, project
            management, manpower outsourcing and inspection across the energy sector.
          </p>
        </div>

        <div>
          <h5 :class="headClass">Services</h5>
          <ul class="grid gap-3">
            <li><NuxtLink to="/services?tab=well" :class="linkClass">Well Engineering</NuxtLink></li>
            <li><NuxtLink to="/services?tab=pm" :class="linkClass">Project Management</NuxtLink></li>
            <li><NuxtLink to="/services?tab=manpower" :class="linkClass">Manpower Outsourcing</NuxtLink></li>
            <li><NuxtLink to="/services?tab=inspection" :class="linkClass">Inspection &amp; QA/QC</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h5 :class="headClass">Company</h5>
          <ul class="grid gap-3">
            <li><NuxtLink to="/" :class="linkClass">Home</NuxtLink></li>
            <li><NuxtLink to="/company" :class="linkClass">Company</NuxtLink></li>
            <li><NuxtLink to="/assurance" :class="linkClass">Assurance</NuxtLink></li>
            <li><NuxtLink to="/contact" :class="linkClass">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h5 :class="headClass">Contact</h5>
          <ul class="grid gap-3">
            <li class="flex gap-2.5 items-start text-[14.5px] text-[#C6D2E6]">
              <AppIcon name="map-pin" size="w-4 h-4" class="text-amber shrink-0 mt-0.5" />
              <span>Plot 146, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria.</span>
            </li>
            <li class="flex gap-2.5 items-start text-[14.5px] text-[#C6D2E6]">
              <AppIcon name="mail" size="w-4 h-4" class="text-amber shrink-0 mt-0.5" />
              <a href="mailto:info@ogesenergy.com" class="hover:text-white transition-colors">info@ogesenergy.com</a>
            </li>
            <li class="flex gap-2.5 items-start text-[14.5px] text-[#C6D2E6]">
              <AppIcon name="globe" size="w-4 h-4" class="text-amber shrink-0 mt-0.5" />
              <a href="https://www.ogesenergy.com" target="_blank" rel="noopener" class="hover:text-white transition-colors">www.ogesenergy.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap justify-between items-center gap-3 pt-7 text-[13px] text-[#7387A8]">
        <p>&copy; {{ year }} Optima Global Energy Services Limited. Engineering Excellence. Reliable Energy Solutions.</p>
        <p>CORPORATE CAPABILITY &amp; SERVICES PROPOSAL</p>
      </div>
    </div>
  </footer>
</template>
