import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GeneralCleaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">General Cleaning Service</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Complete Office & Commercial <span className="text-blue-600">Cleaning</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional standards meet exceptional results. Our comprehensive general cleaning service ensures
                  your workspace is spotless, healthy, and welcoming for everyone.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">€35</div>
                  <div className="text-sm text-gray-600">per hour</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9/5 rating</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="https://wa.me/31610756699">WhatsApp Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-office-cleaning.png"
                alt="Professional office cleaning"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our General Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive cleaning service covers every aspect of your workspace, ensuring a pristine environment
              that promotes productivity and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Dusting all surfaces and furniture",
              "Vacuuming carpets and rugs",
              "Mopping hard floors",
              "Cleaning and sanitizing bathrooms",
              "Kitchen and break room cleaning",
              "Trash removal and replacement",
              "Window sill and frame cleaning",
              "Light fixture cleaning",
              "Disinfecting high-touch surfaces",
              "Organizing common areas",
              "Restocking supplies",
              "Quality inspection",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our General Cleaning Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Standards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team follows strict protocols and uses professional-grade equipment to ensure consistent,
                  high-quality results every time.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work around your business hours. Whether you need daily, weekly, or monthly cleaning, we adapt to
                  your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trained Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our cleaning professionals are thoroughly trained, background-checked, and committed to delivering
                  exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for a Spotless Workspace?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Experience the difference professional cleaning makes. Contact us today for a free consultation and
            customized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
