"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getCurrentTranslations } from "@/components/language-switcher"

export default function ContactPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm px-4 py-2 mb-6">
            ✨ {t.getInTouch}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.contactTitle}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{t.contactSubtitle}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.contactInfo}</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                          <a href="tel:+31610756699" className="text-green-600 hover:text-green-700 font-medium">
                            +31 6 10756699
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                          <a
                            href="mailto:glowhousekeeping.org@gmail.com"
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            glowhousekeeping.org@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                          <p className="text-gray-600">Venlo, Limburg & Surrounding Areas</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{t.businessHours}</h3>
                          <div className="text-gray-600 space-y-1">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                            <p>Sunday: By appointment</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
                <div className="grid gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 justify-start h-auto p-4">
                    <Link href="https://wa.me/31610756699" className="flex items-center gap-3 w-full">
                      <MessageCircle className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-sm opacity-90">Get instant response</div>
                      </div>
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start h-auto p-4 border-blue-200 hover:bg-blue-50 bg-transparent"
                  >
                    <a href="mailto:glowhousekeeping.org@gmail.com" className="flex items-center gap-3 w-full">
                      <Send className="w-5 h-5 text-blue-600" />
                      <div className="text-left">
                        <div className="font-semibold text-blue-600">Send Email</div>
                        <div className="text-sm text-gray-600">Detailed inquiries</div>
                      </div>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start h-auto p-4 border-purple-200 hover:bg-purple-50 bg-transparent"
                  >
                    <Link href="/book-service" className="flex items-center gap-3 w-full">
                      <User className="w-5 h-5 text-purple-600" />
                      <div className="text-left">
                        <div className="font-semibold text-purple-600">Book Service</div>
                        <div className="text-sm text-gray-600">Schedule cleaning</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+31 6 12345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="general-cleaning">General Cleaning</option>
                      <option value="solar-panel-cleaning">Solar Panel Cleaning</option>
                      <option value="window-cleaning">Window Cleaning</option>
                      <option value="drain-cleaning">Drain Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your cleaning needs..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600">Personal service with a professional touch</p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/glorija-founder-actual.jpeg"
                    alt="Glorija Beberina, Founder of Glow Housekeeping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Glorija Beberina</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "I founded Glow Housekeeping with a simple mission: to treat every space like it's my own home. With
                    years of experience in professional cleaning, I believe that attention to detail and genuine care
                    make all the difference. When you choose Glow Housekeeping, you're not just getting a cleaning
                    service – you're getting a partner who truly cares about your space and your satisfaction."
                  </p>
                  <div className="flex items-center gap-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Link href="https://wa.me/31610756699">Contact Glorija</Link>
                    </Button>
                    <Button variant="outline">
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We primarily serve Venlo, Limburg, and surrounding areas in the Netherlands. Contact us to confirm
                  service availability in your specific location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get a quote?</h3>
                <p className="text-gray-600">
                  You can get a free quote by calling us, sending a WhatsApp message, or filling out our online booking
                  form. We'll assess your needs and provide a transparent, competitive quote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are you insured and bonded?</h3>
                <p className="text-gray-600">
                  Yes, Glow Housekeeping is fully insured and bonded for your peace of mind. We take the security and
                  safety of your property seriously.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What cleaning products do you use?</h3>
                <p className="text-gray-600">
                  We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the
                  environment. We can also accommodate specific product preferences upon request.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
