import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, CheckCircle, AlertTriangle, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolarPanelMaintenanceTipsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <section className="py-6 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" className="mb-4">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-yellow-100 text-yellow-800">Solar Care</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Solar Panel Maintenance: Tips for Maximum Efficiency
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Learn how proper solar panel cleaning and maintenance can significantly improve your energy output and
                extend the life of your investment.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Glorija Beberina</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>4 min read</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/solar-panel-cleaning.png"
            alt="Professional solar panel cleaning for maximum efficiency"
            width={800}
            height={500}
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As someone who has cleaned countless solar panels across the Netherlands, I've seen firsthand how proper
                maintenance can dramatically impact energy production. At Glow Housekeeping, we've helped homeowners
                increase their solar efficiency by up to 25% through professional cleaning and maintenance.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Solar panels are a significant investment, and like any investment, they require proper care to deliver
                maximum returns. Here's everything you need to know about keeping your solar panels performing at their
                peak.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-yellow-900">Did You Know?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dirty solar panels can lose 15-25% of their efficiency. In the Netherlands, where sunlight is precious,
                every percentage point matters for your energy production and savings.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Solar Panel Cleaning Matters</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Dust and Debris Accumulation</h4>
                      <p className="text-gray-600 text-sm">
                        Even a thin layer of dust can significantly reduce light absorption and energy production.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Bird Droppings</h4>
                      <p className="text-gray-600 text-sm">
                        Common in the Netherlands, bird droppings can create hot spots and permanent damage if not
                        removed promptly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pollen and Tree Sap</h4>
                      <p className="text-gray-600 text-sm">
                        Seasonal pollen and sticky tree sap require professional cleaning techniques to remove
                        completely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Weather Residue</h4>
                      <p className="text-gray-600 text-sm">
                        Rain doesn't clean panels—it often leaves mineral deposits and dirt streaks that reduce
                        efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Professional vs. DIY Cleaning</h2>

              <div className="bg-red-50 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-900">Safety First</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Solar panel cleaning involves working at height and with electrical equipment. Professional cleaners
                  have the proper safety equipment, insurance, and training to perform this work safely.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">DIY Cleaning Risks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Risk of falls and injury</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Potential panel damage from improper techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Voided warranties from incorrect cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Incomplete cleaning leaving residue</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Professional Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Specialized equipment and techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Safety equipment and insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Thorough inspection during cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Warranty-safe cleaning methods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Professional Cleaning Process</h2>

              <p className="text-gray-700 leading-relaxed">
                At Glow Housekeeping, we've developed a systematic approach to solar panel cleaning that maximizes
                efficiency while protecting your investment:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Initial Inspection</h4>
                    <p className="text-gray-600">
                      We assess the condition of your panels, checking for damage, loose connections, and areas
                      requiring special attention.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Safety Setup</h4>
                    <p className="text-gray-600">
                      We establish proper safety protocols, including harnesses, non-slip footwear, and electrical
                      safety measures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Gentle Cleaning</h4>
                    <p className="text-gray-600">
                      Using deionized water and soft brushes, we remove all dirt, debris, and residue without scratching
                      the panel surface.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Spot-Free Rinse</h4>
                    <p className="text-gray-600">
                      We use purified water for the final rinse, ensuring no mineral deposits are left behind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Inspection</h4>
                    <p className="text-gray-600">
                      We conduct a thorough inspection to ensure optimal cleanliness and note any maintenance issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Maintenance Schedule Recommendations</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-green-900">Residential Panels</h3>
                  <p className="text-sm text-gray-600">2-4 times per year</p>
                  <p className="text-gray-700 text-sm">
                    Ideal for most Dutch homes with standard environmental exposure.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-yellow-900">High-Dust Areas</h3>
                  <p className="text-sm text-gray-600">4-6 times per year</p>
                  <p className="text-gray-700 text-sm">
                    Near construction, farming, or industrial areas with higher dust levels.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-orange-900">Bird-Heavy Zones</h3>
                  <p className="text-sm text-gray-600">Monthly checks</p>
                  <p className="text-gray-700 text-sm">
                    Areas with significant bird activity require more frequent attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">The Bottom Line</h2>

              <p className="text-gray-700 leading-relaxed">
                Regular professional solar panel cleaning is not an expense—it's an investment that pays for itself
                through increased energy production. With proper maintenance, your solar panels will continue to provide
                clean, efficient energy for decades.
              </p>

              <p className="text-gray-700 leading-relaxed">
                At Glow Housekeeping, we understand the unique challenges of solar panel maintenance in the Dutch
                climate. Our specialized service ensures your panels operate at peak efficiency while protecting your
                valuable investment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ready to Maximize Your Solar Efficiency?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't let dirty panels reduce your energy savings. Schedule professional solar panel cleaning with Glow
                Housekeeping today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 rounded-full px-8">
                  <Link href="/services/solar-panel-cleaning">Book Solar Cleaning</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-31%20at%207.44.13%20PM-ZUGdwjv0jHNnpAKgleaDKxtOAuSBYt.jpeg"
                alt="Glorija Beberina, Founder of Glow Housekeeping"
                width={120}
                height={120}
                className="rounded-2xl"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Glorija Beberina</h3>
                  <p className="text-yellow-600 font-medium">Founder & CEO, Glow Housekeeping</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  With extensive experience in professional cleaning services across the Netherlands, Glorija has helped
                  countless homeowners maximize their solar panel efficiency through proper maintenance and care. Her
                  expertise in solar panel cleaning has saved clients thousands in energy costs.
                </p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline">
                    <Link href="/about">Learn More About Glorija</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <Link href="/services/solar-panel-cleaning">Solar Panel Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
