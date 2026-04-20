# Andrea Piscioneri — Portfolio

Portfolio personale ultra-moderno costruito con **Nuxt 3**, **TypeScript** e **TailwindCSS**.
Design Apple/Awwwards, animazioni GSAP + Lenis, multilingua IT · EN · ES · DE, SEO + GEO completi.

---

## Stack

- **Nuxt 3** (3.21+) · Vue 3 · TypeScript strict
- **TailwindCSS** con design tokens custom (ink/paper/accent, font display + serif)
- **@nuxt/image** · WebP + AVIF, responsive, screens da 320px a 1536px
- **@nuxtjs/i18n** v9 — IT default, EN/ES/DE con prefix routing, locale rilevato via cookie
- **@nuxtjs/color-mode** — system / light / dark
- **@nuxtjs/seo** — sitemap multilingua, robots, schema.org Person + CreativeWork JSON-LD
- **@vueuse/nuxt** · **Pinia**
- **GSAP 3.12** + ScrollTrigger sincronizzato con **@studio-freight/lenis** (smooth scroll)
- **split-type** per i text reveal animati

## Struttura

```
portfolio-andrea/
├─ app.vue                      # Root: loader, cursor, smooth scroll, NuxtLayout
├─ error.vue                    # Pagina di errore
├─ nuxt.config.ts               # Config completa: moduli, i18n, SEO, schema.org
├─ tailwind.config.ts           # Design tokens
├─ assets/css/main.css          # CSS globale, font, scrollbar, transizioni
├─ components/
│  ├─ AppLoader.vue             # Loader iniziale con clip-path reveal
│  ├─ AppCursor.vue             # Cursore custom con lerp smoothing
│  ├─ AppNavbar.vue             # Header con LocaleSwitcher + ThemeToggle
│  ├─ AppFooter.vue
│  ├─ SmoothScroll.vue          # Lenis init, esposto a window.__lenis
│  ├─ HeroSection.vue           # Hero della homepage
│  ├─ AnimatedText.vue          # SplitType + GSAP (yPercent reveal)
│  ├─ Reveal.vue                # IntersectionObserver wrapper
│  ├─ Marquee.vue               # Marquee infinito
│  ├─ ProjectCard.vue           # Card progetto con hover micro-interactions
│  ├─ LocaleSwitcher.vue        # Switch lingua
│  └─ ThemeToggle.vue           # Toggle dark/light
├─ composables/
│  ├─ useProjects.ts            # Wrapper su content/projects.ts
│  └─ useSeoPerson.ts           # Inietta JSON-LD Person su tutte le pagine
├─ content/
│  ├─ projects.ts               # 22 progetti completi (tutti i lavori del workspace + tesi CV)
│  └─ about.ts                  # CV completo: bio, esperienze, formazione, skill, lingue, link
├─ layouts/default.vue
├─ locales/                     # Traduzioni complete it/en/es/de (no placeholder)
├─ pages/
│  ├─ index.vue                 # Home: hero, marquee, featured, about inline, services, stats, CTA
│  ├─ about.vue                 # CV completo: bio, ruoli, esperienze, formazione, skill, link
│  ├─ contact.vue               # Form di contatto
│  └─ work/
│     ├─ index.vue              # Griglia di tutti i 22 progetti
│     └─ [slug].vue             # Detail page per progetto (con JSON-LD CreativeWork)
├─ plugins/gsap.client.ts       # Registra ScrollTrigger e lo connette a Lenis
└─ public/
   ├─ favicon.svg               # Monogramma AP
   ├─ humans.txt
   └─ images/projects/...       # Immagini dei progetti (con fallback Unsplash)
```

## Comandi

Richiede **Node ≥ 18.17** e **Yarn 1.22**.

```bash
yarn install      # installa le dipendenze
yarn dev          # dev server su http://localhost:3000
yarn build        # build di produzione (output in .output/)
yarn preview      # avvia il server di preview da .output/server/index.mjs
yarn generate     # static site generation
yarn typecheck    # vue-tsc
```

## Variabili d'ambiente

Vedi `.env.example`. L'unica necessaria in produzione è:

```
NUXT_PUBLIC_SITE_URL=https://andreapiscioneri.com
```

## SEO & GEO

- `robots.txt` generato automaticamente da `@nuxtjs/seo`, con regole esplicite per
  GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai (allow `/`).
- `sitemap_index.xml` con sitemap separati per ciascuna lingua (it/en/es/de).
- JSON-LD `Person` con identità completa (sameAs, indirizzo Albino BG, alumniOf
  LABA + Santa Giulia, worksFor Denani, knowsAbout, knowsLanguage).
- JSON-LD `CreativeWork` su ogni pagina progetto.
- `useSeoMeta` con title/description per tutte le pagine in tutte le lingue.

## Note

- `sharp` può fallire in alcuni ambienti (es. ARM64 Linux senza prebuilt). È una
  dipendenza opzionale di `@nuxt/image` — il build funziona comunque, le
  ottimizzazioni d'immagine vengono delegate al browser via `<NuxtImg>`.
- `nuxt-og-image` è disabilitato (`ogImage.enabled: false`) perché richiede
  `satori` e ha problemi con prerender in alcuni ambienti. Le `og:image` vanno
  impostate staticamente per pagina via `useSeoMeta` se necessarie.

---

© 2026 Andrea Piscioneri · MIT
