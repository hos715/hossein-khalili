# Personal Website — Agent Guide

**Hossein Khalili** — bilingual (EN/FA) personal portfolio for **Senior Front-End** and **Full-Stack** positioning. Greenfield — build from scratch in this repo.

## Locked Decisions

| Topic | Choice |
|-------|--------|
| Audience | Iran + international |
| Roles | Senior Front-End · Full-Stack (honest NestJS positioning) |
| Languages | Bilingual EN + FA (`next-intl`, `/en`, `/fa`) |
| Style | Professional, minimal, credible |
| Scope | **Full build** — all sections + blog (not MVP) |
| Live links | arz.me · xpay.co · ariascale.ir |
| Domain | TBD — use `NEXT_PUBLIC_SITE_URL` |
| Deploy | Vercel (frontend); Nest contact API when added |
| **Non-negotiable** | **SEO + performance + initial load** — Lighthouse ≥ 90 perf, ≥ 95 SEO on mobile |

## Repository Layout

```
personal-website/
├── frontend/          # Next.js 15, TypeScript, Tailwind, ShadCN
├── backend/           # NestJS — contact API (optional until scaffolded)
├── content/
│   ├── blog/en|fa/    # MDX posts
│   └── data/          # projects, experience, skills
├── docs/              # NAME.md + NAME.FA.md pairs
├── .cursor/rules/     # Cursor AI rules — read before coding
├── AGENTS.md          # This file
├── README.md
└── README.FA.md
```

## Site Sections

Home · About · Skills · Projects · Experience · Blog · Contact · Resume PDF

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15 (App Router), TypeScript, Tailwind, ShadCN UI |
| i18n | next-intl |
| Content | MDX (blog) + typed TS/JSON (projects) |
| Backend | NestJS — contact form + email adapter |
| Email | Resend or Nodemailer (env-driven) |

## Cursor Rules

Rules live in `.cursor/rules/`. **Owner priority: SEO and initial load are non-negotiable.**

Priority when trade-offs arise:

1. **seo.mdc** + **performance.mdc** — SSG, metadata, hreflang, CWV budgets, minimal JS (**always on**)
2. **accessibility.mdc** — WCAG AA, keyboard, forms, RTL/EN
3. **content-branding.mdc** — resume facts, tone, projects (always on)
4. **i18n-bilingual.mdc** — locales, RTL, message files
5. **ui-design.mdc** — professional visual system; typography-first hero
6. **nextjs-frontend.mdc** — static-first App Router, ShadCN on demand
7. **blog.mdc** — MDX authoring, frontmatter, topics
8. **nestjs-api.mdc** — contact endpoint only; no frontend prefetch
9. **security.mdc** — secrets, CORS, honeypot, safe MDX
10. **project-overview.mdc** — stack, scope, folders (always on)
11. **documentation.mdc** — comments, naming, bilingual docs (always on)

**Rule:** If visual polish conflicts with LCP or JS budget — change the design, not the budget.

## Key Conventions

- UI strings via i18n — **no hardcoded EN or FA in components**
- Content facts from `content-branding.mdc` — do not invent projects or metrics
- Code comments in **English**
- Docs in bilingual pairs: `NAME.md` + `NAME.FA.md`
- Server Components by default; `'use client'` only when needed
- NestJS: small, real contact API — honest full-stack story, not oversold
- Tone: professional, specific, no buzzwords

## Development Commands (after scaffold)

```bash
# Frontend
cd frontend && npm run dev

# Backend (when added)
cd backend && npm run start:dev
```

## Environment Variables

| Variable | Where |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | Frontend — canonical URL (placeholder until domain) |
| `CONTACT_API_URL` | Frontend — Nest contact endpoint |
| `RESEND_API_KEY` | Backend only |
| `CONTACT_TO_EMAIL` | Backend only |
| `EMAIL_FROM` | Backend only |

## Content Source of Truth

- Profile, projects, experience: `.cursor/rules/content-branding.mdc` → implement in `content/data/`
- Blog topics: `blog.mdc` suggested list + real project lessons
- Resume PDF: `frontend/public/resume/`

## Before Shipping

### SEO & performance (blockers)

- [ ] Lighthouse **Performance ≥ 90** and **SEO ≥ 95** on mobile — `/en` and `/fa` home
- [ ] Same gates on `/en/projects` and one blog post
- [ ] View Page Source: hero text and nav visible without JS execution
- [ ] Unique metadata + hreflang + canonical on every public page
- [ ] `sitemap.xml` + `robots.txt` complete for both locales
- [ ] JSON-LD validates (Person, BlogPosting where applicable)
- [ ] Home first-load JS ≤ ~80 KB gzip; contact form lazy-loaded only on `/contact`

### Content & function

- [ ] `/en` and `/fa` both complete — no half-translated pages
- [ ] Contact form rate-limited; mailto fallback works
- [ ] arz.me, xpay.co, ariascale.ir linked correctly from projects
- [ ] `NEXT_PUBLIC_SITE_URL` documented for domain swap
