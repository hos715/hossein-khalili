<p align="right"><a href="./SEO-DEPLOY.md">English</a> · <strong>فارسی</strong></p>

# چک‌لیست استقرار سئو

بعد از deploy فرانت‌اند روی Vercel (یا هر هاست) این مراحل را انجام دهید.

## ۱. متغیر محیطی

در Vercel **Project → Settings → Environment Variables**:

| متغیر | مقدار |
|-------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` (یا دامنه اختصاصی) |

بعد از تغییر، redeploy کنید. بدون این متغیر، canonical و `sitemap.xml` به `localhost` اشاره می‌کنند.

## ۲. بررسی خروجی build

```bash
cd frontend
npm run build && npm run start
```

- View Page Source روی `/fa` — نام و ناوبری بدون JS دیده شود
- `/sitemap.xml` — همه localeها، skills، resume، بلاگ و پروژه‌ها
- `/robots.txt` — allow `/`، disallow `/api/`

## ۳. Google Search Console

1. [Google Search Console](https://search.google.com/search-console)
2. افزودن property با URL production
3. تأیید مالکیت (HTML tag یا DNS با دامنه اختصاصی)
4. ارسال sitemap: `https://xxx.vercel.app/sitemap.xml`
5. URL inspection برای `/en` و `/fa` → Request indexing

ایندکس سایت جدید معمولاً **۲ تا ۸ هفته** طول می‌کشد. رتبه اول روی نام به بک‌لینک و اعتبار دامنه هم بستگی دارد.

## ۴. LinkedIn و شبکه‌های اجتماعی

در [پروفایل LinkedIn](https://www.linkedin.com/in/iamhosseinkhalili/):

- **Featured** — لینک سایت
- **About** — همان URL
- **Headline** — هم‌راستا با عنوان سایت

همین URL را در bio تلگرام و GitHub قرار دهید.

## ۵. QA بعد از deploy

| بررسی | ابزار |
|-------|--------|
| Structured data | Rich Results Test روی `/fa` |
| موبایل | Lighthouse — Performance ≥ 90، SEO ≥ 95 |
| Open Graph | meta tagهای `og:*` در source |

## ۶. دامنه اختصاصی (توصیه برای جستجوی نام)

`*.vercel.app` برای brand query ضعیف‌تر از دامنه اختصاصی است.

بعد از خرید دامنه:

1. اتصال در Vercel
2. به‌روزرسانی `NEXT_PUBLIC_SITE_URL`
3. property جدید در Search Console
4. ارسال مجدد sitemap

## ۷. جایگزینی PDF رزومه

فایل `frontend/public/resume/hossein-khalili-resume.pdf` را با رزومه نهایی عوض کنید و redeploy کنید.
