import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatbotGlorija } from "@/components/ai-chatbot-glorija"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Glow Housekeeping - Professional Cleaning Services in Netherlands</title>
        <meta
          name="description"
          content="Professional cleaning services in Netherlands. General cleaning, deep cleaning, window cleaning, carpet care, and solar panel cleaning. Book your service today!"
        />
        <meta
          name="keywords"
          content="cleaning services, housekeeping, Netherlands, professional cleaning, deep cleaning, window cleaning"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/glow-housekeeping-logo.png" />
      </head>
      <body className={inter.className}>
        <I18nextProvider i18n={i18n}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <AIChatbotGlorija />
          </div>
        </I18nextProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
