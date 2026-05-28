import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#0D1B2A',
        'navy-deep': '#070E17',
        'navy-light': '#142333',
        gold:    '#C9A84C',
        'gold-muted': '#A88A35',
        rust:    '#A0442A',
        ivory:   '#F5EFE3',
        'ivory-dim': '#C8BFB0',
        teal:    '#2A9D8F',
        charcoal: '#1C2437',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#F5EFE3',
            a: { color: '#2A9D8F', '&:hover': { color: '#C9A84C' } },
            h1: { color: '#F5EFE3', fontFamily: 'var(--font-playfair)' },
            h2: { color: '#F5EFE3', fontFamily: 'var(--font-playfair)' },
            h3: { color: '#C9A84C', fontFamily: 'var(--font-playfair)' },
            strong: { color: '#C9A84C' },
            blockquote: { borderLeftColor: '#C9A84C', color: '#C8BFB0' },
            code: { color: '#2A9D8F' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
