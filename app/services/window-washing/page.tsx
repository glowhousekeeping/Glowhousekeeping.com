import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eye, Home, Sparkles, Shield, Phone, Mail } from "lucide-react"

export default function WindowWashingPage() {
  const pricingTiers = [
    {
      title: "Residential Basic",
      price: "€150",
      description: "Perfect for small homes and apartments",
      features: [
        "Up to 15 windows",
        "Interior & exterior cleaning",
        "Screen cleaning included",
        "Streak-free guarantee",
      ],
    },
    {
      title: "Residential Premium",
      price: "€300",
      description: "Comprehensive service for larger homes",
      features: [
        "Up to 30 windows",
        "Interior & exterior cleaning",
        "Screen & sill cleaning",
        "Gutter cleaning included",
        "Quarterly maintenance plan",
      ],
      popular: true,
    },
    {
      title: "Commercial",
      price: "€400-550",
      description: "Professional service for businesses",
      features: [
        "30+ windows",
        "High-rise equipment",
        "Safety certified team",
        "Flexible scheduling",
        "Monthly service contracts",
      ],
    },
  ]

  const benefits = [
    {
      icon: Eye,
      title: "Crystal Clear Views",
      description: "Enjoy unobstructed views and maximum natural light in your space",
    },
    {
      icon: Home,
      title: "Enhanced Curb Appeal",
      description: "Clean windows significantly improve your property's appearance and value",
    },
    {
      icon: Sparkles,
      title: "Professional Results",
      description: "Streak-free, spotless windows using professional techniques and equipment",
    },
    {
      icon: Shield,
      title: "Window Protection",
      description: "Regular cleaning prevents permanent damage and extends window lifespan",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-sky-600 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-sky-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500/20 text-blue-100 border-blue-400/30">
                Professional Window Washing
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Crystal Clear
                <span className="block text-sky-300">Window Washing</span>
              </h1>
              <p className="text-xl mb-8 text-sky-100 leading-relaxed">
                Transform your property with professionally washed windows. Enhance natural light, improve curb appeal,
                and enjoy pristine views with our expert window washing services for homes and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-600 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/book-service">Book Window Washing</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/professional-window-cleaning.png"
                alt="Professional Window Washing Service"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Professional Window Washing Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean windows do more than just look good. They enhance natural light, improve energy efficiency, and
              significantly boost your property's value and appeal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-sky-200 hover:border-sky-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Window Washing Service</h2>
            <p className="text-xl text-gray-600">Everything needed for perfectly clean windows</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Interior window cleaning",
              "Exterior window washing",
              "Screen cleaning and maintenance",
              "Window sill and frame cleaning",
              "Track cleaning and lubrication",
              "Streak-free professional finish",
              "Safety equipment for high windows",
              "Eco-friendly cleaning solutions",
              "Post-cleaning inspection",
              "Gutter cleaning (premium packages)",
              "Pressure washing frames",
              "Quality guarantee",
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
      <section className="py-20 px-4 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect window washing package for your property</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "border-sky-500 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{tier.title}</CardTitle>
                  <div className="text-4xl font-bold text-sky-600 my-4">{tier.price}</div>
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
                        ? "bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Window Washing Process</h2>
            <p className="text-xl text-gray-600">Meticulous attention to detail for perfect results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate window condition and cleaning requirements" },
              { step: "02", title: "Preparation", description: "Protect surrounding areas and set up equipment" },
              {
                step: "03",
                title: "Professional Washing",
                description: "Use specialized tools and eco-friendly solutions",
              },
              { step: "04", title: "Quality Check", description: "Final inspection to ensure streak-free results" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-r from-sky-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Crystal Clear Windows?</h2>
          <p className="text-xl mb-8 text-sky-100">
            Transform your property with professional window washing. Book your service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sky-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/book-service">Book Service Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
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
