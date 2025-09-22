"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/glow-housekeeping-logo.png"
                alt="Glow Housekeeping"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Glow Housekeeping</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">{t("footer.description")}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+31 6 12345678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>glowhousekeeping.org@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>{t("footer.location")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/general-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.generalCleaning")}
                </Link>
              </li>
              <li>
                <Link href="/services/deep-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.deepCleaning")}
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.windowCleaning")}
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-care" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.carpetCare")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/solar-panel-cleaning"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("services.solarPanelCleaning")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="text-gray-300 text-sm">© 2024 Glow Housekeeping. {t("footer.allRightsReserved")}</div>
        </div>
      </div>
    </footer>
  )
}
