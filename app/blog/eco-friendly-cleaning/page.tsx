import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Leaf, Droplet, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EcoFriendlyCleaningPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Eco-Friendly</Badge>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Eco-Friendly Cleaning: Better for You and The Environment
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Glorija Beberina</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 28, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/professional-cleaner-home.png"
              alt="Eco-friendly cleaning products and methods"
              fill
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Glow Housekeeping, we believe that a clean home shouldn't come at the expense of our planet. That's why
              we've committed to using eco-friendly cleaning products and methods that are safe for your family, your
              pets, and the environment.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Eco-Friendly Cleaning?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Healthier for Your Family</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Traditional cleaning products often contain harsh chemicals that can irritate skin, eyes, and
                    respiratory systems. Eco-friendly alternatives are gentler and safer for everyone in your home.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Leaf className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Better for The Environment</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Eco-friendly products break down naturally and don't pollute our waterways or harm wildlife. By
                    choosing green cleaning, you're helping protect our planet for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Eco-Friendly Approach</h2>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Droplet className="w-8 h-8 text-green-600" />
                Natural Cleaning Solutions
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    <strong>Plant-based ingredients:</strong> We use cleaning products made from natural, renewable
                    resources that are biodegradable and non-toxic.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    <strong>No harsh chemicals:</strong> Our products are free from ammonia, chlorine bleach, and other
                    harmful substances.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    <strong>Microfiber technology:</strong> We use high-quality microfiber cloths that clean effectively
                    with less water and chemicals.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Simple Eco-Friendly Tips for Your Home</h2>

            <div className="space-y-6 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Reduce, Reuse, Recycle</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Use reusable cleaning cloths instead of paper towels. Invest in quality microfiber cloths that can
                    be washed and reused hundreds of times.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Make Your Own Cleaners</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Simple ingredients like vinegar, baking soda, and lemon can create effective cleaning solutions for
                    many household tasks. They're safe, affordable, and environmentally friendly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Choose Concentrated Products</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Concentrated cleaning products reduce packaging waste and transportation emissions. A little goes a
                    long way, making them cost-effective too.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Glow Housekeeping Commitment</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We're committed to continuously improving our eco-friendly practices. From the products we use to the
                methods we employ, every decision is made with both your health and the environment in mind.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                When you choose Glow Housekeeping, you're not just getting a clean home—you're supporting a business
                that cares about our planet's future.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ready to Go Green?</h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Making the switch to eco-friendly cleaning is easier than you think. Whether you're doing it yourself or
              hiring professionals like us, every small step makes a difference.
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experience Eco-Friendly Cleaning with Glow Housekeeping
              </h3>
              <p className="text-gray-600 mb-6">
                Let us show you how effective and safe eco-friendly cleaning can be. Book your service today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full px-8">
                  <Link href="/book-service">Book Your Service</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4">Health & Wellness</Badge>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog/professional-cleaning-essential" className="hover:text-blue-600">
                    Why Professional Cleaning is Essential
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover how professional cleaning services go beyond aesthetics...
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4">Solar Care</Badge>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog/solar-panel-maintenance-tips" className="hover:text-blue-600">
                    Solar Panel Maintenance Tips
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how proper solar panel cleaning can improve energy output...
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4">Cleaning Tips</Badge>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog" className="hover:text-blue-600">
                    More Cleaning Tips
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">Explore our full collection of cleaning guides and tips...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
