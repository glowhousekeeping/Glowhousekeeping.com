"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Users,
  Award,
  Sparkles,
  MapPin,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Building,
  Lightbulb,
  Zap,
} from "lucide-react"
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-16 h-16">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-6 py-3">
                ✨ About Glow Housekeeping
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Built on <span className="text-blue-600">Trust</span>, <span className="text-green-600">Care</span> &{" "}
                <span className="text-purple-600">Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Discover the story behind Glow Housekeeping and meet the passionate founder who's transforming the
                cleaning industry with integrity, compassion, and unwavering commitment to quality.
              </p>
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
              <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 text-lg px-4 py-2">Meet Our Founder</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Glorija Beberina</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founder & CEO of <span className="font-semibold text-blue-600">Glow Housekeeping</span>
            </p>
          </div>

          {/* Founder Image and Introduction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/glorija-founder-actual.jpeg"
                  alt="Glorija Beberina - Founder and CEO of Glow Housekeeping"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <p className="text-gray-800 font-semibold text-lg mb-2">
                      "When I clean, you see the difference—and that's what I love."
                    </p>
                    <p className="text-gray-600 text-sm">- Glorija Beberina, Founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-blue-600" />
                  The Foundation
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <span className="font-semibold text-blue-600">Glorija Beberina</span> is the founder and CEO of Glow
                  Housekeeping, a company built on{" "}
                  <span className="font-semibold text-green-600">trust, transparency, and a passion</span> for helping
                  others live and work in clean, uplifting spaces.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-green-600" />
                  From Latvia to Netherlands
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Originally from <span className="font-semibold text-green-600">Latvia</span>, Glorija moved to the
                  Netherlands in <span className="font-semibold">2022</span>, bringing with her a strong work ethic and
                  determination to build something meaningful.
                </p>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The Journey to Purpose</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From unfulfilling work to discovering her true calling—here's how Glorija found her purpose.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 rounded-full transform -translate-y-1/2"></div>

              <div className="grid grid-cols-3 gap-8 relative z-10">
                {/* Step 1: The Question */}
                <div className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="bg-blue-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                      <Lightbulb className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      The Realization
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      After spending a year working in a warehouse—a job that left her unfulfilled—she asked herself:{" "}
                      <em>"What do I enjoy doing, and how can I use it to help others?"</em>
                    </p>
                  </div>
                </div>

                {/* Step 2: The Answer */}
                <div className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="bg-green-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                      <Sparkles className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      The Answer
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      <strong>The answer was clear—cleaning.</strong> It wasn't just a task to her; it was a meaningful
                      service. The ability to transform a space and bring comfort through cleanliness gave her{" "}
                      <span className="font-semibold text-green-600">purpose and energy</span>.
                    </p>
                  </div>
                </div>

                {/* Step 3: The Mission */}
                <div className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="bg-purple-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      The Mission
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      In <strong>2024</strong>, she launched{" "}
                      <span className="font-semibold text-purple-600">Glow Housekeeping</span> with a mission: To create
                      a cleaning service where integrity, care, and professionalism come first—for both clients and
                      staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 rounded-full"></div>

                <div className="space-y-12">
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-blue-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">The Realization</h4>
                      <p className="text-gray-600 leading-relaxed">
                        After spending a year working in a warehouse—a job that left her unfulfilled—she asked herself:{" "}
                        <em>"What do I enjoy doing, and how can I use it to help others?"</em>
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-green-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">The Answer</h4>
                      <p className="text-gray-600 leading-relaxed">
                        <strong>The answer was clear—cleaning.</strong> It wasn't just a task to her; it was a
                        meaningful service. The ability to transform a space and bring comfort through cleanliness gave
                        her <span className="font-semibold text-green-600">purpose and energy</span>.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-purple-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">The Mission</h4>
                      <p className="text-gray-600 leading-relaxed">
                        In <strong>2024</strong>, she launched{" "}
                        <span className="font-semibold text-purple-600">Glow Housekeeping</span> with a mission: To
                        create a cleaning service where integrity, care, and professionalism come first—for both clients
                        and staff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Experience Card */}
            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-3xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
                    <p className="text-orange-600 font-medium">Finding Joy in Service</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  She began her journey in professional cleaning with a company that supported{" "}
                  <span className="font-semibold text-orange-600">elderly and chronically ill clients</span>. There, she
                  found <span className="font-semibold">joy and connection</span> in her work and was deeply appreciated
                  by the clients she served.
                </p>
                <div className="bg-white/60 rounded-2xl p-4">
                  <p className="text-gray-600 italic text-center">
                    "I discovered that cleaning wasn't just about making spaces look good—it was about caring for
                    people."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Motivation Card */}
            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden bg-gradient-to-br from-red-50 to-rose-100 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-100 w-16 h-16 rounded-3xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">The Motivation</h3>
                    <p className="text-red-600 font-medium">Standing Up for What's Right</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  However, witnessing <span className="font-semibold text-red-600">unethical practices</span> behind the
                  scenes—where management treated staff unfairly and misled vulnerable clients—motivated Glorija to{" "}
                  <span className="font-semibold">take a stand</span>.
                </p>
                <div className="bg-white/60 rounded-2xl p-4">
                  <p className="text-gray-600 italic text-center">
                    "I knew there had to be a better way—one built on honesty and respect for everyone involved."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Success */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-3xl p-12 shadow-xl border border-indigo-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-10 h-10 text-indigo-600" />
                <h3 className="text-3xl font-bold text-gray-900">Today's Success</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                Today, <span className="font-bold text-indigo-600">Glow Housekeeping</span> proudly serves a diverse
                range of clients—from <span className="font-semibold">families and busy professionals</span> to{" "}
                <span className="font-semibold">offices and commercial spaces</span>—bringing not just cleanliness, but{" "}
                <span className="font-semibold text-purple-600">peace of mind</span>.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/60 rounded-2xl p-6">
                  <Building className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Commercial Spaces</h4>
                  <p className="text-gray-600 text-sm">Offices, retail stores, and professional facilities</p>
                </div>
                <div className="bg-white/60 rounded-2xl p-6">
                  <Heart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Families</h4>
                  <p className="text-gray-600 text-sm">Homes where families create lasting memories</p>
                </div>
                <div className="bg-white/60 rounded-2xl p-6">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Professionals</h4>
                  <p className="text-gray-600 text-sm">Busy individuals who value quality and reliability</p>
                </div>
              </div>
              <blockquote className="text-2xl font-bold text-gray-900 italic mb-4">
                "When I clean, you see the difference—and that's what I love."
              </blockquote>
              <p className="text-lg text-gray-600">
                With Glorija's leadership, the company is grounded in{" "}
                <span className="font-semibold text-indigo-600">compassion, honesty, and a deep belief</span> in doing
                things the right way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">Our Core Values</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Drives Us Every Day</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values aren't just words on a wall—they're the foundation of every interaction, every service, and
              every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Integrity First",
                description:
                  "We believe in doing the right thing, even when no one is watching. Transparency and honesty guide every decision we make.",
                color: "blue",
              },
              {
                icon: <Heart className="w-8 h-8 text-rose-600" />,
                title: "Genuine Care",
                description:
                  "Every space we clean is treated with the same care and attention we'd give our own home. Your comfort is our priority.",
                color: "rose",
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: "Respect for All",
                description:
                  "We treat our team members, clients, and community with dignity and respect. Everyone deserves to be valued.",
                color: "green",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-600" />,
                title: "Excellence",
                description:
                  "We're not satisfied with 'good enough.' We strive for excellence in every detail, every time.",
                color: "purple",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
                title: "Reliability",
                description:
                  "When we make a commitment, we keep it. You can count on us to be there when we say we will.",
                color: "orange",
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-600" />,
                title: "Continuous Growth",
                description:
                  "We're always learning, improving, and finding better ways to serve our clients and support our team.",
                color: "yellow",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-${value.color}-50`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-${value.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${value.color}-200 transition-colors duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">Our Team</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The People Behind the Glow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who bring passion, skill, and care to every cleaning service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-2xl">
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Glorija Beberina</h3>
                  <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
                  <p className="text-gray-600 leading-relaxed">
                    Passionate about creating clean, comfortable spaces and building a company based on integrity and
                    care.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member Placeholder Cards */}
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src="/diverse-cleaning-team.png"
                    alt="Professional cleaning team member"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Professional Team</h3>
                  <p className="text-green-600 font-medium mb-4">Cleaning Specialists</p>
                  <p className="text-gray-600 leading-relaxed">
                    Trained, experienced, and dedicated professionals who share our commitment to excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Join Our Team Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-8 text-center flex flex-col justify-center h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Join Our Team</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We're always looking for passionate individuals who share our values and want to make a difference.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
                  <Link href="/join-our-team" className="flex items-center gap-2">
                    View Opportunities <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
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
            Join the families and businesses who trust us with their most important spaces. Experience cleaning services
            built on integrity, care, and excellence.
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
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
