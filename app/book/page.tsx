import Image from 'next/image'
import type { Metadata } from 'next'
import BookEmailGate from '@/components/BookEmailGate'

export const metadata: Metadata = {
  title: 'AI Orchestration: The Definitive Guide — Rishi Raj Manglesh',
  description:
    'How to build AI automation that actually works. A diagnostic before an implementation — every framework earned through production. Read the first two chapters free.',
  openGraph: {
    title: 'AI Orchestration: The Definitive Guide',
    description: 'How to build AI automation that actually works. Read the first two chapters free.',
    type: 'website',
  },
}

const outcomes = [
  {
    title: 'Why 95% of AI automation disappoints',
    desc: 'The patterns that cause failure and the architectural choices that prevent it.',
  },
  {
    title: 'Why mature workflow steps should not use AI at all',
    desc: 'How zero-token workflows eliminate unnecessary AI costs. The most counterintuitive and practical insight in the book.',
  },
  {
    title: 'The multi-agent architecture that scales',
    desc: 'How to structure AI systems that specialise, coordinate, and improve over time.',
  },
  {
    title: 'The three-level moat framework',
    desc: 'How to build competitive advantage that compounds rather than erodes.',
  },
  {
    title: 'Implementation patterns from a production platform',
    desc: 'Not theory. Actual prompt structures, agent designs, and architectural decisions from building DVERSI.',
  },
]

export default function BookPage() {
  return (
    <main className="bg-navy-deep min-h-screen">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-6">Published May 2026</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory leading-tight mb-3">
            AI Orchestration:<br />The Definitive Guide
          </h1>
          <p className="font-display text-lg text-ivory/40 italic mb-8">
            How to Build Automation That Actually Works
          </p>
          <p className="text-ivory/60 leading-relaxed mb-10">
            Most organisations bolt AI onto legacy tools without understanding why the process
            exists. This book is a diagnostic before an implementation. Every framework was earned
            through production. Every warning was earned through failure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#sample"
              className="px-6 py-3 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors"
            >
              Read free sample
            </a>
            <a
              href="https://www.amazon.com/dp/B0H2QNK3QV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gold/40 text-gold/70 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              Buy on Amazon ↗
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative shadow-2xl shadow-black/70" style={{ width: 280, height: 420 }}>
            <Image
              src="/book-front.jpg"
              alt="AI Orchestration: The Definitive Guide"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="border-t border-white/[0.06] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs tracking-widest uppercase mb-10">What you will learn</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {outcomes.map(({ title, desc }) => (
              <div key={title} className="border-l border-gold/20 pl-5">
                <p className="text-ivory/85 text-sm font-medium mb-1">{title}</p>
                <p className="text-ivory/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="border-t border-white/[0.06] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              role: 'Operations leaders',
              desc: 'You have spent budget on tools that underdelivered. This book explains why the current approach structurally fails and what replaces it.',
            },
            {
              role: 'Technical founders',
              desc: 'Building in the orchestration space. The architecture, agent design patterns, and protocol details are your blueprint.',
            },
            {
              role: 'Executives',
              desc: 'Evaluating AI strategy and build-vs-buy decisions. The strategic framework for assessing whether AI investments will compound or commoditise.',
            },
          ].map(({ role, desc }) => (
            <div key={role} className="border border-white/8 p-6">
              <p className="text-ivory/75 text-sm font-medium mb-3">{role}</p>
              <p className="text-ivory/40 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About the author */}
      <section className="border-t border-white/[0.06] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-6">About the author</p>
            <h2 className="font-display text-2xl text-ivory mb-6">Rishi Raj Manglesh</h2>
            <p className="text-ivory/60 text-sm leading-relaxed mb-4">
              Founder of Hundred Solutions and creator of the DVERSI AI orchestration platform.
              Two decades in enterprise technology, including over a decade leading IT services
              delivery across Asia and Europe for global insurance, banking, and technology companies.
            </p>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6">
              Before founding Hundred Solutions in 2021, he spent years inside the systems that
              AI now orchestrates: ERPs, CRMs, accounting platforms, and the brittle integrations
              between them. The patterns in this book are not academic. They come from building
              multi-agent AI orchestration in production and maintaining the systems it connects to.
            </p>
            <a
              href="https://linkedin.com/in/rishirajmanglesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold/70 hover:text-gold transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.771v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              linkedin.com/in/rishirajmanglesh
            </a>
          </div>
          <div className="space-y-3">
            {[
              ['ISBN', '978-82-694664-0-9'],
              ['Publisher', 'Hundred Solutions AS, Oslo'],
              ['Format', 'Paperback and Kindle'],
              ['Published', 'May 2026'],
              ['Pages', '~180'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-6 text-sm py-3 border-b border-white/5">
                <span className="text-ivory/25 w-24 shrink-0">{label}</span>
                <span className="text-ivory/60">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email gate */}
      <section id="sample" className="border-t border-white/[0.06] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <BookEmailGate />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/[0.06] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-ivory/60 text-sm mb-1">Ready for the full book?</p>
            <p className="font-display text-xl text-ivory">Available on Amazon in paperback and Kindle.</p>
          </div>
          <a
            href="https://www.amazon.com/dp/B0H2QNK3QV"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors"
          >
            Buy on Amazon ↗
          </a>
        </div>
      </section>

    </main>
  )
}
