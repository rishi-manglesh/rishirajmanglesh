'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Book() {
  const [flipped, setFlipped] = useState(false)

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
                href="/book"
                className="px-5 py-2.5 border border-gold/40 text-gold/70 text-sm hover:border-gold hover:text-gold transition-colors"
              >
                Preview Chapters →
              </a>
            </div>
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
      </div>
    </section>
  )
}
