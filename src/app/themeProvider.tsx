"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import "@/i18n/index"
import i18next from "@/i18n/index"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18next.changeLanguage(storedLanguage);
    }
  }, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}