'use client'

import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { PiHouse, PiDevices, PiCode, PiArrowUpRight, PiGear } from "react-icons/pi";

interface NavbarProps {
    page: "home" | "projects" | "techs"
}

export default function Navbar({ page }: NavbarProps) {
    const [configNav, setConfigNav] = useState(false)
    function ToggleConfigNav() {
        setConfigNav(!configNav)
    }

    const { theme, setTheme } = useTheme()
    function ToggleThemeLight() {
        setTheme("light")
    }

    function ToggleThemeDark() {
        setTheme("dark")
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
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 -mt-1">Front-end developer</p>
                    </div>
                </div>

                <Link data-page={page} href={"/"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=home]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=home]:bg-white/10 data-[page=home]:text-cyan-500 items-center">
                    <PiHouse size={20} />
                    <p className="text-sm">Home</p>
                </Link>

                <div className="mt-2">
                    <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">Me</p>

                    <nav className="flex flex-col gap-2">
                        <Link data-page={page} href={"projects"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=projects]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=projects]:bg-white/10 data-[page=projects]:text-cyan-500 items-center">
                            <PiDevices size={20} />
                            <p className="text-sm">Projects</p>
                        </Link>

                        <Link data-page={page} href={"techs"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=techs]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=techs]:bg-white/10 data-[page=techs]:text-cyan-500 items-center">
                            <PiCode size={20} />
                            <p className="text-sm">Tools and technologies</p>
                        </Link>
                    </nav>
                </div>

                <div className="mt-6">
                    <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">Socials</p>

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
                                <p className="text-xs">Theme</p>
                                <div className="flex flex-col mt-1 items-center">
                                    <span onClick={() => {setTheme("light")}} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">Light</span>
                                    <span onClick={() => {setTheme("dark")}} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">Dark</span>
                                    <span onClick={() => {setTheme("system")}} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">System</span>
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
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 -mt-1">Front-end developer</p>
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
                                <p className="text-xs">Theme</p>
                                <div className="flex flex-col gap-2 mt-1 items-center">
                                    <span onClick={() => {setTheme("light")}} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">Light</span>
                                    <span onClick={() => {setTheme("dark")}} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">Dark</span>
                                    <span onClick={() => {setTheme("system")}} className="border border-transparent rounded px-1 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 w-24">System</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {shortNav &&
                    <div className="mt-3">
                        <Link data-page={page} href={"/"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=home]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=home]:bg-white/10 data-[page=home]:text-cyan-500 items-center">
                            <PiHouse size={20} />
                            <p className="text-sm">Home</p>
                        </Link>

                        <div className="mt-2">
                            <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">Me</p>

                            <nav className="flex flex-col gap-2">
                                <Link data-page={page} href={"projects"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=projects]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=projects]:bg-white/10 data-[page=projects]:text-cyan-500 items-center">
                                    <PiDevices size={20} />
                                    <p className="text-sm">Projects</p>
                                </Link>

                                <Link data-page={page} href={"techs"} className="flex gap-2 p-2 rounded-md hover:bg-black/10 data-[page=techs]:bg-black/10 dark:hover:bg-white/10 dark:data-[page=techs]:bg-white/10 data-[page=techs]:text-cyan-500 items-center">
                                    <PiCode size={20} />
                                    <p className="text-sm">Tools and technologies</p>
                                </Link>
                            </nav>
                        </div>

                        <div className="mt-6">
                            <p className="m-2 text-xs text-zinc-600 dark:text-zinc-400">Socials</p>

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