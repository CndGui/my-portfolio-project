'use client'

import { Navbar } from "@/components/Navbar"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PiNote } from "react-icons/pi";
import { MainTechs } from "./components/MainTechs";
import { Experience } from "./components/Experience";
import { ExperieceImage } from "./components/Experience/ExperienceImage";
import { ExperienceTitle } from "./components/Experience/ExperienceTitle";
import { ExperienceJob } from "./components/Experience/ExperienceJob";
import { ExperienceDuration } from "./components/Experience/ExperienceDuration";

export default function Home() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = `Guilherme - ${t("pages.home.sub-text")}`
  }, [])

  return (
    <div>
      <Navbar page="home" />

      <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
        <div className="flex gap-3 items-center">
          <div className="border border-cyan-500 rounded-md">
            <img src="/images/perfil.png" alt="Perfil" className="h-32 min-w-32 rounded-md" />
          </div>

          <div className="flex flex-col">
            <p className="text-4xl font-semibold">Guilherme Rodrigues</p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 -mt-1">{t("pages.home.sub-text")}</p>

            <MainTechs className="mt-2 max-[625px]:hidden" />
          </div>

        </div>
        
        <MainTechs className="hidden max-[625px]:flex" />

        <div className="border border-black/20 dark:border-white/20 p-4 rounded-md">
          <div className="flex gap-2 items-center mb-4">
            <PiNote size={25} />
            <p className="text-xl font-semibold">{t("pages.home.sections.about-me.title")}</p>
          </div>
          <p className="first-letter:ml-10">{t("pages.home.sections.about-me.content.0")}</p>
          <p className="first-letter:ml-10">{t("pages.home.sections.about-me.content.1")}</p>
        </div>

        <div className="border border-black/20 dark:border-white/20 h-80 rounded-md p-4">
          <div className="flex gap-2 items-center mb-4">
            <PiNote size={25} />
            <p className="text-xl font-semibold">{t("pages.home.sections.experiences.title")}</p>

            <a href="/files/curriculo.pdf" className="ml-auto" download={"Curriculo.pdf"}>
              <button className="bg-cyan-500 px-2 rounded-md">{t("pages.home.sections.experiences.button")}</button>
            </a>
          </div>

          <div className="relative h-60 grid grid-cols-3 max-[1100px]:grid-cols-2 max-[580px]:grid-cols-1 gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/25 scrollbar-track-white/10 px-1">
            <Experience.Root>
              <ExperieceImage src="rede-screen.png" alt="Rede Screen" />
              <Experience.InfoRoot>
                <ExperienceTitle title="Rede Screen" />
                <ExperienceJob job={t("pages.home.sections.experiences.experience.0")} />
                <ExperienceDuration duration="2018 - 2019" />
              </Experience.InfoRoot>
            </Experience.Root>
          </div>
        </div>
      </main>
    </div>
  );
}
