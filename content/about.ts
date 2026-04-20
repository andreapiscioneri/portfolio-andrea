/**
 * About — contenuti integrali estratti dal CV di Andrea Piscioneri.
 * Nessuna riduzione: ogni esperienza, ogni competenza, ogni titolo è preservato.
 * Le traduzioni vivono nei file i18n/locales/*.json.
 */

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  description: string // copia italiana integrale dal CV
}

export interface Education {
  title: string
  institution: string
  location: string
  period: string
  grade: string
  technical: string // copia italiana integrale dal CV
  professional: string // copia italiana integrale dal CV
  thesis?: string
  activities?: string[]
}

export const personal = {
  fullName: 'Andrea Piscioneri',
  firstName: 'Andrea',
  lastName: 'Piscioneri',
  birthDate: '1910-09-06', // placeholder ISO — 06/09/2000 → 2000-09-06
  realBirthDate: '2000-09-06',
  displayBirthDate: '06/09/2000',
  location: 'Albino (BG), Lombardia, Italia',
  city: 'Albino (BG)',
  region: 'Lombardia',
  country: 'Italia',
  phone: '+39 375 528 6241',
  phoneRaw: '+393755286241',
  email: 'andrypiscioneri@gmail.com',
  headline:
    'UX & UI Designer | Web Designer & Developer | Graphic Designer | Front & Back-End Developer | Photographer | Drone Pilot | Odoo Designer & Developer | App Developer',
  roles: [
    'UX & UI Designer',
    'Web Designer & Developer',
    'Graphic Designer',
    'Front & Back-End Developer',
    'Photographer',
    'Drone Pilot',
    'Odoo Designer & Developer',
    'App Developer',
  ],
  availableFor: ['UX/UI Design', 'Web Development', 'Brand Identity', 'Photography', 'Consulting'],
}

export const bio = {
  it: `Laureato con lode in Graphic Design presso l'Accademia di Belle Arti Santa Giulia di Brescia e successivamente Laureato Magistrale in "Digital Design & Communication" presso la Libera Accademia di Belle Arti LABA Brescia, al massimo dei voti.

Durante il mio percorso ho accumulato preziose esperienze grazie a stage e collaborazioni nel campo grafico, mettendo in evidenza impegno e motivazione sia in ambito accademico che professionale.

La mia formazione comprende una solida competenza pratica in settori come Web Design, fotografia e 3D Rendering, con padronanza di una vasta gamma di software, inclusa la Suite Adobe.

Inoltre, ho completato con successo un corso specifico in salute e sicurezza sul lavoro, dimostrando l'impegno nel garantire un ambiente professionale sicuro ed efficiente.

Sono convinto che la determinazione, la capacità di apprendimento rapido e il lavoro di squadra siano essenziali per affrontare le sfide future nel campo del design. Sono pronto a mettere le mie competenze al servizio di nuovi progetti.`,
}

export const experiences: Experience[] = [
  {
    role: 'UX/UI Designer & Web Designer',
    company: 'Denani S.R.L.',
    location: 'Lombardia',
    period: '2024 — attuale',
    description:
      "Attualmente lavoro in Denani S.R.L. come UX/UI designer e web designer, occupandomi della progettazione e sviluppo di esperienze digitali che uniscono funzionalità ed estetica. Il mio ruolo comprende la realizzazione di interfacce intuitive e responsive, la progettazione di siti web e l'ottimizzazione dell'esperienza utente, con particolare attenzione alla coerenza visiva e agli obiettivi di comunicazione dell'azienda e dei suoi clienti.\n\nParallelamente mi occupo anche di branding e grafica, sviluppando loghi, materiali promozionali e contenuti digitali per i canali social e web. L'esperienza in Denani mi ha permesso di consolidare le competenze nel design digitale a 360°, dall'ideazione creativa alla realizzazione tecnica, passando per il dialogo con clienti e team interni.\n\nQuesto percorso mi ha dato la possibilità di crescere professionalmente e di diventare un punto di riferimento per la comunicazione visiva e digitale dell'azienda, sviluppando versatilità e sicurezza nella gestione di progetti complessi e continuando a perfezionare le mie competenze in UX, UI e web design.",
  },
  {
    role: 'Graphic Designer',
    company: 'TVBEAT.SRL',
    location: 'Gorle (BG), Lombardia',
    period: '2021 — 2022',
    description:
      "In questo mio percorso, mi sono dedicato con impegno alla creazione di grafiche, poster, biglietti e animazioni video per un'azienda di food delivery.\n\nQuest'esperienza è stata cruciale per ampliare le mie competenze nel campo del design grafico, consentendomi di gestire autonomamente una vasta gamma di progetti, anche in collaborazione con altre province di altre regioni del territorio italiano. Oltre alla produzione di contenuti visivi di alta qualità, ho contribuito attivamente alla strategia aziendale attraverso la creazione di storie e post coinvolgenti per i vari canali social dell'azienda. La partecipazione a riunioni aziendali, sia interne con proposte innovative per il miglioramento dell'azienda, sia esterne con i clienti per comprendere e soddisfare le loro esigenze, ha ulteriormente arricchito la mia esperienza professionale.",
  },
  {
    role: 'Stagista Grafico',
    company: 'Centro MBE 0546',
    location: 'Albino (BG), Lombardia',
    period: '2017 — 2018',
    description:
      "Nel contesto lavorativo in cui mi sono inserito, ho affinato le mie competenze in diversi servizi offerti alla clientela, tra cui la realizzazione di grafiche e stampe, la vendita di articoli di cancelleria e il trasporto/spedizione di merci. Inizialmente affiancato da un esperto grafico, ho avuto l'opportunità di apprendere e migliorare le mie metodologie operative affrontando diverse commissioni lavorative. Durante questa esperienza, ho gestito una vasta gamma di progetti, inclusi loghi, menù per ristoranti, locandine, manifesti, brochure, pieghevoli, timbri, inserzioni per vetrine, fotomontaggi e siti web.\n\nNonostante le sfide iniziali dovute al mio carattere introverso, la gestione dei rapporti con i clienti mi ha aiutato a sviluppare una maggiore flessibilità e a raffinare le mie abilità comunicative. Questa esperienza è stata solo cruciale per la mia crescita tecnica, e ha anche contribuito in modo significativo al mio sviluppo personale.",
  },
]

export const educations: Education[] = [
  {
    title: 'Laurea Magistrale in "Digital Design & Communication"',
    institution: 'Libera Accademia di Belle Arti LABA',
    location: 'Brescia',
    period: '2023 — 2025',
    grade: '110/110 con Lode',
    technical:
      "Il percorso di studi in Digital Design and Communication mi ha permesso di sviluppare una visione integrata tra creatività e tecnologie digitali. Ho approfondito il web design avanzato, la modellazione e il rendering 3D, la motion graphics e la fotografia applicata alla comunicazione visiva, consolidando la capacità di progettare esperienze digitali complete ed efficaci.\n\nL'utilizzo di strumenti come Adobe Creative Suite, Webflow, Figma, Blender e Cinema4D, unito a linguaggi e framework come HTML, CSS, JavaScript e Vue.js, ha ampliato le mie competenze pratiche, consentendomi di affrontare progetti digitali complessi con approccio innovativo e multidisciplinare.",
    professional:
      "Durante il biennio ho lavorato a numerosi progetti accademici e professionali che hanno unito design, user experience e sviluppo web, tra cui il progetto di tesi Lumyn, un AI chatbot per l'e-commerce sviluppato in Vue.js, e il progetto AirPods Pro 2, dove ho unito rendering 3D e web design in Webflow.\n\nLa mia esperienza mi ha permesso di affinare competenze in UX/UI design, branding digitale, progettazione di interfacce responsive e comunicazione visiva interattiva, rafforzando allo stesso tempo la mia capacità di gestione di progetti complessi e di collaborazione all'interno di team multidisciplinari.",
    thesis: "Lumyn – AI Chatbot per l'E-commerce",
  },
  {
    title: 'Laurea in "Graphic Design"',
    institution: 'Accademia di Belle Arti Santa Giulia',
    location: 'Brescia',
    period: '2020 — 2023',
    grade: '110L/100 (110 con Lode)',
    technical:
      "L'esperienza formativa presso l'accademia di belle arti con indirizzo in grafica ha arricchito il mio bagaglio di competenze tecniche. Attraverso la pratica del design grafico avanzato, l'illustrazione digitale e la fotografia professionale, ho affinato la mia capacità di comunicare in modo efficace e coinvolgente. L'apprendimento del web design e dell'animazione mi ha permesso di esplorare nuovi orizzonti creativi, mentre la gestione dei progetti ha consolidato la mia capacità di pianificazione e organizzazione. Questa formazione mi ha preparato per una carriera appassionante e gratificante nel campo delle arti visive.",
    professional:
      "Le mie competenze professionali si sono sviluppate attraverso esperienze significative nel campo del design grafico. Ho avuto l'opportunità di vedere riconosciuto il mio talento attraverso la vincita e l'inserimento del mio progetto tra i migliori 50 in Europa al ICHEP, un risultato che ha rafforzato la mia determinazione e la mia capacità di affrontare sfide di alto livello. Con una solida base nell'illustrazione digitale e nel design grafico avanzato, ho dimostrato la capacità di creare materiali visivi accattivanti e comunicativi.\n\nLa mia esperienza nella grafica, nella fotografia e post produzione, nel web design, nell'animazione e nel UX e UI design mi ha permesso di ampliare il mio repertorio creativo, mentre la mia abilità nel branding e nella pubblicità ha contribuito a sviluppare strategie di comunicazione efficaci. La gestione di progetti complessi ha consolidato le mie capacità organizzative e decisionali, preparandomi per sfide professionali impegnative nel settore delle arti visive.",
    thesis:
      'Creazione dell\'azienda di design "Reteye" per la sensibilizzazione e l\'accessibilità ai colori per daltonici',
  },
  {
    title:
      'Diploma Professionale in Promozione Commerciale e Design per la Comunicazione Visiva Pubblicitaria',
    institution: 'Istituto ISIS Oscar Romero',
    location: 'Albino (BG), Lombardia',
    period: '2015 — 2020',
    grade: '87/100',
    technical:
      "Le mie competenze abbracciano conoscenze matematiche e una profonda comprensione delle strutture aziendali, insieme alla capacità di redigere bilanci e compilare fatture. Posso comunicare fluentemente in inglese, francese e tedesco. Inoltre, ho una vasta conoscenza dei programmi di grafica 3D, di programmazione e della suite Adobe.",
    professional:
      "Mi distinguo nella realizzazione di loghi, cataloghi, siti web, brochure, pieghevoli e manifesti di varie dimensioni e layout, concentrandomi principalmente nel settore grafico. Durante il mio percorso formativo e professionale, ho avuto il privilegio di partecipare a numerose attività che hanno lasciato un'impronta significativa nella mia crescita professionale.",
    activities: [
      "Project Work On The Road: collaborazione con On the Road Società Cooperativa Sociale, impegnata nella difesa dei diritti umani e civili, combattendo contro ogni forma di discriminazione. Ho visitato la sede a Cassano d'Adda (BG) per comprendere in dettaglio le loro iniziative, culminate in un convegno all'Università Cattolica di Milano sulle difficili condizioni affrontate dai giovani oggi.",
      "Open Night: presentazione all'Istituto Isis Oscar Romero dell'indirizzo professionale \"Promozione commerciale e design per la comunicazione visiva pubblicitaria\".",
      "Open Day: presentazione presso le scuole medie \"Gioele Solari\" di Albino (BG) dell'indirizzo professionale.",
      'Smart Future Academy: partecipazione al progetto rivolto agli studenti delle scuole superiori, mirato a guidarli nelle scelte post-studio attraverso esperienze con figure di eccellenza in imprenditoria, cultura, scienza e arte.',
      'Project Work Remo Ponti: collaborazione con lo scultore bergamasco Remo Ponti. Ho creato un logo rappresentativo della sua arte e realizzato una brochure e un catalogo online per trasmettere le emozioni legate alla creazione delle sue opere.',
      "Corso Sicurezza sul Lavoro: partecipazione a un corso di 12 ore presso l'Istituto Oscar Romero di Albino.",
    ],
  },
]

export const skills = {
  strengths: [
    'Determinazione',
    'Problem-solving',
    'Self-confidence',
    'Lavoro di squadra',
    'Leadership',
    'Creatività e originalità',
    'Versatilità e adattabilità',
    'Abilità di comunicazione',
  ],
  soft: [
    'Iniziativa',
    'Empatia',
    'Versatilità',
    'Gestione del tempo',
    'Organizzazione',
    'Energia',
    'Focus',
    'Professionalità',
  ],
  software: [
    { name: 'Suite Adobe', level: 95 },
    { name: 'Figma', level: 95 },
    { name: 'Cinema 4D', level: 70 },
    { name: 'Blender', level: 65 },
    { name: 'Webflow', level: 85 },
    { name: 'WordPress', level: 80 },
    { name: 'Visual Studio Code', level: 90 },
    { name: 'Office', level: 90 },
    { name: 'Xcode', level: 65 },
  ],
  development: [
    { name: 'Vue.js', level: 90 },
    { name: 'Nuxt', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Xcode', level: 65 },
    { name: 'Git', level: 85 },
    { name: 'HTML / CSS / JavaScript', level: 95 },
    { name: 'Python', level: 70 },
  ],
  languages: [
    { name: 'Italiano', level: 'Madrelingua' },
    { name: 'Inglese', level: 'B2' },
    { name: 'Francese', level: 'B2' },
    { name: 'Tedesco', level: 'A1' },
  ],
  drivingLicenses: ['AM', 'A1', 'A2', 'B'],
  certifications: [
    'Corso Sicurezza sul Lavoro — 12h presso Istituto Oscar Romero, Albino (BG)',
  ],
  additional:
    "Le mie abilità digitali e risolutive sono all'avanguardia, con padronanza dei programmi della Suite Adobe e conoscenze dei linguaggi informatici HTML, CSS, JavaScript, Python. Possiedo le patenti di guida (AM, A1, A2, B), e dimostro un pensiero analitico, creativo e capacità di problem-solving, accompagnati da un orientamento verso il raggiungimento degli obiettivi e un'attitudine positiva e proattiva al lavoro di squadra.",
  socialManagement: [
    '@vall_alta_b',
    '@polisportivavallalta',
  ],
}

export const links = {
  website: 'https://apdesign.altervista.org/',
  behance: 'https://www.behance.net/andreapiscioneri',
  instagramDesign: 'https://www.instagram.com/andrea.piscioneri_design/',
  instagramPersonal: 'https://www.instagram.com/andreapiscioneri/',
  linkedin: 'https://www.linkedin.com/in/andreapiscioneri',
  facebook: 'https://it-it.facebook.com/andreapiscioneri',
}
