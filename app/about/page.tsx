"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Target, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getCurrentTranslations } from "@/components/language-switcher"

export default function AboutPage() {
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
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">{t.about}</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.aboutTitle}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.aboutSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{t.ourStory}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded with a passion for excellence, Glow Housekeeping has been transforming spaces across the
                  Netherlands with our professional cleaning services. We believe that every space deserves to shine
                  with professionalism and care.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey began with a simple mission: to provide cleaning services that go beyond the surface,
                  creating environments where businesses and families can thrive.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{t.ourMission}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional cleaning services that exceed expectations while building lasting relationships
                  with our clients. We treat every space like it's our own, ensuring the highest standards of
                  cleanliness and professionalism.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/cleaning-company-founder-portrait.png"
                  alt="Glow Housekeeping team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Floating Stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">5★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-lg px-4 py-2">
                {t.ourValues}
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.ourValues}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for perfection in every cleaning task, ensuring the highest quality results that exceed
                  expectations.
                </p>
              </CardContent>
            </Card>

            {/* Trust */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting relationships through reliability, transparency, and consistent delivery of our
                  promises.
                </p>
              </CardContent>
            </Card>

            {/* Care */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors duration-300">
                  <Heart className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  We treat every space with the same care and attention we would give to our own homes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
                {t.meetTheTeam}
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.meetTheTeam}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind Glow Housekeeping
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/glorija-founder-actual.jpeg"
                    alt="Glorija - Founder"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Glorija Berina</h3>
                  <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Passionate about creating clean, healthy environments. Glorija founded Glow Housekeeping with a
                    vision to transform spaces across the Netherlands.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/diverse-cleaning-team.png"
                    alt="Professional cleaning team member"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Professional Team</h3>
                  <p className="text-green-600 font-medium mb-3">Cleaning Specialists</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our experienced team of cleaning professionals brings expertise, reliability, and attention to
                    detail to every project.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/professional-cleaner-home.png"
                    alt="Customer service representative"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Care Team</h3>
                  <p className="text-purple-600 font-medium mb-3">Support Specialists</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dedicated to ensuring every client receives exceptional service and support throughout their
                    cleaning journey.
                  </p>
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
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">{t.experienceGlowCTA}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
              <Link href="/book-service">{t.getFreeQuote}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">{t.contactWhatsApp}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
