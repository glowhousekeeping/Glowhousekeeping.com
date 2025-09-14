"use client"

import { useTranslation } from "next-i18next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation("common")

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <Image src="/glow-housekeeping-logo.png" alt="Glow Housekeeping Logo" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Glow Housekeeping</h3>
                <p className="text-blue-200 text-sm">Professional Cleaning Services</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We treat every space like it's our own home, delivering exceptional results with flexibility,
              affordability, and trust across the Netherlands.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t("navigation.services")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/general-cleaning"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  General Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/solar-panel-cleaning"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Solar Panel Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/window-cleaning"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/drain-cleaning"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Drain Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/deep-cleaning"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carpet-care"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Carpet Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t("navigation.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t("navigation.contact")}
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t("navigation.careers")}
                </Link>
              </li>
              <li>
                <Link href="/book-service" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Book Service
                </Link>
              </li>
              <li>
                <Link
                  href="/client-assessment"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Client Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t("contact.contactInfo")}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+31 6 10756699</p>
                  <p className="text-slate-300 text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">info@glowhousekeeping.nl</p>
                  <p className="text-slate-300 text-sm">Quick response guaranteed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Venlo, Limburg</p>
                  <p className="text-slate-300 text-sm">Serving all of Netherlands</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Mon - Fri: 8:00 - 18:00</p>
                  <p className="text-slate-300 text-sm">Weekend: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">© 2024 Glow Housekeeping. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
