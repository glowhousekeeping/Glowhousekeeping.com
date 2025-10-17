import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AIChatbotGlorija from "@/components/ai-chatbot-glorija"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Glow Housekeeping - Professional Cleaning Services in Netherlands",
  description:
    "Professional housekeeping and cleaning services across the Netherlands. We treat every space like it's our own home, delivering exceptional results with flexibility, affordability, and trust.",
  icons: {
    icon: "/glow-logo-new.jpg",
    shortcut: "/glow-logo-new.jpg",
    apple: "/glow-logo-new.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/glow-logo-new.jpg" />
        <link rel="apple-touch-icon" href="/glow-logo-new.jpg" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6205268462730211"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIChatbotGlorija />
      </body>
    </html>
  )
}
