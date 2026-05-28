'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '#about', label: 'About' },
  { href: '#book', label: 'Book' },
  { href: '#research', label: 'Research' },
  { href: '#companies', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '#speaking', label: 'Speaking' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-deep/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display text-sm transition-colors duration-500 ${
            scrolled ? 'text-ivory/80 hover:text-gold' : 'text-transparent'
          }`}
        >
          Rishi Raj Manglesh
        </Link>

        {/* Desktop */}
        <ul className={`hidden md:flex items-center gap-6 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {links.map(({ href, label }) => {
            const resolvedHref = !isHome && href.startsWith('#') ? `/${href}` : href
            return (
              <li key={href}>
                <a href={resolvedHref} className="text-sm text-ivory/60 hover:text-ivory transition-colors">
                  {label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="https://linkedin.com/in/rishirajmanglesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ivory/40 hover:text-gold transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile toggle — only shown when scrolled */}
        {scrolled && (
          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://linkedin.com/in/rishirajmanglesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ivory/40 hover:text-gold transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <button
              className="text-ivory/60 hover:text-ivory"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-px bg-current mb-1" />
              <span className="block w-5 h-px bg-current mb-1" />
              <span className="block w-5 h-px bg-current" />
            </button>
          </div>
        )}
      </nav>

      {open && scrolled && (
        <div className="md:hidden bg-navy-deep border-t border-white/[0.06] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => {
              const resolvedHref = !isHome && href.startsWith('#') ? `/${href}` : href
              return (
                <li key={href}>
                  <a href={resolvedHref} className="text-sm text-ivory/60 hover:text-ivory" onClick={() => setOpen(false)}>
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
