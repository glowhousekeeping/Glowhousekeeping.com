"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Globe, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "fy", name: "Frysk", flag: "🏴󠁮󠁬󠁦󠁲󠁿" },
]

export function MobileLanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 w-full justify-start"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage.name}</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-sm">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Select Language</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full text-left p-3 rounded-md hover:bg-gray-100 flex items-center gap-3 mb-2 ${
                    i18n.language === language.code ? "bg-blue-50 text-blue-600" : "text-gray-700"
                  }`}
                >
                  <span className="text-xl">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                  {i18n.language === language.code && <span className="ml-auto text-blue-600 font-bold">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
