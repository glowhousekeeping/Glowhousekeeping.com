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
    "Professional cleaning services across the Netherlands. Founded by Glorija Beberina, we provide exceptional commercial and residential cleaning with integrity, care, and professionalism.",
  keywords:
    "cleaning services, Netherlands, professional cleaning, commercial cleaning, residential cleaning, Glorija Beberina, Glow Housekeeping",
  authors: [{ name: "Glow Housekeeping" }],
  creator: "Glow Housekeeping",
  publisher: "Glow Housekeeping",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://glowhousekeeping.nl"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "nl-NL": "/nl",
      "fy-NL": "/fy",
    },
  },
  openGraph: {
    title: "Glow Housekeeping - Professional Cleaning Services",
    description: "Professional cleaning services across the Netherlands with integrity, care, and professionalism.",
    url: "https://glowhousekeeping.nl",
    siteName: "Glow Housekeeping",
    images: [
      {
        url: "/glow-housekeeping-logo.png",
        width: 1200,
        height: 630,
        alt: "Glow Housekeeping Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Housekeeping - Professional Cleaning Services",
    description: "Professional cleaning services across the Netherlands with integrity, care, and professionalism.",
    images: ["/glow-housekeeping-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
