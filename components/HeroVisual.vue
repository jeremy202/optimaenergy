<!--
  Homepage hero right-column: real offshore rig photo with the brand-mark SVG overlay.
  .hero-visual CSS (main.css) handles aspect-ratio, border-radius, flex centering & padding.
-->
<template>
  <div class="hero-visual">
    <img
      src="https://images.unsplash.com/photo-1629540946404-ebe133e99f49?w=960&q=80&fit=crop"
      alt="Semi-submersible offshore drilling rig at harbour"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-navy/65 to-navy/70" />
    <svg
      class="relative z-10 w-full h-full"
      viewBox="0 0 220 260"
      fill="none"
      stroke="rgba(255,255,255,0.9)"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polygon points="110,14 168,230 52,230" stroke="rgba(255,255,255,0.55)" />
      <line x1="80" y1="230" x2="140" y2="230" stroke="rgba(255,255,255,0.55)" />
      <line x1="86" y1="180" x2="134" y2="180" stroke="rgba(255,255,255,0.35)" />
      <line x1="93" y1="130" x2="127" y2="130" stroke="rgba(255,255,255,0.35)" />
      <line x1="100" y1="80" x2="120" y2="80" stroke="rgba(255,255,255,0.35)" />
      <line x1="52" y1="230" x2="168" y2="230" stroke="rgba(255,255,255,0.7)" />
      <line x1="30" y1="244" x2="190" y2="244" stroke="rgba(255,255,255,0.7)" />
      <circle cx="110" cy="244" r="9" fill="#C97A2E" stroke="none" />
      <circle cx="110" cy="130" r="46" stroke="rgba(224,161,92,0.65)" stroke-dasharray="2 6" />
      <circle cx="110" cy="130" r="70" stroke="rgba(224,161,92,0.35)" stroke-dasharray="2 6" />
    </svg>
  </div>
</template>
