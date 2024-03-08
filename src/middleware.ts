import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import authConfig from "@/auth.config";
import { i18n } from "@/i18n.config";
import {
  DEFAULT_REDIRECT_ON_LOGIN,
  DEFAULT_REDIRECT_ON_UNAUTHORIZED,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

const { auth: middleware } = NextAuth(authConfig);

export default middleware((request) => {
  const { nextUrl } = request;
  const { currentLocale, pathWithoutLocale } = getPathData(request);
  const locale = currentLocale ?? getLocale(request.headers);

  const isLoggedIn = Boolean(request.auth);
  const isApiAuthRoute = pathWithoutLocale.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(pathWithoutLocale);
  const isProtectedRoute = !publicRoutes.includes(pathWithoutLocale);

  if (isApiAuthRoute) return;

  if (isAuthRoute && isLoggedIn) {
    nextUrl.pathname = `/${locale}${DEFAULT_REDIRECT_ON_LOGIN}`;
    return NextResponse.redirect(nextUrl);
  }

  if (isProtectedRoute && !isLoggedIn) {
    nextUrl.pathname = `/${locale}${DEFAULT_REDIRECT_ON_UNAUTHORIZED}`;
    return NextResponse.redirect(nextUrl);
  }

  if (currentLocale) return;

  nextUrl.pathname = `/${locale}${pathWithoutLocale}`;

  return locale === i18n.defaultLocale
    ? NextResponse.rewrite(nextUrl)
    : NextResponse.redirect(nextUrl);
});

interface PathData {
  currentLocale: string | null;
  pathWithoutLocale: string;
}

function getPathData(request: NextRequest): PathData {
  const currentLocale = getCurrentPathLocale(request.nextUrl.pathname);
  const pathWithoutLocale =
    request.nextUrl.pathname.replace(`/${currentLocale}` ?? "", "") || "/";

  return { currentLocale, pathWithoutLocale };
}

function getCurrentPathLocale(pathname: string): string | null {
  return (
    i18n.locales.find(
      (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
    ) ?? null
  );
}

function getLocale(headers: Headers): string {
  const negotiatorHeaders: Record<string, string> = {};
  headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, i18n.locales, i18n.defaultLocale);
  return locale;
}

export const config = {
  // A better regex from clerk docs
  // Protects all routes, including api/trpc.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
