import { personal, links } from '~/content/about'

export const useSeoPerson = () => {
  const site = useRuntimeConfig().public.siteUrl as string

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site}/#person`,
    name: personal.fullName,
    givenName: personal.firstName,
    familyName: personal.lastName,
    birthDate: personal.realBirthDate,
    nationality: 'Italian',
    description: "Andrea Piscioneri è un UX/UI Designer, Web Developer e Graphic Designer con base in Lombardia, Italia. Laureato con Lode in Graphic Design presso l'Accademia di Belle Arti Santa Giulia di Brescia e Laureato Magistrale con 110/110 con Lode in Digital Design & Communication presso LABA Brescia. Attualmente UX/UI Designer & Web Developer in Denani S.R.L.",
    email: personal.email,
    telephone: personal.phone,
    jobTitle: 'UX/UI Designer & Web Developer',
    url: site,
    image: {
      '@type': 'ImageObject',
      url: `${site}/profilo.PNG`,
      contentUrl: `${site}/profilo.PNG`,
      caption: 'Andrea Piscioneri — UX/UI Designer & Web Developer',
    },
    sameAs: [
      links.behance,
      links.instagramDesign,
      links.instagramPersonal,
      links.linkedin,
      links.facebook,
      links.website,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albino',
      addressRegion: 'Lombardia',
      postalCode: '24021',
      addressCountry: 'IT',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Libera Accademia di Belle Arti LABA Brescia',
        address: { '@type': 'PostalAddress', addressLocality: 'Brescia', addressCountry: 'IT' },
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Accademia di Belle Arti Santa Giulia Brescia',
        address: { '@type': 'PostalAddress', addressLocality: 'Brescia', addressCountry: 'IT' },
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Denani S.R.L.',
      address: { '@type': 'PostalAddress', addressRegion: 'Lombardia', addressCountry: 'IT' },
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'UX/UI Designer & Web Developer',
      occupationLocation: { '@type': 'Country', name: 'Italy' },
      description: 'Progettazione di interfacce digitali, esperienze utente, siti web, brand identity e sviluppo front-end con Vue.js, Nuxt e React.',
      skills: 'UX Design, UI Design, Web Design, Web Development, Figma, Vue.js, Nuxt, React, Next.js, TypeScript, Adobe Creative Suite, Brand Identity, Motion Graphics, Photography',
    },
    award: [
      "Laurea Magistrale 110/110 con Lode — Digital Design & Communication, LABA Brescia (2025)",
      "Laurea Triennale 110L/100 — Graphic Design, Accademia di Belle Arti Santa Giulia Brescia (2023)",
      "Progetto Reteye — tra i migliori 50 in Europa all'ICHEP, Bologna (2022)",
    ],
    knowsAbout: [
      'UX Design',
      'UI Design',
      'Web Design',
      'Web Development',
      'Graphic Design',
      'Brand Identity',
      'Visual Identity',
      'Logo Design',
      'Front-End Development',
      'Back-End Development',
      'Vue.js',
      'Nuxt.js',
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Adobe After Effects',
      'Cinema 4D',
      '3D Rendering',
      'Motion Graphics',
      'Photography',
      'Drone Photography',
      'Odoo',
      'App Development',
      'Design System',
      'Accessibility Design',
      'Editorial Design',
      'Matte Painting',
    ],
    knowsLanguage: [
      { '@type': 'Language', name: 'Italian', alternateName: 'it' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
      { '@type': 'Language', name: 'German', alternateName: 'de' },
    ],
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(personSchema),
        tagPosition: 'head',
      },
    ],
  })
}
