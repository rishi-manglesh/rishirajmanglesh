export default function Companies() {
  return (
    <section id="companies" className="section-divider py-24 px-6 bg-navy-deep">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Work</p>
        <h2 className="font-display text-3xl text-ivory mb-12">
          What I&rsquo;m building
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* DVERSI */}
          <div className="border border-white/10 p-8 hover:border-teal/40 transition-colors group">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl text-ivory mb-1 group-hover:text-teal transition-colors">
                  DVERSI
                </h3>
                <p className="text-xs text-teal tracking-widest uppercase">AI Platform</p>
              </div>
              <a
                href="https://dversi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ivory/30 hover:text-teal transition-colors mt-1"
              >
                dversi.com ↗
              </a>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6">
              The AI layer for accounting and insurance systems. DVERSI connects via the Model
              Context Protocol. The customer keeps their existing stack entirely, and adds
              coworkers, workflows, and compliance enforcement on top. Eight to nine weeks
              to a working pilot. Five to thirty times cheaper than a replacement platform.
            </p>
            <ul className="text-ivory/40 text-xs space-y-1">
              <li>Customer&apos;s existing systems preserved</li>
              <li>Domain-native: accounting &amp; insurance</li>
              <li>Entity-centric knowledge graph</li>
            </ul>
          </div>

          {/* Hundred Solutions */}
          <div className="border border-white/10 p-8 hover:border-gold/40 transition-colors group">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl text-ivory mb-1 group-hover:text-gold transition-colors">
                  Hundred Solutions
                </h3>
                <p className="text-xs text-gold/70 tracking-widest uppercase">Advisory & Consulting</p>
              </div>
              <a
                href="https://hundredsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ivory/30 hover:text-gold transition-colors mt-1"
              >
                hundredsolutions.com ↗
              </a>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6">
              The activation and services partner for organisations adopting DVERSI. We deliver
              the scoping, integration, custom UI, and compliance work that turns the platform
              into a working system for a specific team, in eight to nine weeks, not eighteen months.
            </p>
            <ul className="text-ivory/40 text-xs space-y-1">
              <li>Activation engagements &amp; vertical extensions</li>
              <li>Strategic advisory retainer</li>
              <li>Oslo, Norway</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
