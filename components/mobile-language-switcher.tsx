"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { languages, languageFlags, locales, type Locale } from "@/lib/i18n"
import { useTranslation } from "@/hooks/use-translation"

export default function MobileLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { locale } = useTranslation()

  const switchLanguage = (newLocale: Locale) => {
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPath = segments.join("/")
    router.push(newPath)
    setIsOpen(false)
  }

  const currentFlag = languageFlags[locale]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentFlag}</span>
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            {locales.map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                  locale === lang ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <span className="text-lg">{languageFlags[lang]}</span>
                <span className="font-medium text-sm">{languages[lang]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
