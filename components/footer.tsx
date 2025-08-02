import Link from "next/link"
import { Sparkles, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Glow Housekeeping</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional housekeeping and cleaning services across the Netherlands. We treat every space like it's our
              own home.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/general-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  General Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/solar-panel-cleaning"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solar Panel Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/drain-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Drain Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="text-gray-400 hover:text-white transition-colors">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:gbeberina@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  gbeberina@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="https://wa.me/31610756699" className="text-gray-400 hover:text-white transition-colors">
                  +31 6 10756699
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">Netherlands</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Glow Housekeeping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
