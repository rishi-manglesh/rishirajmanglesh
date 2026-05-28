import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grain">
      {/* Deep base */}
      <div className="absolute inset-0 bg-navy-deep" />

      {/* Left panel — slightly lighter than navy-deep to visually anchor text */}
      <div className="absolute inset-y-0 left-0 w-1/2 md:w-[55%] bg-gradient-to-r from-navy/60 to-transparent pointer-events-none" />

      {/* Gold radial glow behind text */}
      <div className="absolute top-1/4 -left-24 w-[600px] h-[600px] rounded-full bg-gold/[0.07] blur-[120px] pointer-events-none" />

      {/* Teal accent — lower right */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-teal/[0.05] blur-[100px] pointer-events-none" />

      {/* Photo — oval portrait, right half */}
      <div className="absolute inset-y-0 right-0 w-[50%] flex items-center justify-center pointer-events-none select-none">
        <div
          className="relative overflow-hidden ring-2 ring-gold/30 shadow-2xl shadow-black/50"
          style={{ width: 500, height: 500, borderRadius: '50%' }}
        >
          <Image
            src="/IMG_2531.jpeg"
            alt="Rishi Raj Manglesh"
            fill
            className="object-cover object-[50%_8%]"
            priority
          />
          {/* Radial vignette — hides busy background at edges, face stays clear */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 30%, transparent 40%, rgba(7,14,23,0.75) 100%)' }}
          />
          {/* Bottom fade to ground the portrait */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 via-15% to-transparent" />
          {/* Top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Faint rule at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-ivory/20 tracking-widest uppercase">scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ivory/20">
          <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto w-full px-6 pb-16">
        <div className="max-w-xl">
          <p className="text-gold text-sm tracking-widest uppercase mb-6 font-body">
            Oslo, Norway
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ivory leading-tight mb-6">
            Rishi Raj<br />Manglesh
          </h1>
          <p className="font-display text-xl md:text-2xl text-gold/90 mb-4 italic">
            Solve First. Automate Later.
          </p>
          <p className="text-ivory/50 text-lg leading-relaxed mb-10">
            Building the AI layer for accounting and insurance — two domains I ran for twenty
            years across India, Asia, and Norway. That depth is the product.
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
              className="px-6 py-3 border border-white/20 text-ivory/70 font-body text-sm hover:border-gold/60 hover:text-gold transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
