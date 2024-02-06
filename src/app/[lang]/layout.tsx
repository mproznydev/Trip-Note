import "@/style/globals.css";
import { Locale, i18n } from "@/i18n.config";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
