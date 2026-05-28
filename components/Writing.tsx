import Link from 'next/link'
import { getLatestPosts, formatDate } from '@/lib/strapi'

export default async function Writing() {
  const posts = await getLatestPosts(3)

  return (
    <section id="writing" className="section-divider py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">Writing</p>
            <h2 className="font-display text-3xl text-ivory">
              Notes from the field
            </h2>
          </div>
          <Link href="/writing" className="text-sm text-ivory/40 hover:text-gold transition-colors">
            All posts →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-ivory/30 text-sm">No posts yet. Check back soon.</p>
        ) : (
          <div className="divide-y divide-white/5">
            {posts.map((post) => (
              <article key={post.id} className="py-8 group">
                <Link href={`/writing/${post.attributes.slug}`} className="block">
                  <div className="flex items-baseline justify-between gap-8">
                    <h3 className="font-display text-xl text-ivory group-hover:text-gold transition-colors">
                      {post.attributes.title}
                    </h3>
                    <time className="text-xs text-ivory/30 shrink-0">
                      {formatDate(post.attributes.publishedAt)}
                    </time>
                  </div>
                  {post.attributes.excerpt && (
                    <p className="text-ivory/50 text-sm mt-2 leading-relaxed max-w-2xl">
                      {post.attributes.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
