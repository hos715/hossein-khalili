<p align="right"><strong>English</strong> · <a href="./SEO-DEPLOY.FA.md">فارسی</a></p>

# SEO deployment checklist

Use this after deploying the frontend to Vercel (or any host).

## 1. Environment

In Vercel **Project → Settings → Environment Variables**, set:

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` (or custom domain) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional — Search Console HTML-tag token only. Leave unset until you have one. Never commit a real token. |

Redeploy after changing these variables. Without `NEXT_PUBLIC_SITE_URL`, canonical URLs and `sitemap.xml` point to `http://localhost:3000`.

## 2. Verify build output

```bash
cd frontend
npm run build && npm run start
```

Check:

- [View Page Source](http://localhost:3000/en) — hero name and nav links visible without JavaScript
- `http://localhost:3000/sitemap.xml` — includes `/en`, `/fa`, `/skills`, `/resume`, blog posts, projects
- `http://localhost:3000/robots.txt` — allows `/`, disallows `/api/`

## 3. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → URL prefix → your production URL (`https://xxx.vercel.app`).
3. Verify ownership (pick one method — they can coexist):
   - **HTML file (current):** deploy `frontend/public/googleec09f1cde02cab51.html` so Google can fetch `https://hossein-khalili.vercel.app/googleec09f1cde02cab51.html`. Locale middleware must not rewrite this path. This method does **not** need `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
   - **HTML tag (alternative):** set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the meta-tag token and redeploy (emits `<meta name="google-site-verification">`).
   - **DNS:** when you have a custom domain.
4. **Sitemaps** → submit `https://hossein-khalili.vercel.app/sitemap.xml`.
5. Use **URL inspection** on `/en` and `/fa` → **Request indexing**.

Indexing for a new site typically takes **2–8 weeks**. Ranking #1 for your name also depends on backlinks and domain authority.

## 4. LinkedIn and social links

Update [LinkedIn profile](https://www.linkedin.com/in/iamhosseinkhalili/):

- **Featured** — add your site URL with label “Portfolio”
- **About** — include the same URL
- **Headline** — align with site title: *Senior Frontend Engineer*

Repeat the site URL in Telegram bio and GitHub profile when available.

## 5. Post-deploy QA

| Check | Tool |
|-------|------|
| Structured data | [Rich Results Test](https://search.google.com/test/rich-results) on `/en` |
| Mobile performance | Lighthouse on `/en`, `/fa` — Performance ≥ 90, SEO ≥ 95 |
| Open Graph | Share debugger or view `<meta property="og:*">` in page source |

## 6. Custom domain (recommended for name search)

A subdomain like `*.vercel.app` is weaker for brand queries than `hosseinkhalili.com` or `iamhosseinkhalili.com`.

When you buy a domain:

1. Connect it in Vercel → Domains.
2. Update `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com`.
3. Add the new domain in Search Console (or use change-of-address).
4. Resubmit `sitemap.xml`.

## 7. Resume files

Public downloads live in `frontend/public/resume/`:

- English: `hossein-khalili-resume-en.pdf` / `.docx`
- Persian: `hossein-khalili-resume-fa.pdf` / `.docx`
- Legacy alias: `hossein-khalili-resume.pdf` (English PDF, keeps old links working)

Regenerate with `scripts/resume/generate.py` after content changes, then redeploy.
