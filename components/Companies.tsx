export default function Companies() {
  return (
    <section id="companies" className="section-divider py-24 px-6 bg-charcoal/30">
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
              The intelligence layer for business systems. DVERSI connects enterprise data sources,
              applies AI orchestration across workflows, and delivers decision-ready outputs—without
              requiring organisations to rebuild what they already have.
            </p>
            <ul className="text-ivory/40 text-xs space-y-1">
              <li>Multi-agent orchestration</li>
              <li>ERP & legacy system integration</li>
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
              Management and technology advisory for organisations navigating large-scale digital
              transformation. We work with leaders who need an honest view of what AI can and cannot
              do for their operations—before committing to a direction.
            </p>
            <ul className="text-ivory/40 text-xs space-y-1">
              <li>AI strategy & readiness assessment</li>
              <li>Enterprise systems advisory</li>
              <li>Oslo · Delhi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
