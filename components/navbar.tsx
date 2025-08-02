"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  ChevronDown,
  Sparkles,
  Sun,
  Droplets,
  Wrench,
} from "lucide-react"
import ServiceItem from "./service-item"
import MobileServiceItem from "./mobile-service-item"

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

const services = [
  {
    title: "General Cleaning",
    description: "Complete office and commercial cleaning with professional standards and attention to detail",
    price: "€35/hr",
    href: "/services/general-cleaning",
    icon: Sparkles,
    gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Solar Panel Cleaning",
    description: "Maximize energy efficiency with professional solar panel maintenance and cleaning services",
    price: "€150-500",
    href: "/services/solar-panel-cleaning",
    icon: Sun,
    gradient: "bg-gradient-to-br from-orange-500 to-yellow-500",
  },
  {
    title: "Window Cleaning",
    description: "Crystal clear windows for enhanced natural light and beautiful views throughout your space",
    price: "€150-550",
    href: "/services/window-cleaning",
    icon: Droplets,
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
  },
  {
    title: "Drain Cleaning",
    description: "Professional drain maintenance and blockage removal services for optimal water flow",
    price: "€20-120",
    href: "/services/drain-cleaning",
    icon: Wrench,
    gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false)

  // Handle first visit language prompt
  useEffect(() => {
    const hasVisited = localStorage.getItem("glow-has-visited")
    const savedLanguage = localStorage.getItem("glow-language")

    if (!hasVisited) {
      // First visit - show language prompt after 2 seconds
      const timer = setTimeout(() => {
        setShowLanguagePrompt(true)
        setIsLanguageOpen(true)
      }, 2000)

      localStorage.setItem("glow-has-visited", "true")
      return () => clearTimeout(timer)
    }

    // Load saved language
    if (savedLanguage && languages.find((lang) => lang.code === savedLanguage)) {
      setSelectedLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode)
    setIsLanguageOpen(false)
    setShowLanguagePrompt(false)
    localStorage.setItem("glow-language", langCode)
  }

  const currentLanguage = languages.find((lang) => lang.code === selectedLanguage) || languages[0]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>+31 6 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-600" />
                <span>info@glowhousekeeping.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span>Venlo, Limburg</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span>Mon-Fri: 8:00-18:00</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <Facebook className="h-4 w-4 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
                <Twitter className="h-4 w-4 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="h-4 w-4 text-slate-400 hover:text-pink-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0518.JPG-0ntakJPjzjG266UJGltFUfmQn1pf6H.jpeg"
                  alt="Glow Housekeeping Logo"
                  width={140}
                  height={70}
                  className="h-12 w-auto md:h-14 object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                HOME
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-slate-700 hover:text-emerald-600 bg-transparent hover:bg-emerald-50 data-[state=open]:bg-emerald-50 text-sm uppercase tracking-wide font-medium">
                      SERVICES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[700px] p-6 bg-white shadow-2xl border border-slate-200 rounded-xl">
                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-slate-800 mb-2">Our Professional Services</h3>
                          <p className="text-sm text-slate-600">
                            Choose from our comprehensive range of cleaning solutions
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <ServiceItem
                              key={service.href}
                              title={service.title}
                              description={service.description}
                              price={service.price}
                              href={service.href}
                              icon={service.icon}
                              gradient={service.gradient}
                            />
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-200">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-600">
                              Need a custom solution?{" "}
                              <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
                                Contact us
                              </Link>
                            </div>
                            <Button
                              size="sm"
                              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4"
                            >
                              <Link href="/book-service">Book Now</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                href="/about"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                ABOUT US
              </Link>
              <Link
                href="/blog"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                CONTACT
              </Link>
              <Link
                href="/join-our-team"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                CAREERS
              </Link>
            </div>

            {/* Desktop Language Switcher & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={`group relative bg-slate-50 hover:bg-white border-2 border-slate-200 hover:border-emerald-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 ${
                    showLanguagePrompt ? "animate-pulse border-emerald-400 bg-emerald-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-600" />
                    <span className="text-lg">{currentLanguage.flag}</span>
                    <span className="font-medium text-slate-700 text-sm">{currentLanguage.nativeName}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 min-w-[200px]">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language.code)}
                        className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-emerald-50 transition-all duration-200 ${
                          selectedLanguage === language.code ? "bg-emerald-50 border-l-4 border-emerald-500" : ""
                        }`}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <div className="text-left flex-1">
                          <div className="font-medium text-slate-800 text-sm">{language.nativeName}</div>
                          <div className="text-xs text-slate-600">{language.name}</div>
                        </div>
                        {selectedLanguage === language.code && (
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2 font-semibold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/book-service">GET QUOTE</Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center space-x-3">
              {/* Mobile Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={`group relative bg-slate-50 hover:bg-white border-2 border-slate-200 hover:border-emerald-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-all duration-300 ${
                    showLanguagePrompt ? "animate-pulse border-emerald-400 bg-emerald-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-600" />
                    <span className="text-base">{currentLanguage.flag}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-slate-600 transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* Mobile Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50 min-w-[180px]">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language.code)}
                        className={`w-full px-3 py-2 flex items-center gap-2 hover:bg-emerald-50 transition-all duration-200 ${
                          selectedLanguage === language.code ? "bg-emerald-50 border-l-4 border-emerald-500" : ""
                        }`}
                      >
                        <span className="text-base">{language.flag}</span>
                        <div className="text-left flex-1">
                          <div className="font-medium text-slate-800 text-xs">{language.nativeName}</div>
                        </div>
                        {selectedLanguage === language.code && (
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
                  <div className="flex flex-col space-y-6 mt-8">
                    {/* Mobile Navigation Links */}
                    <div className="space-y-4">
                      <Link
                        href="/"
                        className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-slate-700 hover:text-emerald-600 uppercase tracking-wide text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-slate-700 hover:text-emerald-600 uppercase tracking-wide text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/blog"
                        className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-slate-700 hover:text-emerald-600 uppercase tracking-wide text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/contact"
                        className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-slate-700 hover:text-emerald-600 uppercase tracking-wide text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                      <Link
                        href="/join-our-team"
                        className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-slate-700 hover:text-emerald-600 uppercase tracking-wide text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Careers
                      </Link>
                    </div>

                    {/* Mobile Services */}
                    <div className="border-t pt-4 space-y-3">
                      <h3 className="font-semibold text-slate-800 mb-3 uppercase tracking-wide text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        Our Services
                      </h3>
                      <div className="space-y-3">
                        {services.map((service) => (
                          <MobileServiceItem
                            key={service.href}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                            href={service.href}
                            icon={service.icon}
                            gradient={service.gradient}
                            onClick={() => setIsOpen(false)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Mobile CTA */}
                    <div className="border-t pt-4">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold uppercase tracking-wide">
                        <Link href="/book-service" onClick={() => setIsOpen(false)}>
                          GET QUOTE
                        </Link>
                      </Button>
                    </div>

                    {/* Mobile Contact Info */}
                    <div className="border-t pt-4 space-y-3 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-emerald-600" />
                        <span>+31 6 123 456 789</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-emerald-600" />
                        <span>info@glowhousekeeping.nl</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                        <span>Venlo, Limburg</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Click Outside to Close Language Dropdown */}
      {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />}

      {/* First Visit Language Prompt Overlay */}
      {showLanguagePrompt && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full animate-in zoom-in-95 duration-300">
            <div className="text-center">
              <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Choose Your Language</h3>
              <p className="text-sm text-slate-600 mb-4">Select your preferred language for the best experience</p>
              <div className="space-y-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code)}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-emerald-50 rounded-lg transition-all duration-200 border border-slate-200 hover:border-emerald-300"
                  >
                    <span className="text-xl">{language.flag}</span>
                    <div className="text-left flex-1">
                      <div className="font-medium text-slate-800">{language.nativeName}</div>
                      <div className="text-sm text-slate-600">{language.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
