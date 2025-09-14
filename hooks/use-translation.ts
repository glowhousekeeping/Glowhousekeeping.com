"use client"

import { useParams } from "next/navigation"
import { translations } from "@/lib/translations"
import { type Locale, defaultLocale } from "@/lib/i18n"

export function useTranslation() {
  const params = useParams()
  const locale = (params?.locale as Locale) || defaultLocale

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[locale]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return { t, locale }
}
