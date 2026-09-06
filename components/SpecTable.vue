<script setup lang="ts">
withDefaults(
  defineProps<{
    rows: { label: string; value: string }[]
    headers?: [string, string]
  }>(),
  () => ({ headers: ['Service Area', 'Scope / Deliverables'] as [string, string] })
)
</script>

<template>
  <div class="overflow-x-auto border border-line rounded-2xl">
    <table class="w-full border-collapse min-w-[560px]">
      <thead>
        <tr>
          <th
            v-for="(h, i) in headers"
            :key="i"
            class="bg-navy text-white text-left font-sans text-[12.5px] tracking-[0.05em] uppercase font-semibold py-4 px-5"
          >
            {{ h }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i" class="hover:bg-paper-2">
          <td class="py-[18px] px-5 border-t border-line text-ink font-semibold w-[230px] align-top">{{ row.label }}</td>
          <td class="py-[18px] px-5 border-t border-line text-ink-muted text-[15px] align-top">{{ row.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
