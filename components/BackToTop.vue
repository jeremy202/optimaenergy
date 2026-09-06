<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

function onScroll() {
  show.value = window.scrollY > 700
}

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button
    class="fixed right-6 bottom-6 z-[70] w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center shadow-floating transition-all duration-200 hover:-translate-y-0.5"
    :class="show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    aria-label="Back to top"
    @click="toTop"
  >
    <AppIcon name="arrow-up" size="w-[19px] h-[19px]" />
  </button>
</template>
