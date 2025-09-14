import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Footer() {
  const { t, locale } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/glow-housekeeping-logo.png"
                alt="Glow Housekeeping"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Glow Housekeeping</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional cleaning services across the Netherlands. Like it's our own home.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/31610756699"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.ourServices")}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${locale}/services/general-cleaning`} className="hover:text-white transition-colors">
                  {t("services.generalCleaning")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/solar-panel-cleaning`} className="hover:text-white transition-colors">
                  {t("services.solarPanelCleaning")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/window-cleaning`} className="hover:text-white transition-colors">
                  {t("services.windowCleaning")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/drain-cleaning`} className="hover:text-white transition-colors">
                  {t("services.drainCleaning")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-white transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/join-our-team`} className="hover:text-white transition-colors">
                  {t("nav.joinTeam")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.contactInfo")}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+31610756699" className="hover:text-white transition-colors">
                  +31 6 10756699
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@glowhousekeeping.nl" className="hover:text-white transition-colors">
                  info@glowhousekeeping.nl
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Venlo, Limburg, Netherlands</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Glow Housekeeping. {t("footer.allRightsReserved")}.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
