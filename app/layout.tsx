import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AIChatbotGlorija from "@/components/ai-chatbot-glorija";

// ✅ Import i18next provider and i18n setup
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // make sure i18n.js exists in your project root

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6205268462730211"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* ✅ Wrap the app with i18next provider */}
        <I18nextProvider i18n={i18n}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AIChatbotGlorija />
        </I18nextProvider>
      </body>
    </html>
  );
}
