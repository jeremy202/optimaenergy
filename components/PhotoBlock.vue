<script setup lang="ts">
withDefaults(
  defineProps<{
    icon?: string
    label?: string
    ar?: string
    src?: string
  }>(),
  { icon: 'user-circle', ar: '4/5' }
)
</script>

<template>
  <div
    class="relative rounded-xl3 overflow-hidden flex items-center justify-center text-white/85"
    :style="{ aspectRatio: ar, background: src ? 'transparent' : 'linear-gradient(150deg, var(--navy) 0%, var(--blue) 130%)' }"
  >
    <!-- Real photo -->
    <img
      v-if="src"
      :src="src"
      :alt="label || ''"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Placeholder icon when no photo -->
    <AppIcon v-else :name="icon" size="w-[30%] max-w-[96px] aspect-square" class="opacity-90" />

    <!--
      Dark gradient overlay — only rendered when a photo AND a label are present.
      Covers the bottom ~60 % of the image so the label text is always legible.
    -->
    <div
      v-if="src && label"
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
    />

    <!-- Label / caption text — sits on top of the overlay -->
    <div
      v-if="label"
      class="absolute bottom-0 left-0 right-0 px-4 py-4 font-sans text-xs tracking-[0.07em] uppercase font-semibold"
      :class="src ? 'text-white' : 'text-white/75'"
    >
      {{ label }}
    </div>
  </div>
</template>
