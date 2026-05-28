export default function About() {
  return (
    <section id="about" className="section-divider py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-4">About</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory leading-snug mb-6">
            I know why these systems break.<br />I maintained them.
          </h2>
          <p className="text-ivory/60 leading-relaxed mb-4">
            I started as an engineer inside enterprise systems—SAP, Oracle, the kind of software that
            runs billion-dollar operations and frustrates everyone who touches it. I spent two decades
            learning why automation projects fail: not because of technology, but because of the assumptions
            built before the first line of code is written.
          </p>
          <p className="text-ivory/60 leading-relaxed mb-4">
            That experience became DVERSI, an AI orchestration platform that helps organisations move from
            data chaos to decision-ready intelligence. And it became the book—a distillation of what
            actually works, written for the operators, not the vendors.
          </p>
          <p className="text-ivory/60 leading-relaxed">
            I split my time between Oslo and Delhi, working across industries with teams who want to
            automate intelligently rather than just automate fast.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-white/10 p-6">
            <p className="text-xs text-gold/70 tracking-widest uppercase mb-2">Roles</p>
            <ul className="text-ivory/60 text-sm space-y-1">
              <li>Founder & CEO — Hundred Solutions AS (Oslo)</li>
              <li>Founder — DVERSI</li>
              <li>Author — <em>AI Orchestration: The Definitive Guide</em></li>
              <li>Researcher — Vedic AI systems & epistemology</li>
            </ul>
          </div>
          <div className="border border-white/10 p-6">
            <p className="text-xs text-gold/70 tracking-widest uppercase mb-2">Focus areas</p>
            <ul className="text-ivory/60 text-sm space-y-1">
              <li>AI orchestration & enterprise automation</li>
              <li>Multi-agent system design</li>
              <li>ERP integration & data architecture</li>
              <li>Indigenous knowledge systems & AI epistemology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
