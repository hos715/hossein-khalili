<p align="right"><strong>English</strong> · <a href="./README.FA.md">فارسی</a></p>

# Hossein Khalili — Personal Website

Bilingual (EN/FA) portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **next-intl**.

Live site: [https://hossein-khalili.vercel.app/](https://hossein-khalili.vercel.app/)

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
cp ../.env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) or [http://localhost:3000/fa](http://localhost:3000/fa).

## Environment

Copy from the repo-root [`.env.example`](./.env.example). Optional / future vars are commented there until wired.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO (update when domain is chosen) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional — Search Console HTML-tag token (not needed if you use `frontend/public/google*.html`) |
| `CONTACT_API_URL` | Optional — Nest contact API base URL (uncomment when wired) |
| `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `EMAIL_FROM` | Backend only — never use `NEXT_PUBLIC_` |

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
- `sitemap.xml`, `robots.txt`, JSON-LD (`Person`, `WebSite`, `ProfilePage`, `BlogPosting`, `BreadcrumbList`)
- Dedicated `/skills` and `/resume` routes for discoverability

See `.cursor/rules/seo.mdc` and `performance.mdc` for details.

**After deploy:** set `NEXT_PUBLIC_SITE_URL` on Vercel and follow [docs/SEO-DEPLOY.md](./docs/SEO-DEPLOY.md) (Google Search Console, LinkedIn links).

## Cursor

Read `AGENTS.md` and `.cursor/rules/` before making changes.
