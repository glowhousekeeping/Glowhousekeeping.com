import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Glow Housekeeping - Professional Cleaning Services in The Netherlands",
  description:
    "Founded by Glorija Beberina, Glow Housekeeping offers professional cleaning services across The Netherlands. Experience honest, reliable, and exceptional cleaning tailored to your needs.",
  icons: {
    icon: "/glow-logo-new.jpg",
    shortcut: "/glow-logo-new.jpg",
    apple: "/glow-logo-new.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/glow-logo-new.jpg" />
        <link rel="apple-touch-icon" href="/glow-logo-new.jpg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
