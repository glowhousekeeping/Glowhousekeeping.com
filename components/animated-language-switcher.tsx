"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Globe } from "lucide-react"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱" },
  { code: "fy", name: "Frisian", nativeName: "Frysk", flag: "🏴" },
]

interface AnimatedLanguageSwitcherProps {
  onLanguageChange: (language: string) => void
  className?: string
}

export default function AnimatedLanguageSwitcher({ onLanguageChange, className = "" }: AnimatedLanguageSwitcherProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("glow-language")
    if (savedLanguage && languages.find((lang) => lang.code === savedLanguage)) {
      setSelectedLanguage(savedLanguage)
      onLanguageChange(savedLanguage)
    }
  }, [onLanguageChange])

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode)
    setIsOpen(false)
    localStorage.setItem("glow-language", langCode)
    onLanguageChange(langCode)
  }

  const currentLanguage = languages.find((lang) => lang.code === selectedLanguage) || languages[0]

  return (
    <div className={`relative ${className}`}>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative bg-white/90 backdrop-blur-md hover:bg-white border-2 border-blue-200 hover:border-blue-300 rounded-2xl px-6 py-3 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-bounce"
            style={{
              animation: "bounce 2s infinite, glow 3s ease-in-out infinite alternate",
            }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-green-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <span className="text-2xl animate-pulse">{currentLanguage.flag}</span>
              <span className="font-semibold text-slate-700 group-hover:text-slate-800 transition-colors">
                {currentLanguage.nativeName}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>

            {/* Dancing Border Animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-100 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 ${
                    selectedLanguage === language.code ? "bg-blue-50 border-l-4 border-blue-500" : ""
                  }`}
                >
                  <span className="text-2xl animate-pulse">{language.flag}</span>
                  <div className="text-left">
                    <div className="font-semibold text-slate-800">{language.nativeName}</div>
                    <div className="text-sm text-slate-600">{language.name}</div>
                  </div>
                  {selectedLanguage === language.code && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="relative">
          {/* Mobile Button - More Compact */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative bg-white/90 backdrop-blur-md hover:bg-white border-2 border-blue-200 hover:border-blue-300 rounded-xl px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce"
            style={{
              animation: "bounce 2s infinite, glow 3s ease-in-out infinite alternate",
            }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-green-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>

            {/* Content */}
            <div className="relative flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600 animate-spin-slow" />
              <span className="text-lg">{currentLanguage.flag}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300 min-w-[200px]">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-all duration-200 ${
                    selectedLanguage === language.code ? "bg-blue-50 border-l-4 border-blue-500" : ""
                  }`}
                >
                  <span className="text-xl">{language.flag}</span>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-slate-800 text-sm">{language.nativeName}</div>
                  </div>
                  {selectedLanguage === language.code && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Click Outside to Close */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          100% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.4), 0 0 40px rgba(59, 130, 246, 0.2);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
