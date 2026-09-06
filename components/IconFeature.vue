<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  text: string
}>()
</script>

<template>
  <div class="flex gap-[18px]">
    <AppIcon :name="icon" size="w-[30px] h-[30px]" class="text-blue shrink-0 mt-0.5" />
    <div>
      <h4 class="text-[17px] font-bold font-sans text-navy dark:text-ink mb-1.5">{{ title }}</h4>
      <p class="text-[15.5px] text-ink-muted leading-[1.6]">{{ text }}</p>
    </div>
  </div>
</template>
