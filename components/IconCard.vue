<script setup lang="ts">
import { resolveComponent } from 'vue'

const props = defineProps<{
  icon: string
  title: string
  text: string
  to?: string | Record<string, unknown>
  number?: string
}>()

const NuxtLinkComp = resolveComponent('NuxtLink')
const tag = props.to ? NuxtLinkComp : 'div'
</script>

<template>
  <component
    :is="tag"
    :to="to"
    class="block bg-surface border border-line rounded-xl2 py-9 px-8 shadow-card no-underline transition-shadow"
    :class="to ? 'hover:shadow-lift' : ''"
  >
    <span v-if="number" class="text-xs font-bold text-blue">{{ number }}</span>
    <AppIcon v-else :name="icon" size="w-[30px] h-[30px]" class="text-blue" />
    <h4 class="mt-[18px] font-sans text-[17px] text-navy dark:text-ink">{{ title }}</h4>
    <p class="mt-2.5 text-[14.5px] text-ink-muted leading-[1.6]">{{ text }}</p>
  </component>
</template>
