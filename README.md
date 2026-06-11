<p align="right"><strong>English</strong> · <a href="./README.FA.md">فارسی</a></p>

# Hossein Khalili — Personal Website

Bilingual (EN/FA) portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **next-intl**.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js App Router, TypeScript, Tailwind v4 |
| i18n | next-intl (`/en`, `/fa`) |
| Content | Typed TS in `frontend/src/content/data/` |
| Deploy | Vercel (recommended) |

## Getting started

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) or [http://localhost:3000/fa](http://localhost:3000/fa).

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO (update when domain is chosen) |

## Project structure

```
personal-website/
├── frontend/           # Next.js app
├── content/data/       # Source-of-truth copy (sync with frontend/src/content)
├── .cursor/rules/      # Cursor AI rules
└── AGENTS.md
```

## Scripts

```bash
npm run dev      # development
npm run build    # production SSG build
npm run start    # serve production build
```

## Performance & SEO

- All marketing pages are **SSG** (`force-static`)
- Contact form lazy-loaded on `/contact` only
- Lighthouse gates: Performance ≥ 90, SEO ≥ 95 (mobile)

See `.cursor/rules/seo.mdc` and `performance.mdc` for details.

## Cursor

Read `AGENTS.md` and `.cursor/rules/` before making changes.
