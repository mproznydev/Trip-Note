"use client";

import { useDictionary } from "@/context/dictionary-provider";

export default function Home() {
  const dictionary = useDictionary();
  console.log(dictionary);

  return (
    <main>
      <h1 className="text-3xl font-bold underline px-[30px]">hello world</h1>
    </main>
  );
}
