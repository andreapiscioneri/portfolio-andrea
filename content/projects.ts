/**
 * Projects — dati reali provenienti dai repository di lavoro di Andrea Piscioneri,
 * dal CV e dai progetti accademici (Santa Giulia + LABA Brescia).
 *
 * I testi sono in Italiano (lingua master). Le traduzioni EN/ES/DE vivono nei
 * file i18n/locales/*.json e vengono risolte via $t('projects.<slug>.description').
 */

export interface ProjectImage {
  src: string
  alt: string
  w?: number
  h?: number
}

export interface Project {
  slug: string
  title: string
  client: string
  year: string
  category: string[]
  role: string[]
  stack: string[]
  cover: string
  gallery: ProjectImage[]
  url?: string
  excerpt: string // short (~20 words)
  description: string // full italian master copy
  highlights: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'cascina-paradiso',
    title: 'Cascina Paradiso',
    client: 'Cascina Paradiso — Alzano Lombardo (BG)',
    year: '2026',
    category: ['Web Design', 'Web Development', 'Brand Identity'],
    role: ['UX/UI Designer', 'Full-Stack Developer', 'Art Direction'],
    stack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'GSAP', 'Lenis', '@nuxt/image', 'i18n'],
    cover: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=1600&q=80', alt: 'Cascina Paradiso — tavoli' },
      { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80', alt: 'Cascina Paradiso — carne alla brace' },
      { src: 'https://images.unsplash.com/photo-1498579485796-98be3abc076e?auto=format&fit=crop&w=1600&q=80', alt: 'Cascina Paradiso — sala' },
    ],
    excerpt:
      'Sito immersivo per una storica trattoria bergamasca rinata dalla Cantina Cerea del 1972.',
    description:
      "Cascina Paradiso è una storica trattoria di Alzano Lombardo (BG), rinata dalla Cantina Cerea del 1972. Ho progettato e sviluppato un sito immersivo che racconta la cucina alla brace, i prodotti nostrani e la tradizione di famiglia. L'esperienza è costruita su Nuxt 3 con TypeScript, TailwindCSS, GSAP + Lenis per lo scroll smooth, split-type per i reveal tipografici, @nuxt/image per immagini performanti, i18n IT/EN e dark/light/system mode. L'art direction si ispira al calore del focolare e alla materia dei tavoli in legno, con tipografia serif elegante e animazioni parallax che accompagnano il racconto del locale.",
    highlights: [
      'Scroll experience immersiva con Lenis + GSAP ScrollTrigger',
      'Sistema tipografico editoriale con Instrument Serif + Inter',
      'Bilinguismo IT/EN gestito con @nuxtjs/i18n',
      'Dark / Light / System mode coerente su tutti i componenti',
      'SEO completo con JSON-LD schema.org Restaurant',
    ],
    featured: true,
  },
  {
    slug: 'denani',
    title: 'Denani — Artigiani del Digitale',
    client: 'Denani S.R.L. / Lombardia',
    year: '2024–2026',
    category: ['Web Design', 'Web Development', 'Brand System'],
    role: ['UX/UI Designer', 'Web Designer', 'Front-End Developer'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Video', 'Custom animations'],
    cover: '/images/projects/denani/cover.png',
    gallery: [
      { src: '/images/projects/denani/01.png', alt: 'Denani home' },
      { src: '/images/projects/denani/02.png', alt: 'Denani servizi' },
      { src: '/images/projects/denani/03.png', alt: 'Denani card' },
    ],
    url: 'https://denani.it',
    excerpt:
      'Sito corporate dell\'agenzia dove lavoro come UX/UI designer: artigiani del digitale.',
    description:
      "Denani S.R.L. è l'azienda in cui lavoro dal 2024 come UX/UI Designer & Web Designer. Il sito è la vetrina dell'agenzia — \"Artigiani del Digitale\" — e comunica l'approccio di design che unisce funzionalità ed estetica. Ho progettato e sviluppato interfacce intuitive e responsive, realizzato video di background per le sezioni hero, card di progetto interattive, e un sistema di comunicazione visiva coerente con gli obiettivi del brand. Parallelamente mi occupo del branding Denani: loghi, materiali promozionali, contenuti digitali per social e web.",
    highlights: [
      'Design system completo con sticky-logo e card interattive',
      'Video di background ottimizzati per il reparto Consulting',
      'Comunicazione del posizionamento "Artigiani del Digitale"',
      'Gestione end-to-end del brand Denani: web, social, stampa',
      'Coordinamento con team multidisciplinare e clienti',
    ],
    featured: true,
  },
  {
    slug: 'denani-landing',
    title: 'Denani — Web Management',
    client: 'Denani S.R.L.',
    year: '2026',
    category: ['Landing Page', 'UX/UI', 'Conversion Design'],
    role: ['UX/UI Designer', 'Web Designer'],
    stack: ['Figma Make', 'HTML5', 'CSS3', 'JavaScript'],
    cover: '/images/projects/denani-landing/cover.png',
    gallery: [
      { src: '/images/projects/denani-landing/01.png', alt: 'Denani Landing hero' },
      { src: '/images/projects/denani-landing/02.png', alt: 'Denani Landing CTA' },
    ],
    excerpt:
      'Landing page dedicata al servizio di manutenzione e web management Denani.',
    description:
      "Landing page conversion-oriented per il servizio di Web Management & Manutenzione Siti di Denani S.R.L. L'obiettivo è comunicare in modo chiaro il valore della manutenzione continua (sicurezza, aggiornamenti, performance) e convertire i visitatori in lead qualificati. Ho lavorato in Figma Make curando gerarchia visiva, microcopy e CTA. Il layout utilizza la palette Denani con micro-animazioni d'ingresso e scroll reveal per mantenere alta l'attenzione senza distrarre dal messaggio di business.",
    highlights: [
      'Architettura persuasiva: problema → soluzione → prova sociale → CTA',
      'Micro-interazioni su hover e ingresso delle card',
      'Copy pensato per il buyer persona PMI italiane',
      'Responsive mobile-first con breakpoint ottimizzati',
    ],
    featured: false,
  },
  {
    slug: 'rondi-trasporti',
    title: 'Rondi Trasporti — AI Website',
    client: 'Rondi Trasporti S.R.L.',
    year: '2026',
    category: ['Web Design', 'AI Tools', 'Logistics'],
    role: ['UX/UI Designer', 'Web Designer'],
    stack: ['Nuxt 3', 'Figma', 'AI generative tools'],
    cover: '/images/projects/rondi/cover.png',
    gallery: [
      { src: '/images/projects/rondi/home.png', alt: 'Rondi Home' },
      { src: '/images/projects/rondi/servizi.png', alt: 'Rondi Servizi' },
      { src: '/images/projects/rondi/gru-e-movimentazioni.png', alt: 'Rondi Gru e movimentazioni' },
      { src: '/images/projects/rondi/trasporto-eccezionale.png', alt: 'Rondi Trasporto eccezionale' },
      { src: '/images/projects/rondi/soluzioni-logistiche.png', alt: 'Rondi Soluzioni logistiche' },
      { src: '/images/projects/rondi/sostenibilita.png', alt: 'Rondi Sostenibilità' },
      { src: '/images/projects/rondi/preventivo.png', alt: 'Rondi Preventivo' },
      { src: '/images/projects/rondi/lavora-con-noi.png', alt: 'Rondi Lavora con noi' },
    ],
    excerpt:
      'Sito completo per azienda di trasporti, gru e logistica con pipeline AI per moodboard e copy.',
    description:
      "Rondi Trasporti è un'azienda specializzata in trasporto nazionale e internazionale, noleggio mezzi gruati, gru e movimentazioni, soluzioni logistiche e trasporti eccezionali. Ho progettato un ecosistema digitale completo di 15+ pagine: Home, Servizi, Trasporto Standard / Nazionale / Eccezionale, Gru e Movimentazioni, Noleggio Mezzi Gruati, Soluzioni Logistiche, Sostenibilità, Storia, Lavora con Noi, Preventivo, Account area, Cookie Policy, Privacy Policy, Trattamento Dati, Whistleblowing e Contatti. Il design bilancia l'identità industriale-pesante con un'estetica digitale moderna, usando tool AI per generare moodboard e varianti visual prima della fase di UI finale in Figma.",
    highlights: [
      '15+ pagine con architettura informativa ottimizzata',
      'Workflow integrato AI → moodboard → Figma → Nuxt',
      'Form preventivo con logica condizionale per tipologia trasporto',
      'Area sostenibilità: metriche CO₂ e flotta certificata',
      'Compliance: cookie, privacy, whistleblowing, trattamento dati',
    ],
    featured: true,
  },
  {
    slug: 'chioschetto',
    title: 'Il Chioschetto Calabrese',
    client: 'Il Chioschetto — Milano',
    year: '2026',
    category: ['Web Design', 'Food & Beverage', 'Local Business'],
    role: ['UX/UI Designer', 'Web Designer'],
    stack: ['Figma Make', 'HTML5', 'CSS3', 'JavaScript'],
    cover: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: '/images/projects/chioschetto/logo.jpg', alt: 'Chioschetto logo' },
      { src: '/images/projects/chioschetto/logo_chiochetto.png', alt: 'Chioschetto brand' },
      { src: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=80', alt: 'Cucina calabrese — \'nduja' },
      { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=80', alt: 'Ingredienti mediterranei' },
    ],
    excerpt:
      'Sito web per ristorante calabrese autentico a Milano: identità calda e menu immersivo.',
    description:
      "Il Chioschetto Calabrese è un ristorante calabrese autentico nel cuore di Milano. Ho progettato e sviluppato un sito che trasmette il calore del sud Italia: tipografia espressiva, palette di terracotta e oliva, fotografia food curata e un menu narrato come un viaggio nei sapori calabresi. L'esperienza punta a convertire le ricerche locali in prenotazioni grazie a un'architettura pulita, CTA ben posizionate e integrazione con Google Maps e TheFork.",
    highlights: [
      'Storytelling territoriale: dalla \'nduja al bergamotto',
      'Menu navigabile per categorie con fotografia originale',
      'Integrazione prenotazioni e recensioni locali',
      'SEO locale ottimizzato per "ristorante calabrese Milano"',
    ],
    featured: true,
  },
  {
    slug: 'cosmed-moodboard',
    title: 'Cosmed — Wellness Proposal',
    client: 'Cosmed (via Denani)',
    year: '2026',
    category: ['Moodboard', 'Pitch', 'Brand Strategy'],
    role: ['Art Director', 'UX/UI Designer'],
    stack: ['Figma Make', 'HTML5', 'CSS3'],
    cover: '/images/projects/cosmed/cover.jpg',
    gallery: [
      { src: '/images/projects/cosmed/performance-fisioterapia.jpg', alt: 'Cosmed Performance Fisioterapia' },
      { src: '/images/projects/cosmed/performance-vo2max.jpg', alt: 'Cosmed VO2 Max' },
      { src: '/images/projects/cosmed/performance-dataflow.jpg', alt: 'Cosmed Data Flow' },
      { src: '/images/projects/cosmed/wellness-longevity.jpg', alt: 'Cosmed Longevity' },
      { src: '/images/projects/cosmed/wellness-natura.jpg', alt: 'Cosmed Natura' },
      { src: '/images/projects/cosmed/wellness-cura.jpg', alt: 'Cosmed Cura di Sé' },
    ],
    excerpt:
      'Moodboard strategico per il pitch Cosmed: performance sportiva e wellness in un unico sistema visivo.',
    description:
      "Proposta di direzione visiva per Cosmed — leader mondiale in strumenti di misurazione VO₂ Max, metabolismo e capacità cardiopolmonare. Ho costruito due territori visivi paralleli: Performance (fisioterapia, data flow, test sportivi) e Wellness (cura di sé, natura, longevity). La proposta include palette, tipografia, trattamento fotografico, mock di sezioni chiave e un primo esempio di interaction design. Il moodboard ha guidato le scelte della squadra creativa e del cliente verso un'identità che bilancia rigore scientifico e umanità.",
    highlights: [
      'Due territori paralleli: Performance e Wellness',
      'Linee guida fotografiche per la produzione contenuti',
      'Mockup di sezioni chiave: hero, prodotto, case study, team',
      'Consegna come mini-sito Figma Make navigabile',
    ],
    featured: true,
  },
  {
    slug: 'brennero-gru',
    title: 'Brennero Gru',
    client: 'Brennero Gru',
    year: '2026',
    category: ['Web Design', 'Industrial', 'Corporate'],
    role: ['UX/UI Designer', 'Web Developer'],
    stack: ['Nuxt 3', 'TypeScript', 'TailwindCSS'],
    cover: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: '/images/projects/brennero/favicon.png', alt: 'Brennero brand' },
      { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80', alt: 'Gru industriali in cantiere' },
      { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1600&q=80', alt: 'Cantiere e movimentazione' },
    ],
    excerpt:
      'Sito corporate per azienda di noleggio gru e sollevamenti al passo del Brennero.',
    description:
      "Brennero Gru è un'azienda specializzata nel noleggio di gru e nei servizi di sollevamento industriale lungo l'asse del Brennero. Ho progettato un sito corporate che comunica l'affidabilità operativa e la copertura geografica dell'azienda. L'architettura include flotta, servizi, certificazioni, contatti e area preventivi. Il look è tecnico-essenziale, con fotografia dei mezzi in cantiere, iconografia dedicata al sollevamento e micro-animazioni per le specifiche tecniche.",
    highlights: [
      'Architettura informativa centrata sui servizi industriali',
      'Schede gru con specifiche tecniche e portata',
      'Form preventivo georeferenziato',
      'Performance ottimizzata per connessioni da cantiere',
    ],
    featured: false,
  },
  {
    slug: 'b2b-fiordaliso',
    title: 'B2B Fiordaliso',
    client: 'Fiordaliso / RSC / Edizioni Scout',
    year: '2025',
    category: ['E-commerce B2B', 'Portal', 'UX/UI'],
    role: ['UX/UI Designer', 'Web Developer'],
    stack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Node.js', 'xlsx'],
    cover: '/images/projects/b2b-fiordaliso/cover.jpg',
    gallery: [
      { src: '/images/projects/b2b-fiordaliso/fiordaliso_1.jpg', alt: 'Fiordaliso hero' },
      { src: '/images/projects/b2b-fiordaliso/camicia-scout.png', alt: 'Camicia scout' },
      { src: '/images/projects/b2b-fiordaliso/tessuto-al-metro.jpg', alt: 'Tessuto al metro' },
      { src: '/images/projects/b2b-fiordaliso/un-kit-camicia.jpg', alt: 'Kit camicia' },
    ],
    excerpt:
      'Portale B2B per la cooperativa scout: catalogo tessuti, uniformi e kit con import Excel.',
    description:
      "Portale B2B realizzato per Fiordaliso, la cooperativa legata a RSC ed Edizioni Scout. Il sistema permette a negozi affiliati e gruppi scout di consultare il catalogo uniformi, tessuti al metro, kit camicia, accessori e distintivi, gestire ordini ricorrenti e scaricare listini. Ho disegnato l'intera UX del portale, l'area login, il filtraggio per categoria/taglia/colore, il carrello multi-sede e il modulo di import Excel per gli ordini massivi. Il design unisce l'immaginario scout (badge, nodi, campo) con un'interfaccia contemporanea e funzionale.",
    highlights: [
      'Catalogo multi-categoria: uniformi, tessuti, accessori',
      'Carrello multi-sede per gruppi con più reparti',
      'Import ordini da Excel con parser xlsx',
      'Area utente con storico ordini, fatture e listini PDF',
      'Integrazione brand con immaginario scout autentico',
    ],
    featured: true,
  },
  {
    slug: 'bizing',
    title: 'Bizing — Business Attitude',
    client: 'Bizing',
    year: '2026',
    category: ['Web Design', 'SaaS', 'Brand Identity'],
    role: ['UX/UI Designer', 'Front-End Developer'],
    stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    cover: '/images/projects/bizing/cover.png',
    gallery: [
      { src: '/images/projects/bizing/logo-horizontal.png', alt: 'Bizing logo orizzontale' },
      { src: '/images/projects/bizing/logo-stacked.png', alt: 'Bizing logo stacked' },
      { src: '/images/projects/bizing/card-hero.png', alt: 'Bizing card hero' },
      { src: '/images/projects/bizing/card-main.png', alt: 'Bizing card main' },
      { src: '/images/projects/bizing/background-city.png', alt: 'Bizing background city' },
    ],
    url: 'https://bizing.app',
    excerpt:
      'Piattaforma all-in-one per business card in metallo, eCard digitali, contatti e analytics di team.',
    description:
      "Bizing è la piattaforma all-in-one per l'identità business: biglietti da visita in metallo, eCard digitali, gestione contatti e analytics di team in un'unica dashboard. Ho progettato il sito marketing, il sistema di branding (logo orizzontale + stacked, card grafica), la landing hero con preview della card fisica/digitale e l'architettura di navigazione. L'estetica combina il rigore delle fintech con l'eleganza di prodotti tipo Apple Card: sfondo urbano desaturato, micro-movimenti 3D sulla card, typography stretta e tattile.",
    highlights: [
      'Sistema di logo: orizzontale + stacked + favicon',
      'Hero con card fisica in metallo + varianti colore',
      'Landing con sezioni: prodotto, per team, analytics, pricing',
      'Linguaggio visivo ibrido: fintech + luxury',
    ],
    featured: true,
  },
  {
    slug: 'behome',
    title: 'Behome Real Estate',
    client: 'Behome — Cinisello Balsamo',
    year: '2025',
    category: ['Real Estate', 'Web Platform', 'UX/UI'],
    role: ['UX/UI Designer', 'Web Developer'],
    stack: ['Odoo', 'Custom modules', 'Python', 'XML', 'JavaScript'],
    cover: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80', alt: 'Interior residenziale' },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', alt: 'Listing immobiliare' },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', alt: 'Villa moderna' },
    ],
    excerpt:
      'Piattaforma immobiliare Behome con ERP integrato: listing, appuntamenti, gestione agenzia.',
    description:
      "Behome è un'agenzia immobiliare con nuova apertura a Cinisello Balsamo. Il progetto abbraccia la presenza digitale e la parte gestionale interna: sito pubblico con listing immobili ricercabili, filtri avanzati (zona, prezzo, mq, stanze), schede immobile con galleria, tour virtuale e form di contatto. Lato back-office ho customizzato moduli Odoo per la gestione dell'agenzia: anagrafica clienti, appuntamenti, contratti, provvigioni agenti e fatturazione. L'identità visiva comunica un real estate accessibile e umano.",
    highlights: [
      'Listing immobiliare con filtri multi-parametro',
      'Schede immobile con tour virtuale e galleria ad alta risoluzione',
      'Back-office Odoo custom per agenzia e agenti',
      'Integrazione fatturazione elettronica italiana',
    ],
    featured: false,
  },
  {
    slug: 'vallihome',
    title: 'VallieHome',
    client: 'VallieHome',
    year: '2025',
    category: ['Real Estate', 'Web Platform', 'UX/UI'],
    role: ['UX/UI Designer', 'Web Developer'],
    stack: ['Odoo', 'Python', 'XML'],
    cover: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80', alt: 'Casa nelle valli' },
      { src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80', alt: 'Valli bergamasche' },
    ],
    excerpt:
      'Piattaforma immobiliare per le valli bergamasche con catalogo property e variant description.',
    description:
      "VallieHome è una piattaforma di servizi immobiliari dedicata alle valli bergamasche. Ho curato la personalizzazione di moduli Odoo (fra cui sale order line variant description) per permettere all'agenzia di gestire varianti di immobili, ristrutturazioni, finiture opzionali e pacchetti chiavi in mano. L'area pubblica punta a posizionarsi su ricerche locali e a raccontare il valore del territorio (natura, quiete, qualità della vita).",
    highlights: [
      'Gestione varianti prodotto immobiliare complesse',
      'Area pubblica con storytelling territoriale',
      'SEO locale per le valli bergamasche',
    ],
    featured: false,
  },
  {
    slug: 'stardust',
    title: 'Stardust',
    client: 'Stardust',
    year: '2025',
    category: ['Mobile App', 'Web', 'Design System'],
    role: ['UX/UI Designer', 'Mobile Developer'],
    stack: ['Tamagui', 'Solito', 'Next.js', 'Expo', 'React Native', 'TypeScript'],
    cover: '/images/projects/stardust/cover.png',
    gallery: [
      { src: '/images/projects/stardust/Logo_stardust.png', alt: 'Stardust logo' },
      { src: '/images/projects/stardust/stardust.png', alt: 'Stardust brand' },
      { src: '/images/projects/stardust/Icon.png', alt: 'Stardust icon set 1' },
      { src: '/images/projects/stardust/Icon-1.png', alt: 'Stardust icon set 2' },
      { src: '/images/projects/stardust/Icon-2.png', alt: 'Stardust icon set 3' },
      { src: '/images/projects/stardust/Icon-3.png', alt: 'Stardust icon set 4' },
      { src: '/images/projects/stardust/Icon-4.png', alt: 'Stardust icon set 5' },
      { src: '/images/projects/stardust/Icon-5.png', alt: 'Stardust icon set 6' },
      { src: '/images/projects/stardust/Icon-6.png', alt: 'Stardust icon set 7' },
    ],
    excerpt:
      'App mobile + web cross-platform con design system condiviso Tamagui e monorepo Expo.',
    description:
      "Stardust è un progetto cross-platform costruito come monorepo Tamagui + Solito + Next.js + Expo. Una singola codebase genera l'app mobile (iOS + Android) e il sito web con un design system condiviso. Ho curato il branding (logo + icon set a 7 varianti), l'architettura visiva dell'interfaccia, il sistema tipografico responsive e la definizione dei token di design (colore, spacing, radius, motion). Il risultato è un'esperienza coerente su ogni device e un design system scalabile per future feature.",
    highlights: [
      'Monorepo Tamagui + Solito cross-platform',
      'Design system condiviso iOS / Android / Web',
      'Icon set a 7 varianti coerenti',
      'Token-driven theming e motion guidelines',
    ],
    featured: true,
  },
  {
    slug: 'mycars',
    title: 'MyCars',
    client: 'MyCars',
    year: '2025',
    category: ['Web Design', 'Automotive'],
    role: ['UX/UI Designer', 'Web Developer'],
    stack: ['Nuxt 3', 'TypeScript', 'TailwindCSS'],
    cover: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1600&q=80', alt: 'Auto scheda' },
      { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80', alt: 'Auto interno' },
    ],
    excerpt:
      'Piattaforma automotive per la ricerca, la configurazione e l\'acquisto di auto.',
    description:
      "MyCars è una piattaforma automotive per la ricerca, la configurazione e l'acquisto di veicoli. Ho progettato l'intera UX: dalla home marketing al motore di ricerca con filtri avanzati (brand, modello, anno, km, prezzo), alla scheda auto con galleria, specifiche tecniche e CTA di contatto/test drive. L'estetica bilancia la precisione meccanica con una UI pulita e un motion design che valorizza il prodotto.",
    highlights: [
      'Motore di ricerca con filtri avanzati multi-parametro',
      'Scheda auto con galleria e specifiche tecniche',
      'Flow di richiesta test drive e finanziamento',
      'Performance ottimizzata per gallerie immagini pesanti',
    ],
    featured: false,
  },
  {
    slug: 'agrochem',
    title: 'Agrochem',
    client: 'Agrochem',
    year: '2024',
    category: ['Web App', 'Dashboard', 'Agritech'],
    role: ['UX/UI Designer', 'Front-End Developer'],
    stack: ['React', 'Minimal UI Kit', 'TypeScript'],
    cover: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1600&q=80', alt: 'Dashboard agritech' },
      { src: 'https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=1600&q=80', alt: 'Campo agricolo' },
    ],
    excerpt:
      'Dashboard agritech per la gestione di prodotti fitosanitari e trattamenti.',
    description:
      "Agrochem è una web app dedicata alla gestione di prodotti fitosanitari, trattamenti agronomici e tracciabilità dei lotti. Ho lavorato sull'interfaccia del pannello di controllo: tabelle dati, grafici di monitoraggio, schede prodotto con composizione chimica e sicurezza d'uso. L'obiettivo è rendere leggibili dati complessi agli agronomi e ai tecnici di campo, anche in condizioni di lavoro non ottimali (tablet sotto il sole, connessioni instabili).",
    highlights: [
      'Tabelle dati complesse ottimizzate per rapida lettura',
      'Grafici di monitoraggio lotti e trattamenti',
      'Modalità ad alto contrasto per uso outdoor',
      'Performance offline-first per aree rurali',
    ],
    featured: false,
  },
  {
    slug: 'lumyn',
    title: 'Lumyn — AI Chatbot per E-commerce',
    client: 'Tesi Magistrale — LABA Brescia',
    year: '2025',
    category: ['AI', 'E-commerce', 'UX Research', 'Thesis'],
    role: ['UX/UI Designer', 'Front-End Developer', 'Researcher'],
    stack: ['Vue.js', 'JavaScript', 'AI LLM', 'Figma'],
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80', alt: 'AI chatbot interface' },
      { src: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=80', alt: 'E-commerce UX' },
    ],
    excerpt:
      'Progetto di tesi magistrale: un AI chatbot conversazionale per e-commerce sviluppato in Vue.js.',
    description:
      "Lumyn è il mio progetto di tesi della Laurea Magistrale in Digital Design & Communication presso LABA Brescia (110/110 con Lode). Si tratta di un AI chatbot conversazionale pensato per e-commerce, capace di accompagnare l'utente nella scoperta prodotto, consigliare alternative e completare l'ordine in-chat. Ho curato la research UX (analisi competitor, test utente, architettura conversazionale), il design dell'interfaccia e lo sviluppo front-end in Vue.js, integrando un LLM per la parte conversazionale. Il risultato è un prodotto che umanizza l'esperienza d'acquisto online mantenendo l'efficienza di un bot.",
    highlights: [
      'Tesi Magistrale 110/110 con Lode — LABA Brescia',
      'UX research: competitor analysis, test utente, architettura conversazionale',
      'Front-end sviluppato in Vue.js',
      'Integrazione LLM per conversazione naturale',
      'Flow completo: scoperta prodotto → carrello → checkout in-chat',
    ],
    featured: true,
  },
  {
    slug: 'airpods-pro-2',
    title: 'AirPods Pro 2 — 3D Web Experience',
    client: 'Progetto accademico — LABA Brescia',
    year: '2024',
    category: ['3D', 'Web Design', 'Product Showcase'],
    role: ['3D Artist', 'Web Designer'],
    stack: ['Cinema 4D', 'Blender', 'Webflow', 'Adobe Creative Suite'],
    cover: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1600&q=80', alt: 'AirPods Pro rendering' },
      { src: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1600&q=80', alt: 'AirPods product shot' },
    ],
    excerpt:
      'Showcase web Apple-style: rendering 3D di AirPods Pro 2 integrato in Webflow con scroll animato.',
    description:
      "Progetto accademico realizzato durante la Laurea Magistrale LABA: uno showcase web in stile Apple per AirPods Pro 2. Ho realizzato il rendering 3D dei modelli in Cinema 4D / Blender, ottimizzato gli asset per il web e costruito l'esperienza in Webflow con scroll animato, parallasse e interazioni hover sulla sequenza prodotto. Il progetto consolida la mia capacità di unire 3D, motion design e web design in un'unica pipeline produttiva.",
    highlights: [
      'Modellazione e rendering 3D in Cinema 4D / Blender',
      'Pipeline di esportazione ottimizzata per il web',
      'Animazione scroll con Webflow interactions',
      'Replica fedele del linguaggio visivo Apple product pages',
    ],
    featured: false,
  },
  {
    slug: 'reteye',
    title: 'Reteye — Design per la cecità ai colori',
    client: 'Tesi triennale — Accademia Santa Giulia (Brescia)',
    year: '2023',
    category: ['Brand Identity', 'Accessibility', 'Social Design', 'Thesis'],
    role: ['Brand Designer', 'Researcher', 'Art Director'],
    stack: ['Adobe Creative Suite', 'Illustrator', 'InDesign', 'Photoshop'],
    cover: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?auto=format&fit=crop&w=1600&q=80', alt: 'Palette cromatica' },
      { src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80', alt: 'Brand identity' },
    ],
    excerpt:
      'Tesi triennale: azienda di design per la sensibilizzazione e l\'accessibilità ai colori per daltonici.',
    description:
      "Reteye è il progetto di tesi della mia Laurea triennale in Graphic Design presso l'Accademia di Belle Arti Santa Giulia di Brescia (110L/100). Ho fondato — come esercizio di branding progettuale completo — un'azienda di design dedicata alla sensibilizzazione sul tema della cecità ai colori e all'accessibilità cromatica. Il progetto include: brand identity completa (naming, logo, palette, tipografia, linee guida), sistema di comunicazione, pubblicazioni editoriali, campagne social, packaging prodotto e pagina prodotto web. Un lavoro che unisce rigore progettuale e impatto sociale.",
    highlights: [
      'Laurea triennale 110L/100 — Accademia Santa Giulia Brescia',
      'Progetto tra i migliori 50 in Europa all\'ICHEP',
      'Brand identity completa + sistema editoriale',
      'Campagne social per la sensibilizzazione',
      'Tesi con impatto sociale su accessibilità cromatica',
    ],
    featured: true,
  },
  {
    slug: 'cls-clsalus',
    title: 'CLS / CLSalus',
    client: 'CLS / CLSalus',
    year: '2025',
    category: ['ERP', 'Health', 'Custom Odoo'],
    role: ['UX/UI Designer', 'Odoo Developer'],
    stack: ['Odoo', 'Python', 'XML', 'JavaScript'],
    cover: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: '/images/projects/clsalus/logo1.png', alt: 'CLSalus logo' },
      { src: '/images/projects/clsalus/logo2.png', alt: 'CLSalus logo alt' },
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80', alt: 'Dashboard sanitaria' },
    ],
    excerpt:
      'Customizzazione Odoo per CLS e verticale sanitario CLSalus: contabilità italiana, fatturazione, gestione.',
    description:
      "CLS e CLSalus (verticale sanitario) sono due ecosistemi gestionali basati su Odoo. Ho curato la customizzazione dei moduli di contabilità italiana (l10n_it_account), imposta di bollo, fatturazione elettronica e interfacce di back-office. L'interfaccia utente è stata ridisegnata per semplificare l'onboarding e le operazioni quotidiane del personale amministrativo. Per CLSalus sono stati aggiunti moduli specifici per il settore sanitario: anagrafica pazienti, prestazioni, prescrizioni e tracciabilità.",
    highlights: [
      'Customizzazione moduli Odoo italiani (contabilità, bollo)',
      'Fatturazione elettronica integrata',
      'Verticale sanitario CLSalus: pazienti, prestazioni',
      'UI back-office ottimizzata per personale amministrativo',
    ],
    featured: false,
  },
  {
    slug: 'pcoach',
    title: 'Pcoach — Event Zoom Integration',
    client: 'Pcoach',
    year: '2024',
    category: ['Integration', 'Events', 'Odoo'],
    role: ['Backend Developer', 'Integration Designer'],
    stack: ['Odoo', 'Python', 'Zoom API'],
    cover: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1600&q=80', alt: 'Zoom meeting' },
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80', alt: 'Coaching' },
    ],
    excerpt:
      'Modulo Odoo che integra eventi e meeting Zoom: creazione automatica e sincronizzazione.',
    description:
      "Pcoach è un modulo Odoo sviluppato per integrare in modo trasparente i meeting Zoom con gli eventi Odoo. Ogni volta che un coach crea un nuovo evento nel gestionale, il modulo genera automaticamente un meeting Zoom, sincronizza le informazioni (titolo, data, descrizione), aggiorna il meeting in caso di modifiche e lo cancella alla rimozione dell'evento. Gestisce inoltre la sincronizzazione automatica delle registrazioni tra evento e meeting. Il risultato: i coach risparmiano tempo e non devono più passare tra tool diversi.",
    highlights: [
      'Creazione automatica meeting Zoom alla creazione evento',
      'Sincronizzazione bidirezionale dei dati evento ↔ Zoom',
      'Gestione registrazioni automatiche',
      'Toggle on/off per singolo evento',
    ],
    featured: false,
  },
  {
    slug: 'lembo',
    title: 'Lembo',
    client: 'Lembo',
    year: '2024',
    category: ['Custom Development', 'Odoo'],
    role: ['Developer'],
    stack: ['Odoo', 'Python'],
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80', alt: 'Dashboard ERP' },
    ],
    excerpt:
      'Modulo custom Odoo per il cliente Lembo.',
    description:
      "Modulo custom sviluppato per il cliente Lembo all'interno dell'ecosistema Odoo. Il lavoro include analisi dei processi aziendali, sviluppo Python dei componenti gestionali, integrazione con i moduli esistenti (vendite, acquisti, magazzino) e testing con gli utenti finali. Un esempio di come il design di un tool gestionale possa semplificare le operazioni quotidiane di una PMI italiana.",
    highlights: [
      'Analisi processi aziendali e mapping Odoo',
      'Sviluppo custom in Python',
      'Integrazione con vendite/acquisti/magazzino',
      'Training e handover al team cliente',
    ],
    featured: false,
  },
  {
    slug: 'tvbeat',
    title: 'TVBEAT — Food Delivery Graphics',
    client: 'TVBEAT.SRL — Gorle (BG)',
    year: '2021–2022',
    category: ['Graphic Design', 'Motion', 'Social'],
    role: ['Graphic Designer'],
    stack: ['Adobe Illustrator', 'Photoshop', 'After Effects', 'Premiere'],
    cover: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80', alt: 'Food delivery graphics' },
      { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80', alt: 'Food photography' },
    ],
    excerpt:
      'Grafiche, poster, biglietti e animazioni video per azienda di food delivery.',
    description:
      "In TVBEAT.SRL (Gorle, BG) ho lavorato come Graphic Designer tra il 2021 e il 2022. Mi sono dedicato alla creazione di grafiche, poster, biglietti e animazioni video per un'azienda di food delivery, collaborando con altre province italiane. Oltre alla produzione di contenuti visivi di alta qualità ho contribuito alla strategia aziendale creando storie e post coinvolgenti per i canali social, partecipando a riunioni interne con proposte innovative e incontrando clienti per comprenderne le esigenze. Un'esperienza che ha consolidato la mia autonomia nella gestione di un flusso continuo di progetti multi-touch.",
    highlights: [
      'Poster, biglietti, grafiche social, animazioni video',
      'Collaborazione inter-regionale con clienti in tutta Italia',
      'Proposte strategiche per il posizionamento social',
      'Gestione autonoma di un ampio ventaglio di deliverable',
    ],
    featured: false,
  },
  {
    slug: 'mbe-internship',
    title: 'Centro MBE — Stage Grafico',
    client: 'Centro MBE 0546 — Albino (BG)',
    year: '2017–2018',
    category: ['Graphic Design', 'Print', 'Foundations'],
    role: ['Graphic Intern'],
    stack: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    cover: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1600&q=80', alt: 'Lavori di stampa e grafica' },
      { src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80', alt: 'Logo design' },
    ],
    excerpt:
      'Primo stage grafico: loghi, menù, locandine, brochure, pieghevoli, timbri, fotomontaggi, siti web.',
    description:
      "Il mio primo ingresso nel mondo del design. In Centro MBE 0546 (Albino, BG) tra il 2017 e il 2018 ho affiancato un grafico esperto, gestendo una vasta gamma di commissioni: loghi, menù per ristoranti, locandine, manifesti, brochure, pieghevoli, timbri, inserzioni per vetrine, fotomontaggi e siti web. L'esperienza mi ha insegnato a gestire il rapporto con il cliente, a sviluppare flessibilità operativa e a raffinare abilità comunicative nonostante un iniziale carattere introverso. Una base solida da cui è partito tutto il mio percorso.",
    highlights: [
      'Loghi, menù, locandine, brochure, pieghevoli, timbri',
      'Fotomontaggi e primi siti web',
      'Gestione diretta del rapporto con i clienti',
      'Primo laboratorio di crescita professionale e personale',
    ],
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
