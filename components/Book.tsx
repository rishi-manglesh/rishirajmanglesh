'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Book() {
  const [flipped, setFlipped] = useState(false)
  const [sampleOpen, setSampleOpen] = useState(false)

  return (
    <section id="book" className="section-divider py-24 px-6 bg-navy-deep">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Published Work</p>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — title + description + CTAs */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory leading-snug mb-1">
              AI Orchestration:<br />The Definitive Guide
            </h2>
            <p className="font-display text-base text-ivory/40 italic mb-2">
              How to Build Automation That Actually Works
            </p>
            <p className="text-gold/60 text-xs mb-8">
              Rishi Raj Manglesh · Published by Hundred Solutions AS · May 2026
            </p>
            <p className="text-ivory/60 leading-relaxed mb-8">
              Most organisations bolt AI onto legacy tools without understanding why the process
              exists. This book is a diagnostic before an implementation. Every framework earned
              through production, every warning earned through failure. Accounting and insurance
              operators will recognise the problems. The patterns apply across industries.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://www.amazon.com/dp/B0H2QNK3QV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors"
              >
                Read on Amazon ↗
              </a>
              <a
                href="https://read.amazon.com/sample/B0H2QNK3QV?clientId=share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-gold/40 text-gold/70 text-sm hover:border-gold hover:text-gold transition-colors"
              >
                Preview Chapters ↗
              </a>
            </div>
            <button
              onClick={() => setSampleOpen(!sampleOpen)}
              className="text-sm text-ivory/35 hover:text-ivory/70 transition-colors underline underline-offset-4"
            >
              {sampleOpen ? 'Close sample' : 'Read sample pages'}
            </button>
          </div>

          {/* Right — flippable book cover */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div
              className="cursor-pointer"
              style={{ perspective: '1000px', width: 300, height: 450 }}
              onClick={() => setFlipped(!flipped)}
              title="Click to flip"
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div
                  className="absolute inset-0 shadow-2xl shadow-black/70 overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/book-front.jpg"
                    alt="AI Orchestration: The Definitive Guide front cover"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 shadow-2xl shadow-black/70 overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <Image
                    src="/book-back.jpg"
                    alt="AI Orchestration: The Definitive Guide back cover"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="text-ivory/20 text-xs tracking-wide">click cover to flip</p>
          </div>

        </div>

        {/* Inline sample reader */}
        {sampleOpen && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <div className="max-w-2xl">
              <p className="text-gold text-xs tracking-widest uppercase mb-8">Preface</p>

              <h3 className="font-display text-2xl text-ivory mb-6">Why I Wrote This Book</h3>

              <p className="text-ivory/70 leading-relaxed mb-4">
                This book exists because I was frustrated.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-4">
                For three years, I watched companies buy automation tools that promised transformation
                and delivered disappointment. I saw talented operations teams burn out maintaining
                Zapier workflows that broke every week. I heard executives admit, quietly after the
                vendor left, that their AI investments hadn't produced ROI.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-4">The pattern was consistent:</p>
              <ul className="text-ivory/50 text-sm space-y-1 mb-6 ml-4">
                <li>Impressive demo</li>
                <li>Enthusiastic purchase</li>
                <li>Difficult implementation</li>
                <li>Gradual abandonment</li>
                <li>Reluctant admission of failure</li>
              </ul>
              <p className="text-ivory/70 leading-relaxed mb-4">
                The problem wasn't the people. The teams were smart. The budget was adequate. The
                intent was genuine.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-4">
                The problem wasn't even the specific tools. Zapier works. Make works. Even the
                bolted-on AI features mostly work.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-8">
                The problem was architectural. We were building automation wrong. We were asking users
                to configure before understanding. We were building brittle workflows instead of
                intelligent systems. We were burning tokens on tasks that didn't need AI while lacking
                intelligence where it mattered.
              </p>

              <h3 className="font-display text-xl text-ivory mb-4">The Gap Between Promise and Delivery</h3>
              <p className="text-ivory/70 leading-relaxed mb-4">
                AI can do remarkable things. Large language models understand context, generate
                content, and reason through problems in ways that seemed impossible five years ago.
                The capability is real.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-8">
                But most AI implementations fail to deliver value. Not because the AI isn't capable,
                but because the orchestration around it is wrong. The AI can do impressive things in a
                demo. It struggles to do useful things in production. The gap isn't capability. The
                gap is orchestration.
              </p>

              <h3 className="font-display text-xl text-ivory mb-4">What You'll Learn</h3>
              <div className="space-y-3 mb-8">
                {[
                  ['Why 95% of AI automation disappoints (and how to be the 5%)', 'The patterns that cause failure and the architectural choices that prevent it.'],
                  ['Why most of your mature workflow steps shouldn\'t use AI at all', 'How zero-token workflows eliminate unnecessary AI costs. The book\'s most counterintuitive and practical insight.'],
                  ['The multi-agent architecture that makes AI actually useful', 'How to structure AI systems that scale, specialise, and improve.'],
                  ['The three-level moat framework for defensible AI businesses', 'How to build competitive advantage that compounds, not erodes.'],
                  ['Practical implementation patterns from building a production platform', 'Not theory. Actual code patterns, prompt structures, and architectural decisions.'],
                ].map(([title, desc]) => (
                  <div key={title} className="border-l border-gold/20 pl-4">
                    <p className="text-ivory/80 text-sm font-medium mb-0.5">{title}</p>
                    <p className="text-ivory/40 text-sm">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-ivory/70 leading-relaxed mb-6">
                  The automation industry is broken. But it doesn't have to be. The tools are
                  available. The architectures are understood. The path is clear. What's missing is
                  knowledge — knowing what works, what fails, and why.
                </p>
                <p className="text-ivory/40 text-sm italic">
                  Rishi Raj Manglesh · January 2026 · Oslo, Norway
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.com/dp/B0H2QNK3QV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors"
                >
                  Read full book on Amazon ↗
                </a>
                <button
                  onClick={() => setSampleOpen(false)}
                  className="px-5 py-2.5 border border-white/10 text-ivory/40 text-sm hover:border-white/30 hover:text-ivory/70 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
