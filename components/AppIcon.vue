<script setup lang="ts">
import { computed } from 'vue'
import { useIcons } from '~/composables/useIcons'

const props = withDefaults(
  defineProps<{
    name: string
    size?: string
  }>(),
  { size: 'w-5 h-5' }
)

const icons = useIcons()
const paths = computed(() => icons[props.name] || '')
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    class="icon block shrink-0"
    :class="size"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="paths"
  />
</template>
