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
            Since 2021 I have been building Hundred Solutions, and in 2026 DVERSI, an AI
            platform that connects to the systems accounting and insurance companies already
            run, without replacing them. Not a chat interface. An intelligence layer via MCP
            that builds on what exists and compounds over time.
          </p>
          <p className="text-ivory/60 leading-relaxed">
            The twenty years before that are the product, not the background. Running
            life &amp; pension insurance and banking systems across India, Asia, and Norway
            gave me domain depth that generic AI vendors do not have.
          </p>
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

          <a
            href="https://linkedin.com/in/rishirajmanglesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gold/70 hover:text-gold transition-colors pt-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            linkedin.com/in/rishirajmanglesh ↗
          </a>
        </div>
      </div>
    </section>
  )
}
