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
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Glow Housekeeping
              </span>
              <p className="text-xs text-gray-600">Professional Cleaning Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link
              href="/services/general-cleaning"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>

            <div className="flex items-center gap-4 ml-4 border-l pl-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+31 6 10756699</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+31 6 31330807</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full px-6">
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
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services/general-cleaning"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <div className="pt-4 space-y-3 border-t">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+31 6 10756699 (WhatsApp only)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+31 6 31330807</span>
              </div>
              <a
                href="mailto:glowhousekeeping.org@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Email Us</span>
              </a>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full"
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
