<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const open = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/company', label: 'Company' },
  { to: '/services', label: 'Services' },
  { to: '/assurance', label: 'Assurance' },
  { to: '/contact', label: 'Contact' }
]

function isActive(to: string) {
  return route.path === to
}

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header class="sticky top-0 z-[60] border-b border-line bg-paper">
    <div class="max-w-content mx-auto px-8 flex items-center justify-between h-[88px] gap-6">
      <NuxtLink to="/" class="flex items-center gap-3">
        <span class="bg-white border border-line rounded-xl py-2 px-3.5 flex items-center shadow-card">
          <img src="/logo.png" alt="Optima Global Energy Services Limited" class="h-7 w-auto" />
        </span>
      </NuxtLink>

      <nav
        class="flex items-center gap-1 transition-transform duration-300 max-[940px]:fixed max-[940px]:top-[88px] max-[940px]:right-0 max-[940px]:bottom-0 max-[940px]:left-0 max-[940px]:z-[59] max-[940px]:bg-paper max-[940px]:flex-col max-[940px]:items-stretch max-[940px]:py-3.5 max-[940px]:px-8 max-[940px]:pb-8 max-[940px]:gap-0 max-[940px]:overflow-y-auto"
        :class="open ? 'max-[940px]:translate-x-0' : 'max-[940px]:translate-x-full'"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[15px] font-medium py-2.5 px-4 rounded-full transition-colors max-[940px]:py-[18px] max-[940px]:px-1.5 max-[940px]:border-b max-[940px]:border-line max-[940px]:rounded-none max-[940px]:text-[17px]"
          :class="isActive(link.to) ? 'text-navy dark:text-ink bg-blue-soft font-semibold' : 'text-ink-muted hover:text-navy dark:hover:text-ink hover:bg-blue-soft'"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <AppButton to="/contact" variant="primary" class="hidden min-[940px]:inline-flex">Start a conversation</AppButton>
        <button
          class="min-[940px]:hidden p-2 text-ink"
          aria-label="Toggle menu"
          :aria-expanded="open"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" size="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>
