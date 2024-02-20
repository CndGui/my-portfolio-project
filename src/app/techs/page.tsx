'use client'

import { Navbar } from "@/components/Navbar";
import { AppTechs } from "./components/techs/AppTechs";
import { BackEndTechs } from "./components/techs/BackEndTechs";
import { DatabaseTechs } from "./components/techs/DatabaseTechs";
import { FrontEndTechs } from "./components/techs/FrontEndTechs";
import { VersionControlTechs } from "./components/techs/VersionControlTechs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Techs() {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = `Guilherme - ${t("pages.techs.title")}`
    }, [])

    function Title({ title }: { title: string }) {
        return (
            <strong className="text-xl">{title}</strong>
        )
    }

    return (
        <div>
            <Navbar page="techs" />

            <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
                <div>
                    <strong className="text-3xl">{t("pages.techs.title")}</strong>
                    <p className="text-zinc-600 dark:text-zinc-400">{t("pages.techs.sub-text")}</p>
                </div>

                <div>
                    <Title title="Front-end" />
                    <FrontEndTechs />
                </div>

                <div>
                    <Title title="Back-end" />
                    <BackEndTechs />
                </div>

                <div>
                    <Title title={t("pages.techs.sections-cut.database")} />
                    <DatabaseTechs />
                </div>

                <div>
                    <Title title={t("pages.techs.sections-cut.version-control")} />
                    <VersionControlTechs />
                </div>

                <div>
                    <Title title="Apps" />
                    <AppTechs />
                </div>
            </main>
        </div>
    )
}