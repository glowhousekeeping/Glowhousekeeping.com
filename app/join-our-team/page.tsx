"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Award, MapPin, Euro } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getCurrentTranslations } from "@/components/language-switcher"

export default function CareersPage() {
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

  const jobOpenings = [
    {
      id: 1,
      title: "Professional Cleaner",
      location: "Venlo, Limburg",
      type: "Full-time",
      salary: "€15-18/hour",
      description:
        "Join our team of professional cleaners and help us maintain the highest standards of cleanliness for our clients.",
    },
    {
      id: 2,
      title: "Cleaning Supervisor",
      location: "Venlo, Limburg",
      type: "Full-time",
      salary: "€20-25/hour",
      description: "Lead a team of cleaners and ensure quality standards are met across all our cleaning projects.",
    },
  ]

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
              <Users className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">{t.careers}</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.careersTitle}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.careersSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Supportive Environment</h3>
                      <p className="text-gray-600 text-sm">Work in a team that values your contribution and growth.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Development</h3>
                      <p className="text-gray-600 text-sm">Continuous training and skill development opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Euro className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Competitive Compensation</h3>
                      <p className="text-gray-600 text-sm">Fair wages and benefits that recognize your value.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/diverse-cleaning-team.png"
                  alt="Our diverse and professional cleaning team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.currentOpenings}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job opportunities and find your perfect role
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card
                key={job.id}
                className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{job.type}</Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Euro className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-xl">
                    {t.applyNow}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No openings message if needed */}
          {jobOpenings.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Current Openings</h3>
              <p className="text-gray-600 mb-6">
                We don't have any open positions right now, but we're always looking for talented individuals.
              </p>
              <Button variant="outline" className="rounded-full px-8 bg-transparent">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Take the first step towards a rewarding career with Glow Housekeeping.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 bg-transparent"
            >
              <Link href="mailto:glorija.berina@gmail.com">Send Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
