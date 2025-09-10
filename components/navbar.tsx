"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Home,
  Sparkles,
  Info,
  FileText,
  Briefcase,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import MobileLanguageSwitcher from "./mobile-language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  const services = [
    {
      title: "General Cleaning",
      description: "Complete office and commercial cleaning with professional standards",
      price: "€35/hr",
      href: "/services/general-cleaning",
    },
    {
      title: "Solar Panel Cleaning",
      description: "Maximize energy efficiency with professional solar panel maintenance",
      price: "€150-500",
      href: "/services/solar-panel-cleaning",
    },
    {
      title: "Window Cleaning",
      description: "Crystal clear windows for enhanced natural light and beautiful views",
      price: "€150-550",
      href: "/services/window-cleaning",
    },
    {
      title: "Drain Cleaning",
      description: "Professional drain maintenance and blockage removal services",
      price: "€20-120",
      href: "/services/drain-cleaning",
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isServicesActive = () => {
    return pathname.startsWith("/services")
  }

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile for better header visibility */}
      <div className="hidden md:block bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-300" />
                <span className="text-blue-100">Call Us Today</span>
                <a href="tel:+31610756699" className="text-white font-semibold hover:text-blue-200 transition-colors">
                  +31 6 10756699
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-blue-100">Drop Us An Email</span>
                <a
                  href="mailto:gbeberina@gmail.com"
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  gbeberina@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-blue-100">Service Area</span>
                <span className="text-white font-semibold">Netherlands</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-300" />
                <span className="text-blue-100">Open Hours</span>
                <span className="text-white font-semibold">07AM - 06PM</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 ml-4">
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Enhanced Mobile Visibility */}
      <nav className="sticky top-0 z-50 w-full">
        {/* Enhanced Glassmorphism Background with better mobile contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-blue-800/35 to-teal-600/30 backdrop-blur-xl border-b border-white/20 md:from-blue-900/20 md:via-blue-800/25 md:to-teal-600/20 md:border-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-teal-500/15 md:from-blue-600/10 md:via-cyan-500/10 md:to-teal-500/10"></div>
        <div className="absolute inset-0 shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] shadow-blue-500/20 md:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] md:shadow-blue-500/10"></div>
        <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(255,255,255,0.1)] md:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.05)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo Section - Enhanced mobile visibility */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 z-10 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-teal-400/30 md:from-blue-400/20 md:to-teal-400/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0518.JPG-0ntakJPjzjG266UJGltFUfmQn1pf6H.jpeg"
                  alt="Glow Housekeeping Logo"
                  width={120}
                  height={60}
                  className="relative h-10 w-auto md:h-12 lg:h-14 object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Unchanged */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Home */}
              <Link
                href="/"
                className={`relative group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ease-out ${
                  isActive("/")
                    ? "text-white font-bold bg-white/15 shadow-lg shadow-blue-500/20 backdrop-blur-sm border border-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/8"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10 rounded-xl transition-all duration-500"></div>
                <Home
                  className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    isActive("/") ? "text-cyan-300" : "text-white/80 group-hover:text-cyan-200"
                  }`}
                />
                <span className="relative z-10">
                  Home
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 ease-out ${
                      isActive("/") ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </span>
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`relative group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ease-out ${
                  isActive("/contact")
                    ? "text-white font-bold bg-white/15 shadow-lg shadow-blue-500/20 backdrop-blur-sm border border-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/8"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10 rounded-xl transition-all duration-500"></div>
                <Phone
                  className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    isActive("/contact") ? "text-cyan-300" : "text-white/80 group-hover:text-cyan-200"
                  }`}
                />
                <span className="relative z-10">
                  Contact
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 ease-out ${
                      isActive("/contact")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </span>
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                className={`relative group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ease-out ${
                  isActive("/blog")
                    ? "text-white font-bold bg-white/15 shadow-lg shadow-blue-500/20 backdrop-blur-sm border border-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/8"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10 rounded-xl transition-all duration-500"></div>
                <FileText
                  className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    isActive("/blog") ? "text-cyan-300" : "text-white/80 group-hover:text-cyan-200"
                  }`}
                />
                <span className="relative z-10">
                  Blog
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 ease-out ${
                      isActive("/blog")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </span>
              </Link>

              {/* Services */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`relative group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-200 ease-out ${
                        isServicesActive()
                          ? "text-white font-bold bg-white/15 shadow-lg shadow-blue-500/20 backdrop-blur-sm border border-white/10"
                          : "text-white/90 hover:text-white hover:bg-white/8"
                      } bg-transparent hover:bg-white/8 data-[state=open]:bg-white/12 data-[state=open]:shadow-lg data-[state=open]:shadow-blue-500/20 data-[state=open]:text-white`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10 rounded-xl transition-all duration-500"></div>
                      <Sparkles
                        className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                          isServicesActive() ? "text-cyan-300" : "text-white/80 group-hover:text-cyan-200"
                        }`}
                      />
                      <span className="relative z-10">
                        Services
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 ease-out ${
                            isServicesActive()
                              ? "w-full opacity-100"
                              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                          }`}
                        ></span>
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-3 p-6 bg-white/98 backdrop-blur-xl shadow-2xl shadow-blue-500/15 rounded-2xl border border-white/30 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/60 to-teal-50/60 rounded-2xl"></div>
                        <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] rounded-2xl pointer-events-none"></div>
                        {services.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="relative block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50/90 hover:to-teal-50/90 hover:shadow-lg hover:shadow-blue-500/10 focus:bg-gradient-to-r focus:from-blue-50/90 focus:to-teal-50/90 focus:shadow-lg border border-transparent hover:border-blue-200/60 group backdrop-blur-sm transform hover:scale-[1.02] hover:-translate-y-0.5"
                            style={{
                              animationDelay: `${index * 50}ms`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                            <div className="flex items-center justify-between mb-2 relative z-10">
                              <div className="text-base font-semibold leading-none text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                {service.title}
                              </div>
                              <div className="text-sm font-bold text-blue-600 bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1.5 rounded-full group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300 shadow-sm group-hover:shadow-md border border-blue-100/50">
                                {service.price}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                              {service.description}
                            </p>
                            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* About */}
              <Link
                href="/about"
                className={`relative group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ease-out ${
                  isActive("/about")
                    ? "text-white font-bold bg-white/15 shadow-lg shadow-blue-500/20 backdrop-blur-sm border border-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/8"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10 rounded-xl transition-all duration-500"></div>
                <Info
                  className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    isActive("/about") ? "text-cyan-300" : "text-white/80 group-hover:text-cyan-200"
                  }`}
                />
                <span className="relative z-10">
                  About
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 ease-out ${
                      isActive("/about")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </span>
              </Link>

              {/* Careers */}
              <Link
                href="/join-our-team"
                className={`relative group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ease-out ${
                  isActive("/join-our-team")
                    ? "text-white font-bold bg-white/15 shadow-lg shadow-blue-500/20 backdrop-blur-sm border border-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/8"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-teal-400/0 group-hover:from-blue-400/10 group-hover:via-cyan-400/10 group-hover:to-teal-400/10 rounded-xl transition-all duration-500"></div>
                <Briefcase
                  className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    isActive("/join-our-team") ? "text-cyan-300" : "text-white/80 group-hover:text-cyan-200"
                  }`}
                />
                <span className="relative z-10">
                  Careers
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 ease-out ${
                      isActive("/join-our-team")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </span>
              </Link>

              {/* Language Switcher - Desktop */}
              <LanguageSwitcher />
            </div>

            {/* CTA Button - Enhanced mobile visibility */}
            <div className="hidden md:flex lg:flex items-center">
              <Button className="relative bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 text-white rounded-full font-bold px-6 md:px-8 py-2 md:py-3 text-sm md:text-base shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/35 transition-all duration-300 transform hover:scale-105 border border-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-sm"></div>
                <Link href="/book-service" className="relative z-10">
                  GET QUOTE
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation - Enhanced */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-white hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-lg shadow-blue-500/20 w-12 h-12 md:w-10 md:h-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Menu className="h-6 w-6 md:h-5 md:w-5 relative z-10" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] sm:w-[400px] bg-white/98 backdrop-blur-2xl border-l border-white/30 shadow-2xl shadow-blue-500/20 overflow-y-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/50 to-teal-50/40"></div>

                {/* Mobile Header - Enhanced */}
                <div className="relative flex items-center justify-between pb-6 border-b border-white/30">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent">
                    Navigation
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-10 w-10 rounded-lg hover:bg-gray-100/80 transition-colors duration-200"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="relative flex flex-col space-y-6 mt-8">
                  {/* Language Switcher - Mobile */}
                  <MobileLanguageSwitcher onLanguageChange={() => setIsOpen(false)} />

                  {/* Main Navigation - Enhanced Mobile */}
                  <div className="space-y-3 border-t border-white/30 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Home className="w-4 h-4 text-blue-600" />
                      Main Menu
                    </h3>

                    {/* Home */}
                    <Link
                      href="/"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-medium group min-h-[56px] ${
                        isActive("/")
                          ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 font-bold border border-blue-200/40 shadow-lg shadow-blue-500/10"
                          : "hover:bg-gray-50/80 text-gray-700 hover:text-blue-700 border border-transparent hover:border-gray-200/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Home
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive("/") ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                        }`}
                      />
                      <span className="relative text-lg">
                        Home
                        {isActive("/") && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                        )}
                      </span>
                    </Link>

                    {/* Contact */}
                    <Link
                      href="/contact"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-medium group min-h-[56px] ${
                        isActive("/contact")
                          ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 font-bold border border-blue-200/40 shadow-lg shadow-blue-500/10"
                          : "hover:bg-gray-50/80 text-gray-700 hover:text-blue-700 border border-transparent hover:border-gray-200/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive("/contact") ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                        }`}
                      />
                      <span className="relative text-lg">
                        Contact
                        {isActive("/contact") && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                        )}
                      </span>
                    </Link>

                    {/* Blog */}
                    <Link
                      href="/blog"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-medium group min-h-[56px] ${
                        isActive("/blog")
                          ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 font-bold border border-blue-200/40 shadow-lg shadow-blue-500/10"
                          : "hover:bg-gray-50/80 text-gray-700 hover:text-blue-700 border border-transparent hover:border-gray-200/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <FileText
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive("/blog") ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                        }`}
                      />
                      <span className="relative text-lg">
                        Blog
                        {isActive("/blog") && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                        )}
                      </span>
                    </Link>

                    {/* Services Section - Enhanced Mobile Dropdown */}
                    <div className="space-y-2">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full flex items-center justify-between gap-4 p-4 rounded-xl font-medium transition-all duration-300 group min-h-[56px] ${
                          isServicesActive()
                            ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 font-bold border border-blue-200/40 shadow-lg shadow-blue-500/10"
                            : "bg-gradient-to-r from-gray-50 to-gray-100/60 text-gray-900 hover:from-blue-50/80 hover:to-teal-50/80 border border-gray-200/40 hover:border-blue-200/60"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <Sparkles className="w-6 h-6 text-blue-600" />
                          <span className="text-lg font-semibold">Services</span>
                        </div>
                        {mobileServicesOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                        )}
                      </button>

                      {/* Mobile Services Dropdown */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          mobileServicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-2 ml-4 mt-2">
                          {services.map((service, index) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`block p-4 rounded-xl transition-all duration-300 group border transform hover:scale-[1.01] min-h-[64px] ${
                                isActive(service.href)
                                  ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 font-bold border-blue-200/40 shadow-lg shadow-blue-500/10"
                                  : "hover:bg-gradient-to-r hover:from-blue-50/90 hover:to-teal-50/90 border-transparent hover:border-blue-200/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10"
                              }`}
                              onClick={() => {
                                setIsOpen(false)
                                setMobileServicesOpen(false)
                              }}
                              style={{
                                animationDelay: `${index * 100}ms`,
                              }}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div
                                  className={`text-base font-semibold transition-colors ${
                                    isActive(service.href) ? "text-blue-700" : "text-gray-900 group-hover:text-blue-700"
                                  }`}
                                >
                                  {service.title}
                                </div>
                                <div className="text-sm font-bold text-blue-600 bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1.5 rounded-full group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300 shadow-sm">
                                  {service.price}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                                {service.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* About */}
                    <Link
                      href="/about"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-medium group min-h-[56px] ${
                        isActive("/about")
                          ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 font-bold border border-blue-200/40 shadow-lg shadow-blue-500/10"
                          : "hover:bg-gray-50/80 text-gray-700 hover:text-blue-700 border border-transparent hover:border-gray-200/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Info
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive("/about") ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                        }`}
                      />
                      <span className="relative text-lg">
                        About
                        {isActive("/about") && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                        )}
                      </span>
                    </Link>

                    {/* Careers */}
                    <Link
                      href="/join-our-team"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-medium group min-h-[56px] ${
                        isActive("/join-our-team")
                          ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 font-bold border border-blue-200/40 shadow-lg shadow-blue-500/10"
                          : "hover:bg-gray-50/80 text-gray-700 hover:text-blue-700 border border-transparent hover:border-gray-200/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Briefcase
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive("/join-our-team") ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                        }`}
                      />
                      <span className="relative text-lg">
                        Careers
                        {isActive("/join-our-team") && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                        )}
                      </span>
                    </Link>
                  </div>

                  {/* CTA Button - Mobile */}
                  <div className="border-t border-white/30 pt-6">
                    <Button className="w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 text-white rounded-xl font-bold py-4 text-lg shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/35 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm border border-white/10 min-h-[56px]">
                      <Link href="/book-service" onClick={() => setIsOpen(false)}>
                        GET QUOTE
                      </Link>
                    </Button>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="border-t border-white/30 pt-6 space-y-4">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Quick Contact</h4>
                    <div className="space-y-3">
                      <a
                        href="tel:+31610756699"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-base">+31 6 10756699</span>
                      </a>
                      <a
                        href="mailto:gbeberina@gmail.com"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-base">gbeberina@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}
