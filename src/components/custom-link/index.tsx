import { i18n } from "@/i18n.config";
import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  href: string;
  lang: string;
  [key: string]: any;
};

function CustomLink({ href, lang, ...props }: CustomLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale;

  const path = isDefaultLang ? href : `${lang}${href}`;

  return <Link href={path} {...props} />;
}

export default CustomLink;
