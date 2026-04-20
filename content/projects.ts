/**
 * Projects — provenienti dal portfolio apdesign.altervista.org di Andrea Piscioneri.
 * Lavori accademici (Accademia di Belle Arti di Brescia Santa Giulia) e personali.
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
  excerpt: string
  description: string
  highlights: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'citta-nel-deserto',
    title: 'La città nel deserto',
    client: 'Accademia di Belle Arti di Brescia Santa Giulia',
    year: '2022',
    category: ['Matte Painting', 'Digital Art', 'Compositing'],
    role: ['Digital Artist', 'Compositor'],
    stack: ['Adobe Photoshop', 'Compositing', 'Color Grading'],
    cover: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80', alt: 'Città nel deserto — compositing' },
      { src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1600&q=80', alt: 'Paesaggio desertico' },
      { src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=80', alt: 'Skyline urbano' },
    ],
    excerpt:
      'Compositing digitale che ricrea un paesaggio urbano immerso nel deserto, con correzione cromatica avanzata.',
    description:
      'Opera di matte painting realizzata per il corso di Photoshop II presso l\'Accademia di Belle Arti di Brescia Santa Giulia. Il progetto prevede la creazione di un paesaggio fantastico che unisce una città moderna con un ambiente desertico: le immagini provengono da fonti web e vengono fuse attraverso tecniche avanzate di compositing in Adobe Photoshop, con maschere di livello, correzione cromatica personalizzata e gestione della luce ambientale per garantire coerenza realistica.',
    highlights: [
      'Compositing multi-layer con maschere avanzate',
      'Color grading per coerenza cromatica tra elementi eterogenei',
      'Gestione della luce e delle ombre per integrazione realistica',
      'Utilizzo di fonti fotografiche miste con unificazione stilistica',
    ],
    featured: true,
  },
  {
    slug: 'naufragio',
    title: 'Naufragio',
    client: 'Accademia di Belle Arti di Brescia Santa Giulia',
    year: '2022',
    category: ['Matte Painting', 'Digital Art', 'Storytelling'],
    role: ['Digital Artist', 'Compositor'],
    stack: ['Adobe Photoshop', 'Compositing'],
    cover: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80', alt: 'Naufragio — oceano tempestoso' },
      { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80', alt: 'Relitto in mare' },
    ],
    excerpt:
      'Matte painting narrativo: una ragazza avventurosa affronta il naufragio della sua nave da crociera.',
    description:
      'Opera di matte painting con forte carica narrativa, realizzata per il corso di Photoshop II all\'Accademia di Belle Arti di Brescia Santa Giulia. L\'opera racconta la storia di una ragazza avventurosa che si trova ad affrontare il naufragio della sua nave da crociera. Il compositing unisce fotografie oceaniche, elementi architettonici della nave e figure umane in una scena drammatica, con gestione sapiente della luce naturale e degli effetti atmosferici.',
    highlights: [
      'Narrazione visiva con protagonista femminile in scena d\'azione',
      'Effetti atmosferici: pioggia, nebbia e luci drammatiche',
      'Integrazione di elementi architettonici con ambiente naturale',
      'Compositing da fotografie di paesaggio e archivio personale',
    ],
    featured: false,
  },
  {
    slug: 'isola-che-non-ce',
    title: "L'isola che non c'è",
    client: 'Accademia di Belle Arti di Brescia Santa Giulia',
    year: '2022',
    category: ['Matte Painting', 'Fantasy', 'Compositing'],
    role: ['Digital Artist', 'Compositor'],
    stack: ['Adobe Photoshop', 'Compositing', 'Digital Painting'],
    cover: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1600&q=80', alt: "L'isola che non c'è — isola fantastica" },
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80', alt: 'Paesaggio fantasy montagne' },
      { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80', alt: 'Natura lussureggiante' },
    ],
    excerpt:
      'Isola fantasy creata attraverso tecniche di compositing da immagini di riferimento reali.',
    description:
      'Opera ispirata al celebre concetto di "isola che non c\'è", realizzata per il corso di Photoshop II all\'Accademia di Belle Arti di Brescia Santa Giulia. Il progetto esplora la creazione di ambienti immaginari a partire da fotografie reali, componendo montagne, cascate, vegetazione tropicale e architetture in un\'isola sospesa tra realtà e fantasia. Le tecniche di blend e warping danno vita a un paesaggio che non appartiene a nessun luogo del mondo reale.',
    highlights: [
      'Creazione di ambiente fantasy da sole fotografie reali',
      'Blend avanzato tra biomi diversi (tropicale, montagna, acquatico)',
      'Uso del warping per plasmare forme naturali',
      'Paletta cromatica coerente in atmosfera sognante',
    ],
    featured: true,
  },
  {
    slug: 'samurai',
    title: 'Samurai',
    client: 'Accademia di Belle Arti di Brescia Santa Giulia',
    year: '2022',
    category: ['Matte Painting', 'Action', 'Narrative Art'],
    role: ['Digital Artist', 'Compositor'],
    stack: ['Adobe Photoshop', 'Compositing', 'Retouching'],
    cover: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=80', alt: 'Samurai — scena di vendetta' },
      { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80', alt: 'Paesaggio giapponese' },
    ],
    excerpt:
      'Matte painting action: un samurai che cerca vendetta per la morte dei compagni.',
    description:
      'Opera di matte painting ad alto impatto narrativo, realizzata per il corso di Photoshop II all\'Accademia di Belle Arti di Brescia Santa Giulia. La scena ritrae un samurai che intraprende un viaggio di vendetta in seguito alla morte dei suoi compagni. Il compositing fonde elementi fotografici di paesaggi giapponesi, figure in costume e ambientazioni storiche, con una palette cromatica drammatica dominata da toni caldi e contrastati.',
    highlights: [
      'Narrazione di vendetta con atmosfera cinematografica',
      'Compositing di figure umane in costume storico',
      'Palette drammatica con contrasti caldi/freddi',
      'Effetti luce e nebbia per profondità atmosferica',
    ],
    featured: false,
  },
  {
    slug: 'difesa-della-natura',
    title: 'Difesa della natura',
    client: 'Accademia di Belle Arti di Brescia Santa Giulia',
    year: '2022',
    category: ['Matte Painting', 'Environmentalism', 'Fantasy'],
    role: ['Digital Artist', 'Compositor'],
    stack: ['Adobe Photoshop', 'Compositing'],
    cover: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1600&q=80', alt: "Difesa della natura — aquila e guerriera" },
      { src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1600&q=80', alt: 'Natura selvaggia' },
    ],
    excerpt:
      'Una ragazza e la sua fedele aquila combattono insieme per difendere la natura.',
    description:
      'Opera di matte painting con messaggio ambientalista, realizzata per il corso di Photoshop II all\'Accademia di Belle Arti di Brescia Santa Giulia. La scena raffigura una giovane guerriera e la sua fedele aquila impegnate nella difesa della natura minacciata. Il compositing unisce fotografie di paesaggi naturali con figure animali e umane, creando una narrazione visiva che invita alla riflessione sulla salvaguardia dell\'ambiente.',
    highlights: [
      'Messaggio ambientalista con narrazione visiva',
      'Compositing figura umana + rapace in volo',
      'Palette naturale con verdi e ocra dominanti',
      'Profondità di campo simulata per focus narrativo',
    ],
    featured: true,
  },
  {
    slug: 'east-vs-west',
    title: 'East vs West Coast',
    client: 'Progetto accademico',
    year: '2022',
    category: ['Brochure Design', 'Editorial', 'Graphic Design'],
    role: ['Graphic Designer', 'Art Director'],
    stack: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80', alt: 'East vs West — hip-hop' },
      { src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80', alt: 'Musica hip-hop' },
    ],
    excerpt:
      'Brochure sulla rivalità tra East e West Coast hip-hop: Death Row vs Bad Boy Records.',
    description:
      'Progetto di brochure editoriale dedicato alla storica rivalità tra le scene hip-hop della East Coast e della West Coast americana, con al centro il conflitto tra Death Row Records e Bad Boy Records, e tra Tupac Shakur e The Notorious B.I.G. La brochure documenta la timeline degli eventi dagli anni \'90, l\'attentato del 1994 e i brani di diss più iconici. Il layout è fortemente connotato tipograficamente con riferimenti visivi alle due etichette discografiche.',
    highlights: [
      'Documentazione storica della rivalità East vs West Coast',
      'Timeline degli eventi dagli anni \'90 al 1997',
      'Impaginazione editoriale con forte identità tipografica',
      'Ricerca fotografica e iconografica sull\'hip-hop',
    ],
    featured: true,
  },
  {
    slug: 'first-things-first',
    title: 'First Things First',
    client: 'Progetto accademico',
    year: '2022',
    category: ['Brochure Design', 'Manifesto', 'Graphic Design'],
    role: ['Graphic Designer', 'Art Director'],
    stack: ['Adobe InDesign', 'Photoshop', 'Typography'],
    cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80', alt: 'First Things First — layout manifesto' },
      { src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80', alt: 'Tipografia editoriale' },
    ],
    excerpt:
      'Brochure-manifesto sulla deontologia del graphic designer: dal commercio all\'impatto sociale.',
    description:
      'Progetto di brochure dal formato manifesto dedicato all\'etica professionale dei designer. L\'opera critica l\'orientamento prevalente a dedicare il talento creativo alla pubblicità commerciale e alla promozione di prodotti non essenziali, invitando i designer a reindirizzare le proprie competenze verso sfide culturali, sociali e ambientali urgenti. Il progetto trae ispirazione da Bruno Munari ("Gli altri siamo noi") e Enzo Mari ("La forma è l\'essenza di un oggetto"), con un layout asciutto e fortemente tipografico.',
    highlights: [
      'Manifesto per l\'etica del design con riferimenti a Munari e Mari',
      'Layout tipografico minimalista e assertivo',
      'Critica alla deriva commerciale del graphic design',
      'Call to action per un design di impatto sociale',
    ],
    featured: true,
  },
  {
    slug: 'cookbook',
    title: 'Cookbook',
    client: 'Progetto personale',
    year: '2022',
    category: ['Book Design', 'Editorial', 'Graphic Design'],
    role: ['Graphic Designer', 'Editor'],
    stack: ['Adobe InDesign', 'Photoshop', 'Editorial Design'],
    cover: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=80', alt: 'Cookbook — impaginazione' },
      { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80', alt: 'Ricette e fotografia food' },
      { src: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1600&q=80', alt: 'Cucina e ingredienti' },
    ],
    excerpt:
      'Creazione e impaginazione di un libro di cucina personale che esplora il legame tra viaggio e gastronomia.',
    description:
      'Progetto di book design per un libro di cucina personale che esplora la connessione profonda tra viaggi, cucina ed esperienze culturali. Il progetto esamina come il cibo di culture diverse entri nella vita quotidiana e serva da ponte autentico per conoscere luoghi lontani. I contenuti si articolano in sezioni tematiche con storytelling narrativo, fotografia food curata, sezioni storiche sulla tradizione culinaria (Maestro Martino, Bartolomeo Scappi, François Vatel) e citazioni di grandi chef come Gordon Ramsay e Antonino Cannavacciuolo.',
    highlights: [
      'Book design con layout editoriale caldo e narrativo',
      'Fotografia food e culinaria integrata nel testo',
      'Sezione storica sulla tradizione gastronomica europea',
      'Citazioni e ritratti di chef iconici',
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
      { src: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?auto=format&fit=crop&w=1600&q=80', alt: 'Palette cromatica Reteye' },
      { src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80', alt: 'Brand identity Reteye' },
    ],
    url: 'https://reteye.altervista.org',
    excerpt:
      'Tesi triennale 110L/100: azienda di design per la sensibilizzazione sulla cecità ai colori.',
    description:
      "Reteye è il progetto di tesi della Laurea triennale in Graphic Design presso l'Accademia di Belle Arti Santa Giulia di Brescia (110L/100). Ho fondato — come esercizio di branding progettuale completo — un'azienda di design dedicata alla sensibilizzazione sul tema della cecità ai colori e all'accessibilità cromatica. Il progetto include: brand identity completa (naming, logo, palette, tipografia, linee guida), sistema di comunicazione, pubblicazioni editoriali, campagne social, packaging prodotto e pagina prodotto web. Un lavoro che unisce rigore progettuale e impatto sociale.",
    highlights: [
      'Laurea triennale 110L/100 — Accademia Santa Giulia Brescia',
      'Progetto tra i migliori 50 in Europa all\'ICHEP',
      'Brand identity completa + sistema editoriale',
      'Campagne social per la sensibilizzazione',
      'Tesi con impatto sociale su accessibilità cromatica',
    ],
    featured: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
