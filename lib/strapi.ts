import type { BlogPost, StrapiListResponse, StrapiSingleResponse } from '@/types'

const STRAPI_URL = process.env.STRAPI_URL ?? ''
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? ''
const COLLECTION = process.env.STRAPI_COLLECTION ?? 'articles'

function strapiHeaders() {
  const h: HeadersInit = { 'Content-Type': 'application/json' }
  if (STRAPI_TOKEN) h['Authorization'] = `Bearer ${STRAPI_TOKEN}`
  return h
}

async function fetchStrapi<T>(path: string): Promise<T | null> {
  if (!STRAPI_URL) return null
  try {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
      headers: strapiHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json() as Promise<T>
  } catch {
    return null
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const data = await fetchStrapi<StrapiListResponse<BlogPost>>(
    `/${COLLECTION}?populate[cover]=*&sort=publishedAt:desc&pagination[pageSize]=50`
  )
  return data?.data ?? []
}

export async function getLatestPosts(count = 3): Promise<BlogPost[]> {
  const data = await fetchStrapi<StrapiListResponse<BlogPost>>(
    `/${COLLECTION}?populate[cover]=*&sort=publishedAt:desc&pagination[pageSize]=${count}`
  )
  return data?.data ?? []
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchStrapi<StrapiListResponse<BlogPost>>(
    `/${COLLECTION}?filters[slug][$eq]=${slug}&populate[cover]=*`
  )
  return data?.data?.[0] ?? null
}

export async function getAllPostSlugs(): Promise<string[]> {
  const data = await fetchStrapi<StrapiListResponse<BlogPost>>(
    `/${COLLECTION}?fields[0]=slug&pagination[pageSize]=100`
  )
  return data?.data?.map((p) => p.attributes.slug) ?? []
}

export function strapiImageUrl(image: BlogPost['attributes']['cover']): string | null {
  const url = image?.data?.attributes?.url
  if (!url) return null
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
