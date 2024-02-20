import { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export function Information({ ...props }: HTMLAttributes<HTMLElement>) {
    const { t } = useTranslation()

    return (
        <div className="flex items-center gap-2">
            <img src="/images/perfil.png" alt="Perfil" className="size-10 border border-cyan-500 rounded-md" />

            <div>
                <h1>Guilherme Rodrigues</h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs -mt-1">{t("navbar.sub-text")}</p>
            </div>
        </div>
    )
}