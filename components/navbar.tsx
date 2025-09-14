"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import MobileLanguageSwitcher from "@/components/mobile-language-switcher"
import { useTranslation } from "@/hooks/use-translation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale } = useTranslation()

  const navigation = [
    { name: t("nav.home"), href: `/${locale}` },
    { name: t("nav.about"), href: `/${locale}/about` },
    { name: t("nav.services"), href: `/${locale}/services` },
    { name: t("nav.contact"), href: `/${locale}/contact` },
    { name: t("nav.blog"), href: `/${locale}/blog` },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <Image
                src="/glow-housekeeping-logo.png"
                alt="Glow Housekeeping"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">Glow Housekeeping</span>
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button size="sm" variant="outline" className="hidden lg:flex bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+31610756699">+31 6 10756699</a>
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Link href={`/${locale}/book-service`}>{t("nav.bookService")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <MobileLanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            <div className="pt-4 pb-2 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <Button size="sm" variant="outline" className="justify-start bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+31610756699">+31 6 10756699</a>
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <a href="https://wa.me/31610756699">WhatsApp</a>
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 justify-start">
                  <Link href={`/${locale}/book-service`}>{t("nav.bookService")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
