<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  text: string
  src?: string
}>()
</script>

<template>
  <div class="bg-surface border border-line rounded-xl2 overflow-hidden shadow-card transition-shadow hover:shadow-lift">
    <!-- Photo at top of card — no text on the image, so no overlay needed -->
    <div v-if="src" class="relative aspect-[16/9] overflow-hidden">
      <img
        :src="src"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <!-- Content below the photo -->
    <div class="px-[30px] pb-[30px]" :class="src ? 'pt-7' : 'pt-[34px] pb-[34px]'">
      <span class="inline-flex items-center justify-center bg-navy text-white rounded-[11px] p-[11px]">
        <AppIcon :name="icon" size="w-[22px] h-[22px]" />
      </span>
      <h4 class="mt-[18px] font-sans text-[17.5px] font-bold text-navy dark:text-ink">{{ title }}</h4>
      <p class="mt-2.5 text-[15px] text-ink-muted leading-[1.65]">{{ text }}</p>
    </div>
  </div>
</template>
