<script setup lang="ts">
defineProps<{
  name: string
  tag: string
}>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-[104px] border border-line rounded-2xl bg-surface px-4 py-3 text-center transition-all duration-200 hover:border-blue hover:-translate-y-0.5"
  >
    <span class="font-sans font-extrabold text-base text-navy dark:text-ink leading-[1.25]">{{ name }}</span>
    <small class="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.09em] text-ink-soft">{{ tag }}</small>
  </div>
</template>
