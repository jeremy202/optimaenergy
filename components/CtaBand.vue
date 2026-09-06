<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="relative text-white py-[96px] overflow-hidden">
    <!-- Background photo -->
    <img
      src="https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?w=1600&q=80&fit=crop"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover object-center"
      loading="lazy"
    />
    <!-- Overlay: dark navy gradient so text is always legible -->
    <div class="absolute inset-0 bg-black/60" />
    <div class="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy-deep/85" />

    <div class="relative z-10 max-w-content mx-auto px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 flex-wrap">
      <div>
        <h2 class="text-white text-[clamp(19px,3.2vw,36px)] max-w-[560px]">{{ title }}</h2>
        <p v-if="description" class="mt-3 text-[#B9C6DE] text-[13px] sm:text-base">{{ description }}</p>
      </div>
      <div class="flex gap-4 flex-wrap">
        <slot />
      </div>
    </div>
  </div>
</template>
