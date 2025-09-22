"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileLanguageSwitcher } from "@/components/mobile-language-switcher"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("nav.blog"), href: "/blog" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/glow-housekeeping-logo.png"
                alt="Glow Housekeeping"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-blue-600">Glow Housekeeping</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+31 6 12345678</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>glowhousekeeping.org@gmail.com</span>
            </div>
            <LanguageSwitcher />
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/book-service">{t("nav.bookNow")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>+31 6 12345678</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Mail className="h-4 w-4" />
                  <span>glowhousekeeping.org@gmail.com</span>
                </div>
                <MobileLanguageSwitcher />
                <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  <Link href="/book-service" onClick={() => setIsOpen(false)}>
                    {t("nav.bookNow")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
