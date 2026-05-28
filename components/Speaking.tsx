export default function Speaking() {
  const topics = [
    {
      title: 'AI Orchestration in Practice',
      desc: 'How enterprises can move from POC to production AI without rebuilding their stack.',
    },
    {
      title: 'Solve First, Automate Later',
      desc: 'Why most automation projects fail—and the diagnostic framework that prevents it.',
    },
    {
      title: 'Multi-Agent System Design',
      desc: 'Architecture patterns for AI agents that coordinate reliably at scale.',
    },
    {
      title: 'Epistemology Meets AI',
      desc: 'What ancient Indian knowledge frameworks can teach modern AI system designers.',
    },
  ]

  return (
    <section id="speaking" className="section-divider py-24 px-6 bg-charcoal/30">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Speaking & Advisory</p>
          <h2 className="font-display text-3xl text-ivory leading-snug mb-6">
            Honest conversations about AI—before the vendor does
          </h2>
          <p className="text-ivory/60 text-sm leading-relaxed mb-8">
            I speak to executive teams, industry conferences, and university programmes on AI strategy,
            orchestration, and the human dimension of enterprise transformation. My talks are
            practitioner-led, not product pitches.
          </p>
          <p className="text-ivory/60 text-sm leading-relaxed mb-8">
            Advisory engagements focus on AI readiness assessments, architecture review, and helping
            leadership teams ask the right questions before committing significant resources.
          </p>
          <a
            href="mailto:rishi@hundredsolutions.com"
            className="inline-block px-6 py-3 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="space-y-4">
          {topics.map(({ title, desc }) => (
            <div key={title} className="border border-white/10 p-6 hover:border-gold/20 transition-colors">
              <p className="text-ivory/80 text-sm font-medium mb-1">{title}</p>
              <p className="text-ivory/40 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
