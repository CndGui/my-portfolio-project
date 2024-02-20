import Link from "next/link";
import { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { PiCode, PiDevices, PiHouse } from "react-icons/pi";

interface NavegationsProps extends HTMLAttributes<HTMLElement> {
    page: string
}

export function Navegations({ page, ...props }: NavegationsProps) {
    const { t } = useTranslation()

    return (
        <nav className={props.className}>
            <Link data-page={page} href={"/"}
                className="flex gap-2 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md data-[page=home]:bg-black/10 data-[page=home]:dark:bg-white/10 data-[page=home]:text-cyan-500">
                <PiHouse size={20} />
                <p className="text-sm">{t("navbar.categorys.home")}</p>
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-3 ml-2 mb-3">{t("navbar.categorys-cut.me")}</p>

            <nav className="flex flex-col gap-2">
                <Link data-page={page} href={"projects"}
                    className="flex gap-2 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md data-[page=projects]:bg-black/10 data-[page=projects]:dark:bg-white/10 data-[page=projects]:text-cyan-500">
                    <PiDevices size={20} />
                    <p className="text-sm">{t("navbar.categorys.projects")}</p>
                </Link>

                <Link data-page={page} href={"techs"}
                    className="flex gap-2 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md data-[page=techs]:bg-black/10 data-[page=techs]:dark:bg-white/10 data-[page=techs]:text-cyan-500">
                    <PiCode size={20} />
                    <p className="text-sm">{t("navbar.categorys.techs")}</p>
                </Link>
            </nav>
        </nav>
    )
}