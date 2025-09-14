"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import LanguageSwitcher from "./language-switcher"
import MobileLanguageSwitcher from "./mobile-language-switcher"
import { getCurrentTranslations } from "./language-switcher"

const services = [
  {
    title: "General Cleaning",
    titleKey: "generalCleaning",
    href: "/services/general-cleaning",
    description: "Complete office and commercial cleaning with professional standards",
    descriptionKey: "generalCleaningDesc",
    price: "€35/hr",
  },
  {
    title: "Solar Panel Cleaning",
    titleKey: "solarPanelCleaning",
    href: "/services/solar-panel-cleaning",
    description: "Maximize energy efficiency with professional solar panel maintenance",
    descriptionKey: "solarPanelCleaningDesc",
    price: "€150-500",
  },
  {
    title: "Window Cleaning",
    titleKey: "windowCleaning",
    href: "/services/window-cleaning",
    description: "Crystal clear windows for enhanced natural light and beautiful views",
    descriptionKey: "windowCleaningDesc",
    price: "€150-550",
  },
  {
    title: "Drain Cleaning",
    titleKey: "drainCleaning",
    href: "/services/drain-cleaning",
    description: "Professional drain maintenance and blockage removal services",
    descriptionKey: "drainCleaningDesc",
    price: "€20-120",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [translations, setTranslations] = useState(getCurrentTranslations())

  useEffect(() => {
    // Listen for global language changes
    const handleGlobalLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)

      return () => {
        window.removeEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)
      }
    }
  }, [])

  const t = translations

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Contact Bar - Hidden on Mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>glorija.berina@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+31 6 10756699</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Service Area: Netherlands</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <Image
                  src="/glow-housekeeping-logo.png"
                  alt="Glow Housekeeping Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Glow Housekeeping
                </h1>
                <p className="text-xs text-gray-600">Professional Cleaning Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-6">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {t.home}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {t.contact}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {t.blog}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      {t.services}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-6 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="group block p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 border border-transparent hover:border-blue-200/30 hover:shadow-lg transform hover:scale-105"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {t[service.titleKey] || service.title}
                                </h3>
                                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                  {service.price}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                                {t[service.descriptionKey] || service.description}
                              </p>
                              <div className="mt-3 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                                {t.learnMore}
                                <div className="ml-1 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                                  <span>→</span>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {t.about}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/join-our-team" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {t.careers}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Language Switcher - Desktop */}
                  <NavigationMenuItem>
                    <LanguageSwitcher />
                  </NavigationMenuItem>

                  {/* Language Switcher */}
                  <LanguageSwitcher />
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Link href="/book-service">{t.getQuote}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative h-12 w-12 rounded-xl bg-white/90 backdrop-blur-md hover:bg-white border-2 border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-green-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      {isOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
                    </div>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-80 bg-white/95 backdrop-blur-xl border-l border-white/20 shadow-2xl"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg">
                          <Image
                            src="/glow-housekeeping-logo.png"
                            alt="Glow Housekeeping Logo"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            Glow Housekeeping
                          </h2>
                          <p className="text-xs text-gray-600">Professional Cleaning</p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 px-6 py-6 space-y-2">
                      <Link
                        href="/"
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">
                          {t.home}
                        </span>
                      </Link>

                      <Link
                        href="/contact"
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">
                          {t.contact}
                        </span>
                      </Link>

                      <Link
                        href="/blog"
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">
                          {t.blog}
                        </span>
                      </Link>

                      {/* Mobile Services Dropdown */}
                      <div className="space-y-2">
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30"
                        >
                          <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">
                            {t.services}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {servicesOpen && (
                          <div className="ml-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="flex justify-between items-center mb-1">
                                  <span className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                                    {t[service.titleKey] || service.title}
                                  </span>
                                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    {service.price}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                  {t[service.descriptionKey] || service.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      <Link
                        href="/about"
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">
                          {t.about}
                        </span>
                      </Link>

                      <Link
                        href="/join-our-team"
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 group border border-transparent hover:border-blue-200/30"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">
                          {t.careers}
                        </span>
                      </Link>

                      {/* Mobile Language Switcher */}
                      <MobileLanguageSwitcher onLanguageChange={() => setIsOpen(false)} />

                      {/* Mobile CTA Button */}
                      <div className="pt-4">
                        <Button
                          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href="/book-service">{t.getQuote}</Link>
                        </Button>
                      </div>
                    </nav>

                    {/* Mobile Contact Info */}
                    <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-blue-50/50 to-green-50/50">
                      <h3 className="font-semibold text-gray-900 mb-3">Quick Contact</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Phone className="w-4 h-4" />
                          <a href="tel:+31610756699">+31 6 10756699</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Mail className="w-4 h-4" />
                          <a href="mailto:glorija.berina@gmail.com">glorija.berina@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
