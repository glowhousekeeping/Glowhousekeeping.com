"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation("common")

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/glow-housekeeping-logo.png"
                alt={t("footer.company")}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">{t("footer.company")}</h3>
                <p className="text-sm text-gray-400">{t("footer.description")}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Founded by Glorija Beberina, we bring passion, integrity, and excellence to every cleaning service across
              the Netherlands.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-400 ml-2">5.0 Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t("nav.home")}</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/services/general-cleaning" className="block text-gray-300 hover:text-white transition-colors">
                {t("nav.services")}
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">
                {t("nav.blog")}
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t("services.title")}</h4>
            <nav className="space-y-3">
              <Link href="/services/general-cleaning" className="block text-gray-300 hover:text-white transition-colors">
                {t("services.generalCleaning")}
              </Link>
              <Link href="/services/solar-panel-cleaning" className="block text-gray-300 hover:text-white transition-colors">
                {t("services.solarPanelCleaning")}
              </Link>
              <Link href="/services/window-cleaning" className="block text-gray-300 hover:text-white transition-colors">
                {t("services.windowCleaning")}
              </Link>
              <Link href="/services/drain-cleaning" className="block text-gray-300 hover:text-white transition-colors">
                {t("services.drainCleaning")}
              </Link>
              <Link href="/services/carpet-care" className="block text-gray-300 hover:text-white transition-colors">
                Carpet Care
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t("contact.title")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+31 6 10756699</p>
                  <p className="text-sm text-gray-400">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">glowhousekeeping.org@gmail.com</p>
                  <p className="text-sm text-gray-400">Quick response guaranteed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Serving all of Netherlands</p>
                  <p className="text-sm text-gray-400">Free quotes available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Flexible Scheduling</p>
                  <p className="text-sm text-gray-400">Mon-Sun: 7AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 {t("footer.company")}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
