"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Shield, Clock, Users, Star, Phone, Mail, MapPin, ArrowRight, Heart, Award, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ImageComparison } from "@/components/image-comparison"
import { AutoScrollingGallery } from "@/components/auto-scrolling-gallery"
import { AIChatbotGlorija } from "@/components/ai-chatbot-glorija"
import { useState, useEffect } from "react"
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

  const testimonialImages = [
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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-background-premium.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm px-4 py-2">
                  ✨ Netherlands' Trusted Cleaning Service
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional <span className="text-blue-600">Cleaning</span> Services
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Transform your space with our expert cleaning services. From homes to offices, we bring the shine back
                  to your world with reliable, eco-friendly solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 text-lg">
                  <Link href="/book-service">Book Your Service</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg bg-transparent">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">500+ Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-cleaner-home.png"
                alt="Professional cleaner working in a modern home"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Founded by</p>
                  <p className="text-lg font-bold text-blue-600">Glorija Beberina</p>
                  <p className="text-xs text-gray-500">Your Trusted Partner</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs, delivered with care and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "General Cleaning",
                description: "Complete home and office cleaning services",
                pricing: "Pricing starts at €35 per hour and may vary depending on the size of your space",
                icon: <Sparkles className="w-8 h-8 text-blue-600" />,
                href: "/services/general-cleaning",
                popular: true,
              },
              {
                title: "Solar Panel Cleaning",
                description: "Professional solar panel maintenance and cleaning",
                pricing: "From €150 per session",
                icon: <Zap className="w-8 h-8 text-yellow-600" />,
                href: "/services/solar-panel-cleaning",
              },
              {
                title: "Window Cleaning",
                description: "Crystal clear windows inside and out",
                pricing: "From €25 per session",
                icon: <Shield className="w-8 h-8 text-green-600" />,
                href: "/services/window-cleaning",
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain unblocking and maintenance",
                pricing: "From €75 per service",
                icon: <Clock className="w-8 h-8 text-purple-600" />,
                href: "/services/drain-cleaning",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 rounded-2xl border-0 shadow-lg relative ${service.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1 text-xs">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-sm font-medium text-blue-600 mb-6">{service.pricing}</p>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                    <Link href={service.href} className="flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See the Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the dramatic difference our professional cleaning makes. Slide to see the before and after
              results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ImageComparison
              beforeImage="/placeholder.svg?height=400&width=600&text=Before+Cleaning"
              afterImage="/placeholder.svg?height=400&width=600&text=After+Cleaning"
              beforeAlt="Room before professional cleaning"
              afterAlt="Room after professional cleaning by Glow Housekeeping"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Glow Housekeeping?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by Glorija Beberina with a mission to provide honest, reliable, and exceptional cleaning services
              across the Netherlands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Personal Touch",
                description:
                  "We treat every space like our own home, with genuine care and attention to detail that makes the difference.",
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Fully Insured & Bonded",
                description:
                  "Complete peace of mind with comprehensive insurance coverage and bonded team members for your security.",
              },
              {
                icon: <Award className="w-8 h-8 text-green-500" />,
                title: "Quality Guaranteed",
                description:
                  "100% satisfaction guarantee - if you're not completely happy, we'll return and make it right at no extra cost.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-500" />,
                title: "Eco-Friendly Products",
                description:
                  "Safe, non-toxic cleaning products that are gentle on your family, pets, and the environment.",
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: "Flexible Scheduling",
                description:
                  "We work around your schedule with convenient booking options including evenings and weekends.",
              },
              {
                icon: <Users className="w-8 h-8 text-teal-500" />,
                title: "Trained Professionals",
                description:
                  "Our team is thoroughly trained, background-checked, and committed to delivering exceptional results every time.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real customers who trust us with their cleaning needs.
            </p>
          </div>

          <AutoScrollingGallery images={testimonialImages} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience the Glow Difference?</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Join hundreds of satisfied customers across the Netherlands. Get your free quote today and discover why
            we're the trusted choice for professional cleaning services.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 text-lg">
              <Link href="/book-service">Book Your Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 text-lg bg-transparent"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-blue-100">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+31 6 10756699</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              <span>info@glowhousekeeping.nl</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Serving All Netherlands</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbotGlorija />
    </div>
  )
}
