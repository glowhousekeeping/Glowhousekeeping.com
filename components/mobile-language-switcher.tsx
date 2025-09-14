"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import { Globe, ChevronDown } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
  {
    code: "nl",
    name: "Nederlands",
    flag: "🇳🇱",
  },
  {
    code: "fy",
    name: "Frysk",
    flag: "🏴",
  },
]

export default function MobileLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { locale, locales, asPath } = router

  const handleLanguageChange = (languageCode: string) => {
    router.push(asPath, asPath, { locale: languageCode })
    setIsOpen(false)
  }

  const getCurrentLanguageObj = () => {
    return languages.find((lang) => lang.code === locale) || languages[0]
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out text-white/90 hover:text-white hover:bg-white/8 w-full"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{getCurrentLanguageObj().flag}</span>
        <span className="flex-1 text-left">{getCurrentLanguageObj().name}</span>
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div className="mt-2 w-full bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 rounded-2xl border border-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-teal-50/50 rounded-2xl"></div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`relative w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border-b border-gray-100/50 last:border-b-0 ${
                locale === language.code ? "bg-gradient-to-r from-blue-50/60 to-teal-50/60" : ""
              }`}
            >
              <span className="text-xl">{language.flag}</span>
              <span
                className={`text-sm font-medium transition-colors ${
                  locale === language.code ? "text-blue-700 font-semibold" : "text-gray-900 group-hover:text-blue-700"
                }`}
              >
                {language.name}
              </span>
              {locale === language.code && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
