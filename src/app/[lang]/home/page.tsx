import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homePage } = await getDictionary(lang);
  return (
    <main>
      <h1 className="text-3xl font-bold underline px-[30px]">
        {homePage.title}
      </h1>
    </main>
  );
}
