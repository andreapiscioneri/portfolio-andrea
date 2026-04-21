import { computed } from 'vue'

export const useHeroProjectImage = () => {
  const { all, featured } = useProjects()

  const pool = computed(() => {
    const bySlug = new Map<string, (typeof all)[number]>()

    for (const project of featured) bySlug.set(project.slug, project)
    for (const project of all) bySlug.set(project.slug, project)

    return Array.from(bySlug.values())
  })

  const getHeroImage = (seed = 0) => computed(() => {
    if (!pool.value.length) return '/logo.png'

    const index = ((seed % pool.value.length) + pool.value.length) % pool.value.length

    return pool.value[index]!.cover
  })

  const getHeroImageBySlug = (slug: string, fallbackSeed = 0) => computed(() => {
    const bySlug = pool.value.find(project => project.slug === slug)
    if (bySlug) return bySlug.cover

    if (!pool.value.length) return '/logo.png'

    const index = ((fallbackSeed % pool.value.length) + pool.value.length) % pool.value.length
    return pool.value[index]!.cover
  })

  return { getHeroImage, getHeroImageBySlug }
}
