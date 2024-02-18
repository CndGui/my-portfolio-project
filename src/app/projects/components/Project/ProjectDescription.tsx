'use client'

import { useTranslation } from "react-i18next"

interface ProjectDescriptionProps {
    tDescription: string
}

export function ProjectDescription({ tDescription }: ProjectDescriptionProps) {
    const { t } = useTranslation()

    return <p className="mt-3 text-zinc-600 dark:text-zinc-400">{t(tDescription)}</p>
}