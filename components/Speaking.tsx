export default function Speaking() {
  const topics = [
    {
      title: 'AI Advisory',
      desc: 'Where AI works in financial operations and insurance — and where it silently fails.',
    },
    {
      title: 'Fractional CTO',
      desc: 'Senior architecture and technology leadership without a full-time hire.',
    },
    {
      title: 'Solve First, Automate Later ™',
      desc: 'Proprietary methodology from the book — what to automate, in what order, and why.',
    },
    {
      title: 'Ancient Epistemology & Modern AI',
      desc: 'Classical Indian knowledge frameworks mapped onto LLM engineering layers.',
    },
  ]

  return (
    <section id="speaking" className="section-divider py-24 px-6 bg-navy-deep">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Talks & Conversations</p>
          <h2 className="font-display text-3xl text-ivory leading-snug mb-6">
            The conversation before the decision
          </h2>
          <p className="text-ivory/60 text-sm leading-relaxed mb-4">
            Most of my speaking happens in rooms where a decision is being made — a board
            evaluating an AI investment, a leadership team committing to a direction, a technical
            group designing something they will live with for years.
          </p>
          <p className="text-ivory/60 text-sm leading-relaxed mb-8">
            I bring twenty years inside accounting and insurance systems and published research
            on LLM engineering. No product pitch. If an independent perspective is useful before
            you commit, reach out — most conversations start with one question.
          </p>
          <a
            href="mailto:rm@hundredsolutions.com"
            className="inline-block px-6 py-3 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors"
          >
            Start a conversation
          </a>
        </div>

        <div className="space-y-4">
          {topics.map(({ title, desc }) => (
            <div key={title} className="border border-white/10 p-4 hover:border-gold/20 transition-colors">
              <p className="text-ivory/75 text-sm font-medium mb-1">{title}</p>
              <p className="text-ivory/35 text-sm">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
