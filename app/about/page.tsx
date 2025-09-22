"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Award, Sparkles, MapPin, Target, CheckCircle, Star, Clock, Zap } from "lucide-react"
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
      {/* Hero Section - Text Only */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-background-premium.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm px-4 py-2">✨ {t.aboutTitle}</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Meet the Heart Behind <span className="text-blue-600">Glow Housekeeping</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{t.aboutSubtitle}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 text-lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg bg-transparent">
                <Link href="/book-service">Book Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Enhanced with New Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-rose-600" />
              <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 text-lg px-4 py-2">Our Founder</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Founder & CEO of Glow Housekeeping</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Founder Introduction Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-rose-50">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Founder Image */}
                  <div className="relative">
                    <Image
                      src="/glorija-founder-actual.jpeg"
                      alt="Glorija Beberina - Founder and CEO of Glow Housekeeping"
                      width={500}
                      height={600}
                      className="w-full h-full object-cover lg:h-[600px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Glorija Beberina</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-2">Founder & CEO</p>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Originally from Latvia, Based in Netherlands</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Founder Story Introduction */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="text-4xl text-blue-300 font-serif">"</div>
                      <p className="text-xl text-gray-800 leading-relaxed font-medium">
                        <span className="text-blue-600 font-bold">Glorija Beberina</span> is the founder and CEO of{" "}
                        <span className="text-rose-600 font-bold">Glow Housekeeping</span>, a company built on{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent font-bold">
                          trust, transparency, and a passion
                        </span>{" "}
                        for helping others live and work in clean, uplifting spaces.
                      </p>
                      <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-400 pl-6 bg-blue-50/50 py-4 rounded-r-lg">
                        "When I clean, you see the difference—and that's what I love."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Journey Timeline */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">The Journey to Glow Housekeeping</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From Latvia to the Netherlands, discover the inspiring story behind our founder's mission.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-rose-200 to-green-200 rounded-full transform -translate-y-1/2"></div>

              <div className="grid grid-cols-4 gap-8 relative z-10">
                {/* 2022 - Arrival */}
                <div className="group">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-blue-600 font-bold text-lg mb-2">2022</div>
                      <h4 className="font-bold text-gray-900 mb-2">New Beginning</h4>
                      <p className="text-sm text-gray-600">
                        Originally from <span className="font-semibold">Latvia</span>, Glorija moved to the Netherlands
                        seeking new opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Warehouse Work */}
                <div className="group">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="text-center">
                      <div className="bg-gray-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-gray-600" />
                      </div>
                      <div className="text-gray-600 font-bold text-lg mb-2">2022-2023</div>
                      <h4 className="font-bold text-gray-900 mb-2">Searching for Purpose</h4>
                      <p className="text-sm text-gray-600">
                        Spent a year working in a warehouse—a job that left her{" "}
                        <span className="font-semibold">unfulfilled</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Discovery */}
                <div className="group">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-green-600 font-bold text-lg mb-2">2023</div>
                      <h4 className="font-bold text-gray-900 mb-2">Finding Her Calling</h4>
                      <p className="text-sm text-gray-600">
                        Asked herself: "What do I enjoy doing?" The answer was clear—
                        <span className="font-semibold text-green-600">cleaning</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Glow Housekeeping */}
                <div className="group">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-rose-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="text-center">
                      <div className="bg-rose-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-rose-600" />
                      </div>
                      <div className="text-rose-600 font-bold text-lg mb-2">2024</div>
                      <h4 className="font-bold text-gray-900 mb-2">Glow Housekeeping</h4>
                      <p className="text-sm text-gray-600">
                        Launched her own company with a mission of{" "}
                        <span className="font-semibold text-rose-600">integrity and care</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 to-rose-200 rounded-full"></div>

                <div className="space-y-12">
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-blue-100">
                      <div className="text-blue-600 font-bold text-lg mb-2">2022 - New Beginning</div>
                      <p className="text-gray-700">
                        Originally from Latvia, Glorija moved to the Netherlands seeking new opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-gray-100">
                      <div className="text-gray-600 font-bold text-lg mb-2">2022-2023 - Searching for Purpose</div>
                      <p className="text-gray-700">
                        Spent a year working in a warehouse—a job that left her unfulfilled.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-green-100">
                      <div className="text-green-600 font-bold text-lg mb-2">2023 - Finding Her Calling</div>
                      <p className="text-gray-700">
                        Asked herself: "What do I enjoy doing?" The answer was clear—cleaning.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-rose-100">
                      <div className="text-rose-600 font-bold text-lg mb-2">2024 - Glow Housekeeping</div>
                      <p className="text-gray-700">Launched her own company with a mission of integrity and care.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Story Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* The Realization */}
            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The Powerful Question</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After a year of unfulfilling warehouse work, Glorija took a step back to ask herself a simple but
                  powerful question:
                </p>
                <blockquote className="text-lg font-medium text-blue-700 italic border-l-4 border-blue-400 pl-4 bg-white/50 py-3 rounded-r-lg">
                  "What do I enjoy doing, and how can I use it to help others?"
                </blockquote>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The answer was clear—<span className="font-semibold text-blue-600">cleaning</span>. It wasn't just a
                  task to her; it was a meaningful service. The ability to transform a space and bring comfort through
                  cleanliness gave her <span className="font-semibold text-blue-600">purpose and energy</span>.
                </p>
              </CardContent>
            </Card>

            {/* Professional Experience */}
            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Finding Joy in Service</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  She began her journey in professional cleaning with a company that supported elderly and chronically
                  ill clients. There, she found <span className="font-semibold text-green-600">joy and connection</span>{" "}
                  in her work and was deeply appreciated by the clients she served.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This experience reinforced her belief that cleaning is more than just a service—it's about bringing
                  comfort, dignity, and peace of mind to those who need it most.
                </p>
              </CardContent>
            </Card>

            {/* The Motivation */}
            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Standing for What's Right</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  However, witnessing unethical practices behind the scenes—where management treated staff unfairly and
                  misled vulnerable clients—motivated Glorija to take a stand.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  She realized that the cleaning industry needed companies that prioritize{" "}
                  <span className="font-semibold text-purple-600">integrity, fairness, and genuine care</span> for both
                  clients and employees.
                </p>
              </CardContent>
            </Card>

            {/* The Mission */}
            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The 2024 Launch</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In 2024, she launched <span className="font-bold text-orange-600">Glow Housekeeping</span> with a
                  clear mission:
                </p>
                <blockquote className="text-lg font-medium text-orange-700 italic border-l-4 border-orange-400 pl-4 bg-white/50 py-3 rounded-r-lg">
                  To create a cleaning service where integrity, care, and professionalism come first—for both clients
                  and staff.
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Current Success */}
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-rose-50 via-white to-blue-50">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="w-8 h-8 text-rose-600" />
                  <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 text-lg px-4 py-2">Today</Badge>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Glow Housekeeping Today</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Today, <span className="font-bold text-rose-600">Glow Housekeeping</span> proudly serves a diverse
                  range of clients—from families and busy professionals to offices and commercial spaces—bringing not
                  just cleanliness, but <span className="font-semibold text-blue-600">peace of mind</span>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With Glorija's leadership, the company is grounded in{" "}
                  <span className="font-semibold text-rose-600">compassion, honesty, and a deep belief</span> in doing
                  things the right way.
                </p>
                <div className="bg-gradient-to-r from-rose-100 to-blue-100 rounded-2xl p-6 mb-8">
                  <div className="text-3xl text-rose-400 mb-4">"</div>
                  <p className="text-xl font-medium text-gray-800 italic">
                    When I clean, you see the difference—and that's what I love.
                  </p>
                  <p className="text-rose-600 font-semibold mt-4">— Glorija Beberina, Founder & CEO</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700 rounded-full px-8">
                    <Link href="/book-service">Experience the Difference</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 bg-transparent border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    <Link href="/contact">Meet Glorija</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">{t.ourValues}</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Drives Us Every Day</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every interaction, every service, and every relationship we build.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Compassion First",
                description:
                  "We treat every client and team member with genuine care, understanding that behind every space is a person deserving respect and kindness.",
                color: "red",
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Unwavering Integrity",
                description:
                  "Honesty and transparency guide everything we do. No hidden fees, no shortcuts, no compromises on our ethical standards.",
                color: "blue",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-500" />,
                title: "Excellence in Service",
                description:
                  "We don't just clean—we transform spaces with meticulous attention to detail and a commitment to exceeding expectations.",
                color: "purple",
              },
              {
                icon: <Users className="w-8 h-8 text-green-500" />,
                title: "Team Empowerment",
                description:
                  "We believe in fair treatment, proper training, and creating an environment where our team can thrive and take pride in their work.",
                color: "green",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
                title: "Reliability You Can Trust",
                description:
                  "Consistency in quality, punctuality, and communication. When we make a commitment, we honor it completely.",
                color: "orange",
              },
              {
                icon: <Target className="w-8 h-8 text-teal-500" />,
                title: "Purpose-Driven Mission",
                description:
                  "Every service we provide is guided by our mission to create clean, peaceful spaces that enhance lives and well-being.",
                color: "teal",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`bg-${value.color}-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${value.color}-200 transition-colors duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
                {t.meetTheTeam}
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The People Behind the Glow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who bring passion, skill, and care to every cleaning service.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Glorija - Founder */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <Image
                    src="/glorija-founder-alternate.jpeg"
                    alt="Glorija Beberina - Founder and CEO"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Glorija Beberina</h3>
                  <p className="text-blue-600 font-semibold mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Passionate about creating clean, uplifting spaces and leading with integrity, compassion, and
                    excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member Placeholder 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-blue-600 font-semibold">Growing Team</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Team</h3>
                  <p className="text-green-600 font-semibold mb-3">We're Hiring!</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Looking for dedicated professionals who share our values of integrity, care, and excellence.
                  </p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full">
                    <Link href="/join-our-team">Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member Placeholder 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-rose-100 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <p className="text-purple-600 font-semibold">Future Team Member</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Your Name Here</h3>
                  <p className="text-purple-600 font-semibold mb-3">Future Team Member</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Be part of a company that values your contribution and helps you grow professionally.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-purple-300 text-purple-600 bg-transparent"
                  >
                    <Link href="/join-our-team">Learn More</Link>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience the Glow Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our growing family of satisfied clients and discover what it means to have a cleaning service that
            truly cares.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
              <Link href="/book-service">Book Your Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
