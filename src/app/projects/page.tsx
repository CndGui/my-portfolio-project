'use client'

import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation()

    return (
        <div>
            <Navbar page="projects" />

            <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
                <div>
                    <strong className="text-3xl">{t("pages.projects.title")}</strong>
                    <p className="text-zinc-600 dark:text-zinc-400">{t("pages.projects.sub-text")}<a href="https://github.com/CndGui?tab=repositories" target="_blank" className="font-normal text-cyan-500 underline">Github</a></p>
                </div>

                <div className="grid grid-cols-2 max-[1396px]:grid-cols-1 gap-y-6 max-[1396px]:mx-auto">
                    <div className="border border-black/20 dark:border-white/20 w-96 max-[500px]:w-[18rem] h-[26rem] rounded-md p-6 flex flex-col">
                        <img src="/images/projects/my-portfolio-projectold.png" alt="My old portfolio" className="rounded-md" />

                        <div className="mt-3">
                            <strong>My Portfolio (Old)</strong>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-400">{t("pages.projects.project-1")}</p>
                        </div>

                        <div className="mt-auto flex gap-4">
                            <a href="https://github.com/CndGui/my-portfolio-project" target="_blank">
                                <button className="w-20 h-8 bg-cyan-500 dark:bg-cyan-700 rounded-md">{t("pages.projects.button-visit")}</button>
                            </a>

                            <a href="https://cndgui.github.io/my-portfolio-project/" target="_blank">
                                <button className="w-20 h-8 border border-black/20 dark:border-white/20 rounded-md">{t("pages.projects.button-source")}</button>
                            </a>
                        </div>
                    </div>

                    <div className="border border-black/20 dark:border-white/20 w-96 max-[500px]:w-[18rem] h-[26rem] rounded-md p-6 flex flex-col">
                        <img src="/images/projects/snake-game-project.png" alt="Snake Game Project" className="rounded-md" />

                        <div className="mt-3">
                            <strong>Snake Game</strong>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-400">{t("pages.projects.project-2")}</p>
                        </div>

                        <div className="mt-auto flex gap-4">
                            <a href="https://github.com/CndGui/snake-game-project" target="_blank">
                                <button className="w-20 h-8 bg-cyan-500 dark:bg-cyan-700 rounded-md">{t("pages.projects.button-visit")}</button>
                            </a>

                            <a href="https://cndgui.github.io/snake-game-project/" target="_blank">
                                <button className="w-20 h-8 border border-black/20 dark:border-white/20 rounded-md">{t("pages.projects.button-source")}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}