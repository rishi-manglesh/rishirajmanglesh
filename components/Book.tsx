export default function Book() {
  return (
    <section id="book" className="section-divider py-24 px-6 bg-charcoal/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Published Work</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory leading-snug mb-2">
              AI Orchestration:<br />The Definitive Guide
            </h2>
            <p className="text-gold/70 text-sm mb-6 italic">
              Rishi R. Manglesh
            </p>
            <p className="text-ivory/60 leading-relaxed mb-4">
              Most AI projects fail before they start—because organisations automate broken processes
              instead of fixing them first. This book is a practitioner's manual for doing it right:
              understanding when to reach for AI, how to design systems that actually work at scale,
              and how to lead the people affected by the change.
            </p>
            <p className="text-ivory/60 leading-relaxed mb-8">
              Written from the inside of two decades of enterprise system implementations, it covers
              orchestration architecture, multi-agent design, ERP integration, ROI measurement, and
              the human side of automation that vendor playbooks never mention.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.amazon.com/dp/B0H2QNK3QV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors"
              >
                Get on Amazon
              </a>
              <a
                href="https://zenodo.org/records/20322844"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/20 text-ivory/70 text-sm hover:border-gold hover:text-gold transition-colors"
              >
                Research Preview
              </a>
            </div>
          </div>

          <div className="border border-white/10 p-8 space-y-6">
            <p className="text-xs text-ivory/40 uppercase tracking-widest">What it covers</p>
            {[
              ['AI Orchestration Fundamentals', 'What orchestration means in practice—and what it is not.'],
              ['Multi-Agent System Design', 'Patterns for agents that coordinate reliably at enterprise scale.'],
              ['ERP & Data Integration', 'Making SAP, Oracle, and legacy stacks work with modern AI pipelines.'],
              ['Change & ROI', 'Measuring outcomes and bringing people through the transition.'],
            ].map(([title, desc]) => (
              <div key={title} className="border-t border-white/5 pt-4 first:border-0 first:pt-0">
                <p className="text-ivory/80 text-sm font-medium mb-1">{title}</p>
                <p className="text-ivory/40 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
