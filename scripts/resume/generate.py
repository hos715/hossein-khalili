"""
Generate recruiter-ready EN/FA resume files (PDF + DOCX).

Sources: LinkedIn experience (owner-provided), content-branding.mdc,
and site content in frontend/src/content/data. Does not invent employers,
dates, metrics, or skills.

Usage (from repo root or this folder):
    python -m venv .venv
    .venv/Scripts/pip install -r requirements.txt
    .venv/Scripts/python generate.py
"""

from __future__ import annotations

import html
import shutil
import sys
import tempfile
import urllib.request
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor
from docx.enum.table import WD_TABLE_ALIGNMENT
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent
REPO = ROOT.parents[1]
OUT_DIR = REPO / "frontend" / "public" / "resume"
FONTS_DIR = ROOT / "fonts"

NAVY = RGBColor(0x1B, 0x36, 0x5D)
INK = RGBColor(0x1A, 0x1A, 0x1A)
MUTED = RGBColor(0x4B, 0x55, 0x63)
RULE = RGBColor(0x1B, 0x36, 0x5D)

FONT_URLS = {
    "Inter-Regular.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.5/latin-400-normal.woff2",
    "Inter-SemiBold.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.5/latin-600-normal.woff2",
    "Inter-Bold.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.5/latin-700-normal.woff2",
    "Vazirmatn-Regular.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/vazirmatn@5.2.5/arabic-400-normal.woff2",
    "Vazirmatn-SemiBold.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/vazirmatn@5.2.5/arabic-600-normal.woff2",
    "Vazirmatn-Bold.woff2": "https://cdn.jsdelivr.net/fontsource/fonts/vazirmatn@5.2.5/arabic-700-normal.woff2",
}

PROFILE = {
    "name": {"en": "Hossein Khalili", "fa": "حسین خلیلی"},
    "title": {
        "en": "Senior Frontend Engineer",
        "fa": "مهندس ارشد فرانت‌اند",
    },
    "email": "iamhosseinkhalili@gmail.com",
    "phone": "+989039228802",
    "phone_display": {"en": "+98 903 922 8802", "fa": "+98 903 922 8802"},
    "linkedin": "https://www.linkedin.com/in/iamhosseinkhalili/",
    "linkedin_short": "linkedin.com/in/iamhosseinkhalili",
    "github": "https://github.com/hos715",
    "github_short": "github.com/hos715",
    "telegram": "https://t.me/iamhosseinkhalili",
    "telegram_short": "t.me/iamhosseinkhalili",
}

SUMMARY = {
    "en": (
        "Senior frontend engineer (since 2018) for complex production web applications. "
        "I build React / Next.js / TypeScript UIs for real-time trading, crypto and fintech products, "
        "multi-role dashboards, and data-heavy admin tools — with WebSocket, Socket.io, and SignalR "
        "wired into reliable client state (Redux, Zustand, TanStack Query). Owns frontend architecture "
        "from landing through authenticated product surfaces. Expanding into full-stack with NestJS "
        "on real projects — learning and shipping, not claiming backend expertise."
    ),
    "fa": (
        "مهندس ارشد فرانت‌اند (از ۲۰۱۸) برای اپلیکیشن‌های وب پیچیده در production. "
        "با React / Next.js / TypeScript رابط ترید بلادرنگ، محصولات کریپتو و fintech، "
        "داشبورد چندنقشی و ابزار ادمین داده‌محور می‌سازم — با WebSocket، Socket.io و SignalR "
        "متصل به state قابل نگهداری کلاینت (Redux، Zustand، TanStack Query). "
        "معماری فرانت‌اند را از لندینگ تا سطوح لاگین‌شده محصول بر عهده می‌گیرم. "
        "مسیر فول‌استک را با NestJS روی پروژه واقعی دنبال می‌کنم — یادگیری و ساخت، نه ادعای تخصص بک‌اند."
    ),
}

SKILL_GROUPS = [
    {
        "label": {"en": "Core", "fa": "هسته"},
        "items": "JavaScript, TypeScript, React.js, Next.js",
    },
    {
        "label": {"en": "State & data", "fa": "State و داده"},
        "items": "Redux, Zustand, REST API, WebSocket (Socket.io, SignalR), TanStack Query",
    },
    {
        "label": {"en": "UI", "fa": "رابط کاربری"},
        "items": "Tailwind CSS, Radix UI, ShadCN, Material UI, Ant Design, SCSS",
    },
    {
        "label": {"en": "Tools", "fa": "ابزارها"},
        "items": "Git, Agile / Scrum",
    },
    {
        "label": {"en": "AI (project-scoped)", "fa": "هوش مصنوعی (در محدوده پروژه)"},
        "items": "OpenAI, Llama, image processing",
    },
    {
        "label": {"en": "Learning", "fa": "در حال یادگیری"},
        "items": "NestJS, Node.js backend patterns",
    },
]

JOBS = [
    {
        "company": {"en": "Graphay", "fa": "Graphay"},
        "role": {
            "en": "Frontend Developer, Freelance",
            "fa": "توسعه‌دهنده فرانت‌اند، فریلنس",
        },
        "dates": {"en": "Sep 2025 – Present", "fa": "سپتامبر ۲۰۲۵ – اکنون"},
        "location": {
            "en": "Remote",
            "fa": "دورکاری",
        },
        "bullets": [
            {
                "en": "Frontend development for Graphay React products — production web applications across AI-assisted and product surfaces.",
                "fa": "توسعه فرانت‌اند محصولات React در Graphay — اپلیکیشن‌های وب production در سطوح محصول و رابط‌های مرتبط با AI.",
            },
        ],
    },
    {
        "company": {"en": "Techsnovel", "fa": "Techsnovel"},
        "role": {
            "en": "Frontend Developer, Contract",
            "fa": "توسعه‌دهنده فرانت‌اند، قراردادی",
        },
        "dates": {"en": "Oct 2024 – Sep 2025", "fa": "اکتبر ۲۰۲۴ – سپتامبر ۲۰۲۵"},
        "location": {
            "en": "Remote · Sari, Mazandaran, Iran",
            "fa": "دورکاری · ساری، مازندران",
        },
        "bullets": [
            {
                "en": "Built the full frontend for an AI customer-service product (teechats.com): embeddable widget (AI assistant with business rules and human handoff) plus admin for rules, analytics, and live-support takeover.",
                "fa": "کل فرانت‌اند محصول پشتیبانی مشتری مبتنی بر AI (teechats.com) را ساختم: ویجت چت شناور (دستیار AI محدود به قوانین کسب‌وکار و ارجاع به انسان) به‌همراه پنل ادمین برای قوانین، analytics و ورود به پشتیبانی زنده.",
            },
            {
                "en": "Real-time chat UI with SignalR — typing indicators, message queue, and RBAC-aware roles (React, TypeScript, Zustand).",
                "fa": "UI چت بلادرنگ با SignalR — نشانگر تایپ، صف پیام و نقش‌های آگاه از RBAC (React، TypeScript، Zustand).",
            },
        ],
    },
    {
        "company": {"en": "Graphay", "fa": "Graphay"},
        "role": {
            "en": "Frontend Developer, Part-time",
            "fa": "توسعه‌دهنده فرانت‌اند، پاره‌وقت",
        },
        "dates": {"en": "May 2023 – Dec 2024", "fa": "مه ۲۰۲۳ – دسامبر ۲۰۲۴"},
        "location": {
            "en": "Remote",
            "fa": "دورکاری",
        },
        "bullets": [
            {
                "en": "Led frontend architecture for arz.me (barman-tech / Graphay): SEO landing and authenticated exchange app — wallet, buy/sell, live prices, support. Socket.io market feeds; Next.js, TypeScript, Zustand, TanStack Query.",
                "fa": "معماری فرانت‌اند arz.me را رهبری کردم (زمینه barman-tech / Graphay): لندینگ SEO و اپ لاگین‌شده صرافی — کیف پول، خرید/فروش، قیمت زنده، پشتیبانی. فید بازار Socket.io؛ Next.js، TypeScript، Zustand، TanStack Query.",
            },
            {
                "en": "Frontend for AI chatbot products (Llama / OpenAI) — real-time chat UIs, image-processing integrations, and related Graphay Octopus plugin surfaces.",
                "fa": "فرانت‌اند محصولات چت‌بات AI (Llama / OpenAI) — UI چت بلادرنگ، یکپارچه‌سازی پردازش تصویر، و سطوح پلاگین Graphay Octopus.",
            },
            {
                "en": "Adgame Telegram mini-app (miniapp.adgame.fun): Telegram SDK, TON Connect wallet UI, ads / referral / leaderboard (React, Vite, Zustand, TanStack Query).",
                "fa": "مینی‌اپ تلگرام Adgame (miniapp.adgame.fun): Telegram SDK، UI کیف پول TON Connect، تبلیغات / رفرال / لیدربورد (React، Vite، Zustand، TanStack Query).",
            },
        ],
    },
    {
        "company": {"en": "Detifi", "fa": "Detifi"},
        "role": {
            "en": "Senior Frontend Developer, Contract",
            "fa": "توسعه‌دهنده ارشد فرانت‌اند، قراردادی",
        },
        "dates": {"en": "Mar 2024 – Aug 2024", "fa": "مارس ۲۰۲۴ – اوت ۲۰۲۴"},
        "location": {
            "en": "London Area, UK",
            "fa": "لندن، بریتانیا",
        },
        "bullets": [
            {
                "en": "Frontend for an AI crypto-research product (insights, chatbot, landing), including UX/accessibility on data-heavy investor screens. React / JavaScript frontend — not independent market analysis.",
                "fa": "فرانت‌اند محصول پژوهشی کریپتو مبتنی بر AI (insights، چت‌بات و لندینگ)، شامل UX و دسترسی‌پذیری روی صفحه‌های داده‌محور سرمایه‌گذار. کار فرانت‌اند / JavaScript — نه تحلیل بازار مستقل.",
            },
        ],
    },
    {
        "company": {"en": "Takanesh Academy", "fa": "Takanesh Academy"},
        "role": {
            "en": "Frontend Developer, Part-time",
            "fa": "توسعه‌دهنده فرانت‌اند، پاره‌وقت",
        },
        "dates": {"en": "May 2023 – Aug 2023", "fa": "مه ۲۰۲۳ – اوت ۲۰۲۳"},
        "location": {
            "en": "Tehran, Iran",
            "fa": "تهران، ایران",
        },
        "bullets": [
            {
                "en": "Implemented Figma designs, features, and performance fixes on existing product UI; image-transform / canvas work and related asset flows for an image-generation product aimed at Iranian users.",
                "fa": "پیاده‌سازی طرح‌های Figma، فیچر و بهینه‌سازی روی UI موجود؛ کار image-transform / canvas و فلو دارایی برای محصول تولید تصویر با مخاطب ایرانی.",
            },
        ],
    },
    {
        "company": {"en": "Arsalweb Startup Development CO.", "fa": "Arsalweb Startup Development CO."},
        "role": {
            "en": "Frontend Developer, Contract",
            "fa": "توسعه‌دهنده فرانت‌اند، قراردادی",
        },
        "dates": {"en": "Jul 2022 – Feb 2023", "fa": "ژوئیه ۲۰۲۲ – فوریه ۲۰۲۳"},
        "location": {
            "en": "Remote · Khuzestan, Iran",
            "fa": "دورکاری · خوزستان، ایران",
        },
        "bullets": [
            {
                "en": "Built the Ronda24 hypermarket PWA (Next.js, Tailwind): customer shopping plus organization and logistics panels.",
                "fa": "PWA هایپرمارکت Ronda24 را ساختم (Next.js، Tailwind): خرید مشتری به‌همراه پنل سازمان و لجستیک.",
            },
            {
                "en": "Implemented organization-management UI and a statistics panel (daily / weekly / monthly sales, open orders, customers, revenue).",
                "fa": "UI مدیریت سازمان و پنل آمار (فروش روزانه / هفتگی / ماهانه، سفارش‌های جاری، مشتریان، درآمد) را پیاده کردم.",
            },
            {
                "en": "Shipped two PWA features — shopping history and repurchase of a previous cart — associated with about a 10% sales increase.",
                "fa": "دو قابلیت PWA — تاریخچه خرید و خرید مجدد سبد قبلی — که با افزایش حدود ۱۰٪ فروش همراه بود.",
            },
            {
                "en": "Refactored and debugged production panels (live ops, monitoring, inventory) and conversion-focused landing pages.",
                "fa": "بازنویسی و رفع باگ پنل‌های production (عملیات زنده، پایش، موجودی) و لندینگ‌های متمرکز بر تبدیل.",
            },
        ],
    },
    {
        "company": {"en": "PARSDATA", "fa": "PARSDATA"},
        "role": {
            "en": "Frontend Developer, Contract",
            "fa": "توسعه‌دهنده فرانت‌اند، قراردادی",
        },
        "dates": {"en": "Feb 2022 – Aug 2022", "fa": "فوریه ۲۰۲۲ – اوت ۲۰۲۲"},
        "location": {
            "en": "Tehran Province, Iran",
            "fa": "استان تهران، ایران",
        },
        "bullets": [
            {
                "en": "Frontend for the parsdata.com marketplace: listings, seller dashboard, and multi-step checkout (React, Next.js, TypeScript) — marketplace UI, not the company’s hosting / CMS product line.",
                "fa": "فرانت‌اند مارکت‌پلیس parsdata.com: لیستینگ، داشبورد فروشنده و checkout چندمرحله‌ای (React، Next.js، TypeScript) — UI مارکت‌پلیس، نه خط محصول هاستینگ / CMS شرکت.",
            },
        ],
    },
    {
        "company": {"en": "Mark It Done", "fa": "Mark It Done"},
        "role": {
            "en": "Frontend Web Developer, Contract",
            "fa": "توسعه‌دهنده فرانت‌اند وب، قراردادی",
        },
        "dates": {"en": "Dec 2020 – Nov 2021", "fa": "دسامبر ۲۰۲۰ – نوامبر ۲۰۲۱"},
        "location": {
            "en": "Los Angeles, CA, United States",
            "fa": "لس‌آنجلس، کالیفرنیا، آمریکا",
        },
        "bullets": [
            {
                "en": "Frontend for client work in a design / dev / PM team (markitdone.com): WordPress themes and plugins, Shopify storefronts, and custom software UI — as a frontend contributor, not the agency.",
                "fa": "فرانت‌اند پروژه‌های مشتری در تیمی از دیزاین، توسعه و PM (markitdone.com): تم و پلاگین WordPress، استورفرانت Shopify و UI نرم‌افزار سفارشی — مشارکت‌کننده فرانت‌اند، نه کل آژانس.",
            },
        ],
    },
    {
        "company": {"en": "alborztd.ir", "fa": "alborztd.ir"},
        "role": {
            "en": "Frontend Web Developer",
            "fa": "توسعه‌دهنده فرانت‌اند وب",
        },
        "dates": {"en": "Dec 2018 – Sep 2020", "fa": "دسامبر ۲۰۱۸ – سپتامبر ۲۰۲۰"},
        "location": {
            "en": "On-site · Sari, Mazandaran, Iran",
            "fa": "حضوری · ساری، مازندران",
        },
        "bullets": [
            {
                "en": "Frontend for a narcotic-drug control application for Mazandaran province, used by 400+ centers and 20,000+ patients.",
                "fa": "فرانت‌اند سامانه کنترل داروهای مخدر استان مازندران، مورد استفاده بیش از ۴۰۰ مرکز و بیش از ۲۰٬۰۰۰ بیمار.",
            },
            {
                "en": "Appointment UI for patients to receive medicines; monthly consumption checks; per-center consumption reporting (HTML, CSS, jQuery).",
                "fa": "UI نوبت‌دهی برای دریافت دارو؛ کنترل مصرف ماهانه؛ گزارش مصرف به‌ازای هر مرکز (HTML، CSS، jQuery).",
            },
        ],
    },
    {
        "company": {"en": "alborztd.ir", "fa": "alborztd.ir"},
        "role": {
            "en": "Frontend Web Developer",
            "fa": "توسعه‌دهنده فرانت‌اند وب",
        },
        "dates": {"en": "Aug 2016 – May 2017", "fa": "اوت ۲۰۱۶ – مه ۲۰۱۷"},
        "location": {
            "en": "Sari, Mazandaran, Iran",
            "fa": "ساری، مازندران",
        },
        "bullets": [
            {
                "en": "Frontend web development with HTML and CSS. Earlier tenure at the same company.",
                "fa": "توسعه فرانت‌اند وب با HTML و CSS. دوره قبلی همکاری با همان شرکت.",
            },
        ],
    },
]

PROJECTS = [
    {
        "title": {"en": "Crypto Exchange", "fa": "صرافی ارز"},
        "url": "https://arz.me",
        "blurb": {
            "en": "Led frontend architecture from scratch: public landing + authenticated trading (wallet, buy/sell, support). Socket.io live markets. Next.js, TypeScript, Zustand, TanStack Query.",
            "fa": "معماری فرانت‌اند از صفر: لندینگ عمومی + ترید لاگین‌شده (کیف پول، خرید/فروش، پشتیبانی). بازار زنده Socket.io. Next.js، TypeScript، Zustand، TanStack Query.",
        },
    },
    {
        "title": {"en": "Crypto Exchange", "fa": "صرافی ارز"},
        "url": "https://xpay.co",
        "blurb": {
            "en": "User trading SPA (app.xpay.co), ops admin, and public digital receipts (viral-team). SignalR live updates, Redux Toolkit, Ant Design; RTL and Jalali date UX.",
            "fa": "SPA ترید کاربر (app.xpay.co)، ادمین عملیات و رسید دیجیتال عمومی (همکاری viral-team). به‌روزرسانی زنده SignalR، Redux Toolkit، Ant Design؛ UX راست‌چین و تاریخ جلالی.",
        },
    },
    {
        "title": {
            "en": "Multi-Panel E-Commerce",
            "fa": "فروشگاه چندپنلی",
        },
        "url": None,
        "blurb": {
            "en": "Admin, warehouse, basket-picker, postman, storefront, and PWA on one shared order domain. Next.js, Redux, TypeScript. Internal delivery — no public marketing URL.",
            "fa": "ادمین، انبار، انتخاب‌گر سبد، پستچی، فروشگاه و PWA روی یک دامنه سفارش مشترک. Next.js، Redux، TypeScript. تحویل داخلی — بدون URL عمومی مارکتینگ.",
        },
    },
    {
        "title": {
            "en": "Additional production work",
            "fa": "کارهای production دیگر",
        },
        "url": None,
        "blurb": {
            "en": "VisaPay (visapay.me), SwapNet (swapnet.app), Adgame (miniapp.adgame.fun), Ariascale (ariascale.ir), PSPro (pspro.ir), Ketabfeed (ketabfeed.com), and internal exchange UI (EppoChange).",
            "fa": "VisaPay (visapay.me)، SwapNet (swapnet.app)، Adgame (miniapp.adgame.fun)، Ariascale (ariascale.ir)، PSPro (pspro.ir)، کتاب‌فید (ketabfeed.com) و UI داخلی صرافی (EppoChange).",
        },
    },
]

EDUCATION = {
    "en": "Bachelor of Software Engineering — HADAF University of Mazandaran (2015)",
    "fa": "کارشناسی مهندسی نرم‌افزار — دانشگاه هدف مازندران (۲۰۱۵)",
}

ADDITIONAL = {
    "en": "Languages: Persian (native), English.  Six LinkedIn recommendations.",
    "fa": "زبان‌ها: فارسی (زبان مادری)، انگلیسی.  شش توصیه در LinkedIn.",
}

LABELS = {
    "summary": {"en": "Summary", "fa": "خلاصه"},
    "skills": {"en": "Skills", "fa": "مهارت‌ها"},
    "experience": {"en": "Experience", "fa": "سوابق شغلی"},
    "projects": {"en": "Selected Projects", "fa": "پروژه‌های منتخب"},
    "education": {"en": "Education", "fa": "تحصیلات"},
    "additional": {"en": "Additional", "fa": "سایر"},
    "footer": {
        "en": "Hossein Khalili  ·  Senior Frontend Engineer",
        "fa": "حسین خلیلی  ·  مهندس ارشد فرانت‌اند",
    },
}


def t(obj: dict, locale: str) -> str:
    return obj[locale]


def e(text: str) -> str:
    return html.escape(text, quote=True)


def download_fonts() -> None:
    FONTS_DIR.mkdir(parents=True, exist_ok=True)
    for name, url in FONT_URLS.items():
        dest = FONTS_DIR / name
        if dest.exists() and dest.stat().st_size > 1000:
            continue
        print(f"Downloading {name}...")
        req = urllib.request.Request(url, headers={"User-Agent": "resume-generator/1.0"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            dest.write_bytes(resp.read())
        if dest.stat().st_size < 1000:
            raise RuntimeError(f"Font download failed or too small: {name}")


def font_uri(name: str) -> str:
    return (FONTS_DIR / name).resolve().as_uri()


def render_html(locale: str) -> str:
    rtl = locale == "fa"
    direction = "rtl" if rtl else "ltr"
    lang = "fa" if rtl else "en"
    family = "Vazirmatn, Tahoma, sans-serif" if rtl else "Inter, 'Segoe UI', sans-serif"
    name = t(PROFILE["name"], locale)
    headline = t(PROFILE["title"], locale)

    jobs_html = []
    for job in JOBS:
        bullets = "".join(
            f"<li>{e(t(b, locale))}</li>" for b in job["bullets"]
        )
        jobs_html.append(
            f"""
            <article class="job">
              <div class="job-top">
                <div>
                  <h3 dir="auto">{e(t(job['company'], locale))}</h3>
                  <p class="role">{e(t(job['role'], locale))}</p>
                </div>
                <div class="meta">
                  <p class="dates">{e(t(job['dates'], locale))}</p>
                  <p class="loc">{e(t(job['location'], locale))}</p>
                </div>
              </div>
              <ul>{bullets}</ul>
            </article>
            """
        )

    skills_html = []
    for g in SKILL_GROUPS:
        items = e(g["items"])
        if rtl:
            items = f'<span dir="ltr">{items}</span>'
        skills_html.append(
            f"<p><span class='sk'>{e(t(g['label'], locale))}</span> {items}</p>"
        )
    skills_html = "".join(skills_html)

    projects_html = []
    for p in PROJECTS:
        url = p.get("url")
        proj_title = e(t(p["title"], locale))
        if url:
            label = e(url.replace("https://", ""))
            heading = f'{proj_title} — <a href="{e(url)}" dir="ltr">{label}</a>'
        else:
            heading = proj_title
        projects_html.append(
            f"""
            <article class="proj">
              <h3>{heading}</h3>
              <p>{e(t(p['blurb'], locale))}</p>
            </article>
            """
        )

    contact_parts = [
        f'<a href="mailto:{PROFILE["email"]}">{e(PROFILE["email"])}</a>',
        f'<a href="tel:{PROFILE["phone"]}">{e(t(PROFILE["phone_display"], locale))}</a>',
        f'<a href="{PROFILE["linkedin"]}">{e(PROFILE["linkedin_short"])}</a>',
        f'<a href="{PROFILE["github"]}">{e(PROFILE["github_short"])}</a>',
        f'<a href="{PROFILE["telegram"]}">{e(PROFILE["telegram_short"])}</a>',
    ]
    contact = " <span class='dot'>·</span> ".join(contact_parts)

    if rtl:
        font_faces = f"""
        @font-face {{
          font-family: 'Vazirmatn';
          src: url('{font_uri("Vazirmatn-Regular.woff2")}') format('woff2');
          font-weight: 400; font-style: normal; font-display: swap;
        }}
        @font-face {{
          font-family: 'Vazirmatn';
          src: url('{font_uri("Vazirmatn-SemiBold.woff2")}') format('woff2');
          font-weight: 600; font-style: normal; font-display: swap;
        }}
        @font-face {{
          font-family: 'Vazirmatn';
          src: url('{font_uri("Vazirmatn-Bold.woff2")}') format('woff2');
          font-weight: 700; font-style: normal; font-display: swap;
        }}
        """
    else:
        font_faces = f"""
        @font-face {{
          font-family: 'Inter';
          src: url('{font_uri("Inter-Regular.woff2")}') format('woff2');
          font-weight: 400; font-style: normal; font-display: swap;
        }}
        @font-face {{
          font-family: 'Inter';
          src: url('{font_uri("Inter-SemiBold.woff2")}') format('woff2');
          font-weight: 600; font-style: normal; font-display: swap;
        }}
        @font-face {{
          font-family: 'Inter';
          src: url('{font_uri("Inter-Bold.woff2")}') format('woff2');
          font-weight: 700; font-style: normal; font-display: swap;
        }}
        """

    footer = e(t(LABELS["footer"], locale))

    return f"""<!DOCTYPE html>
<html lang="{lang}" dir="{direction}">
<head>
  <meta charset="utf-8" />
  <title>{e(name)} — Resume</title>
  <style>
    {font_faces}
    @page {{
      size: A4;
      margin: 11mm 13.5mm 14mm 13.5mm;
      @bottom-center {{
        content: "{footer}  ·  " counter(page);
        font-family: {family};
        font-size: 8pt;
        color: #64748b;
      }}
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    html, body {{
      font-family: {family};
      font-size: 10pt;
      line-height: 1.3;
      color: #1a1a1a;
      background: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}
    a {{ color: #1b365d; text-decoration: none; }}
    header {{
      padding-bottom: 6px;
      border-bottom: 2px solid #1b365d;
      margin-bottom: 8px;
    }}
    h1 {{
      font-size: 20.5pt;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #1b365d;
      line-height: 1.12;
    }}
    .title {{
      margin-top: 2px;
      font-size: 10.6pt;
      font-weight: 600;
      color: #334155;
    }}
    .contact {{
      margin-top: 5px;
      font-size: 8.7pt;
      color: #475569;
      line-height: 1.4;
    }}
    .dot {{ color: #94a3b8; padding: 0 1px; }}
    h2 {{
      font-size: 9.2pt;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #1b365d;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
      margin: 8px 0 4px;
      break-after: avoid;
    }}
    html[dir="rtl"] h2 {{
      letter-spacing: 0.04em;
      text-transform: none;
    }}
    .summary {{
      color: #1e293b;
    }}
    .skills p {{
      margin: 1px 0;
    }}
    .sk {{
      font-weight: 700;
      color: #1b365d;
    }}
    .job {{
      margin-bottom: 6px;
      break-inside: avoid;
    }}
    .job-top {{
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: baseline;
    }}
    .job h3, .proj h3 {{
      font-size: 10.2pt;
      font-weight: 700;
      color: #0f172a;
    }}
    .role {{
      font-size: 9.4pt;
      font-weight: 600;
      color: #1b365d;
    }}
    .meta {{
      text-align: end;
      white-space: nowrap;
      font-size: 8.8pt;
      color: #475569;
    }}
    .dates {{ font-weight: 600; color: #334155; }}
    .job ul {{
      margin: 2px 0 0 1.1em;
      padding: 0;
    }}
    html[dir="rtl"] .job ul {{
      margin: 2px 1.1em 0 0;
    }}
    .job li {{
      margin: 1px 0;
    }}
    .proj {{
      margin-bottom: 4px;
      break-inside: avoid;
    }}
    .proj h3 a {{
      font-weight: 600;
      font-size: 10pt;
      color: #1b365d;
    }}
    .edu {{
      font-weight: 600;
    }}
    .tail {{
      break-inside: avoid;
    }}
  </style>
</head>
<body>
  <header>
    <h1>{e(name)}</h1>
    <p class="title">{e(headline)}</p>
    <p class="contact">{contact}</p>
  </header>
  <h2>{e(t(LABELS["summary"], locale))}</h2>
  <p class="summary">{e(t(SUMMARY, locale))}</p>
  <h2>{e(t(LABELS["skills"], locale))}</h2>
  <div class="skills">{skills_html}</div>
  <h2>{e(t(LABELS["experience"], locale))}</h2>
  {"".join(jobs_html)}
  <h2>{e(t(LABELS["projects"], locale))}</h2>
  {"".join(projects_html)}
  <div class="tail">
  <h2>{e(t(LABELS["education"], locale))}</h2>
  <p class="edu">{e(t(EDUCATION, locale))}</p>
  <h2>{e(t(LABELS["additional"], locale))}</h2>
  <p>{e(t(ADDITIONAL, locale))}</p>
  </div>
</body>
</html>
"""


def set_run_font(run, name: str, rtl: bool = False) -> None:
    run.font.name = name
    r = run._element
    rPr = r.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:ascii"), name)
    rFonts.set(qn("w:hAnsi"), name)
    rFonts.set(qn("w:eastAsia"), name)
    rFonts.set(qn("w:cs"), name)
    if rtl:
        cs = rPr.find(qn("w:cs"))
        if cs is None:
            cs = OxmlElement("w:cs")
            rPr.append(cs)
        rtl_el = rPr.find(qn("w:rtl"))
        if rtl_el is None:
            rtl_el = OxmlElement("w:rtl")
            rPr.append(rtl_el)


def set_paragraph_rtl(paragraph) -> None:
    pPr = paragraph._p.get_or_add_pPr()
    bidi = pPr.find(qn("w:bidi"))
    if bidi is None:
        bidi = OxmlElement("w:bidi")
        pPr.append(bidi)
    bidi.set(qn("w:val"), "1")
    jc = pPr.find(qn("w:jc"))
    if jc is None:
        jc = OxmlElement("w:jc")
        pPr.append(jc)
    jc.set(qn("w:val"), "right")


def add_bottom_border(paragraph, color: str = "1B365D", size: str = "12") -> None:
    pPr = paragraph._p.get_or_add_pPr()
    pBdr = pPr.find(qn("w:pBdr"))
    if pBdr is None:
        pBdr = OxmlElement("w:pBdr")
        pPr.append(pBdr)
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), size)
    bottom.set(qn("w:space"), "4")
    bottom.set(qn("w:color"), color)
    pBdr.append(bottom)


def add_hyperlink(paragraph, text: str, url: str, font_name: str, size: Pt, color: RGBColor, rtl: bool) -> None:
    part = paragraph.part
    r_id = part.relate_to(
        url,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        is_external=True,
    )
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), r_id)
    new_run = OxmlElement("w:r")
    rPr = OxmlElement("w:rPr")
    rFonts = OxmlElement("w:rFonts")
    rFonts.set(qn("w:ascii"), font_name)
    rFonts.set(qn("w:hAnsi"), font_name)
    rFonts.set(qn("w:cs"), font_name)
    rPr.append(rFonts)
    sz = OxmlElement("w:sz")
    sz.set(qn("w:val"), str(int(size.pt * 2)))
    rPr.append(sz)
    color_el = OxmlElement("w:color")
    color_el.set(qn("w:val"), "1B365D")
    rPr.append(color_el)
    if rtl:
        rtl_el = OxmlElement("w:rtl")
        rPr.append(rtl_el)
    new_run.append(rPr)
    t_el = OxmlElement("w:t")
    t_el.set(qn("xml:space"), "preserve")
    t_el.text = text
    new_run.append(t_el)
    hyperlink.append(new_run)
    paragraph._p.append(hyperlink)


def add_text_run(paragraph, text: str, font_name: str, size: Pt, *, bold=False, color=INK, rtl=False):
    run = paragraph.add_run(text)
    run.bold = bold
    run.font.size = size
    run.font.color.rgb = color
    set_run_font(run, font_name, rtl=rtl)
    return run


def set_spacing(paragraph, before=0, after=4, line=240):
    pf = paragraph.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing = line / 240
    pf.line_spacing_rule = WD_LINE_SPACING.MULTIPLE


def heading_para(doc, text: str, font_name: str, rtl: bool):
    p = doc.add_paragraph()
    if rtl:
        set_paragraph_rtl(p)
    set_spacing(p, before=8, after=3, line=216)
    add_bottom_border(p, "CBD5E1", "8")
    add_text_run(p, text.upper() if not rtl else text, font_name, Pt(11), bold=True, color=NAVY, rtl=rtl)
    return p


def write_docx(locale: str, dest: Path) -> None:
    rtl = locale == "fa"
    font_name = "Tahoma" if rtl else "Calibri"
    doc = Document()

    section = doc.sections[0]
    section.page_width = Cm(21.0)
    section.page_height = Cm(29.7)
    section.left_margin = Cm(1.4)
    section.right_margin = Cm(1.4)
    section.top_margin = Cm(1.3)
    section.bottom_margin = Cm(1.5)

    if rtl:
        sectPr = section._sectPr
        bidi = OxmlElement("w:bidi")
        bidi.set(qn("w:val"), "1")
        sectPr.append(bidi)

    footer = section.footer
    fp = footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    if rtl:
        set_paragraph_rtl(fp)
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_text_run(fp, t(LABELS["footer"], locale), font_name, Pt(8), color=MUTED, rtl=rtl)

    # Name
    p = doc.add_paragraph()
    if rtl:
        set_paragraph_rtl(p)
    set_spacing(p, before=0, after=0, line=240)
    add_text_run(p, t(PROFILE["name"], locale), font_name, Pt(22), bold=True, color=NAVY, rtl=rtl)

    p = doc.add_paragraph()
    if rtl:
        set_paragraph_rtl(p)
    set_spacing(p, before=2, after=4, line=240)
    add_text_run(p, t(PROFILE["title"], locale), font_name, Pt(12), bold=True, color=MUTED, rtl=rtl)

    p = doc.add_paragraph()
    if rtl:
        set_paragraph_rtl(p)
    set_spacing(p, before=0, after=6, line=230)
    add_bottom_border(p, "1B365D", "18")
    add_hyperlink(p, PROFILE["email"], f"mailto:{PROFILE['email']}", font_name, Pt(9.5), NAVY, rtl)
    add_text_run(p, "  ·  ", font_name, Pt(9.5), color=MUTED, rtl=rtl)
    add_hyperlink(p, t(PROFILE["phone_display"], locale), f"tel:{PROFILE['phone']}", font_name, Pt(9.5), NAVY, rtl)
    add_text_run(p, "  ·  ", font_name, Pt(9.5), color=MUTED, rtl=rtl)
    add_hyperlink(p, PROFILE["linkedin_short"], PROFILE["linkedin"], font_name, Pt(9.5), NAVY, rtl)
    add_text_run(p, "  ·  ", font_name, Pt(9.5), color=MUTED, rtl=rtl)
    add_hyperlink(p, PROFILE["github_short"], PROFILE["github"], font_name, Pt(9.5), NAVY, rtl)
    add_text_run(p, "  ·  ", font_name, Pt(9.5), color=MUTED, rtl=rtl)
    add_hyperlink(p, PROFILE["telegram_short"], PROFILE["telegram"], font_name, Pt(9.5), NAVY, rtl)

    heading_para(doc, t(LABELS["summary"], locale), font_name, rtl)
    p = doc.add_paragraph()
    if rtl:
        set_paragraph_rtl(p)
    set_spacing(p, before=0, after=4, line=240)
    add_text_run(p, t(SUMMARY, locale), font_name, Pt(10.5), rtl=rtl)

    heading_para(doc, t(LABELS["skills"], locale), font_name, rtl)
    for g in SKILL_GROUPS:
        p = doc.add_paragraph()
        if rtl:
            set_paragraph_rtl(p)
        set_spacing(p, before=0, after=1, line=230)
        add_text_run(p, t(g["label"], locale) + "  ", font_name, Pt(10.5), bold=True, color=NAVY, rtl=rtl)
        add_text_run(p, g["items"], font_name, Pt(10.5), rtl=rtl)

    heading_para(doc, t(LABELS["experience"], locale), font_name, rtl)
    for job in JOBS:
        p = doc.add_paragraph()
        if rtl:
            set_paragraph_rtl(p)
        set_spacing(p, before=4, after=0, line=220)
        add_text_run(p, t(job["company"], locale), font_name, Pt(11), bold=True, color=INK, rtl=rtl)
        add_text_run(p, "    ", font_name, Pt(10), rtl=rtl)
        add_text_run(p, t(job["dates"], locale), font_name, Pt(10), bold=True, color=MUTED, rtl=rtl)

        p = doc.add_paragraph()
        if rtl:
            set_paragraph_rtl(p)
        set_spacing(p, before=0, after=1, line=220)
        add_text_run(p, t(job["role"], locale), font_name, Pt(10.5), bold=True, color=NAVY, rtl=rtl)
        add_text_run(p, "  ·  " + t(job["location"], locale), font_name, Pt(10), color=MUTED, rtl=rtl)

        for b in job["bullets"]:
            p = doc.add_paragraph(style="List Bullet")
            if rtl:
                set_paragraph_rtl(p)
            set_spacing(p, before=0, after=1, line=230)
            # Clear default run if any
            if p.runs:
                p.runs[0].text = ""
            add_text_run(p, t(b, locale), font_name, Pt(10.5), rtl=rtl)

    heading_para(doc, t(LABELS["projects"], locale), font_name, rtl)
    for proj in PROJECTS:
        p = doc.add_paragraph()
        if rtl:
            set_paragraph_rtl(p)
        set_spacing(p, before=4, after=0, line=230)
        add_text_run(p, t(proj["title"], locale), font_name, Pt(11), bold=True, rtl=rtl)
        if proj["url"]:
            add_text_run(p, "  ", font_name, Pt(10), rtl=rtl)
            add_hyperlink(
                p,
                proj["url"].replace("https://", ""),
                proj["url"],
                font_name,
                Pt(10),
                NAVY,
                rtl,
            )
        p = doc.add_paragraph()
        if rtl:
            set_paragraph_rtl(p)
        set_spacing(p, before=0, after=2, line=230)
        add_text_run(p, t(proj["blurb"], locale), font_name, Pt(10.5), rtl=rtl)

    heading_para(doc, t(LABELS["education"], locale), font_name, rtl)
    p = doc.add_paragraph()
    if rtl:
        set_paragraph_rtl(p)
    set_spacing(p, before=0, after=2, line=230)
    add_text_run(p, t(EDUCATION, locale), font_name, Pt(10.5), bold=True, rtl=rtl)

    heading_para(doc, t(LABELS["additional"], locale), font_name, rtl)
    p = doc.add_paragraph()
    if rtl:
        set_paragraph_rtl(p)
    set_spacing(p, before=0, after=0, line=230)
    add_text_run(p, t(ADDITIONAL, locale), font_name, Pt(10.5), rtl=rtl)

    dest.parent.mkdir(parents=True, exist_ok=True)
    doc.save(dest)


def html_to_pdf(html_str: str, dest: Path) -> None:
    from playwright.sync_api import sync_playwright

    dest.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        html_path = Path(tmp) / "resume.html"
        html_path.write_text(html_str, encoding="utf-8")
        with sync_playwright() as p:
            browser = None
            last_err = None
            for channel in ("msedge", "chrome", None):
                try:
                    if channel:
                        browser = p.chromium.launch(channel=channel)
                    else:
                        browser = p.chromium.launch()
                    break
                except Exception as err:
                    last_err = err
            if browser is None:
                raise RuntimeError(
                    "Could not launch a browser for PDF export. "
                    "Install Playwright Chromium (`playwright install chromium`) "
                    f"or Microsoft Edge. Last error: {last_err}"
                )
            page = browser.new_page()
            page.goto(html_path.as_uri(), wait_until="networkidle")
            page.evaluate("() => document.fonts.ready")
            page.pdf(
                path=str(dest),
                format="A4",
                print_background=True,
                prefer_css_page_size=True,
                margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
            )
            browser.close()


def verify(path: Path, kind: str) -> dict:
    import unicodedata

    size = path.stat().st_size
    if size < 2000:
        raise RuntimeError(f"{path} is too small ({size} bytes)")
    info = {"path": str(path), "bytes": size}
    if kind == "pdf":
        reader = PdfReader(str(path))
        pages = len(reader.pages)
        info["pages"] = pages
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        info["chars"] = len(text)
        if pages < 1 or pages > 2:
            raise RuntimeError(f"{path} has {pages} pages; expected 1–2")
        if info["chars"] < 400:
            raise RuntimeError(f"PDF text extraction too thin: {path}")
        folded = unicodedata.normalize("NFKC", text)
        if "Hossein" not in folded and "حسین" not in folded and "خلیلی" not in folded:
            # Arabic presentation forms still count as a rendered name.
            if "Khalili" not in folded and "ﺧﻠﯿﻠﯽ" not in text and "ﺣﺴﯿﻦ" not in text:
                raise RuntimeError(f"PDF text extraction missing name: {path}")
        if "Senior Frontend Engineer for Complex" in folded:
            raise RuntimeError(f"PDF still has the long headline: {path}")
        header = folded.split("SUMMARY")[0] if "SUMMARY" in folded else folded.split("خلاصه")[0]
        for banned in ("Tehran", "Iran", "تهران", "ایران"):
            if banned in header:
                raise RuntimeError(f"Header still mentions {banned}: {path}")
        if path.name.endswith("-en.pdf") or path.name == "hossein-khalili-resume.pdf":
            if "Senior Frontend Engineer" not in folded:
                raise RuntimeError(f"English PDF missing headline title: {path}")
    else:
        doc = Document(str(path))
        texts = [p.text for p in doc.paragraphs if p.text.strip()]
        info["paragraphs"] = len(texts)
        blob = "\n".join(texts)
        if "Hossein" not in blob and "حسین" not in blob:
            raise RuntimeError(f"DOCX missing name: {path}")
    return info


def main() -> int:
    print("Downloading fonts if needed...")
    download_fonts()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    results = []
    for locale in ("en", "fa"):
        print(f"Building {locale} DOCX...")
        docx_path = OUT_DIR / f"hossein-khalili-resume-{locale}.docx"
        write_docx(locale, docx_path)
        results.append(verify(docx_path, "docx"))

        print(f"Building {locale} PDF...")
        html_str = render_html(locale)
        pdf_path = OUT_DIR / f"hossein-khalili-resume-{locale}.pdf"
        html_to_pdf(html_str, pdf_path)
        results.append(verify(pdf_path, "pdf"))

    # Keep the existing public path working (English PDF).
    legacy = OUT_DIR / "hossein-khalili-resume.pdf"
    shutil.copyfile(OUT_DIR / "hossein-khalili-resume-en.pdf", legacy)
    results.append(verify(legacy, "pdf"))

    print("\nGenerated files:")
    for item in results:
        extra = f", {item['pages']} pages" if "pages" in item else f", {item.get('paragraphs', '?')} paragraphs"
        print(f"  {item['path']}  ({item['bytes']} bytes{extra})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
