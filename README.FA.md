<p align="right"><a href="./README.md">English</a> · <strong>فارسی</strong></p>

# حسین خلیلی — وب‌سایت شخصی

پورتfolio دوزبانه (EN/FA) با **Next.js 16**، **TypeScript**، **Tailwind CSS** و **next-intl**.

سایت زنده: [https://hossein-khalili.vercel.app/](https://hossein-khalili.vercel.app/)

## اجرا

```bash
cd frontend
cp ../.env.example .env.local
npm install
npm run dev
```

[http://localhost:3000/en](http://localhost:3000/en) یا [http://localhost:3000/fa](http://localhost:3000/fa)

## متغیر محیطی

از [`.env.example`](./.env.example) در ریشهٔ مخزن کپی کنید. متغیرهای اختیاری / آینده آنجا به‌صورت کامنت هستند تا زمانی که وصل شوند.

| متغیر | توضیح |
|--------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL اصلی برای SEO (بعد از انتخاب دامنه) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | اختیاری — توکن HTML-tag گوگل سرچ کنسول |
| `CONTACT_API_URL` | اختیاری — آدرس API تماس Nest (وقتی وصل شد uncomment کنید) |
| `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `EMAIL_FROM` | فقط backend — هرگز با `NEXT_PUBLIC_` نگذارید |

## ساختار

```
personal-website/
├── frontend/           # اپ Next.js
├── content/data/       # محتوای مرجع
├── .cursor/rules/      # قوانین Cursor
└── AGENTS.md
```

## SEO و Performance

- صفحات marketing به صورت **SSG** ساخته می‌شوند
- فرم تماس فقط در `/contact` lazy-load می‌شود
- هدف Lighthouse: Performance ≥ 90، SEO ≥ 95
- `sitemap.xml`، `robots.txt`، JSON-LD و صفحات `/skills` و `/resume`

جزئیات در `.cursor/rules/seo.mdc` و `performance.mdc`.

**بعد از deploy:** `NEXT_PUBLIC_SITE_URL` را در Vercel تنظیم کنید و [docs/SEO-DEPLOY.FA.md](./docs/SEO-DEPLOY.FA.md) را دنبال کنید (Search Console، لینک LinkedIn).
