'use client'

import i18next from "i18next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { PiHouse, PiDevices, PiCode, PiArrowUpRight, PiGear } from "react-icons/pi";

interface NavbarProps {
    page: "home" | "projects" | "techs"
}

export default function Navbar({ page }: NavbarProps) {
    const { t } = useTranslation()

    const { theme, setTheme } = useTheme()
    const [configNav, setConfigNav] = useState(false)
    function ToggleConfigNav() {
        setConfigNav(!configNav)
    }

    function ChangeLanguage( language : "pt" | "en" ) {
        localStorage.setItem('selectedLanguage', language);
        i18next.changeLanguage(language);
    }

    function NavbarOpen() {

        return (
            <aside className="fixed top-0 left-0 max-[765px]:hidden border-r border-black/20 dark:border-white/20 h-screen w-60 p-2 flex flex-col">
                <div className="flex items-center mb-5 gap-2">
                    <div className="relative bg-cyan-500 rounded-md size-10 overflow-hidden border border-cyan-500">
                        <img src="/images/perfil.png" alt="Perfil" />
                    </div>
                    <div className="flex flex-col">
                        <p>Guilherme Rodrigues</p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 -mt-1">{t("navbar.sub-text")}</p>
                    </div>
                </div>

                <Link data-page={page} href={"/"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=home]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=home]:bg-white/10 data-[page=home]:text-cyan-500 items-center">
                    <PiHouse size={20} />
                    <p className="text-sm">{t("navbar.categorys.home")}</p>
                </Link>

                <div className="mt-2">
                    <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">{t("navbar.categorys-cut.me")}</p>

                    <nav className="flex flex-col gap-2">
                        <Link data-page={page} href={"projects"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=projects]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=projects]:bg-white/10 data-[page=projects]:text-cyan-500 items-center">
                            <PiDevices size={20} />
                            <p className="text-sm">{t("navbar.categorys.projects")}</p>
                        </Link>

                        <Link data-page={page} href={"techs"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=techs]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=techs]:bg-white/10 data-[page=techs]:text-cyan-500 items-center">
                            <PiCode size={20} />
                            <p className="text-sm">{t("navbar.categorys.techs")}</p>
                        </Link>
                    </nav>
                </div>

                <div className="mt-6">
                    <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">{t("navbar.categorys-cut.socials")}</p>

                    <nav className="flex flex-col gap-2">
                        <Link href={"https://github.com/CndGui?tab=repositories"} target="_blank" className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                            <FaGithub size={20} />
                            <p className="text-sm">Github</p>
                            <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                        </Link>

                        <Link href={"https://www.linkedin.com/in/cndgui/"} target="_blank" className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                            <FaLinkedin size={20} />
                            <p className="text-sm">Linkedin</p>
                            <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                        </Link>

                        <Link href={"https://twitter.com/CndGui"} target="_blank" className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                            <FaTwitter size={20} />
                            <p className="text-sm">Twitter/X</p>
                            <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                        </Link>
                    </nav>
                </div>

                <button onClick={ToggleConfigNav} className="border border-black/20 dark:border-white/20 rounded-md w-min mt-auto ml-auto">
                    <PiGear size={35} className="p-1" />
                </button>
                {configNav &&
                    <div>
                        <div onClick={ToggleConfigNav} className="absolute top-0 left-0 h-screen w-screen"></div>
                        <div className="absolute h-60 w-32 border border-black/20 dark:border-white/20 rounded-md bottom-14 left-24 bg-white dark:bg-[#000b0d] p-2">
                            <div>
                                <p className="text-xs">{t("navbar.configuration.options-cut.theme")}</p>
                                <div className="flex flex-col mt-1 items-center">
                                    <span onClick={() => { setTheme("light"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.light")}</span>
                                    <span onClick={() => { setTheme("dark"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.dark")}</span>
                                    <span onClick={() => { setTheme("system"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.system")}</span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="text-xs">{t("navbar.configuration.options-cut.language")}</p>
                                <div className="flex flex-col mt-1 items-center">
                                    <span onClick={() => { ChangeLanguage("pt"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.portuguese")}</span>
                                    <span onClick={() => { ChangeLanguage("en"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.english")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </aside>
        )
    }

    function NavbarClose() {
        const [shortNav, setShortNav] = useState(false)
        function ToogleShotNav() {
            setShortNav(!shortNav)
        }

        return (
            <header className="hidden max-[765px]:flex fixed top-0 flex-col justify-center border-b border-black/20 dark:border-white/20 py-2 px-4 w-full bg-white dark:bg-[#000b0d] z-10">
                <div className="flex items-center gap-2">
                    <div className="p-[0.05rem] bg-cyan-500 rounded-md">
                        <div className="relative bg-cyan-500 rounded-md size-10 overflow-hidden">
                            <img src="/images/perfil.png" alt="Perfil" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p>Guilherme Rodrigues</p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 -mt-1">{t("navbar.sub-text")}</p>
                    </div>
                </div>
                <button onClick={ToogleShotNav} className="absolute top-2 right-4 border border-black/20 dark:border-white/20 rounded-md">
                    <LuAlignJustify size={35} className="p-1" />
                </button>
                <button onClick={ToggleConfigNav} className="absolute top-2 right-16 border border-black/20 dark:border-white/20 rounded-md">
                    <PiGear size={35} className="p-1" />
                </button>
                {configNav &&
                    <div>
                        <div onClick={ToggleConfigNav} className="absolute top-0 left-0 h-screen w-screen"></div>
                        <div className="absolute h-60 w-32 border border-black/20 dark:border-white/20 rounded-md right-16 bg-white dark:bg-[#000b0d] p-2">
                            <div>
                                <p className="text-xs">{t("navbar.configuration.options-cut.theme")}</p>
                                <div className="flex flex-col gap-2 mt-1 items-center">
                                    <span onClick={() => { setTheme("light"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.light")}</span>
                                    <span onClick={() => { setTheme("dark"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.dark")}</span>
                                    <span onClick={() => { setTheme("system"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.system")}</span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="text-xs">{t("navbar.configuration.options-cut.language")}</p>
                                <div className="flex flex-col gap-2 mt-1 items-center">
                                    <span onClick={() => { ChangeLanguage("pt"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.portuguese")}</span>
                                    <span onClick={() => { ChangeLanguage("en"); ToggleConfigNav() }} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">{t("navbar.configuration.options.english")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {shortNav &&
                    <div className="mt-3">
                        <Link data-page={page} href={"/"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=home]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=home]:bg-white/10 data-[page=home]:text-cyan-500 items-center">
                            <PiHouse size={20} />
                            <p className="text-sm">{t("navbar.categorys.home")}</p>
                        </Link>

                        <div className="mt-2">
                            <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">{t("navbar.categorys-cut.me")}</p>

                            <nav className="flex flex-col gap-2">
                                <Link data-page={page} href={"projects"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=projects]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=projects]:bg-white/10 data-[page=projects]:text-cyan-500 items-center">
                                    <PiDevices size={20} />
                                    <p className="text-sm">{t("navbar.categorys.projects")}</p>
                                </Link>

                                <Link data-page={page} href={"techs"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=techs]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=techs]:bg-white/10 data-[page=techs]:text-cyan-500 items-center">
                                    <PiCode size={20} />
                                    <p className="text-sm">{t("navbar.categorys.techs")}</p>
                                </Link>
                            </nav>
                        </div>

                        <div className="mt-6">
                            <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">{t("navbar.categorys-cut.socials")}</p>

                            <nav className="flex flex-col gap-2">
                                <Link href={"https://github.com/CndGui?tab=repositories"} target="_blank" className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                                    <FaGithub size={20} />
                                    <p className="text-sm">Github</p>
                                    <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                                </Link>

                                <Link href={"https://www.linkedin.com/in/cndgui/"} target="_blank" className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                                    <FaLinkedin size={20} />
                                    <p className="text-sm">Linkedin</p>
                                    <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                                </Link>

                                <Link href={"https://twitter.com/CndGui"} target="_blank" className="flex gap-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
                                    <FaTwitter size={20} />
                                    <p className="text-sm">Twitter/X</p>
                                    <PiArrowUpRight className="ml-auto text-cyan-500" size={12} />
                                </Link>
                            </nav>
                        </div>
                    </div>
                }
            </header>
        )
    }

    return (
        <div>
            <NavbarOpen />
            <NavbarClose />
        </div>
    )
}