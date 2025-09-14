"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { getCurrentTranslations } from "./language-switcher"

export default function Footer() {
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
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg">
                <Image src="/glow-housekeeping-logo.png" alt="Glow Housekeeping Logo" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Glow Housekeeping
                </h3>
                <p className="text-sm text-gray-300">Professional Cleaning Services</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{t.aboutSubtitle}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="text-gray-300 hover:text-white transition-colors duration-300">
                  {t.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t.ourServices}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/general-cleaning"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t.generalCleaning}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/solar-panel-cleaning"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t.solarPanelCleaning}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/window-cleaning"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t.windowCleaning}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/drain-cleaning"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t.drainCleaning}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t.contactInfo}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:glorija.berina@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  glorija.berina@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+31610756699" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +31 6 10756699
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">Venlo, Limburg, Netherlands</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">{t.businessHours}</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Glow Housekeeping. {t.allRightsReserved}</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t.privacyPolicy}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
