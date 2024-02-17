'use client'

import Navbar from "@/components/Navbar"
import { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { PiNote } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const { t } = useTranslation()

  function Info({ ...rest }: HTMLAttributes<HTMLElement>) {
    const infoArray = ["React", "Typescript", "Javascript", "NextJS", "NodeJS"]
    const infoLi = infoArray.map(i =>
      <li key={i} className="px-2 bg-cyan-400 dark:bg-cyan-500/10 rounded-md">
        {i}
      </li>
    )

    return (
      <ul className={twMerge("flex flex-wrap gap-2", rest.className)}>
        {infoLi}
      </ul>
    )
  }

  return (
    <div>
      <Navbar page="home" />

      <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
        <div className="flex gap-3 items-center">
          <div className="border border-cyan-500 rounded-md">
            <img src="/images/perfil.png" alt="Perfil" className="size-32 rounded-md" />
          </div>

          <div className="flex flex-col">
            <p className="text-4xl font-semibold">Guilherme Rodrigues</p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 -mt-1">{t("pages.home.sub-text")}</p>

            <Info className="mt-2" />
          </div>
        </div>

        <div className="border border-black/20 dark:border-white/20 p-4 rounded-md">
          <div className="flex gap-2 items-center mb-4">
            <PiNote size={25} />
            <p className="text-xl font-semibold">{t("pages.home.sections.about-me.title")}</p>
          </div>
          <p className="first-letter:ml-10">{t("pages.home.sections.about-me.content1")}</p>
          <p className="first-letter:ml-10">{t("pages.home.sections.about-me.content2")}</p>
        </div>

        <div className="border border-black/20 dark:border-white/20 h-80 rounded-md p-4">
          <div className="flex gap-2 items-center mb-4">
            <PiNote size={25} />
            <p className="text-xl font-semibold">{t("pages.home.sections.experiences.title")}</p>

            <a href="/files/curriculo.pdf" className="ml-auto" download={"Curriculo.pdf"}>
              <button className="bg-cyan-500 px-2 rounded-md">{t("pages.home.sections.experiences.button")}</button>
            </a>
          </div>

          <div className="h-60 flex items-center justify-center">
            <p className="text-zinc-600 dark:text-zinc-400">{t("pages.home.sections.experiences.content")}</p>
          </div>

          {/* <div className="relative h-60 grid grid-cols-4 gap-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-cyan-500/25 scrollbar-track-white/10 px-1">
            <div className="bg-black/10 dark:bg-white/10 rounded-md h-16">a</div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
