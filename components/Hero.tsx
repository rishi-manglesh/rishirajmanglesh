import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-5xl mx-auto">
      <div className="max-w-2xl">
        <p className="text-gold text-sm tracking-widest uppercase mb-6 font-body">
          Oslo · Delhi
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-ivory leading-tight mb-6">
          Rishi Raj<br />Manglesh
        </h1>
        <p className="font-display text-xl md:text-2xl text-gold/90 mb-4 italic">
          Solve First. Automate Later.
        </p>
        <p className="text-ivory/60 text-lg leading-relaxed mb-10 max-w-xl">
          Founder, author, and researcher building the intelligence layer for enterprise systems.
          Two decades of experience watching automation projects fail—and understanding exactly why.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#book"
            className="px-6 py-3 bg-gold text-navy font-body font-medium text-sm hover:bg-gold/90 transition-colors"
          >
            Read the Book
          </a>
          <a
            href="#speaking"
            className="px-6 py-3 border border-white/20 text-ivory/80 font-body text-sm hover:border-gold hover:text-gold transition-colors"
          >
            Advisory & Speaking
          </a>
        </div>
      </div>
    </section>
  )
}
