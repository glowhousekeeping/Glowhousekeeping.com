import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sparkles, Shield, Clock, Phone, Mail, Zap } from "lucide-react"

export default function DeepCleaningPage() {
  const pricingTiers = [
    {
      title: "Residential Deep Clean",
      price: "€200-400",
      description: "Comprehensive deep cleaning for homes",
      features: [
        "All standard cleaning services",
        "Inside appliances cleaning",
        "Baseboards and trim",
        "Light fixtures and fans",
        "Cabinet fronts and handles",
      ],
    },
    {
      title: "Premium Deep Clean",
      price: "€400-600",
      description: "Intensive deep cleaning with extras",
      features: [
        "All residential services",
        "Inside oven and refrigerator",
        "Window cleaning (interior)",
        "Carpet spot treatment",
        "Detailed bathroom sanitization",
        "Organizing services",
      ],
      popular: true,
    },
    {
      title: "Commercial Deep Clean",
      price: "€600-800",
      description: "Complete deep cleaning for businesses",
      features: [
        "All premium services",
        "Floor stripping and waxing",
        "Upholstery cleaning",
        "Air vent cleaning",
        "Pressure washing exteriors",
        "Post-construction cleanup",
      ],
    },
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: "Thorough Sanitization",
      description: "Deep cleaning eliminates bacteria, allergens, and hidden dirt for a healthier environment",
    },
    {
      icon: Shield,
      title: "Professional Equipment",
      description: "Industrial-grade tools and eco-friendly products for superior cleaning results",
    },
    {
      icon: Clock,
      title: "Time-Saving",
      description: "Let our experts handle the intensive cleaning while you focus on what matters most",
    },
    {
      icon: Zap,
      title: "Immediate Results",
      description: "See dramatic transformation with our comprehensive deep cleaning approach",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-500/20 text-indigo-100 border-indigo-400/30">
                Professional Deep Cleaning
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Intensive
                <span className="block text-purple-300">Deep Cleaning</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Transform your space with our comprehensive deep cleaning services. Perfect for spring cleaning,
                move-ins, special events, or when your space needs that extra level of attention and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/book-service">Book Deep Clean</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/professional-cleaning-team.png"
                alt="Professional Deep Cleaning Service"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Deep Cleaning?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep cleaning goes beyond surface cleaning to tackle hidden dirt, grime, and bacteria that regular
              cleaning might miss. Perfect for seasonal refreshes or special occasions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
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

      {/* Deep Cleaning Includes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Deep Cleaning</h2>
            <p className="text-xl text-gray-600">Comprehensive cleaning that reaches every corner</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "All standard cleaning services",
              "Inside appliance cleaning",
              "Baseboards and trim cleaning",
              "Light fixtures and ceiling fans",
              "Cabinet fronts and handles",
              "Inside windows and sills",
              "Door frames and switches",
              "Detailed bathroom sanitization",
              "Kitchen deep degreasing",
              "Carpet spot treatment",
              "Upholstery cleaning",
              "Air vent cleaning",
              "Behind furniture cleaning",
              "Detailed organizing",
              "Floor stripping and waxing",
              "Quality assurance inspection",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Deep Cleaning Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect deep cleaning service for your space</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "border-purple-500 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{tier.title}</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 my-4">{tier.price}</div>
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
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    <Link href="/book-service">Choose Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">When to Book Deep Cleaning</h2>
            <p className="text-xl text-gray-600">Perfect occasions for our intensive cleaning service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Spring Cleaning", description: "Annual deep refresh for your entire space" },
              { title: "Moving In/Out", description: "Start fresh or leave spotless for the next occupant" },
              { title: "Special Events", description: "Prepare your space for important gatherings" },
              { title: "Post-Construction", description: "Remove dust and debris after renovations" },
            ].map((occasion, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{occasion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{occasion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Complete Transformation?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Experience the difference deep cleaning makes. Book your intensive cleaning service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/book-service">Book Deep Clean Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
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
