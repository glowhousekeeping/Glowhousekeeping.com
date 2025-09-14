import type { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useTranslation("common")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2 mb-4">
              {t("contact.getInTouch")}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("contact.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("contact.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">{t("contact.contactInfo")}</h2>

              <div className="space-y-6">
                {/* Phone */}
                <Card className="p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-xl font-bold text-green-600 mb-1">+31 6 10756699</p>
                        <p className="text-gray-600">Available 24/7 for emergencies</p>
                        <Button className="mt-3 bg-green-600 hover:bg-green-700 rounded-full">
                          <a href="tel:+31610756699">Call Now</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-xl font-bold text-blue-600 mb-1">info@glowhousekeeping.nl</p>
                        <p className="text-gray-600">Quick response guaranteed</p>
                        <Button className="mt-3 bg-blue-600 hover:bg-blue-700 rounded-full">
                          <a href="mailto:info@glowhousekeeping.nl">Send Email</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                        <p className="text-xl font-bold text-green-600 mb-1">+31 6 10756699</p>
                        <p className="text-gray-600">Instant messaging support</p>
                        <Button className="mt-3 bg-green-600 hover:bg-green-700 rounded-full">
                          <a href="https://wa.me/31610756699" target="_blank" rel="noopener noreferrer">
                            Chat on WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Area</h3>
                        <p className="text-xl font-bold text-purple-600 mb-1">Venlo, Limburg</p>
                        <p className="text-gray-600">Serving all of Netherlands</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Business Hours & Quick Actions */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">{t("contact.businessHours")}</h2>

              <Card className="p-8 rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">We're here when you need us</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Monday - Friday</span>
                      <span className="text-blue-600 font-bold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Saturday</span>
                      <span className="text-blue-600 font-bold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Sunday</span>
                      <span className="text-orange-600 font-bold">By Appointment</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium text-gray-900">Emergency Service</span>
                      <span className="text-green-600 font-bold">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/book-service" className="flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Book Service Now
                  </Link>
                </Button>

                <Button
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-2xl py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://calendar.app.google/RU6yxXUM6GZED7Nm7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Appointment
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <Link href="/client-assessment" className="flex items-center justify-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    Free Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How quickly can you respond to service requests?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We typically respond to service requests within 2-4 hours during business hours. For emergency
                  cleaning services, we can often arrange same-day or next-day service.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you provide cleaning supplies and equipment?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we bring all necessary cleaning supplies and professional-grade equipment. We use eco-friendly
                  products that are safe for your family and pets.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What areas do you serve?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're based in Venlo, Limburg, and serve clients throughout the Netherlands. Contact us to confirm
                  service availability in your specific area.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How do you ensure quality and reliability?</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our team members are thoroughly screened and trained. We're fully insured and guarantee our work.
                  If you're not satisfied, we'll return to make it right at no additional cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  }
}
