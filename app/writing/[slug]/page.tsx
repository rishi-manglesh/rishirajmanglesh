import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPostSlugs, formatDate, strapiImageUrl } from '@/lib/strapi'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.attributes.title} — Rishi Raj Manglesh`,
    description: post.attributes.excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const coverUrl = strapiImageUrl(post.attributes.cover)

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <Link href="/writing" className="text-sm text-ivory/30 hover:text-gold transition-colors mb-12 block">
        ← All posts
      </Link>

      <p className="text-gold text-xs tracking-widest uppercase mb-4">
        {formatDate(post.attributes.publishedAt)}
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-ivory leading-tight mb-8">
        {post.attributes.title}
      </h1>

      {coverUrl && (
        <div className="relative w-full aspect-video mb-10 overflow-hidden">
          <Image
            src={coverUrl}
            alt={post.attributes.cover?.data?.attributes?.alternativeText ?? post.attributes.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="prose prose-invert prose-gold max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.attributes.content}
        </ReactMarkdown>
      </article>

      <div className="mt-16 pt-8 border-t border-white/10">
        <Link href="/writing" className="text-sm text-ivory/30 hover:text-gold transition-colors">
          ← All posts
        </Link>
      </div>
    </main>
  )
}
