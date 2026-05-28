import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-divider py-12 px-6 bg-navy-deep">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-display text-ivory/60 mb-1">Rishi Raj Manglesh</p>
          <a
            href="mailto:rm@hundredsolutions.com"
            className="text-sm text-gold/70 hover:text-gold transition-colors"
          >
            rm@hundredsolutions.com
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { href: '#about', label: 'About' },
            { href: '#book', label: 'Book' },
            { href: '#research', label: 'Research' },
            { href: '#companies', label: 'Work' },
            { href: '/writing', label: 'Writing' },
            { href: '#speaking', label: 'Speaking' },
          ].map(({ href, label }) =>
            href.startsWith('/') ? (
              <Link key={href} href={href} className="text-sm text-ivory/30 hover:text-ivory transition-colors">
                {label}
              </Link>
            ) : (
              <a key={href} href={href} className="text-sm text-ivory/30 hover:text-ivory transition-colors">
                {label}
              </a>
            )
          )}
        </nav>

        <p className="text-xs text-ivory/20">
          &copy; {year} Rishi Raj Manglesh
        </p>
      </div>
    </footer>
  )
}
