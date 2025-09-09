"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-green-600 shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3">
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
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium">
                HOME
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-blue-200 bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                      SERVICES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-3 p-6 bg-white shadow-lg rounded-lg border border-gray-100">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
                          >
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <div className="text-sm font-semibold text-blue-600">{service.price}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/about" className="text-white hover:text-blue-200 transition-colors font-medium">
                ABOUT
              </Link>
              <Link href="/blog" className="text-white hover:text-blue-200 transition-colors font-medium">
                BLOG
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">
                CONTACT
              </Link>
              <Link href="/join-our-team" className="text-white hover:text-blue-200 transition-colors font-medium">
                CAREERS
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full font-bold">
                <Link href="/book-service">GET QUOTE</Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="text-sm font-medium">{service.title}</div>
                          <div className="text-sm font-semibold text-blue-600">{service.price}</div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <Link
                      href="/about"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/blog"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="/join-our-team"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Careers
                    </Link>
                  </div>

                  <div className="border-t pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full font-bold">
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
