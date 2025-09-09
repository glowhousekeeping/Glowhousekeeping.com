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
} from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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

  const navigationItems = [
    { href: "/", label: "HOME", icon: Home },
    { href: "/about", label: "ABOUT", icon: Info },
    { href: "/blog", label: "BLOG", icon: FileText },
    { href: "/contact", label: "CONTACT", icon: Phone },
    { href: "/join-our-team", label: "CAREERS", icon: Briefcase },
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
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-4">
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

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 shadow-2xl backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/90 to-green-500/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 z-10">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0518.JPG-0ntakJPjzjG266UJGltFUfmQn1pf6H.jpeg"
                  alt="Glow Housekeeping Logo"
                  width={140}
                  height={70}
                  className="h-12 w-auto md:h-14 object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                      isActive(item.href)
                        ? "text-yellow-300 font-bold bg-white/10 shadow-lg"
                        : "text-white hover:text-blue-100 hover:bg-white/5"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-300 transition-all duration-300 ${
                          isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  </Link>
                )
              })}

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                        isServicesActive()
                          ? "text-yellow-300 font-bold bg-white/10 shadow-lg"
                          : "text-white hover:text-blue-100 hover:bg-white/5"
                      } bg-transparent hover:bg-white/5 data-[state=open]:bg-white/10`}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span className="relative">
                        SERVICES
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-300 transition-all duration-300 ${
                            isServicesActive() ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-3 p-6 bg-white shadow-2xl rounded-lg border border-gray-200 backdrop-blur-sm">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:shadow-lg focus:bg-gradient-to-r focus:from-blue-50 focus:to-green-50 focus:shadow-lg border border-transparent hover:border-blue-200 group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="text-base font-semibold leading-none text-gray-900 group-hover:text-blue-700 transition-colors">
                                {service.title}
                              </div>
                              <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                                {service.price}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-700 transition-colors">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-full font-bold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/book-service">GET QUOTE</Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Services
                    </h3>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-300 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="text-sm font-medium group-hover:text-blue-700 transition-colors">
                            {service.title}
                          </div>
                          <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                            {service.price}
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 group-hover:text-gray-700 transition-colors">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 font-medium ${
                            isActive(item.href)
                              ? "bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 font-bold"
                              : "hover:bg-gray-50 text-gray-700 hover:text-blue-700"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <IconComponent className="w-4 h-4" />
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>

                  <div className="border-t pt-4">
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link href="/book-service">GET QUOTE</Link>
                    </Button>
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
