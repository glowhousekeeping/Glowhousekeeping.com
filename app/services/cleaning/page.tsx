import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sparkles, Shield, Clock, Users, Phone, Mail } from "lucide-react"

export default function CleaningPage() {
  const pricingTiers = [
    {
      title: "Basic Cleaning",
      price: "€25/hr",
      description: "Essential cleaning for small spaces",
      features: ["Dusting and vacuuming", "Basic bathroom cleaning", "Kitchen surface cleaning", "Trash removal"],
    },
    {
      title: "Standard Cleaning",
      price: "€35/hr",
      description: "Comprehensive cleaning for homes and offices",
      features: [
        "All basic cleaning services",
        "Deep bathroom sanitization",
        "Kitchen appliance cleaning",
        "Window sill cleaning",
        "Floor mopping and polishing",
      ],
      popular: true,
    },
    {
      title: "Premium Cleaning",
      price: "€45/hr",
      description: "Complete cleaning with extra attention to detail",
      features: [
        "All standard cleaning services",
        "Inside oven and refrigerator",
        "Baseboards and light fixtures",
        "Detailed organizing",
        "Quality assurance check",
      ],
    },
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: "Professional Standards",
      description: "Trained staff using professional-grade equipment and eco-friendly products",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind and property protection",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Weekly, bi-weekly, monthly, or one-time cleaning to fit your schedule",
    },
    {
      icon: Users,
      title: "Trusted Team",
      description: "Background-checked professionals committed to exceptional service",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-500/20 text-indigo-100 border-indigo-400/30">
                Professional Cleaning Services
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Complete
                <span className="block text-blue-300">Cleaning Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Transform your space with our comprehensive cleaning services. From residential homes to commercial
                offices, we deliver exceptional results with professional standards and eco-friendly practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/book-service">Book Cleaning</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/professional-cleaning-team.png"
                alt="Professional Cleaning Team"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cleaning Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine professional expertise with personalized service to deliver exceptional cleaning results that
              exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-blue-200 hover:border-blue-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
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

      {/* Services Included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Our Cleaning Service</h2>
            <p className="text-xl text-gray-600">Comprehensive cleaning that covers every detail</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Dusting all surfaces and furniture",
              "Vacuuming carpets and rugs",
              "Mopping and sanitizing floors",
              "Cleaning and disinfecting bathrooms",
              "Kitchen cleaning and sanitization",
              "Trash removal and liner replacement",
              "Window sill and frame cleaning",
              "Light fixture dusting",
              "Baseboards and door frames",
              "Mirror and glass cleaning",
              "Organizing and tidying",
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

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect cleaning package for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "border-blue-500 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{tier.title}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 my-4">{tier.price}</div>
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
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cleaning Process</h2>
            <p className="text-xl text-gray-600">Systematic approach for consistent, quality results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate your space and cleaning requirements" },
              { step: "02", title: "Planning", description: "Create a customized cleaning plan for your needs" },
              { step: "03", title: "Cleaning", description: "Execute thorough cleaning using professional methods" },
              { step: "04", title: "Quality Check", description: "Final inspection to ensure perfect results" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the difference professional cleaning makes. Book your service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/book-service">Book Service Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
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
