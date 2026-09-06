<script setup lang="ts">
import { resolveComponent, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost' | 'outline' | 'amber' | 'white'
    to?: string | Record<string, unknown>
    href?: string
  }>(),
  { variant: 'primary' }
)

const NuxtLinkComp = resolveComponent('NuxtLink')

const tag = computed(() => (props.to ? NuxtLinkComp : props.href ? 'a' : 'button'))

const variantClass = computed(() => {
  switch (props.variant) {
    case 'ghost':
      return 'border border-white/40 text-white hover:border-white hover:bg-white/10'
    case 'outline':
      return 'border border-line-2 text-ink hover:border-blue hover:text-blue'
    case 'amber':
      return 'bg-amber text-white hover:bg-blue hover:-translate-y-px'
    case 'white':
      return 'bg-white text-navy hover:bg-blue-soft hover:-translate-y-px'
    case 'primary':
    default:
      return 'bg-navy text-white hover:bg-blue hover:-translate-y-px'
  }
})
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="inline-flex items-center gap-2.5 rounded-full px-[26px] py-[15px] font-sans text-[15px] font-semibold whitespace-nowrap transition-all duration-200 no-underline"
    :class="variantClass"
  >
    <slot />
  </component>
</template>
