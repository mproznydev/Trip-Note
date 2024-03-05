"use client";

import { useGlobalContext } from "@/context/store";
export default function Home() {
  const { userId } = useGlobalContext();

  return (
    <main>
      <h1 className="text-3xl font-bold underline px-[30px]">
        hello world {userId}
      </h1>
    </main>
  );
}
