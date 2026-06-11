<p align="right"><a href="./README.md">English</a> · <strong>فارسی</strong></p>

# حسین خلیلی — وب‌سایت شخصی

پورتfolio دوزبانه (EN/FA) با **Next.js 16**، **TypeScript**، **Tailwind CSS** و **next-intl**.

## اجرا

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

[http://localhost:3000/en](http://localhost:3000/en) یا [http://localhost:3000/fa](http://localhost:3000/fa)

## متغیر محیطی

| متغیر | توضیح |
|--------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL اصلی برای SEO (بعد از انتخاب دامنه) |

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

جزئیات در `.cursor/rules/seo.mdc` و `performance.mdc`.
