import { personal, links } from '~/content/about'

/**
 * Injects JSON-LD schema.org Person + WebSite data for GEO / AI discoverability.
 */
export const useSeoPerson = () => {
  const site = useRuntimeConfig().public.siteUrl as string

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.fullName,
    givenName: personal.firstName,
    familyName: personal.lastName,
    email: personal.email,
    telephone: personal.phone,
    jobTitle: 'UX/UI Designer & Web Developer',
    url: site,
    image: `${site}/og-image.jpg`,
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
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Accademia di Belle Arti Santa Giulia Brescia',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Denani S.R.L.',
    },
    knowsAbout: [
      'UX Design',
      'UI Design',
      'Web Design',
      'Web Development',
      'Graphic Design',
      'Branding',
      'Front-End Development',
      'Back-End Development',
      'Vue.js',
      'Nuxt',
      'Next.js',
      'React',
      'TypeScript',
      'Cinema 4D',
      '3D Rendering',
      'Photography',
      'Drone Photography',
      'Odoo',
    ],
    knowsLanguage: ['it', 'en', 'fr', 'de'],
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
