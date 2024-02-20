import Link from "next/link";
import { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { PiArrowUpRight } from "react-icons/pi";

export function Contacts({ ...props }: HTMLAttributes<HTMLElement>) {
    const { t } = useTranslation()

    return (
        <div className={props.className}>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs ml-2 mb-3">{t("navbar.categorys-cut.socials")}</p>

            <div className="flex flex-col gap-2">
                <Link href={"https://github.com/CndGui?tab=repositories"} target="_blank"
                className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                    <FaGithub size={20} />
                    <p className="text-sm">Github</p>
                    <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                </Link>

                <Link href={"https://www.linkedin.com/in/cndgui/"} target="_blank"
                className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                    <FaLinkedin size={20} />
                    <p className="text-sm">Linkedin</p>
                    <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                </Link>

                <Link href={"https://twitter.com/CndGui"} target="_blank"
                className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                    <FaTwitter size={20} />
                    <p className="text-sm">Twitter/X</p>
                    <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                </Link>
            </div>
        </div>
    )
}