"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  CheckCircle,
  MessageCircle,
  Calendar,
  ArrowRight,
  Sparkles,
  Heart,
  Shield,
  Users,
  Award,
  Clock,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getCurrentTranslations } from "@/components/language-switcher"
import AutoScrollingGallery from "@/components/auto-scrolling-gallery"
import ImageComparison from "@/components/image-comparison"

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-background-premium.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm px-4 py-2">
                  ✨ {t.heroTagline}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">{t.heroTitle}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{t.heroSubtitle}</p>
                <p className="text-lg text-blue-600 font-medium">{t.heroSpecialization}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 text-lg">
                  <Link href="/book-service" className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {t.requestQuote}
                  </Link>
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full px-8 text-lg">
                  <Link href="https://wa.me/31610756699" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {t.whatsapp}
                  </Link>
                </Button>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <p className="text-blue-800 font-semibold text-lg text-center">{t.heroServiceArea}</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-cleaner-home.png"
                  alt="Professional cleaning service"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <p className="text-lg font-semibold text-gray-900 mb-2">{t.imageCaption}</p>
                    <p className="text-gray-600">{t.imageSubCaption}</p>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 rounded-full">
                      <Link href="/client-assessment" className="flex items-center gap-2">
                        {t.clientAssessment}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-sm px-4 py-2 mb-4">
              {t.ourProfessionalServices}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.ourProfessionalServices}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.servicesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t.generalCleaning,
                description: t.generalCleaningDesc,
                price: t.generalCleaningPricing,
                icon: <Sparkles className="w-8 h-8 text-blue-600" />,
                href: "/services/general-cleaning",
                color: "blue",
              },
              {
                title: t.solarPanelCleaning,
                description: t.solarPanelCleaningDesc,
                price: "€150-500",
                icon: <Zap className="w-8 h-8 text-yellow-600" />,
                href: "/services/solar-panel-cleaning",
                color: "yellow",
              },
              {
                title: t.windowCleaning,
                description: t.windowCleaningDesc,
                price: "€150-550",
                icon: <Star className="w-8 h-8 text-green-600" />,
                href: "/services/window-cleaning",
                color: "green",
              },
              {
                title: t.drainCleaning,
                description: t.drainCleaningDesc,
                price: "€20-120",
                icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
                href: "/services/drain-cleaning",
                color: "purple",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`bg-${service.color}-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${service.color}-200 transition-colors duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-lg font-bold text-green-600">{service.price}</p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                      <Link href={service.href} className="flex items-center gap-2">
                        {t.learnMore}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm px-4 py-2 mb-4">
              {t.transformation}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.transformationTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.transformationSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ImageComparison
              beforeImage="/cleaning-transformation.png"
              afterImage="/professional-office-cleaning.png"
              title={t.officeTransformation}
              description={t.officeTransformationDesc}
            />
            <ImageComparison
              beforeImage="/cleaning-transformation.png"
              afterImage="/modern-dutch-office-cleaning.png"
              title={t.kitchenCleaning}
              description={t.kitchenCleaningDesc}
            />
          </div>

          <div className="text-center">
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{t.readyForTransformation}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.transformationCTA}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                    <Link href="/book-service">{t.getYourQuote}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                    <Link href="/contact">{t.bookNow}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-sm px-4 py-2 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.whyChooseUs}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.whyChooseUsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: t.trustedCleaners,
                description: t.trustedCleanersDesc,
                color: "blue",
              },
              {
                icon: <Award className="w-8 h-8 text-green-500" />,
                title: t.professionalResults,
                description: t.professionalResultsDesc,
                color: "green",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
                title: t.affordableRates,
                description: t.affordableRatesDesc,
                color: "purple",
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: t.easyBooking,
                description: t.easyBookingDesc,
                color: "orange",
              },
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: t.flexiblePassionate,
                description: t.flexiblePassionateDesc,
                color: "red",
              },
              {
                icon: <Shield className="w-8 h-8 text-teal-500" />,
                title: "Fully Insured",
                description: "Complete insurance coverage and bonded team members for your peace of mind.",
                color: "teal",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-${feature.color}-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${feature.color}-200 transition-colors duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{t.experienceGlowDifference}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.experienceGlowCTA}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full px-8">
                    <Link href="/book-service">{t.getStartedToday}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                    <Link href="/about">{t.learnMoreAboutUs}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 text-sm px-4 py-2 mb-4">
              {t.gallery?.badge || "Professional Results"}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.gallery?.title || "Our Professional Results"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.gallery?.description ||
                "A glimpse into the spaces we've transformed — spotless, glowing, and beautifully organized."}
            </p>
          </div>

          <AutoScrollingGallery />

          <div className="text-center mt-16">
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  {t.gallery?.cta?.title || "Ready to See Your Space Transformed?"}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {t.gallery?.cta?.description ||
                    "These results speak for themselves. Experience the same level of professional cleaning excellence in your own space."}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-8">
                    <Link href="/book-service">{t.gallery?.cta?.button1 || "Get Your Quote"}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                    <Link href="/services/general-cleaning">{t.gallery?.cta?.button2 || "View All Services"}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-sm px-4 py-2 mb-4">
              {t.clientLove}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.whatClientsSay}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.clientsSaySubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/thank-you-note-1.png"
                  alt="Thank you note from satisfied client"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"Exceptional service and attention to detail!"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/client-appreciation-gift.png"
                  alt="Client appreciation gift"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"They go above and beyond every time."</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/positive-client-review.png"
                  alt="Positive client review"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"Professional, reliable, and trustworthy."</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{t.shareYourExperience}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.shareExperienceCTA}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 rounded-full px-8">
                    <Link href="/contact">{t.shareYourStory}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                    <Link href="/book-service">{t.bookYourService}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              <Link href="/book-service" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {t.getFreeQuote}
              </Link>
            </Button>
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8">
              <Link href="https://wa.me/31610756699" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t.contactWhatsApp}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
