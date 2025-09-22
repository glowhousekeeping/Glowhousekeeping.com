"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "fy", name: "Frysk", flag: "🏴󠁮󠁬󠁦󠁲󠁿" },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-100"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-3 ${
                  i18n.language === language.code ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {i18n.language === language.code && <span className="ml-auto text-blue-600">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
