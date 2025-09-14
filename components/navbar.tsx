"use client"

import { useState } from "react"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import MobileLanguageSwitcher from "@/components/mobile-language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation("common")

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/glow-housekeeping-logo.png"
                  alt="Glow Housekeeping Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">
                  Glow Housekeeping
                </h1>
                <p className="text-xs text-blue-100 group-hover:text-cyan-300 transition-colors duration-300">
                  Professional Cleaning Services
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="group relative px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 font-medium"
              >
                <span className="relative z-10">{t("navigation.home")}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
              </Link>

              <div className="relative group">
                <button className="group relative px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 font-medium flex items-center gap-1">
                  <span className="relative z-10">{t("navigation.services")}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                </button>

                {/* Services Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link
                      href="/services/general-cleaning"
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-medium"
                    >
                      General Cleaning
                    </Link>
                    <Link
                      href="/services/solar-panel-cleaning"
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-medium"
                    >
                      Solar Panel Cleaning
                    </Link>
                    <Link
                      href="/services/window-cleaning"
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-medium"
                    >
                      Window Cleaning
                    </Link>
                    <Link
                      href="/services/drain-cleaning"
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-medium"
                    >
                      Drain Cleaning
                    </Link>
                    <Link
                      href="/services/deep-cleaning"
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-medium"
                    >
                      Deep Cleaning
                    </Link>
                    <Link
                      href="/services/carpet-care"
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-medium"
                    >
                      Carpet Care
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="group relative px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 font-medium"
              >
                <span className="relative z-10">{t("navigation.about")}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
              </Link>

              <Link
                href="/blog"
                className="group relative px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 font-medium"
              >
                <span className="relative z-10">{t("navigation.blog")}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
              </Link>

              <Link
                href="/contact"
                className="group relative px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 font-medium"
              >
                <span className="relative z-10">{t("navigation.contact")}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
              </Link>

              <Link
                href="/join-our-team"
                className="group relative px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 font-medium"
              >
                <span className="relative z-10">{t("navigation.careers")}</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Desktop CTA and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm rounded-xl px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/book-service">{t("navigation.getQuote")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-blue-700/95 to-green-700/95 backdrop-blur-xl border-t border-white/10">
          <Link
            href="/"
            className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            {t("navigation.home")}
          </Link>

          {/* Mobile Services Submenu */}
          <div className="space-y-1">
            <div className="px-4 py-2 text-white/70 text-sm font-semibold uppercase tracking-wider">
              {t("navigation.services")}
            </div>
            <Link
              href="/services/general-cleaning"
              className="block px-6 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              onClick={() => setIsOpen(false)}
            >
              General Cleaning
            </Link>
            <Link
              href="/services/solar-panel-cleaning"
              className="block px-6 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Solar Panel Cleaning
            </Link>
            <Link
              href="/services/window-cleaning"
              className="block px-6 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Window Cleaning
            </Link>
            <Link
              href="/services/drain-cleaning"
              className="block px-6 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Drain Cleaning
            </Link>
            <Link
              href="/services/deep-cleaning"
              className="block px-6 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Deep Cleaning
            </Link>
            <Link
              href="/services/carpet-care"
              className="block px-6 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Carpet Care
            </Link>
          </div>

          <Link
            href="/about"
            className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            {t("navigation.about")}
          </Link>

          <Link
            href="/blog"
            className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            {t("navigation.blog")}
          </Link>

          <Link
            href="/contact"
            className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            {t("navigation.contact")}
          </Link>

          <Link
            href="/join-our-team"
            className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            {t("navigation.careers")}
          </Link>

          {/* Mobile Language Switcher */}
          <div className="px-4 py-2">
            <MobileLanguageSwitcher />
          </div>

          {/* Mobile CTA */}
          <div className="px-4 py-4">
            <Button
              asChild
              className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm rounded-xl py-3 font-semibold transition-all duration-300"
            >
              <Link href="/book-service" onClick={() => setIsOpen(false)}>
                {t("navigation.getQuote")}
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="px-4 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+31 6 10756699</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@glowhousekeeping.nl</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
