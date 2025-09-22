"use client"

import { useState } from "react"
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
import { useTranslation } from "react-i18next"

const services = [
  { titleKey: "services.generalCleaning", href: "/services/general-cleaning", descriptionKey: "services.generalCleaningPricing", price: "€35/hr" },
  { titleKey: "services.solarPanelCleaning", href: "/services/solar-panel-cleaning", descriptionKey: "services.solarPanelCleaning", price: "€150-500" },
  { titleKey: "services.windowCleaning", href: "/services/window-cleaning", descriptionKey: "services.windowCleaning", price: "€150-550" },
  { titleKey: "services.drainCleaning", href: "/services/drain-cleaning", descriptionKey: "services.drainCleaning", price: "€20-120" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { t } = useTranslation("common")

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>glowhousekeeping.org@gmail.com</span>
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
                <Image src="/glow-housekeeping-logo.png" alt={t("footer.company")} fill className="object-cover" priority />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">{t("footer.company")}</h1>
                <p className="text-xs text-gray-600">{t("footer.description")}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-6">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600">
                        {t("nav.home")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600">
                        {t("nav.contact")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600">
                        {t("nav.blog")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600">
                      {t("nav.services")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-6 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <Link key={service.href} href={service.href} className="group block p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-teal-50/80 transition-all duration-300 border border-transparent hover:border-blue-200/30 hover:shadow-lg transform hover:scale-105">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{t(service.titleKey)}</h3>
                                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{service.price}</span>
                              </div>
                              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{t(service.descriptionKey)}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600">
                        {t("nav.about")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/join-our-team" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600">
                        {t("nav.joinTeam")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Language Switcher */}
                  <LanguageSwitcher />
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Link href="/book-service">{t("hero.cta")}</Link>
              </Button>
            </div>

            {/* Mobile Menu omitted for brevity; same pattern with t("key") */}
          </div>
        </div>
      </nav>
    </header>
  )
}
