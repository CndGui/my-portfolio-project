'use client'

import i18next from "i18next"
import { useTheme } from "next-themes"
import { HTMLAttributes, useState } from "react"
import { useTranslation } from "react-i18next"
import { PiGear } from "react-icons/pi"

interface OptionSelectProps {
    task: "theme" | "language"
    option: "light" | "dark" | "system" | "en" | "pt"
    traducion: string
}

export function Configuration({ ...props }: HTMLAttributes<HTMLElement>) {
    const { t } = useTranslation()
    const { theme, setTheme } = useTheme()

    const [configWindow, setConfigWindow] = useState(false)

    function ToggleConfigWindow() {
        setConfigWindow(!configWindow)
    }

    function OptionSelect({ task, option, traducion }: OptionSelectProps) {
        function ChangeLanguage() {
            if (option == "system") {
                const userLanguage = window.navigator.language
                const tempLanguage = userLanguage.split('-')[0]

                if (tempLanguage == "pt") {
                    i18next.changeLanguage("pt")
                } else {
                    i18next.changeLanguage("en")
                }

                localStorage.removeItem('language');
                i18next.changeLanguage(tempLanguage);
            } else {
                localStorage.setItem('language', option);
                i18next.changeLanguage(option);
            }
        }

        function HandleOption() {
            switch (task) {
                case "theme": {
                    setTheme(option)
                    break
                }

                case "language": {
                    ChangeLanguage()
                    break
                }
            }

            ToggleConfigWindow()
        }


        return (
            <span
                onClick={HandleOption}
                className="px-1 border border-transparent hover:border-cyan-500 rounded cursor-pointer">
                {t(`navbar.configuration.options.${traducion}`)}
            </span>
        )
    }

    return (
        <div>
            <button onClick={ToggleConfigWindow} className="fixed min-[765px]:bottom-2 min-[765px]:left-48 max-[765px]:top-2 max-[765px]:right-16 border rounded-md bg-white dark:bg-darkPage border-black/20 dark:border-white/20 hover:border-cyan-500 z-10">
                <PiGear size={35} className="p-1" />
            </button>

            {configWindow &&
                <div>
                    <div onClick={ToggleConfigWindow} className="fixed top-0 left-0 w-full h-full"></div>

                    <div className="absolute min-[765px]:right-3 min-[765px]:bottom-12 max-[765px]:right-20 max-[765px]:top-12 bg-white dark:bg-darkPage border border-black/20 dark:border-white/20 rounded-md p-2">
                        <div>
                            <p className="text-sm">{t("navbar.configuration.options-cut.theme")}</p>

                            <div className="flex flex-col mt-1">
                                <OptionSelect task="theme" option="light" traducion="light" />
                                <OptionSelect task="theme" option="dark" traducion="dark" />
                                <OptionSelect task="theme" option="system" traducion="system" />
                            </div>
                        </div>

                        <div className="mt-3">
                            <p className="text-sm">{t("navbar.configuration.options-cut.language")}</p>

                            <div className="flex flex-col mt-1">
                                <OptionSelect task="language" option="en" traducion="english" />
                                <OptionSelect task="language" option="pt" traducion="portuguese" />
                                <OptionSelect task="language" option="system" traducion="system" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}