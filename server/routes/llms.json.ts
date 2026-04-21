import { projects } from '~/content/projects'
import { personal, links } from '~/content/about'

type LlmProject = {
  slug: string
  title: string
  year: string
  excerpt: string
  category: string[]
  role: string[]
  stack: string[]
  url: string
}

export default defineEventHandler(() => {
  const SITE_URL =
    useRuntimeConfig().public.siteUrl ||
    'https://andreapiscioneri.com'
  const normalizedSiteUrl = String(SITE_URL).replace(/\/$/, '')
  const toProject = (slug: string): string => `${normalizedSiteUrl}/work/${slug}`

  const projectItems: LlmProject[] = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    year: project.year,
    excerpt: project.excerpt,
    category: project.category,
    role: project.role,
    stack: project.stack,
    url: toProject(project.slug),
  }))

  const response = {
    profile: {
      name: personal.fullName,
      jobTitle: personal.roles.join(', '),
      website: normalizedSiteUrl,
      location: personal.location,
      email: personal.email,
      phone: personal.phone,
      languages: ['it', 'en', 'es', 'de'],
      sameAs: [
        links.linkedin,
        links.behance,
        links.instagramDesign,
        links.instagramPersonal,
        links.facebook,
        links.website,
      ],
    },
    site: {
      name: 'Andrea Piscioneri Portfolio',
      description:
        'Portfolio multilingua con progetti di UX/UI design, sviluppo web, brand identity, graphic design, motion e fotografia.',
      url: normalizedSiteUrl,
      sections: [
        { name: 'Home', url: normalizedSiteUrl },
        { name: 'Work', url: `${normalizedSiteUrl}/work` },
        { name: 'About', url: `${normalizedSiteUrl}/about` },
        { name: 'Contact', url: `${normalizedSiteUrl}/contact` },
      ],
      legal: [
        { name: 'Privacy Policy', url: `${normalizedSiteUrl}/privacy` },
        { name: 'Cookie Policy', url: `${normalizedSiteUrl}/cookie` },
        { name: 'Data Processing', url: `${normalizedSiteUrl}/trattamento-dati` },
      ],
    },
    projects: {
      count: projectItems.length,
      items: projectItems,
    },
    machineReadable: {
      llms: `${normalizedSiteUrl}/llms.txt`,
      llmsFull: `${normalizedSiteUrl}/llms-full.txt`,
      humans: `${normalizedSiteUrl}/humans.txt`,
      sitemap: `${normalizedSiteUrl}/sitemap.xml`,
    },
    updatedAt: '2026-04-21',
  }

  return response
})
