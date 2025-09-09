import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wrench, AlertTriangle, Shield, Star, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DrainCleaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Drain Cleaning Service</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Professional <span className="text-emerald-600">Drain Cleaning</span> & Maintenance
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fast, effective drain cleaning and blockage removal services. From minor clogs to major blockages, we
                  restore proper drainage and prevent costly plumbing emergencies.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">€20-120</div>
                  <div className="text-sm text-gray-600">per service</div>
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
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-8">
                  Book Service
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="https://wa.me/31610756699">Emergency Call</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-drain-cleaning-service.jpg"
                alt="Professional drain cleaning service"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Drain Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to emergency blockage removal, we handle all types of drain issues with
              professional equipment and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sink Drains</h3>
                <p className="text-sm text-gray-600">Kitchen and bathroom sink blockage removal</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Toilet Blockages</h3>
                <p className="text-sm text-gray-600">Safe and effective toilet drain clearing</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Shower Drains</h3>
                <p className="text-sm text-gray-600">Hair and soap buildup removal</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Main Lines</h3>
                <p className="text-sm text-gray-600">Main sewer line cleaning and maintenance</p>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Drain Cleaning Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Initial drain inspection and assessment",
                "Professional drain snake equipment",
                "High-pressure water jetting",
                "Eco-friendly cleaning solutions",
                "Complete blockage removal",
                "Drain flow testing",
                "Preventive maintenance advice",
                "Emergency service availability",
                "Satisfaction guarantee",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Affordable Drain Cleaning Rates</h2>
            <p className="text-xl text-gray-600">Transparent pricing with no hidden fees or surprise charges</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Basic Service</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-2">€20-40</div>
                <p className="text-gray-600 mb-6">Minor blockages</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Simple drain snaking</li>
                  <li>• Basic blockage removal</li>
                  <li>• Single drain service</li>
                  <li>• Quick response time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg ring-2 ring-emerald-200">
              <CardContent className="p-8 text-center">
                <Badge className="bg-emerald-100 text-emerald-800 mb-4">Most Common</Badge>
                <h3 className="text-xl font-semibold mb-4">Standard Service</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-2">€40-80</div>
                <p className="text-gray-600 mb-6">Moderate blockages</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Professional equipment</li>
                  <li>• Multiple drain cleaning</li>
                  <li>• Thorough inspection</li>
                  <li>• Prevention advice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Advanced Service</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-2">€80-120</div>
                <p className="text-gray-600 mb-6">Severe blockages</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• High-pressure jetting</li>
                  <li>• Main line cleaning</li>
                  <li>• Emergency service</li>
                  <li>• Follow-up inspection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Emergency Drain Service Available</h2>
          <p className="text-lg text-gray-600 mb-6">
            Dealing with a severe blockage or overflow? We offer emergency drain cleaning services with rapid response
            times to prevent water damage and restore normal drainage.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full px-8">
            <Link href="tel:+31610756699">Call Emergency Line</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't Let Blocked Drains Disrupt Your Day</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Professional drain cleaning that gets the job done right the first time. Fast service, fair pricing, and
            guaranteed results for all your drainage needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full px-8">
              Schedule Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
