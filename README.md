# rishirajmanglesh.com

Personal brand site for Rishi Raj Manglesh — Next.js 15, Tailwind CSS, Strapi CMS.

## Stack

- **Framework**: Next.js 15 (App Router, ISR)
- **Styling**: Tailwind CSS v3 + @tailwindcss/typography
- **Fonts**: Playfair Display (headings) + Inter (body) via next/font
- **Blog**: Strapi v4/v5 REST API (shared instance)
- **Hosting**: Vercel

## Local development

```bash
cp .env.example .env.local
# fill in STRAPI_URL and STRAPI_API_TOKEN
npm install
npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| `STRAPI_URL` | Base URL of the Strapi instance, e.g. `https://cms.hundredsolutions.com` |
| `STRAPI_API_TOKEN` | Read-only API token from Strapi admin → API Tokens |
| `STRAPI_COLLECTION` | Collection slug (default: `articles`) |

Set these in Vercel → Project Settings → Environment Variables before deploying.

## Deploy on Vercel

1. Push this repo to GitHub (`rishi-manglesh/rishirajmanglesh`)
2. Import the repo in Vercel
3. Add the three environment variables above
4. Deploy — Vercel auto-detects Next.js

Blog posts revalidate every hour (ISR). To force a refresh, redeploy or add a Strapi webhook pointing to `/api/revalidate` (not yet implemented).
