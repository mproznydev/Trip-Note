import "@/style/globals.css";
import { Locale, i18n } from "@/i18n.config";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className={roboto.className}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
