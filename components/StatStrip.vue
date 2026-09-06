<script setup lang="ts">
defineProps<{
  stats: { value: string; label: string }[];
}>();

function statClass(i: number, total: number) {
  const isLastDesktop = i === total - 1;
  const isLastMobileCol = i % 2 === 1;
  const isMobileSecondRow = i >= 2;
  return [
    !isLastMobileCol ? "border-r" : "border-r-0",
    !isLastDesktop ? "sm:border-r" : "sm:border-r-0",
    isMobileSecondRow ? "border-t" : "",
    "sm:border-t-0",
  ]
    .filter(Boolean)
    .join(" ");
}
</script>

<template>
  <div class="bg-surface border-y border-line">
    <div class="max-w-content mx-auto grid grid-cols-2 sm:grid-cols-4">
      <div
        v-for="(s, i) in stats"
        :key="i"
        class="py-9 px-7 border-line"
        :class="statClass(i, stats.length)"
      >
        <div
          class="font-serif text-[17px] sm:text-[15px] font-semibold text-navy dark:text-ink"
        >
          {{ s.value }}
        </div>
        <div class="mt-1.5 text-[11px] sm:text-sm text-ink-muted">
          {{ s.label }}
        </div>
      </div>
    </div>
  </div>
</template>
