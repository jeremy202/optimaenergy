import { useReveal } from '~/composables/useReveal'

export default defineNuxtPlugin((nuxtApp) => {
  const { observe } = useReveal()

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      observe(el)
    }
  })
})
