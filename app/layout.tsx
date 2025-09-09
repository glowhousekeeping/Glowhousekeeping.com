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
    icon: "/glow-housekeeping-logo.png",
    shortcut: "/glow-housekeeping-logo.png",
    apple: "/glow-housekeeping-logo.png",
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
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIChatbotGlorija />
      </body>
    </html>
  )
}
