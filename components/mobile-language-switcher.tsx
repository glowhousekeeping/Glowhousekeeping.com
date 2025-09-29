"use client"

import { useState, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { updateGlobalTranslations, getCurrentLanguage } from "./language-switcher"

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

interface MobileLanguageSwitcherProps {
  onLanguageChange?: (language: string) => void
}

export default function MobileLanguageSwitcher({ onLanguageChange }: MobileLanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<string>("en")

  useEffect(() => {
    // Initialize with current global language
    setCurrentLanguage(getCurrentLanguage())

    // Listen for global language changes
    const handleGlobalLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail.language)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)

      return () => {
        window.removeEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)
      }
    }
  }, [])

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    updateGlobalTranslations(languageCode)
    setIsOpen(false)

    if (onLanguageChange) {
      onLanguageChange(languageCode)
    }
  }

  const getCurrentLanguageObj = () => {
    return languages.find((lang) => lang.code === currentLanguage) || languages[0]
  }

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30 backdrop-blur-sm"
        aria-label="Select language"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Language</span>
          <span className="text-xl">{getCurrentLanguageObj().flag}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mobile Language Options */}
      {isOpen && (
        <div className="ml-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30 ${
                currentLanguage === language.code
                  ? "bg-gradient-to-r from-blue-50/60 to-teal-50/60 border-blue-200/30"
                  : ""
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span
                className={`text-sm font-medium transition-colors ${
                  currentLanguage === language.code
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 group-hover:text-blue-700"
                }`}
              >
                {language.name}
              </span>
              {currentLanguage === language.code && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
