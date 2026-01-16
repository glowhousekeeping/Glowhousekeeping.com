"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image src="/glow-logo-new.jpg" alt="Glow Housekeeping Logo" fill className="object-cover" priority />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Glow Housekeeping
              </span>
              <p className="text-xs text-gray-600">Professional Cleaning Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              About
            </Link>
            <Link
              href="/services/general-cleaning"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Contact
            </Link>

            <div className="flex items-center gap-4 ml-4 border-l pl-4">
              <a
                href="tel:+31631330807"
                className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+31 6 31330807</span>
              </a>
            </div>

            <Button className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white rounded-full px-6">
              <Link href="/book-service">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services/general-cleaning"
              className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <div className="pt-4 space-y-3 border-t">
              <a
                href="https://wa.me/31610756699"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-medium">+31 6 10756699 (WhatsApp only)</span>
              </a>
              <a
                href="tel:+31631330807"
                className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+31 6 31330807 (Calls & inquiries)</span>
              </a>
              <a
                href="mailto:gbeberina@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Email Us</span>
              </a>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white rounded-full"
              onClick={toggleMenu}
            >
              <Link href="/book-service">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
