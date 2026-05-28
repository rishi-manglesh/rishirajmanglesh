'use client'

import { useState } from 'react'

export default function BookEmailGate() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div>
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Sample unlocked</p>
        <p className="text-ivory/60 text-sm mb-6">
          The first two chapters are below. The full book is on Amazon.
        </p>
        <div className="w-full border border-white/10" style={{ height: 680 }}>
          <iframe
            src="/book-sample.pdf"
            className="w-full h-full"
            title="AI Orchestration: The Definitive Guide — Sample"
          />
        </div>
        <p className="text-ivory/25 text-xs mt-3">
          Having trouble viewing?{' '}
          <a href="/book-sample.pdf" download className="underline hover:text-ivory/50 transition-colors">
            Download PDF
          </a>
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-gold text-xs tracking-widest uppercase mb-4">Free sample</p>
      <h3 className="font-display text-2xl text-ivory mb-3">
        Read the first two chapters free
      </h3>
      <p className="text-ivory/50 text-sm leading-relaxed mb-8">
        Enter your details and the sample opens immediately. No follow-up unless you ask.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <div>
          <label className="block text-xs text-ivory/40 mb-1.5">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Rishi"
            className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-ivory placeholder-ivory/25 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-ivory/40 mb-1.5">Email address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-ivory placeholder-ivory/25 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full px-6 py-3 bg-gold text-navy font-medium text-sm hover:bg-gold/90 transition-colors disabled:opacity-50"
        >
          {state === 'loading' ? 'Opening...' : 'Read sample chapters'}
        </button>
        {state === 'error' && (
          <p className="text-red-400/70 text-xs">Something went wrong. Please try again.</p>
        )}
      </form>

      <p className="text-ivory/20 text-xs mt-5">
        Your details are used only to track book interest. No spam.
      </p>
    </div>
  )
}
