"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AutoScrollingGallery } from "@/components/auto-scrolling-gallery"
import { ImageComparison } from "@/components/image-comparison"
import {
  Star,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Sparkles,
  Home,
  Droplets,
  Album as Vacuum,
  Sun,
  Phone,
} from "lucide-react"

export default function HomePage() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Home,
      title: t("services.generalCleaning"),
      description: t("services.generalCleaningDesc"),
      price: t("pricing.generalCleaning"),
      href: "/services/general-cleaning",
    },
    {
      icon: Sparkles,
      title: t("services.deepCleaning"),
      description: t("services.deepCleaningDesc"),
      price: t("pricing.deepCleaning"),
      href: "/services/deep-cleaning",
    },
    {
      icon: Droplets,
      title: t("services.windowCleaning"),
      description: t("services.windowCleaningDesc"),
      price: t("pricing.windowCleaning"),
      href: "/services/window-cleaning",
    },
    {
      icon: Vacuum,
      title: t("services.carpetCare"),
      description: t("services.carpetCareDesc"),
      price: t("pricing.carpetCare"),
      href: "/services/carpet-care",
    },
    {
      icon: Sun,
      title: t("services.solarPanelCleaning"),
      description: t("services.solarPanelCleaningDesc"),
      price: t("pricing.solarPanelCleaning"),
      href: "/services/solar-panel-cleaning",
    },
  ]

  const features = [
    {
      icon: CheckCircle,
      title: t("features.qualityAssurance"),
      description: t("features.qualityAssuranceDesc"),
    },
    {
      icon: Clock,
      title: t("features.flexibleScheduling"),
      description: t("features.flexibleSchedulingDesc"),
    },
    {
      icon: Shield,
      title: t("features.insuredBonded"),
      description: t("features.insuredBondedDesc"),
    },
    {
      icon: Users,
      title: t("features.experiencedTeam"),
      description: t("features.experiencedTeamDesc"),
    },
  ]

  const testimonials = [
    "/thank-you-note-1.png",
    "/client-appreciation-gift.png",
    "/positive-client-review.png",
    "/cleaning-transformation.png",
    "/client-testimonial-card.png",
    "/holiday-appreciation-card.png",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-background-cleaning.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">{t("hero.badge")}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{t("hero.title")}</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">{t("hero.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  <Link href="/book-service">{t("hero.bookNow")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                  <Link href="/services">{t("hero.viewServices")}</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">{t("hero.rating")}</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/professional-cleaner-home.png"
                  alt="Professional Cleaning Service"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl hover-lift"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-48 h-48 bg-indigo-200 rounded-full opacity-20 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12 text-blue-600" />
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={service.href}>{t("common.learnMore")}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("beforeAfter.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("beforeAfter.subtitle")}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageComparison
              beforeImage="/images/design-mode/IMG_1009.jpeg"
              afterImage="/images/design-mode/IMG_1009 (1).jpeg"
              alt="Cleaning transformation"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("features.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
          </div>
          <AutoScrollingGallery images={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("cta.title")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/book-service">{t("cta.bookNow")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="tel:+31612345678">
                <Phone className="h-5 w-5 mr-2" />
                {t("cta.callNow")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
