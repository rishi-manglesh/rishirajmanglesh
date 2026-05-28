export interface StrapiImage {
  data: {
    attributes: {
      url: string
      alternativeText: string | null
      width: number
      height: number
    }
  } | null
}

export interface BlogPost {
  id: number
  attributes: {
    title: string
    slug: string
    excerpt: string
    content: string
    publishedAt: string
    cover?: StrapiImage
  }
}

export interface StrapiListResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiSingleResponse<T> {
  data: T
  meta: Record<string, unknown>
}
