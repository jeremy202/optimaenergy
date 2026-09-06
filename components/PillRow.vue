<script setup lang="ts">
withDefaults(
  defineProps<{
    items: string[]
    surface?: boolean
  }>(),
  { surface: false }
)
</script>

<template>
  <div class="flex flex-wrap gap-2.5">
    <span
      v-for="(item, i) in items"
      :key="i"
      class="text-[13px] font-semibold py-2.5 px-4 rounded-full border border-line-2 text-ink-muted whitespace-nowrap"
      :class="surface ? 'bg-surface' : ''"
    >
      {{ item }}
    </span>
  </div>
</template>
