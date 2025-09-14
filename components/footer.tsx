"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react"
import { getCurrentTranslations } from "@/components/language-switcher"

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/glow-housekeeping-logo.png"
                alt="Glow Housekeeping Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">Glow Housekeeping</h3>
                <p className="text-gray-400 text-sm">Professional Cleaning Services</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We treat every space like it's our own home, delivering exceptional cleaning services with flexibility,
              affordability, and trust across the Netherlands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/services/general-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="text-gray-300 hover:text-white transition-colors">
                  {t.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/general-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  {t.generalCleaning}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/solar-panel-cleaning"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.solarPanelCleaning}
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  {t.windowCleaning}
                </Link>
              </li>
              <li>
                <Link href="/services/drain-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  {t.drainCleaning}
                </Link>
              </li>
              <li>
                <Link href="/services/deep-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-care" className="text-gray-300 hover:text-white transition-colors">
                  Carpet Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+31610756699" className="text-gray-300 hover:text-white transition-colors">
                  +31 6 10756699
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:glowhousekeeping.org@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  glowhousekeeping.org@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Venlo, Limburg, Netherlands</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">{t.businessHours}</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>© 2024 Glow Housekeeping. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>by Glorija Beberina</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
