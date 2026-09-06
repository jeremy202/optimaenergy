
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AccordionItem: typeof import("../../components/AccordionItem.vue")['default']
  AppButton: typeof import("../../components/AppButton.vue")['default']
  AppFooter: typeof import("../../components/AppFooter.vue")['default']
  AppHeader: typeof import("../../components/AppHeader.vue")['default']
  AppIcon: typeof import("../../components/AppIcon.vue")['default']
  BackToTop: typeof import("../../components/BackToTop.vue")['default']
  BulletList: typeof import("../../components/BulletList.vue")['default']
  CtaBand: typeof import("../../components/CtaBand.vue")['default']
  HeroVisual: typeof import("../../components/HeroVisual.vue")['default']
  IconCard: typeof import("../../components/IconCard.vue")['default']
  IconFeature: typeof import("../../components/IconFeature.vue")['default']
  InfoTile: typeof import("../../components/InfoTile.vue")['default']
  PartnerBadge: typeof import("../../components/PartnerBadge.vue")['default']
  PhotoBlock: typeof import("../../components/PhotoBlock.vue")['default']
  PillRow: typeof import("../../components/PillRow.vue")['default']
  QuoteBlock: typeof import("../../components/QuoteBlock.vue")['default']
  SectionHeading: typeof import("../../components/SectionHeading.vue")['default']
  SpecTable: typeof import("../../components/SpecTable.vue")['default']
  StatStrip: typeof import("../../components/StatStrip.vue")['default']
  WhyCard: typeof import("../../components/WhyCard.vue")['default']
  SectionsServicesWellEngineering: typeof import("../../components/sections/ServicesWellEngineering.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAccordionItem: LazyComponent<typeof import("../../components/AccordionItem.vue")['default']>
  LazyAppButton: LazyComponent<typeof import("../../components/AppButton.vue")['default']>
  LazyAppFooter: LazyComponent<typeof import("../../components/AppFooter.vue")['default']>
  LazyAppHeader: LazyComponent<typeof import("../../components/AppHeader.vue")['default']>
  LazyAppIcon: LazyComponent<typeof import("../../components/AppIcon.vue")['default']>
  LazyBackToTop: LazyComponent<typeof import("../../components/BackToTop.vue")['default']>
  LazyBulletList: LazyComponent<typeof import("../../components/BulletList.vue")['default']>
  LazyCtaBand: LazyComponent<typeof import("../../components/CtaBand.vue")['default']>
  LazyHeroVisual: LazyComponent<typeof import("../../components/HeroVisual.vue")['default']>
  LazyIconCard: LazyComponent<typeof import("../../components/IconCard.vue")['default']>
  LazyIconFeature: LazyComponent<typeof import("../../components/IconFeature.vue")['default']>
  LazyInfoTile: LazyComponent<typeof import("../../components/InfoTile.vue")['default']>
  LazyPartnerBadge: LazyComponent<typeof import("../../components/PartnerBadge.vue")['default']>
  LazyPhotoBlock: LazyComponent<typeof import("../../components/PhotoBlock.vue")['default']>
  LazyPillRow: LazyComponent<typeof import("../../components/PillRow.vue")['default']>
  LazyQuoteBlock: LazyComponent<typeof import("../../components/QuoteBlock.vue")['default']>
  LazySectionHeading: LazyComponent<typeof import("../../components/SectionHeading.vue")['default']>
  LazySpecTable: LazyComponent<typeof import("../../components/SpecTable.vue")['default']>
  LazyStatStrip: LazyComponent<typeof import("../../components/StatStrip.vue")['default']>
  LazyWhyCard: LazyComponent<typeof import("../../components/WhyCard.vue")['default']>
  LazySectionsServicesWellEngineering: LazyComponent<typeof import("../../components/sections/ServicesWellEngineering.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
