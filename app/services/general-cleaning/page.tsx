import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Sparkles, Home, Building2, Heart, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GeneralCleaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-background-cleaning.png')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">✨ Most Popular Service</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  General <span className="text-blue-600">Cleaning</span> Services
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your space with our comprehensive cleaning services. From regular maintenance to deep
                  cleaning, we make your home or office sparkle like new.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Pricing starts at €35 per hour</div>
                  <div className="text-sm text-gray-600">and may vary depending on the size of your space</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  <Link href="/book-service">Book Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Fully Insured</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-cleaning-team.png"
                alt="Professional cleaning team at work"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Founded by</p>
                  <p className="text-lg font-bold text-blue-600">Glorija Beberina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our General Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive cleaning service covers every corner of your space, ensuring nothing is overlooked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8 text-blue-600" />,
                title: "Living Areas",
                items: [
                  "Dusting all surfaces",
                  "Vacuuming carpets & rugs",
                  "Mopping hard floors",
                  "Cleaning mirrors & glass",
                  "Organizing visible items",
                ],
              },
              {
                icon: <Sparkles className="w-8 h-8 text-green-600" />,
                title: "Kitchen Deep Clean",
                items: [
                  "Cleaning appliances inside & out",
                  "Scrubbing countertops",
                  "Sanitizing sink & faucet",
                  "Cleaning cabinet fronts",
                  "Mopping floors thoroughly",
                ],
              },
              {
                icon: <Heart className="w-8 h-8 text-purple-600" />,
                title: "Bathrooms",
                items: [
                  "Scrubbing tub & shower",
                  "Cleaning toilet completely",
                  "Sanitizing all surfaces",
                  "Polishing mirrors & fixtures",
                  "Mopping & disinfecting floors",
                ],
              },
              {
                icon: <Building2 className="w-8 h-8 text-orange-600" />,
                title: "Bedrooms",
                items: [
                  "Making beds neatly",
                  "Dusting furniture",
                  "Vacuuming floors",
                  "Cleaning mirrors",
                  "Organizing surfaces",
                ],
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
                title: "Common Areas",
                items: [
                  "Hallway cleaning",
                  "Staircase maintenance",
                  "Light switch sanitizing",
                  "Door handle cleaning",
                  "Baseboard dusting",
                ],
              },
              {
                icon: <Shield className="w-8 h-8 text-red-600" />,
                title: "Final Touches",
                items: [
                  "Trash removal",
                  "Fresh air spray",
                  "Quality inspection",
                  "Touch-up cleaning",
                  "Client walkthrough",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surprises. Just honest, upfront pricing for quality cleaning services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Clean",
                price: "€35-50",
                duration: "2-3 hours",
                description: "Perfect for regular maintenance cleaning",
                features: [
                  "All living areas",
                  "Kitchen cleaning",
                  "Bathroom sanitizing",
                  "Vacuuming & mopping",
                  "Dusting surfaces",
                ],
                popular: false,
              },
              {
                name: "Deep Clean",
                price: "€60-85",
                duration: "4-5 hours",
                description: "Comprehensive cleaning for a fresh start",
                features: [
                  "Everything in Basic",
                  "Inside appliances",
                  "Detailed scrubbing",
                  "Cabinet fronts",
                  "Baseboards & corners",
                  "Light fixtures",
                ],
                popular: true,
              },
              {
                name: "Premium Clean",
                price: "€90-120",
                duration: "5-6 hours",
                description: "The ultimate cleaning experience",
                features: [
                  "Everything in Deep",
                  "Inside cabinets",
                  "Oven deep clean",
                  "Refrigerator cleaning",
                  "Window cleaning",
                  "Organizing services",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative rounded-2xl border-0 shadow-lg ${plan.popular ? "ring-2 ring-blue-500 shadow-2xl" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-blue-600">{plan.price}</p>
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4" />
                      {plan.duration}
                    </p>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"}`}
                    size="lg"
                  >
                    <Link href="/book-service">Choose {plan.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              *Pricing starts at €35 per hour and may vary depending on the size of your space
            </p>
            <Button variant="outline" size="lg" className="rounded-full bg-transparent">
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Glow Housekeeping?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by Glorija Beberina with a mission to provide honest, reliable, and exceptional cleaning services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Personal Touch",
                description: "We treat your home like our own, with care and attention to every detail.",
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Fully Insured",
                description: "Complete peace of mind with comprehensive insurance coverage.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                title: "Quality Guaranteed",
                description: "100% satisfaction guarantee - we'll make it right if you're not happy.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-500" />,
                title: "Eco-Friendly",
                description: "Safe, non-toxic products that are gentle on your family and pets.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Glow Difference?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Join hundreds of satisfied customers who trust us with their cleaning needs. Book your service today and see
            why we're the Netherlands' preferred cleaning service.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
              <Link href="/book-service">Book Your Cleaning</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
