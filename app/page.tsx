"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Heart,
  CheckCircle,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Calendar,
  ClipboardList,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AutoScrollingGallery from "@/components/auto-scrolling-gallery"
import { translations } from "@/components/language-switcher"

export default function HomePage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en")
  const [t, setT] = useState(translations.en)

  useEffect(() => {
    // Check if we're on a language-specific route
    if (typeof window !== "undefined") {
      const path = window.location.pathname
      if (path.startsWith("/nl")) {
        setCurrentLanguage("nl")
        setT(translations.nl)
      } else if (path.startsWith("/en")) {
        setCurrentLanguage("en")
        setT(translations.en)
      } else {
        // Check localStorage for saved preference
        const savedLanguage = localStorage.getItem("preferred-language")
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "nl")) {
          setCurrentLanguage(savedLanguage)
          setT(translations[savedLanguage as keyof typeof translations])
        }
      }

      // Listen for language change events
      const handleLanguageChange = (event: CustomEvent) => {
        const { language, translations: newTranslations } = event.detail
        setCurrentLanguage(language)
        setT(newTranslations)
      }

      window.addEventListener("languageChanged", handleLanguageChange as EventListener)

      return () => {
        window.removeEventListener("languageChanged", handleLanguageChange as EventListener)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-16 h-16">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-400">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-300">
              <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 w-14 h-14">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-300">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-32 right-16 w-24 h-24 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-amber-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Content Container - Mobile First */}
        <div className="relative z-10 w-full px-4 py-8 md:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout - Stacked Vertically */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center lg:min-h-[80vh]">
              {/* Mobile Hero Image - Above Text */}
              <div className="lg:hidden order-1 w-full">
                <div className="relative w-full h-64 sm:h-72 animate-fade-in-up">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hero-background-premium-nPEKpy8sbY1qJn07YpZghvDdTem30M.jpg"
                      alt="Professional cleaner creating sparkling clean spaces"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-white/15"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-blue-900/10"></div>

                    {/* Mobile Caption */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg">
                        <p className="text-slate-800 font-bold text-sm sm:text-base text-center">"{t.imageCaption}"</p>
                      </div>
                    </div>

                    {/* Mobile Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full shadow-lg">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="text-xs font-bold">Glow Approved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content - Mobile Optimized */}
              <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left lg:mt-16">
                {/* Main Headline - Enhanced Mobile Responsive */}
                <div className="space-y-4 lg:space-y-6 animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800 leading-[1.1] tracking-tight">
                    <span className="block">
                      <span className="relative inline-block">
                        Your Home
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-green-400/20 blur-lg rounded-lg"></div>
                        <span className="relative bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent drop-shadow-sm">
                          Your Home
                        </span>
                      </span>
                    </span>
                    <span className="block mt-2">
                      <span className="relative inline-block">
                        Deserves to
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-lg rounded-lg"></div>
                        <span className="relative bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent drop-shadow-sm">
                          Deserves to
                        </span>
                      </span>
                    </span>
                    <span className="block mt-2">
                      <span className="relative inline-block bg-gradient-to-r from-green-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                        <div className="absolute -inset-2 bg-gradient-to-r from-green-400/30 via-blue-400/30 to-emerald-400/30 blur-xl rounded-2xl"></div>
                        <span className="relative font-black tracking-wider drop-shadow-lg">SHINE</span>
                      </span>
                    </span>
                  </h1>

                  <div className="space-y-4 lg:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium">
                    <p className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg border border-white/50">
                      <span className="block text-slate-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
                        {t.heroSubtitle}
                      </span>
                      <span className="text-green-700 font-semibold">{t.heroSpecialization}</span>
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-white/90 via-blue-50/90 to-green-50/90 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/60">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-3 bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
                      {t.heroTagline}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 font-semibold">
                      {t.heroServiceArea}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons - Enhanced Mobile Optimized */}
                <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
                  {/* Mobile Layout - Enhanced Full Width Stacked */}
                  <div className="flex flex-col gap-4 w-full max-w-md mx-auto lg:hidden">
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white rounded-2xl px-8 py-6 text-lg font-black shadow-2xl shadow-green-500/40 hover:shadow-3xl hover:shadow-green-500/50 transition-all duration-500 w-full transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-2xl blur-sm"></div>
                      <Link href="/book-service" className="flex items-center justify-center gap-3 relative z-10">
                        <span className="text-xl">✨</span>
                        {t.requestQuote}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      className="relative bg-white/95 hover:bg-white text-green-600 border-3 border-green-300 hover:border-green-400 rounded-2xl px-8 py-6 text-lg font-black shadow-2xl shadow-green-500/20 hover:shadow-3xl hover:shadow-green-500/30 transition-all duration-500 w-full transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <Link
                        href="https://wa.me/31610756699"
                        className="flex items-center justify-center gap-3 relative z-10"
                      >
                        <MessageCircle className="w-5 h-5" />
                        {t.whatsapp}
                        <span className="text-xl">💬</span>
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white rounded-2xl px-8 py-6 text-lg font-black shadow-2xl shadow-blue-500/40 hover:shadow-3xl hover:shadow-blue-500/50 transition-all duration-500 w-full transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-2xl blur-sm"></div>
                      <a
                        href="https://calendar.app.google/RU6yxXUM6GZED7Nm7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 relative z-10"
                      >
                        <Calendar className="w-5 h-5" />
                        {t.bookAppointment}
                        <span className="text-xl">📅</span>
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="relative bg-white/90 hover:bg-white text-slate-700 hover:text-slate-800 border-3 border-slate-300 hover:border-slate-400 rounded-2xl px-8 py-6 text-lg font-black shadow-2xl shadow-slate-500/20 hover:shadow-3xl hover:shadow-slate-500/30 transition-all duration-500 w-full transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-gray-50/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <Link href="/client-assessment" className="flex items-center justify-center gap-3 relative z-10">
                        <ClipboardList className="w-5 h-5" />
                        {t.clientAssessment}
                        <span className="text-xl">📋</span>
                      </Link>
                    </Button>
                  </div>

                  {/* Desktop Layout - Enhanced Horizontal */}
                  <div className="hidden lg:flex flex-wrap gap-6 xl:gap-8 justify-center">
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white rounded-3xl px-10 py-6 text-xl font-black shadow-2xl shadow-green-500/40 hover:shadow-3xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border-2 border-white/20 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                      <Link href="/book-service" className="flex items-center gap-3 relative z-10">
                        <span className="text-2xl animate-bounce">✨</span>
                        {t.requestQuote}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      className="relative bg-white/95 hover:bg-white text-green-600 border-3 border-green-300 hover:border-green-400 rounded-3xl px-10 py-6 text-xl font-black shadow-2xl shadow-green-500/20 hover:shadow-3xl hover:shadow-green-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Link href="https://wa.me/31610756699" className="flex items-center gap-3 relative z-10">
                        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        {t.whatsapp}
                        <span className="text-2xl group-hover:animate-pulse">💬</span>
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white rounded-3xl px-10 py-6 text-xl font-black shadow-2xl shadow-blue-500/40 hover:shadow-3xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border-2 border-white/20 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                      <a
                        href="https://calendar.app.google/RU6yxXUM6GZED7Nm7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 relative z-10"
                      >
                        <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        {t.bookAppointment}
                        <span className="text-2xl group-hover:animate-bounce">📅</span>
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="relative bg-white/90 hover:bg-white text-slate-700 hover:text-slate-800 border-3 border-slate-300 hover:border-slate-400 rounded-3xl px-10 py-6 text-xl font-black shadow-2xl shadow-slate-500/20 hover:shadow-3xl hover:shadow-slate-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Link href="/client-assessment" className="flex items-center gap-3 relative z-10">
                        <ClipboardList className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        {t.clientAssessment}
                        <span className="text-2xl group-hover:animate-pulse">📋</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Desktop Hero Image - Right Side */}
              <div className="hidden lg:block relative order-3 lg:order-2">
                <div className="relative w-full h-[600px] animate-slide-in-right">
                  {/* Main Hero Image Container */}
                  <div className="relative w-full h-full group">
                    {/* Hero Image with Stylish Effects */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1">
                      {/* Background Image */}
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hero-background-premium-nPEKpy8sbY1qJn07YpZghvDdTem30M.jpg"
                        alt="Professional cleaner creating sparkling clean spaces with care and attention to detail"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                      />

                      {/* Soft White Overlay for Blending */}
                      <div className="absolute inset-0 bg-white/15 group-hover:bg-white/10 transition-all duration-500"></div>

                      {/* Gradient Overlay for Better Text Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-blue-900/10"></div>

                      {/* Floating Animation Elements */}
                      <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>

                      {/* Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-slate-800 font-bold text-xl mb-2 leading-tight">"{t.imageCaption}"</p>
                          <p className="text-slate-600 text-sm">{t.imageSubCaption}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Service Cards */}
                  <div className="absolute -top-4 -right-4 transform rotate-6 group-hover:rotate-3 transition-transform duration-500">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-700 font-semibold text-sm">Eco-Friendly</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 -right-8 transform rotate-3 group-hover:-rotate-1 transition-transform duration-500">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <span className="text-amber-700 font-semibold text-sm">Venlo & Limburg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-white">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Auto-Scrolling Gallery */}
      <AutoScrollingGallery />

      {/* Before & After Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">
                {t.transformation}
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.transformationTitle}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.transformationSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Office Transformation */}
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Before Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1013%20%281%29-5DARACq5qdWvq8FLdov4FWRidCnbag.jpeg"
                      alt="Office before cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white hover:bg-red-500 font-semibold">{t.before}</Badge>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1013-csmlb9AsSbeqDrppZI1GgAIoZg7jEq.jpeg"
                      alt="Office after cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500 text-white hover:bg-green-500 font-semibold">{t.after}</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.officeTransformation}</h3>
                  <p className="text-gray-600">{t.officeTransformationDesc}</p>
                </div>
              </CardContent>
            </Card>

            {/* Kitchen Cleaning */}
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Before Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1009-phkoTVerFMXqgtwycjvdHwZCTp3Uoz.jpeg"
                      alt="Kitchen before cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white hover:bg-red-500 font-semibold">{t.before}</Badge>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1009%20%281%29-8OOXzLVPxBdmkMOLla9HkXEQVQiJDD.jpeg"
                      alt="Kitchen after cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500 text-white hover:bg-green-500 font-semibold">{t.after}</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.kitchenCleaning}</h3>
                  <p className="text-gray-600">{t.kitchenCleaningDesc}</p>
                </div>
              </CardContent>
            </Card>

            {/* Bathroom Cleaning */}
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Before Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1011%20%281%29-HiDVrYMLKiEvyFRsbhwwaVTFirHUCT.jpeg"
                      alt="Bathroom before cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white hover:bg-red-500 font-semibold">{t.before}</Badge>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1011-3IwnA2h3VJCNzab5ViMXeDe6aGP437.jpeg"
                      alt="Bathroom after cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500 text-white hover:bg-green-500 font-semibold">{t.after}</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.bathroomCleaning}</h3>
                  <p className="text-gray-600">{t.bathroomCleaningDesc}</p>
                </div>
              </CardContent>
            </Card>

            {/* Sink Cleaning */}
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Before Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1015%20%281%29-AQq2TpE6cklJ6kslHQEMeWAPjhIuGv.jpeg"
                      alt="Sink before cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white hover:bg-red-500 font-semibold">{t.before}</Badge>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1015-qvmtEMC3MoLS495sCf4LDTrDwyCM1i.jpeg"
                      alt="Sink after cleaning"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500 text-white hover:bg-green-500 font-semibold">{t.after}</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sinkCleaning}</h3>
                  <p className="text-gray-600">{t.sinkCleaningDesc}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.readyForTransformation}</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.transformationCTA}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  <Link href="/book-service">{t.getYourQuote}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-transparent border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  <a href="https://calendar.app.google/RU6yxXUM6GZED7Nm7" target="_blank" rel="noopener noreferrer">
                    {t.bookNow}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.ourProfessionalServices}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.servicesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* General Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-karolina-grabowska-4239037.jpg-R5r64ltfSDkOmKYuxNJpmjw8wmyvsG.jpeg"
                    alt="Professional general cleaning service"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.generalCleaning}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{t.generalCleaningDesc}</p>
                  <Link href="/services/general-cleaning">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      {t.learnMore}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Solar Panel Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-doPfwCDXXc8UHdMVYdAo5oP36vxbfy.png"
                    alt="Professional solar panel cleaning service"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.solarPanelCleaning}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{t.solarPanelCleaningDesc}</p>
                  <Link href="/services/solar-panel-cleaning">
                    <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
                      {t.learnMore}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Window Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-mvntlie-17085462.jpg-fqixxMmyxdUHVdqDaJ0fZ7Ar2q3jpa.jpeg"
                    alt="Professional window cleaning service"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.windowCleaning}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{t.windowCleaningDesc}</p>
                  <Link href="/services/window-cleaning">
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                      {t.learnMore}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Drain Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-vi-nguy-n-hoang-duy-256538407-14308927.jpg-MQSzGben6XIErazmiuI86pemhViioX.jpeg"
                    alt="Professional drain cleaning service"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.drainCleaning}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{t.drainCleaningDesc}</p>
                  <Link href="/services/drain-cleaning">
                    <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                      {t.learnMore}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Glow Housekeeping - Enhanced Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">Why Choose Us</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.whyChooseUs}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.whyChooseUsSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-blue-200 to-green-200 rounded-full transform -translate-y-1/2 z-0"></div>

            {/* Timeline Items */}
            <div className="relative z-10 grid grid-cols-5 gap-8">
              {/* Trusted Cleaners */}
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                  <div className="text-center">
                    {/* Timeline Dot */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Icon */}
                    <div className="bg-green-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                      <Shield className="w-10 h-10 text-green-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {t.trustedCleaners}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{t.trustedCleanersDesc}</p>
                  </div>
                </div>
              </div>

              {/* Professional Results */}
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="text-center">
                    {/* Timeline Dot */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Icon */}
                    <div className="bg-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                      <Sparkles className="w-10 h-10 text-blue-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {t.professionalResults}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{t.professionalResultsDesc}</p>
                  </div>
                </div>
              </div>

              {/* Affordable Rates */}
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
                  <div className="text-center">
                    {/* Timeline Dot */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Icon */}
                    <div className="bg-purple-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {t.affordableRates}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{t.affordableRatesDesc}</p>
                  </div>
                </div>
              </div>

              {/* Easy Booking */}
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
                  <div className="text-center">
                    {/* Timeline Dot */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Icon */}
                    <div className="bg-orange-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                      <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {t.easyBooking}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{t.easyBookingDesc}</p>
                  </div>
                </div>
              </div>

              {/* Flexible & Passionate */}
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100">
                  <div className="text-center">
                    {/* Timeline Dot */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-rose-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Icon */}
                    <div className="bg-rose-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors duration-300">
                      <Heart className="w-10 h-10 text-rose-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                      {t.flexiblePassionate}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{t.flexiblePassionateDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden space-y-8">
            {/* Timeline Items */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-blue-200 to-rose-200 rounded-full"></div>

              <div className="space-y-12">
                {/* Trusted Cleaners */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-green-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t.trustedCleaners}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.trustedCleanersDesc}</p>
                  </div>
                </div>

                {/* Professional Results */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t.professionalResults}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.professionalResultsDesc}</p>
                  </div>
                </div>

                {/* Affordable Rates */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-purple-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t.affordableRates}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.affordableRatesDesc}</p>
                  </div>
                </div>

                {/* Easy Booking */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t.easyBooking}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.easyBookingDesc}</p>
                  </div>
                </div>

                {/* Flexible & Passionate */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-rose-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t.flexiblePassionate}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.flexiblePassionateDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.experienceGlowDifference}</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t.experienceGlowCTA}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full px-8">
                  <Link href="/book-service">{t.getStartedToday}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-transparent border-green-300 text-green-600 hover:bg-green-50"
                >
                  <Link href="/about">{t.learnMoreAboutUs}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say - Testimonial Gallery */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-rose-600" />
              <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 text-lg px-4 py-2">{t.clientLove}</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.whatClientsSay}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.clientsSaySubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Desktop Masonry Grid */}
          <div className="hidden md:block">
            <div className="columns-3 gap-8 space-y-8">
              {/* Handwritten Note Images */}

              {/* Rainbow "Specially for You" Card */}
              <div className="break-inside-avoid group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
                    <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8095c50d-8884-420d-8536-8a37460d83b3-cgFDiUCRPrydl2GTslyoZKCyf5OL59.jpeg"
                      alt="Beautiful rainbow card saying Specially for You"
                      width={400}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                    "A rainbow of appreciation — these colorful moments make our hearts glow! 🌈✨"
                  </p>
                </div>
              </div>

              {/* Text Testimonial 1 */}
              <div className="break-inside-avoid group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200 relative">
                  <div className="absolute top-4 right-4 opacity-20">
                    <Heart className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl text-blue-300 mb-4">"</div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-6" style={{ fontFamily: "cursive" }}>
                    Glorija, you clean like it's your own house. We are your own people!
                  </p>
                  <div className="text-right">
                    <p className="text-blue-600 font-medium">– M.G.</p>
                  </div>
                </div>
              </div>

              {/* Bakery Note */}
              <div className="break-inside-avoid group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d3fca4dc-764c-48af-a3d1-93eeedd5fdcf-I6iXL1ZFDFByyb1kKcNbVjzPZMFndF.jpeg"
                      alt="Sweet note from local bakery saying just eat the pie"
                      width={400}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                    "Even the local bakery knows us — 'Just eat the pie!' The sweetest connections happen everywhere!
                    🥧"
                  </p>
                </div>
              </div>

              {/* Text Testimonial 2 */}
              <div className="break-inside-avoid group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-200 relative">
                  <div className="absolute top-4 right-4 opacity-20">
                    <Sparkles className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-3xl text-green-300 mb-4">"</div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-6" style={{ fontFamily: "cursive" }}>
                    My space felt peaceful again. Thank you for your passion.
                  </p>
                  <div className="text-right">
                    <p className="text-green-600 font-medium">– S.K.</p>
                  </div>
                </div>
              </div>

              {/* Children's Congratulations Card */}
              <div className="break-inside-avoid group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-yellow-100 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/58298937-1665-437a-9b72-75fe53794c85-Lo2Rk8u7glb4zMyKLiPRPsTX7xqHWI.jpeg"
                      alt="Handmade congratulations card from children with Peppa Pig stickers"
                      width={400}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                    "Handmade with love from the little ones — 'Hiep Hiep Hoera!' These moments melt our hearts! 🎉"
                  </p>
                </div>
              </div>

              {/* Text Testimonial 3 */}
              <div className="break-inside-avoid group">
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-200 relative">
                  <div className="absolute top-4 right-4 opacity-20">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-3xl text-purple-300 mb-4">"</div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-6" style={{ fontFamily: "cursive" }}>
                    I've never seen my windows this clean — absolutely brilliant.
                  </p>
                  <div className="text-right">
                    <p className="text-purple-600 font-medium">– J.D.</p>
                  </div>
                </div>
              </div>

              {/* Sinterklaas Gift */}
              <div className="break-inside-avoid group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c0fd41ea-09a1-42b7-a4f3-64ddfa80a80f-L0IzB1qIAYWfd0FrmgGvT31B3eOqhc.jpeg"
                      alt="Sinterklaas gift wrapped with love for Glorija"
                      width={400}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                    "Sinterklaas magic — when clients become family and traditions are shared with love! 🎁"
                  </p>
                </div>
              </div>

              {/* Text Testimonial 4 */}
              <div className="break-inside-avoid group">
                <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-200 relative">
                  <div className="absolute top-4 right-4 opacity-20">
                    <Heart className="w-6 h-6 text-rose-400" />
                  </div>
                  <div className="text-3xl text-rose-300 mb-4">"</div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-6" style={{ fontFamily: "cursive" }}>
                    So much love and care in your work. We are truly grateful.
                  </p>
                  <div className="text-right">
                    <p className="text-rose-600 font-medium">– L.M.</p>
                  </div>
                </div>
              </div>

              {/* Pink Card with Gift */}
              <div className="break-inside-avoid group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
                    <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18d2f142-9684-4f30-8db0-27790e613abd-MvhGJ0oFEkxkkZ7jbSHB8qJiG78if7.jpeg"
                      alt="Pink card with Glorija's name and thoughtful gift"
                      width={400}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                    "Personal touches that show we're more than just a service — we're part of the family! 💕"
                  </p>
                </div>
              </div>

              {/* Handwritten Thank You Note */}
              <div className="break-inside-avoid group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9f7fbb6e-62d1-4306-8c50-830ac07381f2-x1d6EgXAVhXCJl8DAJ332LY5U9IAcT.jpeg"
                      alt="Handwritten thank you note in Dutch with thoughtful gifts"
                      width={400}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                    "Handwritten gratitude with thoughtful gifts — these personal connections mean everything to us! ✍️"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stacked Layout */}
          <div className="md:hidden space-y-8">
            {/* Mobile cards with same content but single column */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-rose-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8095c50d-8884-420d-8536-8a37460d83b3-cgFDiUCRPrydl2GTslyoZKCyf5OL59.jpeg"
                  alt="Beautiful rainbow card saying Specially for You"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                "A rainbow of appreciation — these colorful moments make our hearts glow! 🌈✨"
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 shadow-lg border border-blue-200">
              <div className="text-2xl text-blue-300 mb-3">"</div>
              <p className="text-lg text-gray-800 leading-relaxed mb-4" style={{ fontFamily: "cursive" }}>
                Glorija, you clean like it's your own house. We are your own people!
              </p>
              <div className="text-right">
                <p className="text-blue-600 font-medium">– M.G.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-amber-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d3fca4dc-764c-48af-a3d1-93eeedd5fdcf-I6iXL1ZFDFByyb1kKcNbVjzPZMFndF.jpeg"
                  alt="Sweet note from local bakery"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                "Even the local bakery knows us — 'Just eat the pie!' 🥧"
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-6 shadow-lg border border-green-200">
              <div className="text-2xl text-green-300 mb-3">"</div>
              <p className="text-lg text-gray-800 leading-relaxed mb-4" style={{ fontFamily: "cursive" }}>
                My space felt peaceful again. Thank you for your passion.
              </p>
              <div className="text-right">
                <p className="text-green-600 font-medium">– S.K.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-yellow-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/58298937-1665-437a-9b72-75fe53794c85-Lo2Rk8u7glb4zMyKLiPRPsTX7xqHWI.jpeg"
                  alt="Handmade congratulations card from children"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-gray-700 text-center italic" style={{ fontFamily: "cursive" }}>
                "Handmade with love from the little ones — these moments melt our hearts! 🎉"
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-6 shadow-lg border border-purple-200">
              <div className="text-2xl text-purple-300 mb-3">"</div>
              <p className="text-lg text-gray-800 leading-relaxed mb-4" style={{ fontFamily: "cursive" }}>
                I've never seen my windows this clean — absolutely brilliant.
              </p>
              <div className="text-right">
                <p className="text-purple-600 font-medium">– J.D.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-rose-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.shareYourExperience}</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t.shareExperienceCTA}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 rounded-full px-8">
                  <Link href="https://wa.me/31610756699">{t.shareYourStory}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-transparent border-rose-300 text-rose-600 hover:bg-rose-50"
                >
                  <Link href="/book-service">{t.bookYourService}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t.readyToExperience}</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">{t.ctaSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
              <Link href="/book-service">{t.getFreeQuote}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 bg-transparent"
            >
              <Link href="https://wa.me/31610756699">{t.contactWhatsApp}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
