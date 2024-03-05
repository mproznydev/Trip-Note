import "@/style/globals.css";
import { Locale, i18n } from "@/i18n.config";
import { GlobalContextProvider } from "@/context/store";

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
      <body><GlobalContextProvider>{children}</GlobalContextProvider></body>
    </html>
  );
}
