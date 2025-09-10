import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Home, Shield, Sparkles, Clock, Phone, Mail, Zap } from "lucide-react"

export default function CarpetCarePage() {
  const pricingTiers = [
    {
      title: "Basic Carpet Care",
      price: "€100-200",
      description: "Essential carpet cleaning for small areas",
      features: ["Up to 3 rooms", "Vacuum and spot treatment", "Basic stain removal", "Deodorizing treatment"],
    },
    {
      title: "Premium Carpet Care",
      price: "€200-300",
      description: "Comprehensive carpet cleaning service",
      features: [
        "Up to 5 rooms",
        "Deep steam cleaning",
        "Advanced stain removal",
        "Scotchgard protection",
        "Pet odor elimination",
      ],
      popular: true,
    },
    {
      title: "Commercial Carpet Care",
      price: "€300-400",
      description: "Professional service for businesses",
      features: [
        "Large commercial spaces",
        "Industrial equipment",
        "After-hours service",
        "Maintenance programs",
        "Quick-dry technology",
      ],
    },
  ]

  const benefits = [
    {
      icon: Home,
      title: "Healthier Environment",
      description: "Remove allergens, dust mites, and bacteria trapped deep in carpet fibers",
    },
    {
      icon: Shield,
      title: "Carpet Protection",
      description: "Extend carpet life and maintain warranty with professional cleaning",
    },
    {
      icon: Sparkles,
      title: "Stain Removal",
      description: "Advanced techniques to remove even the toughest stains and odors",
    },
    {
      icon: Clock,
      title: "Quick Drying",
      description: "Fast-drying methods minimize disruption to your daily routine",
    },
  ]

  const services = [
    {
      title: "Steam Cleaning",
      description: "Deep hot water extraction for thorough cleaning",
      icon: Zap,
    },
    {
      title: "Stain Removal",
      description: "Specialized treatment for tough stains and spots",
      icon: Sparkles,
    },
    {
      title: "Pet Odor Treatment",
      description: "Eliminate pet odors and sanitize affected areas",
      icon: Home,
    },
    {
      title: "Carpet Protection",
      description: "Apply protective treatments to prevent future stains",
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-500/20 text-orange-100 border-orange-400/30">
                Professional Carpet Care
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert
                <span className="block text-amber-300">Carpet Care</span>
              </h1>
              <p className="text-xl mb-8 text-amber-100 leading-relaxed">
                Restore your carpets to like-new condition with our professional carpet care services. From deep
                cleaning to stain removal and protection, we keep your carpets looking beautiful and lasting longer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-orange-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/book-service">Book Carpet Care</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/professional-cleaning-team.png"
                alt="Professional Carpet Care Service"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Professional Carpet Care Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular professional carpet cleaning not only improves appearance but also creates a healthier environment
              and extends the life of your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-amber-200 hover:border-amber-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Carpet Care Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your carpet needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Carpet Care</h2>
            <p className="text-xl text-gray-600">Complete carpet cleaning and maintenance service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Pre-inspection and assessment",
              "Furniture moving (light items)",
              "Pre-vacuuming treatment",
              "Pre-treatment of stains",
              "Hot water extraction cleaning",
              "Spot and stain removal",
              "Deodorizing treatment",
              "Carpet protection application",
              "Post-cleaning inspection",
              "Furniture replacement",
              "Drying time guidance",
              "Maintenance recommendations",
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Carpet Care Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect carpet cleaning service for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "border-amber-500 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{tier.title}</CardTitle>
                  <div className="text-4xl font-bold text-amber-600 my-4">{tier.price}</div>
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
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Carpet Care Process</h2>
            <p className="text-xl text-gray-600">Professional approach for optimal results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inspection", description: "Assess carpet condition and identify problem areas" },
              {
                step: "02",
                title: "Pre-Treatment",
                description: "Apply specialized solutions to stains and high-traffic areas",
              },
              { step: "03", title: "Deep Cleaning", description: "Hot water extraction removes dirt and contaminants" },
              {
                step: "04",
                title: "Protection",
                description: "Apply protective treatment and provide care instructions",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Carpets?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Give your carpets the professional care they deserve. Book your carpet cleaning service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/book-service">Book Service Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
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
