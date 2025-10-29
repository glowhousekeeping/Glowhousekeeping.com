import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SpringCleaningChecklistPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Cleaning Tips</Badge>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            The Ultimate Spring Cleaning Checklist for Dutch Homes
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Glorija Beberina</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 5, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
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
              src="/modern-dutch-office-cleaning.png"
              alt="Spring cleaning checklist for Dutch homes"
              fill
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Spring is the perfect time to refresh your home after the long Dutch winter. This comprehensive checklist
              will help you tackle every room systematically, ensuring nothing is overlooked. Whether you're in a cozy
              Amsterdam apartment or a spacious house in Limburg, these tips will help you achieve a spotless home.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kitchen Deep Clean</h2>

            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Clean Inside Appliances</h4>
                      <p className="text-gray-600">
                        Deep clean your oven, refrigerator, and dishwasher. Remove all shelves and drawers for thorough
                        cleaning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Degrease Cabinets</h4>
                      <p className="text-gray-600">
                        Wipe down all cabinet exteriors and interiors, paying special attention to handles and areas
                        around the stove.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Organize Pantry</h4>
                      <p className="text-gray-600">
                        Check expiration dates, reorganize items, and wipe down all shelves. Consider using clear
                        containers for better organization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Clean Exhaust Fan</h4>
                      <p className="text-gray-600">
                        Remove and clean the filter, and wipe down the fan housing to improve air quality and
                        efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Bathroom Refresh</h2>

            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deep Clean Tiles and Grout</h4>
                      <p className="text-gray-600">
                        Use a specialized grout cleaner to remove mildew and stains. Consider resealing grout if
                        necessary.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Descale Fixtures</h4>
                      <p className="text-gray-600">
                        Remove limescale from faucets, showerheads, and drains using vinegar or a commercial descaler.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Organize Cabinets</h4>
                      <p className="text-gray-600">
                        Dispose of expired products, organize remaining items, and wipe down all surfaces.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Wash Shower Curtain and Bath Mats</h4>
                      <p className="text-gray-600">
                        Machine wash or replace shower curtains and bath mats to eliminate mildew and bacteria.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Living Areas</h2>

            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deep Clean Carpets and Upholstery</h4>
                      <p className="text-gray-600">
                        Vacuum thoroughly and consider professional steam cleaning for carpets and furniture.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Wash Windows Inside and Out</h4>
                      <p className="text-gray-600">
                        Clean windows, frames, and sills to maximize natural light—especially important in The
                        Netherlands!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dust High and Low</h4>
                      <p className="text-gray-600">
                        Don't forget ceiling fans, light fixtures, baseboards, and behind furniture.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Organize and Declutter</h4>
                      <p className="text-gray-600">
                        Sort through items, donate what you don't need, and organize what remains.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Home className="w-8 h-8 text-orange-600" />
                Dutch Home Specific Tips
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>
                    <strong>Combat Humidity:</strong> Use dehumidifiers in damp areas to prevent mold, especially common
                    in Dutch homes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>
                    <strong>Clean Radiators:</strong> Dust and vacuum radiators before the heating season ends to
                    improve efficiency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>
                    <strong>Bike Storage:</strong> Clean and organize your bike storage area—a must for every Dutch
                    household!
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Need Professional Help?</h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Spring cleaning can be overwhelming, especially if you're juggling work and family responsibilities. At
              Glow Housekeeping, we offer comprehensive spring cleaning services that cover everything on this checklist
              and more.
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let Us Handle Your Spring Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Our professional team will transform your home from top to bottom, so you can enjoy spring without the
                stress.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  <Link href="/book-service">Book Spring Cleaning</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Cleaning Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4">Eco-Friendly</Badge>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog/eco-friendly-cleaning" className="hover:text-blue-600">
                    Eco-Friendly Cleaning Guide
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore the benefits of eco-friendly cleaning products and methods...
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4">Health & Wellness</Badge>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog/professional-cleaning-essential" className="hover:text-blue-600">
                    Why Professional Cleaning Matters
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover how professional cleaning creates healthier environments...
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4">Window Care</Badge>
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/blog" className="hover:text-blue-600">
                    Window Cleaning Secrets
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional techniques for streak-free, crystal-clear windows...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
