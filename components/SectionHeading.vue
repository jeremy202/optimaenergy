<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    light?: boolean
  }>(),
  { light: false }
)
</script>

<template>
  <div class="max-w-[640px] mb-14">
    <span class="eyebrow" :class="{ 'eyebrow-light': light }">{{ eyebrow }}</span>
    <h2 class="mt-4 text-[clamp(20px,3.6vw,44px)]" :class="light ? 'text-white' : ''">{{ title }}</h2>
    <p v-if="description" class="mt-[18px] text-[15px] sm:text-lg leading-[1.7]" :class="light ? 'text-[#B9C6DE]' : 'text-ink-muted'">
      {{ description }}
    </p>
  </div>
</template>
