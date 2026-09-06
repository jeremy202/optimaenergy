
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


export const AccordionItem: typeof import("../components/AccordionItem.vue")['default']
export const AppButton: typeof import("../components/AppButton.vue")['default']
export const AppFooter: typeof import("../components/AppFooter.vue")['default']
export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const AppIcon: typeof import("../components/AppIcon.vue")['default']
export const BackToTop: typeof import("../components/BackToTop.vue")['default']
export const BulletList: typeof import("../components/BulletList.vue")['default']
export const CtaBand: typeof import("../components/CtaBand.vue")['default']
export const HeroVisual: typeof import("../components/HeroVisual.vue")['default']
export const IconCard: typeof import("../components/IconCard.vue")['default']
export const IconFeature: typeof import("../components/IconFeature.vue")['default']
export const InfoTile: typeof import("../components/InfoTile.vue")['default']
export const PartnerBadge: typeof import("../components/PartnerBadge.vue")['default']
export const PhotoBlock: typeof import("../components/PhotoBlock.vue")['default']
export const PillRow: typeof import("../components/PillRow.vue")['default']
export const QuoteBlock: typeof import("../components/QuoteBlock.vue")['default']
export const SectionHeading: typeof import("../components/SectionHeading.vue")['default']
export const SpecTable: typeof import("../components/SpecTable.vue")['default']
export const StatStrip: typeof import("../components/StatStrip.vue")['default']
export const WhyCard: typeof import("../components/WhyCard.vue")['default']
export const SectionsServicesWellEngineering: typeof import("../components/sections/ServicesWellEngineering.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAccordionItem: LazyComponent<typeof import("../components/AccordionItem.vue")['default']>
export const LazyAppButton: LazyComponent<typeof import("../components/AppButton.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyAppIcon: LazyComponent<typeof import("../components/AppIcon.vue")['default']>
export const LazyBackToTop: LazyComponent<typeof import("../components/BackToTop.vue")['default']>
export const LazyBulletList: LazyComponent<typeof import("../components/BulletList.vue")['default']>
export const LazyCtaBand: LazyComponent<typeof import("../components/CtaBand.vue")['default']>
export const LazyHeroVisual: LazyComponent<typeof import("../components/HeroVisual.vue")['default']>
export const LazyIconCard: LazyComponent<typeof import("../components/IconCard.vue")['default']>
export const LazyIconFeature: LazyComponent<typeof import("../components/IconFeature.vue")['default']>
export const LazyInfoTile: LazyComponent<typeof import("../components/InfoTile.vue")['default']>
export const LazyPartnerBadge: LazyComponent<typeof import("../components/PartnerBadge.vue")['default']>
export const LazyPhotoBlock: LazyComponent<typeof import("../components/PhotoBlock.vue")['default']>
export const LazyPillRow: LazyComponent<typeof import("../components/PillRow.vue")['default']>
export const LazyQuoteBlock: LazyComponent<typeof import("../components/QuoteBlock.vue")['default']>
export const LazySectionHeading: LazyComponent<typeof import("../components/SectionHeading.vue")['default']>
export const LazySpecTable: LazyComponent<typeof import("../components/SpecTable.vue")['default']>
export const LazyStatStrip: LazyComponent<typeof import("../components/StatStrip.vue")['default']>
export const LazyWhyCard: LazyComponent<typeof import("../components/WhyCard.vue")['default']>
export const LazySectionsServicesWellEngineering: LazyComponent<typeof import("../components/sections/ServicesWellEngineering.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
