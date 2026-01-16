import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Droplets, Wrench, Clock, Shield, AlertTriangle, Phone, Mail } from "lucide-react"

export default function DrainCleaningPage() {
  const pricingTiers = [
    {
      title: "Basic Service",
      price: "€20-50",
      description: "Simple blockage removal for minor issues",
      features: ["Basic drain snaking", "Minor blockage removal", "Quick assessment", "30-day guarantee"],
    },
    {
      title: "Standard Service",
      price: "€60-90",
      description: "Comprehensive drain cleaning and maintenance",
      features: [
        "Professional drain cleaning",
        "Camera inspection",
        "Preventive maintenance tips",
        "90-day guarantee",
        "Emergency availability",
      ],
      popular: true,
    },
    {
      title: "Premium Service",
      price: "€100-120",
      description: "Complete drain system overhaul",
      features: [
        "Full system inspection",
        "High-pressure jetting",
        "Root removal service",
        "Detailed report",
        "1-year maintenance plan",
      ],
    },
  ]

  const benefits = [
    {
      icon: Droplets,
      title: "Prevent Water Damage",
      description: "Stop blockages before they cause costly water damage",
    },
    {
      icon: Wrench,
      title: "Professional Equipment",
      description: "Advanced tools for thorough and effective cleaning",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available for urgent drain cleaning emergencies",
    },
    {
      icon: Shield,
      title: "Guaranteed Results",
      description: "Complete satisfaction guarantee on all our work",
    },
  ]

  const commonIssues = [
    { issue: "Hair & Soap Buildup", solution: "Professional drain snaking and cleaning" },
    { issue: "Grease & Food Particles", solution: "High-pressure water jetting" },
    { issue: "Tree Root Intrusion", solution: "Root cutting and pipe repair" },
    { issue: "Foreign Objects", solution: "Specialized removal techniques" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-500/20 text-green-100 border-green-400/30">
                Professional Drain Cleaning
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fast & Reliable
                <span className="block text-emerald-300">Drain Cleaning</span>
              </h1>
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed">
                Professional drain cleaning and maintenance services. From minor blockages to major system overhauls, we
                keep your drains flowing smoothly 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-green-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/book-service">Book Service</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a href="tel:+31631330807">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Call
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/professional-drain-cleaning-service.jpg"
                alt="Professional Drain Cleaning Service"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-6 px-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertTriangle className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold">
              Drain Emergency? Call us now:{" "}
              <a href="tel:+31631330807" className="underline">
                +31 6 31330807
              </a>{" "}
              - Available 24/7
            </span>
            <AlertTriangle className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Professional Drain Cleaning?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't let blocked drains disrupt your daily life. Our professional service prevents costly damage and
              keeps your plumbing system running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-emerald-200 hover:border-emerald-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-4">
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

      {/* Common Issues Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Drain Problems We Solve</h2>
            <p className="text-xl text-gray-600">From simple blockages to complex system issues, we handle it all</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonIssues.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-emerald-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.issue}</h3>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Fair, upfront pricing with no hidden fees</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "border-emerald-500 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{tier.title}</CardTitle>
                  <div className="text-4xl font-bold text-emerald-600 my-4">{tier.price}</div>
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
                        ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Process</h2>
            <p className="text-xl text-gray-600">Systematic approach to effective drain cleaning</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnosis", description: "Identify the root cause of the blockage" },
              { step: "02", title: "Equipment Setup", description: "Prepare specialized tools for the job" },
              { step: "03", title: "Professional Cleaning", description: "Remove blockages using appropriate methods" },
              {
                step: "04",
                title: "Testing & Prevention",
                description: "Ensure proper flow and provide maintenance tips",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Let Blocked Drains Ruin Your Day</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Fast, professional drain cleaning service. Available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/book-service">Book Service Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
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
