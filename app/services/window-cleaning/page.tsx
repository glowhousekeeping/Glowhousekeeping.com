import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eye, Sparkles, Home, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WindowCleaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-100">Window Cleaning Service</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Crystal Clear <span className="text-sky-600">Windows</span> for Beautiful Views
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional window cleaning services that enhance natural light, improve your property's appearance,
                  and provide crystal-clear views. Perfect for homes, offices, and commercial buildings.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">€150-550</div>
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
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 rounded-full px-8">
                  Book Service
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="https://wa.me/31610756699">WhatsApp Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-window-cleaning.png"
                alt="Professional window cleaning service"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Professional Window Cleaning?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean windows do more than just look good – they improve natural light, enhance your property value, and
              create a healthier indoor environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enhanced Natural Light</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean windows allow up to 40% more natural light into your space, reducing energy costs and creating a
                  brighter, more welcoming environment.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-sky-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Improved Property Value</h3>
                <p className="text-gray-600 leading-relaxed">
                  Well-maintained windows significantly enhance your property's curb appeal and can increase its market
                  value by creating a positive first impression.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our specialized equipment and techniques ensure streak-free, spotless windows that stay cleaner longer
                  than DIY cleaning methods.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Window Cleaning Service Includes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Interior and exterior window cleaning",
                "Window frame and sill cleaning",
                "Screen cleaning and maintenance",
                "Professional squeegee technique",
                "Eco-friendly cleaning solutions",
                "Streak-free finish guarantee",
                "Safety equipment and procedures",
                "Post-service quality inspection",
                "Flexible scheduling options",
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
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transparent Window Cleaning Pricing</h2>
            <p className="text-xl text-gray-600">Fair pricing based on property size and number of windows</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Residential</h3>
                <div className="text-3xl font-bold text-sky-600 mb-2">€150-250</div>
                <p className="text-gray-600 mb-6">Standard homes</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Up to 15 windows</li>
                  <li>• Interior & exterior cleaning</li>
                  <li>• Frame and sill cleaning</li>
                  <li>• Screen cleaning included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg ring-2 ring-sky-200">
              <CardContent className="p-8 text-center">
                <Badge className="bg-sky-100 text-sky-800 mb-4">Most Popular</Badge>
                <h3 className="text-xl font-semibold mb-4">Commercial</h3>
                <div className="text-3xl font-bold text-sky-600 mb-2">€250-400</div>
                <p className="text-gray-600 mb-6">Small to medium offices</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Up to 30 windows</li>
                  <li>• Professional grade cleaning</li>
                  <li>• Flexible scheduling</li>
                  <li>• Regular maintenance plans</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Large Commercial</h3>
                <div className="text-3xl font-bold text-sky-600 mb-2">€400-550</div>
                <p className="text-gray-600 mb-6">Large buildings</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 30+ windows</li>
                  <li>• High-rise equipment</li>
                  <li>• Safety certified team</li>
                  <li>• Custom service plans</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for Crystal Clear Windows?</h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Transform your space with professional window cleaning. Enjoy brighter rooms, better views, and enhanced
            property appeal with our expert service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 rounded-full px-8">
              Book Window Cleaning
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sky-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
