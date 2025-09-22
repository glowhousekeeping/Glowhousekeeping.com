"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import MobileLanguageSwitcher from "./mobile-language-switcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const switchToDutch = () => i18n.changeLanguage("nl");
  const switchToEnglish = () => i18n.changeLanguage("en");

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

      {/* Main Nav */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <Image src="/glow-housekeeping-logo.png" alt="Glow Logo" fill className="object-cover" priority />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Glow Housekeeping
                </h1>
                <p className="text-xs text-gray-600">Professional Cleaning Services</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-6">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/">{t("nav.home")}</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/about">{t("nav.about")}</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/services">{t("nav.services")}</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/contact">{t("nav.contact")}</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/blog">{t("nav.blog")}</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
              <Button onClick={() => i18n.changeLanguage("nl")}>NL</Button>

              <Link href="/book" className="text-white bg-blue-600 hover:bg-green-600 px-4 py-2 rounded-lg">
                {t("navbar.getQuote")}
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg">
                {t("navbar.careers")}
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger className="lg:hidden">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <MobileLanguageSwitcher />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
