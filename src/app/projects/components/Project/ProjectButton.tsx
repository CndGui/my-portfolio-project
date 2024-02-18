'use client'

import { useTranslation } from "react-i18next"

interface ProjectButtonProps {
    type: "visit" | "source"
    link: string
}

export function ProjectButton({ type, link }: ProjectButtonProps) {
    const { t } = useTranslation()

    switch (type) {
        case "visit": {
            return (
                <a href={link} target="_blank">
                    <button className="w-20 h-8 bg-cyan-500 dark:bg-cyan-700 rounded-md">{t("pages.projects.button-visit")}</button>
                </a>
            )
        }

        case "source": {
            return (
                <a href={link} target="_blank">
                    <button className="w-20 h-8 border border-black/20 dark:border-white/20 rounded-md">{t("pages.projects.button-source")}</button>
                </a>
            )
        }
    }
}