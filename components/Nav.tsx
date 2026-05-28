'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#book', label: 'Book' },
  { href: '#research', label: 'Research' },
  { href: '#companies', label: 'Work' },
  { href: '#writing', label: 'Writing' },
  { href: '#speaking', label: 'Speaking' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy/90 backdrop-blur border-b border-white/5">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-sm text-ivory/80 hover:text-gold transition-colors">
          Rishi Raj Manglesh
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-ivory/60 hover:text-ivory transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/writing" className="text-sm text-gold hover:text-gold/80 transition-colors">
              Blog
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ivory/60 hover:text-ivory"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-ivory/60 hover:text-ivory"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/writing" className="text-sm text-gold" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
