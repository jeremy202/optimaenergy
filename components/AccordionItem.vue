<script setup lang="ts">
defineProps<{
  title: string
  number: string
  isOpen: boolean
}>()

defineEmits<{ (e: 'toggle'): void }>()
</script>

<template>
  <div class="border-b border-line first:border-t first:border-line">
    <button
      type="button"
      class="w-full flex items-center justify-between gap-4 py-6 px-1 text-left"
      @click="$emit('toggle')"
    >
      <span class="flex items-center gap-4">
        <span class="font-sans text-[12.5px] font-semibold text-blue border border-line rounded-full py-1 px-2.5">{{ number }}</span>
        <h4 class="text-[14px] sm:text-[17.5px] font-semibold font-sans text-ink">{{ title }}</h4>
      </span>
      <AppIcon
        name="chevron-down"
        size="w-[18px] h-[18px]"
        class="text-ink-soft shrink-0 transition-transform duration-200"
        :class="isOpen ? 'rotate-180 text-blue' : ''"
      />
    </button>
    <div class="overflow-hidden transition-[max-height] duration-300 ease-in-out" :style="{ maxHeight: isOpen ? '1400px' : '0px' }">
      <div class="pt-0.5 pb-[30px] pl-[54px] pr-1">
        <slot />
      </div>
    </div>
  </div>
</template>
