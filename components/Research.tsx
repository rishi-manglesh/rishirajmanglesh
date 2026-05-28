export default function Research() {
  return (
    <section id="research" className="section-divider py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Research</p>
        <h2 className="font-display text-3xl text-ivory mb-3">
          At the edge of AI and epistemology
        </h2>
        <p className="text-ivory/50 mb-12 max-w-xl">
          Alongside practical AI work, I research how ancient knowledge systems can inform the design
          of more robust, ethically grounded AI architectures.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Darshana paper */}
          <div className="border border-white/10 p-8 hover:border-gold/30 transition-colors group">
            <p className="text-xs text-teal tracking-widest uppercase mb-4">Zenodo · 2025</p>
            <h3 className="font-display text-xl text-ivory mb-3 group-hover:text-gold transition-colors">
              Darshana: A Vedic Epistemological Framework for AI
            </h3>
            <p className="text-ivory/50 text-sm leading-relaxed mb-6">
              Proposes a structured framework drawing from Nyāya, Vaiśeṣika, and Mīmāṃsā schools
              of Indian philosophy to address grounding, inference, and authority in large language
              model systems. Introduces the concept of <em>pramāṇa-aligned</em> AI evaluation.
            </p>
            <div className="flex items-center gap-4 text-xs text-ivory/30">
              <a
                href="https://zenodo.org/records/20322844"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                DOI: 10.5281/zenodo.20322844
              </a>
            </div>
          </div>

          {/* DVERSI / AI Orchestration research */}
          <div className="border border-white/10 p-8 hover:border-gold/30 transition-colors group">
            <p className="text-xs text-teal tracking-widest uppercase mb-4">Applied Research</p>
            <h3 className="font-display text-xl text-ivory mb-3 group-hover:text-gold transition-colors">
              AI Orchestration in Enterprise Contexts
            </h3>
            <p className="text-ivory/50 text-sm leading-relaxed mb-6">
              Ongoing applied research into multi-agent coordination patterns, context propagation
              across heterogeneous systems, and failure modes in enterprise AI deployments.
              Findings inform both the DVERSI platform and the published guide.
            </p>
            <div className="flex items-center gap-4 text-xs text-ivory/30">
              <a
                href="https://dversi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                dversi.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
