<script setup lang="ts">
withDefaults(
  defineProps<{
    items: string[]
    grid?: boolean
    dense?: boolean
  }>(),
  { grid: false, dense: false }
)
</script>

<template>
  <ul :class="grid ? 'grid sm:grid-cols-2 gap-x-8 gap-y-3.5' : 'grid gap-4'">
    <li
      v-for="(item, i) in items"
      :key="i"
      class="relative text-ink-muted leading-[1.65]"
      :class="dense ? 'pl-6 text-[15.5px]' : 'pl-[26px] text-base'"
    >
      <span class="absolute left-0 bg-amber h-[1.5px]" :class="dense ? 'top-[9px] w-3' : 'top-[10px] w-3.5'"></span>
      {{ item }}
    </li>
  </ul>
</template>
