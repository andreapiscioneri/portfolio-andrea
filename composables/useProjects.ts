import { projects, featuredProjects, type Project } from '~/content/projects'

export const useProjects = () => {
  const all = projects
  const featured = featuredProjects

  const getBySlug = (slug: string): Project | undefined => projects.find((p) => p.slug === slug)

  const getNextPrev = (slug: string) => {
    const idx = projects.findIndex((p) => p.slug === slug)
    if (idx === -1) return { next: undefined, prev: undefined }
    const next = projects[(idx + 1) % projects.length]
    const prev = projects[(idx - 1 + projects.length) % projects.length]
    return { next, prev }
  }

  const categories = Array.from(
    new Set(projects.flatMap((p) => p.category)),
  ).sort((a, b) => a.localeCompare(b))

  return { all, featured, getBySlug, getNextPrev, categories }
}
