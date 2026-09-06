<script setup lang="ts">
defineProps<{
  icon: string
  label: string
}>()
</script>

<template>
  <div
    class="bg-surface border border-line rounded-[18px] py-[30px] px-[18px] text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
  >
    <AppIcon :name="icon" size="w-[30px] h-[30px]" class="text-blue mx-auto mb-4" />
    <h4 class="font-sans text-[14.5px] font-bold text-navy dark:text-ink leading-[1.4]">{{ label }}</h4>
  </div>
</template>
