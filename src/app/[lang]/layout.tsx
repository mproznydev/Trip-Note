import "@/style/globals.css";
import { Locale, i18n } from "@/i18n.config";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
import { getDictionary } from "@/lib/dictionary";
import DictionaryProvider from "@/context/dictionary-provider";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang || i18n.defaultLocale);

  return (
    <html lang={params.lang} className={roboto.className}>
      <head></head>
      <body>
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
