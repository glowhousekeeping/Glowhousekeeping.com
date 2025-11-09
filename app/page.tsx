"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AutoScrollingGallery from "@/components/auto-scrolling-gallery"
import AIChatbotGlorija from "@/components/ai-chatbot-glorija"
import { getCurrentTranslations } from "@/components/language-switcher"

export default function HomePage() {
  const [translations, setTranslations] = useState(getCurrentTranslations())

  useEffect(() => {
    // Listen for global language changes
    const handleGlobalLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)

      return () => {
        window.removeEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)
      }
    }
  }, [])

  const t = translations

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="relative min-h-[60vh] md:min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400 overflow-hidden">
        {/* Blue Wave Accent - Top Right */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden">
          <svg viewBox="0 0 500 500" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,0 Q250,100 500,0 L500,500 Q250,400 0,500 Z"
              fill="#3b82f6"
              opacity="0.9"
              className="drop-shadow-2xl"
            />
          </svg>
        </div>

        {/* Blue Wave Accent - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 overflow-hidden">
          <svg viewBox="0 0 300 300" preserveAspectRatio="none" className="w-full h-full">
            <circle cx="0" cy="300" r="200" fill="#3b82f6" opacity="0.85" className="drop-shadow-xl" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
              {/* Left Side - Text Content */}
              <div className="space-y-6 lg:space-y-8 text-left order-2 lg:order-1">
                {/* Main Headline */}
                <div className="space-y-4 animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                    Want Your Business To Shine With <span className="text-blue-600">Professionalism?</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-xl">
                    We provide exceptional commercial cleaning services in Venlo, Limburg tailored to satisfy businesses
                    who strive for excellence — while focusing on what really matters.
                  </p>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
                    Specialized care for offices, retail stores, restaurants and professional facilities.
                  </p>

                  {/* Discount Banner */}
                  <div className="inline-block">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 uppercase tracking-wide">
                      GET UP TO 30% OFF
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="animate-fade-in-up">
                  <Link href="/book-service">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 animate-fade-in-up">
                  {/* Trusted Cleaners Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                    <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-blue-600 font-bold text-sm text-center mb-1">Trusted Cleaners</p>
                    <p className="text-slate-600 text-xs text-center">
                      Screened professionals with experience and reliability you can count on.
                    </p>
                  </div>

                  {/* Professional Results Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                    <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-blue-600 font-bold text-sm text-center mb-1">Professional Results</p>
                    <p className="text-slate-600 text-xs text-center">
                      We deliver hotel-level sparkle and precision in every cleaning session.
                    </p>
                  </div>

                  {/* Affordable Rates Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                    <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-blue-600 font-bold text-sm text-center mb-1">Affordable Rates</p>
                    <p className="text-slate-600 text-xs text-center">
                      Competitive pricing with no surprise fees — transparent and fair.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Hero Image */}
              <div className="relative order-1 lg:order-2 animate-slide-in-right">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                  {/* Circular decorative elements */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-16 -right-8 w-24 h-24 bg-blue-400/30 rounded-full blur-xl"></div>

                  {/* Circular image spots - decorative */}
                  <div className="absolute bottom-24 left-8 lg:left-16 z-20">
                    <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                        src="/window-cleaning-with-spray-bottle.jpg"
                        alt="Window cleaning service"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-48 left-24 lg:left-32 z-10">
                    <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white">
                      <Image
                        src="/cleaning-supplies-and-green-sponge.jpg"
                        alt="Professional cleaning tools"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Main cleaner image */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-full max-w-md lg:max-w-lg">
                    <Image
                      src="/friendly-young-cleaner-smiling-wearing-gloves-and-.jpg"
                      alt="Professional cleaner with cleaning supplies"
                      width={500}
                      height={600}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Gallery with smooth transitions */}
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

            {/* NEW: Modern Kitchen Transformation */}
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Before Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/kitchen-before-new.jpeg"
                      alt="Modern kitchen before professional cleaning"
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
                      src="/kitchen-after-new.jpeg"
                      alt="Modern kitchen after professional cleaning"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Kitchen Revival</h3>
                  <p className="text-gray-600">
                    Complete transformation of a contemporary kitchen space with attention to every detail
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NEW: Workspace Transformation */}
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Before Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/workspace-before-new.jpeg"
                      alt="Workspace before professional cleaning"
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
                      src="/workspace-after-new.jpeg"
                      alt="Workspace after professional cleaning"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Workspace Clean</h3>
                  <p className="text-gray-600">
                    Creating an organized and spotless work environment for maximum productivity
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NEW: Entrance Transformation */}
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Before Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/entrance-before-new.jpeg"
                      alt="Entrance area before professional cleaning"
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
                      src="/entrance-after-new.jpeg"
                      alt="Entrance area after professional cleaning"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Welcoming Entrance</h3>
                  <p className="text-gray-600">
                    First impressions matter - creating an inviting entrance with meticulous care
                  </p>
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-vi-nguy-nhoang-duy-256538407-14308927.jpg-MQSzGben6XIErazmiuI86pemhViioX.jpeg"
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
            <Link href="/book-service">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
                {t.getFreeQuote}
              </Button>
            </Link>
            <Link href="https://wa.me/31610756699">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 bg-transparent"
              >
                {t.contactWhatsApp}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbotGlorija />
    </div>
  )
}
