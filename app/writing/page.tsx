import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/strapi'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing — Rishi Raj Manglesh',
  description: 'Essays and notes on AI orchestration, enterprise systems, and the future of work.',
}

export default async function WritingPage() {
  const posts = await getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <p className="text-gold text-xs tracking-widest uppercase mb-4">Writing</p>
      <h1 className="font-display text-4xl text-ivory mb-3">Notes from the field</h1>
      <p className="text-ivory/50 mb-16 max-w-xl">
        Essays on AI orchestration, enterprise automation, and the gap between vendor promises and
        production reality.
      </p>

      {posts.length === 0 ? (
        <p className="text-ivory/30 text-sm">No posts yet. Check back soon.</p>
      ) : (
        <div className="divide-y divide-white/5">
          {posts.map((post) => (
            <article key={post.id} className="py-8 group">
              <Link href={`/writing/${post.attributes.slug}`} className="block">
                <div className="flex items-baseline justify-between gap-8 mb-2">
                  <h2 className="font-display text-xl text-ivory group-hover:text-gold transition-colors">
                    {post.attributes.title}
                  </h2>
                  <time className="text-xs text-ivory/30 shrink-0">
                    {formatDate(post.attributes.publishedAt)}
                  </time>
                </div>
                {post.attributes.excerpt && (
                  <p className="text-ivory/50 text-sm leading-relaxed">
                    {post.attributes.excerpt}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-white/10">
        <Link href="/" className="text-sm text-ivory/30 hover:text-gold transition-colors">
          ← Back
        </Link>
      </div>
    </main>
  )
}
