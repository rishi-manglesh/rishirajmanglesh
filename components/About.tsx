export default function About() {
  return (
    <section id="about" className="section-divider py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs tracking-widest uppercase mb-10">About</p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-ivory leading-snug mb-6">
            Intelligence built for the systems accounting and insurance already run.
          </h2>
          <p className="text-ivory/60 leading-relaxed mb-4">
            Since 2021 I have been building Hundred Solutions, and in 2026 DVERSI — an AI
            platform that connects to the systems accounting and insurance companies already run,
            without replacing them. An intelligence layer via MCP that builds on what exists
            and compounds over time.
          </p>
          <p className="text-ivory/60 leading-relaxed mb-8">
            Twenty years running life &amp; pension insurance and banking across India, Asia,
            and Norway. That depth is the product, not the background.
          </p>
          <a
            href="https://linkedin.com/in/rishirajmanglesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gold/70 hover:text-gold transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn ↗
          </a>
        </div>

        <div className="space-y-3">
          {/* Current companies */}
          <div className="flex gap-4 text-sm p-4 border border-gold/20 bg-gold/[0.03]">
            <span className="text-gold/60 shrink-0 w-28">2021 – Present</span>
            <span className="text-ivory/80">Founder, Hundred Solutions · Oslo</span>
          </div>
          <div className="flex gap-4 text-sm p-4 border border-gold/20 bg-gold/[0.03]">
            <span className="text-gold/60 shrink-0 w-28">2026 – Present</span>
            <span className="text-ivory/80">Founder, DVERSI</span>
          </div>

          {/* Current output */}
          <div className="pt-2 space-y-2">
            <p className="text-xs text-ivory/20 tracking-widest uppercase mb-3 px-1">Published 2026</p>
            <div className="flex gap-4 text-sm py-3 border-b border-white/5">
              <span className="text-ivory/20 shrink-0 w-28">Book</span>
              <span className="text-ivory/55">AI Orchestration: The Definitive Guide</span>
            </div>
            <div className="flex gap-4 text-sm py-3 border-b border-white/5">
              <span className="text-ivory/20 shrink-0 w-28">Research</span>
              <span className="text-ivory/55">Darshana: Six-School Framework for LLM Orchestration</span>
            </div>
            <div className="flex gap-4 text-sm py-3">
              <span className="text-ivory/20 shrink-0 w-28">Background</span>
              <span className="text-ivory/35">20 years · Insurance &amp; banking · India, Asia, Norway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
