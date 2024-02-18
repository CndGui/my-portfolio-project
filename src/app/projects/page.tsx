'use client'

import { Navbar } from "@/components/Navbar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Project } from "./components/Project";

export default function Projects() {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = `Guilherme - ${t("pages.projects.title")}`
      }, [])

    return (
        <div>
            <Navbar page="projects" />

            <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
                <div>
                    <strong className="text-3xl">{t("pages.projects.title")}</strong>
                    <p className="text-zinc-600 dark:text-zinc-400">{t("pages.projects.sub-text")}<a href="https://github.com/CndGui?tab=repositories" target="_blank" className="font-normal text-cyan-500 underline">Github</a></p>
                </div>

                <div className="grid grid-cols-2 max-[1396px]:grid-cols-1 gap-y-6 max-[1396px]:mx-auto">
                    <Project.Root>
                        <Project.Image src="my-portfolio-projectold.png" alt="My Old Portfolio"/>
                        
                        <Project.MainRoot>
                            <Project.Title title="My Portfolio (Old)" />
                            <Project.Description tDescription="pages.projects.project-1" />
                        </Project.MainRoot>

                        <Project.ButtonsRoot>
                            <Project.Button type="visit" link="https://cndgui.github.io/my-portfolio-project-old/" />
                            <Project.Button type="source" link="https://github.com/CndGui/my-portfolio-project-old" />
                        </Project.ButtonsRoot>
                    </Project.Root>

                    <Project.Root>
                        <Project.Image src="snake-game-project.png" alt="Snake Game"/>
                        
                        <Project.MainRoot>
                            <Project.Title title="Snake Game" />
                            <Project.Description tDescription="pages.projects.project-2" />
                        </Project.MainRoot>

                        <Project.ButtonsRoot>
                            <Project.Button type="visit" link="https://cndgui.github.io/snake-game-project/" />
                            <Project.Button type="source" link="https://github.com/CndGui/snake-game-project" />
                        </Project.ButtonsRoot>
                    </Project.Root>
                </div>
            </main>
        </div>
    )
}