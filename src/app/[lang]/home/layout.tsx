"use client";

import "@/style/globals.css";
import { Locale } from "@/i18n.config";
import MainNavigation from "@/components/main-navigation/MainNavigation";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <div>
      <MainNavigation lang={params.lang}></MainNavigation>
      {children}
    </div>
  );
}
