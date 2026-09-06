<script setup lang="ts">
defineProps<{
  text: string
  attribution?: string
}>()
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-8 items-start sm:items-center bg-paper-2 rounded-xl3 p-8 sm:p-11">
    <span class="font-serif text-6xl text-amber leading-none shrink-0">&ldquo;</span>
    <div>
      <p class="font-serif text-[16px] sm:text-[22px] leading-[1.5] text-navy dark:text-ink font-medium">{{ text }}</p>
      <div v-if="attribution" class="mt-3.5 font-sans text-sm text-ink-muted">{{ attribution }}</div>
    </div>
  </div>
</template>
