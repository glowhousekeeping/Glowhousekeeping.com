import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sun, TrendingUp, Star, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolarPanelCleaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Solar Panel Cleaning</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Maximize Your <span className="text-orange-600">Solar Energy</span> Efficiency
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional solar panel cleaning services that boost energy output by up to 25%. Keep your investment
                  performing at peak efficiency with our specialized maintenance solutions.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">€150-500</div>
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
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 rounded-full px-8">
                  Book Cleaning
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="https://wa.me/31610756699">WhatsApp Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/solar-panel-cleaning.png"
                alt="Professional solar panel cleaning"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Clean Solar Panels Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dirty solar panels can lose 15-25% of their efficiency. Our professional cleaning service ensures maximum
              energy production and protects your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Increased Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean panels can produce up to 25% more energy, significantly improving your return on investment and
                  reducing electricity costs.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Extended Lifespan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular cleaning prevents buildup that can cause permanent damage, extending the life of your solar
                  panel system by years.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sun className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maximize your green energy production and reduce your carbon footprint with optimal panel performance
                  through professional maintenance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Solar Panel Cleaning Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Pre-cleaning inspection and assessment",
                "Safe access setup and equipment preparation",
                "Gentle cleaning with specialized tools",
                "Eco-friendly cleaning solutions",
                "Thorough rinsing and drying",
                "Post-cleaning efficiency check",
                "Detailed service report",
                "Performance improvement documentation",
                "Safety compliance verification",
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
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Fair pricing based on your system size and cleaning requirements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Small Systems</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">€150-250</div>
                <p className="text-gray-600 mb-6">Up to 20 panels</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete cleaning service</li>
                  <li>• Performance check</li>
                  <li>• Service report</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg ring-2 ring-orange-200">
              <CardContent className="p-8 text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4">Most Popular</Badge>
                <h3 className="text-xl font-semibold mb-4">Medium Systems</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">€250-350</div>
                <p className="text-gray-600 mb-6">20-40 panels</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete cleaning service</li>
                  <li>• Performance optimization</li>
                  <li>• Detailed efficiency report</li>
                  <li>• 6-month maintenance tips</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Large Systems</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">€350-500</div>
                <p className="text-gray-600 mb-6">40+ panels</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete cleaning service</li>
                  <li>• Advanced performance analysis</li>
                  <li>• Comprehensive system report</li>
                  <li>• Annual maintenance plan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Boost Your Solar Efficiency?</h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Don't let dirty panels reduce your energy production. Schedule your professional solar panel cleaning today
            and start saving more on your electricity bills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8">
              Schedule Cleaning
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
