export default function Research() {
  const results = [
    { school: 'Vritti', layer: 'Epistemic self-classification', win: '83%', note: '60% cross-judge (GPT-4o)' },
    { school: 'Nyaya', layer: 'Tool routing via 4 Pramanas', win: '93%', note: '70% search reduction' },
    { school: 'Mimamsa', layer: 'Query rewriting (6 Lingas)', win: '82%', note: '67% cross-judge' },
    { school: 'Vaisheshika', layer: 'Knowledge ontology (7 Padarthas)', win: '71%', note: 'vs generic entity ontology' },
    { school: 'Vedanta', layer: 'Output synthesis', win: '82%', note: '63% cross-judge' },
  ]

  return (
    <section id="research" className="section-divider py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Research</p>
        <h2 className="font-display text-3xl text-ivory mb-3">
          Darshana: six schools of Indian epistemology as LLM engineering layers
        </h2>
        <p className="text-ivory/40 text-sm mb-12 max-w-2xl">
          Two open-source repos · ~5,000 generations · validated against equal-sophistication generic controls · cross-judged by GPT-4o. The core finding: the same technique performs 0% or 82% depending on where in the stack it is applied.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Paper + repos */}
          <div>
            <div className="border border-white/10 p-8 mb-6">
              <p className="text-xs text-teal tracking-widest uppercase mb-4">Preprint · 2026</p>
              <h3 className="font-display text-xl text-ivory mb-3">
                Darshana: A Six-School Framework for Large Language Model Orchestration and Training
              </h3>
              <p className="text-ivory/50 text-sm leading-relaxed mb-6">
                The six classical Indian philosophical schools — Nyaya, Vaisheshika, Samkhya, Yoga,
                Mimamsa, Vedanta — each map to a specific layer of the LLM engineering stack.
                Layer assignment is the critical variable: Mimamsa scored 0% as a runtime system
                prompt but 82% applied as a query rewriter. Same technique, different layer.
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <a
                  href="https://zenodo.org/records/20322844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/60 hover:text-gold underline underline-offset-2 transition-colors"
                >
                  DOI: 10.5281/zenodo.20322844 ↗
                </a>
                <a
                  href="https://github.com/rishi-manglesh/vedic_llm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/50 hover:text-gold underline underline-offset-2 transition-colors"
                >
                  vedic_llm ↗
                </a>
                <a
                  href="https://github.com/rishi-manglesh/darshana_llm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/50 hover:text-gold underline underline-offset-2 transition-colors"
                >
                  darshana_llm ↗
                </a>
              </div>
            </div>
          </div>

          {/* Results table */}
          <div>
            <p className="text-xs text-ivory/25 tracking-widest uppercase mb-4">Results vs generic controls</p>
            <div className="space-y-2">
              {results.map(({ school, layer, win, note }) => (
                <div key={school} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                  <div className="w-20 shrink-0">
                    <span className="text-gold font-display text-lg">{win}</span>
                  </div>
                  <div>
                    <p className="text-ivory/70 text-sm font-medium">{school} — {layer}</p>
                    <p className="text-ivory/25 text-xs mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
