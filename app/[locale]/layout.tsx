import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AIChatbotGlorija from "@/components/ai-chatbot-glorija"
import { locales } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Glow Housekeeping - Professional Cleaning Services Netherlands",
  description:
    "Professional cleaning services across the Netherlands. Residential and commercial cleaning, solar panel cleaning, window cleaning, and more. Like it's our own home.",
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIChatbotGlorija />
      </body>
    </html>
  )
}
