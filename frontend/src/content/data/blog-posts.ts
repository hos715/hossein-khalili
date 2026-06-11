export type BlogPost = {
  slug: string;
  locale: "en" | "fa";
  translationSlug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  draft?: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "websocket-trading-state",
    locale: "en",
    translationSlug: "websocket-trading-state",
    title: "Managing Trade State with WebSockets in a Crypto Exchange",
    description:
      "Lessons from building live price feeds and order state on arz.me — without over-engineering.",
    publishedAt: "2025-11-10",
    updatedAt: "2025-11-10",
    tags: ["react", "websocket", "state-management"],
    content: `Building a crypto exchange front-end means living inside two timelines: what the server last confirmed, and what the market is doing right now.

On **arz.me**, live prices arrive over WebSocket while order state still has to respect REST confirmations. The mistake I see often is merging those into one giant store on day one.

## Separate concerns early

- **Market stream** — ephemeral, high frequency, safe to drop stale ticks
- **Order book / user orders** — authoritative only after API confirmation
- **UI chrome** — connection status, reconnection backoff, last updated timestamps

Keeping the market stream in its own module (even a simple Zustand slice or isolated Redux reducer) prevents trade actions from re-rendering on every tick.

## Reconnection is a product feature

Users notice disconnects during volatility. Show state clearly:

1. Connected — normal UI
2. Reconnecting — disable submit, keep last prices visible with a stale badge
3. Offline — block new orders, explain why

## Do not over-subscribe

Subscribe only to symbols the user is viewing. Unsubscribe on route change. This sounds obvious until every panel inherits a global socket singleton dumping 200 symbols into React.

## Takeaway

WebSocket is not a replacement for REST — it is a parallel channel with different consistency rules. Design state boundaries around that and the UI stays predictable even when the market is not.`,
  },
  {
    slug: "websocket-trading-state",
    locale: "fa",
    translationSlug: "websocket-trading-state",
    title: "مدیریت State معاملات با WebSocket در صرافی",
    description:
      "درس‌هایی از ساخت feed قیمت لحظه‌ای و state سفارش در arz.me — بدون over-engineering.",
    publishedAt: "2025-11-10",
    updatedAt: "2025-11-10",
    tags: ["react", "websocket", "state-management"],
    content: `فرانت‌اند صرافی یعنی کار در دو timeline همزمان: آخرین وضعیت تأییدشده سرور، و اتفاقی که **الان** در بازار می‌افتد.

در **arz.me** قیمت‌ها از WebSocket می‌آیند، اما state سفارش باید با REST هماهنگ بماند. اشتباه رایج: از روز اول همه‌چیز را در یک store بزرگ ریختن.

## concernها را زود جدا کنید

- **Market stream** — ephemeral، پرفرکانس، tick کهنه را می‌شود دور ریخت
- **سفارش کاربر** — فقط بعد از تأیید API authoritative است
- **UI** — وضعیت اتصال، backoff reconnect، زمان آخرین به‌روزرسانی

stream بازار را در ماژول جدا نگه دارید تا هر tick باعث re-render actionهای trade نشود.

## reconnect یک فیچر محصول است

در نوسان، قطعی connection دیده می‌شود:

1. Connected — UI عادی
2. Reconnecting — submit غیرفعال، قیمت آخر با badge stale
3. Offline — سفارش جدید block، دلیل واضح

## over-subscribe نکنید

فقط symbolهای visible را subscribe کنید. با تغییر route unsubscribe کنید.

## جمع‌بندی

WebSocket جایگزین REST نیست — کانال موازی با consistency متفاوت. state را دور همین مرزبندی بسازید.`,
  },
  {
    slug: "redux-vs-zustand-panels",
    locale: "en",
    translationSlug: "redux-vs-zustand-panels",
    title: "Redux vs Zustand in Multi-Panel E-Commerce",
    description:
      "When a warehouse panel and a storefront share a codebase but not the same state shape.",
    publishedAt: "2025-12-01",
    updatedAt: "2025-12-01",
    tags: ["redux", "zustand", "nextjs"],
    content: `Multi-panel e-commerce is not one app — it is several operational surfaces that happen to share components.

## Redux where audit trails matter

Warehouse and admin panels benefited from Redux: predictable actions, time-travel debugging during complex order flows, and explicit middleware for side effects.

## Zustand where speed matters

Customer-facing chat and lightweight dashboards moved faster with Zustand — less boilerplate, colocated stores, easier to delete when a feature dies.

## Rule of thumb I use

- Cross-panel shared domain state with strict transitions → Redux
- Feature-local UI state with short lifetime → Zustand or React state
- Do not pick one library for brand consistency — pick for change frequency and debugging needs`,
  },
  {
    slug: "redux-vs-zustand-panels",
    locale: "fa",
    translationSlug: "redux-vs-zustand-panels",
    title: "Redux در برابر Zustand در فروشگاه چندپنلی",
    description:
      "وقتی پنل انبار و storefront codebase مشترک دارند اما shape state یکسان نیست.",
    publishedAt: "2025-12-01",
    updatedAt: "2025-12-01",
    tags: ["redux", "zustand", "nextjs"],
    content: `فروشگاه چندپنلی یک app نیست — چند surface عملیاتی است که component مشترک دارند.

## Redux جایی که audit مهم است

پنل انبار و admin از Redux سود برد: action قابل پیش‌بینی، debug فلو سفارش، middleware برای side effect.

## Zustand جایی که سرعت تحویل مهم است

چت مشتری و dashboard سبک با Zustand سریع‌تر جلو رفت — boilerplate کمتر، store colocated.

## قاعده‌ای که استفاده می‌کنم

- state دامنه مشترک با transition سخت → Redux
- state UI موقت و feature-local → Zustand یا React state
- یک کتابخانه را برای «برند» انتخاب نکنید — برای frequency تغییر و نیاز debug انتخاب کنید`,
  },
];

export function getBlogPosts(locale: "en" | "fa") {
  return blogPosts
    .filter((p) => p.locale === locale && !p.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getBlogPost(locale: "en" | "fa", slug: string) {
  return blogPosts.find((p) => p.locale === locale && p.slug === slug && !p.draft);
}
