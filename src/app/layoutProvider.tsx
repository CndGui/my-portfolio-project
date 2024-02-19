"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import "@/i18n/index"
import i18next from "@/i18n/index"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export function LayoutProvider({ children, ...props }: ThemeProviderProps) {
  const { t } = useTranslation()
  useEffect(() => {
    const userLanguage = window.navigator.language
    let language = userLanguage.split('-')[0]

    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18next.changeLanguage(storedLanguage);
    } else {
        if (language == "pt") {
          i18next.changeLanguage("pt")
        }else {
          i18next.changeLanguage("en")
        }
    }

    document.title = `Guilherme - ${t("pages.home.sub-text")}`
  }, []);
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}