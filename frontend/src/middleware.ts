import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Only `/` and locale-prefixed routes. Static files are not matched, so
  // /googleec09f1cde02cab51.html, sitemap.xml, robots.txt, and /_next stay
  // at the site root with no locale prefix or redirect.
  matcher: ["/", "/(en|fa)/:path*"],
};
