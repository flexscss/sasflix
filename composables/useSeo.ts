import { useRuntimeConfig, useSeoMeta } from '#imports'

interface Meta {
  title: string
  description: string
  image?: string
}

export function useSeo(meta?: Meta) {
  const { public: { BASE_URL, META_TITLE, META_DESCRIPTION, META_IMAGE } } = useRuntimeConfig()
  return useSeoMeta({
    title: meta?.title ? `${META_TITLE} - ${meta.title}` : META_TITLE,
    ogTitle: meta?.title || META_TITLE,
    description: meta?.description || META_DESCRIPTION,
    ogDescription: meta?.description || META_DESCRIPTION,
    ogImage: meta?.image || `${BASE_URL}${META_IMAGE}`
  })
}
