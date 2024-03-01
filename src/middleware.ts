import { i18n } from "@/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  handleLocale(request);
}

function handleLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isLocaleInPathname = i18n.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (isLocaleInPathname) {
    return null;
  }

  const locale = getLocale(request);
  const localeUrl = new URL(
    `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
    request.url
  );

  return locale === i18n.defaultLocale
    ? NextResponse.rewrite(localeUrl)
    : NextResponse.redirect(localeUrl);
}

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
