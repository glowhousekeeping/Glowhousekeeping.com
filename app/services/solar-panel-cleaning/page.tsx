import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sun, Zap, TrendingUp, Shield, Phone, Mail } from "lucide-react"

export default function SolarPanelCleaningPage() {
  const pricingTiers = [
    {
      title: "Residential Basic",
      price: "€150",
      description: "Perfect for small residential installations",
      features: [
        "Up to 10 solar panels",
        "Basic cleaning & inspection",
        "Performance check",
        "1-year maintenance tips",
      ],
    },
    {
      title: "Residential Premium",
      price: "€250",
      description: "Comprehensive service for larger homes",
      features: [
        "Up to 20 solar panels",
        "Deep cleaning & inspection",
        "Performance optimization",
        "Detailed efficiency report",
        "6-month follow-up",
      ],
      popular: true,
    },
    {
      title: "Commercial",
      price: "€350-500",
      description: "Professional service for businesses",
      features: [
        "20+ solar panels",
        "Complete system analysis",
        "Professional equipment",
        "Quarterly maintenance plan",
        "Energy efficiency consultation",
      ],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximize Energy Output",
      description: "Clean panels can increase energy production by up to 25%",
    },
    {
      icon: Zap,
      title: "Optimal Efficiency",
      description: "Remove dust, debris, and buildup that reduces performance",
    },
    {
      icon: Shield,
      title: "Protect Your Investment",
      description: "Regular maintenance extends the lifespan of your solar system",
    },
    {
      icon: Sun,
      title: "Professional Equipment",
      description: "Specialized tools and eco-friendly cleaning solutions",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500/20 text-yellow-100 border-yellow-400/30">
                Solar Panel Maintenance
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Maximize Your
                <span className="block text-yellow-300">Solar Efficiency</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Professional solar panel cleaning services that boost energy output by up to 25%. Keep your investment
                performing at peak efficiency with our specialized maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/book-service">Schedule Cleaning</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/solar-panel-cleaning.png"
                alt="Professional Solar Panel Cleaning Service"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Professional Solar Panel Cleaning?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dirty solar panels can lose 15-25% of their efficiency. Our professional cleaning service ensures maximum
              energy production and protects your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-orange-200 hover:border-orange-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect cleaning package for your solar installation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "border-orange-500 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{tier.title}</CardTitle>
                  <div className="text-4xl font-bold text-orange-600 my-4">{tier.price}</div>
                  <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 rounded-full font-bold transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    <Link href="/book-service">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Process</h2>
            <p className="text-xl text-gray-600">Safe, efficient, and thorough solar panel cleaning</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inspection", description: "Thorough assessment of your solar panel system" },
              { step: "02", title: "Safe Setup", description: "Professional equipment setup with safety protocols" },
              { step: "03", title: "Deep Cleaning", description: "Specialized cleaning solutions and techniques" },
              { step: "04", title: "Performance Check", description: "Efficiency testing and maintenance report" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Maximize Your Solar Investment?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Don't let dirty panels reduce your energy savings. Schedule professional cleaning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/book-service">Book Service Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
