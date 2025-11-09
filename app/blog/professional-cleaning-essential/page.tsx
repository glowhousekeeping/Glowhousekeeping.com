import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfessionalCleaningEssentialPage() {
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
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800">Health & Wellness</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why Professional Cleaning is Essential for Your Health and Well-being
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how professional cleaning services go beyond aesthetics to create healthier living and working
                environments for you and your family.
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
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
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
            src="/professional-cleaning-team.png"
            alt="Professional cleaning team creating a healthy environment"
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
                As the founder of Glow Housekeeping, I've witnessed firsthand how professional cleaning transforms not
                just spaces, but lives. When I started this company in 2024, my mission was clear: to create cleaning
                services where integrity, care, and professionalism come first—for both clients and staff.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Many people view professional cleaning as a luxury, but I'm here to tell you why it's actually an
                essential investment in your health, well-being, and quality of life.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">The Hidden Health Benefits</h2>

              <div className="bg-blue-50 rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-semibold text-blue-900">Allergen Reduction</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional cleaning significantly reduces allergens like dust mites, pet dander, and pollen that
                  accumulate in carpets, upholstery, and hard-to-reach areas. Our specialized equipment and techniques
                  remove these irritants more effectively than standard household cleaning.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-semibold text-green-900">Bacteria and Virus Elimination</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use hospital-grade disinfectants and proven sanitization methods to eliminate harmful bacteria and
                  viruses from high-touch surfaces. This is especially crucial in kitchens, bathrooms, and common areas
                  where germs spread most easily.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-semibold text-purple-900">Improved Air Quality</h3>
                <p className="text-gray-700 leading-relaxed">
                  Regular professional cleaning removes dust, debris, and pollutants that can compromise indoor air
                  quality. Clean air means better breathing, improved sleep, and reduced respiratory issues for you and
                  your family.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Mental Health and Well-being</h2>

              <p className="text-gray-700 leading-relaxed">
                The connection between a clean environment and mental health is profound. Here's what I've observed in
                my years of professional cleaning:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Reduced Stress</h4>
                      <p className="text-gray-600 text-sm">
                        A clean, organized space reduces cortisol levels and promotes relaxation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Better Focus</h4>
                      <p className="text-gray-600 text-sm">
                        Clutter-free environments improve concentration and productivity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Enhanced Mood</h4>
                      <p className="text-gray-600 text-sm">
                        Clean spaces trigger positive emotions and sense of accomplishment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Better Sleep</h4>
                      <p className="text-gray-600 text-sm">Clean bedrooms promote better sleep quality and duration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Time is Your Most Valuable Asset</h2>

              <p className="text-gray-700 leading-relaxed">
                One of the most overlooked benefits of professional cleaning is the gift of time. The average person
                spends 12-15 hours per week on household cleaning tasks. That's time you could spend with family,
                pursuing hobbies, advancing your career, or simply relaxing.
              </p>

              <p className="text-gray-700 leading-relaxed">
                When you hire Glow Housekeeping, you're not just paying for cleaning—you're investing in your most
                precious resource: time.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">The Professional Difference</h2>

              <p className="text-gray-700 leading-relaxed">
                What sets professional cleaning apart from DIY efforts? It's not just about having better equipment
                (though we do). It's about expertise, consistency, and attention to detail that comes from years of
                experience.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialized Knowledge</h4>
                  <p className="text-gray-600">
                    We know which products work best on different surfaces, how to tackle stubborn stains, and the most
                    efficient cleaning sequences.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Professional-Grade Equipment</h4>
                  <p className="text-gray-600">
                    Our commercial-grade vacuums, steam cleaners, and sanitization equipment achieve results impossible
                    with household tools.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Systematic Approach</h4>
                  <p className="text-gray-600">
                    We follow proven methodologies that ensure nothing is missed and maximum efficiency is achieved.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Making the Right Choice</h2>

              <p className="text-gray-700 leading-relaxed">
                When choosing a professional cleaning service, look for companies that prioritize transparency, use
                eco-friendly products, and treat their staff fairly. At Glow Housekeeping, these values aren't just
                marketing points—they're the foundation of everything we do.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Professional cleaning isn't about being lazy or showing off. It's about making a smart investment in
                your health, happiness, and quality of life. It's about creating a sanctuary where you can truly relax
                and recharge.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ready to Experience the Difference?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't let cleaning consume your precious time and energy. Let Glow Housekeeping transform your space and
                give you back the time you deserve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  <Link href="/book-service">Book Your Service</Link>
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
      <section className="py-16 px-4 bg-gradient-to-br from-rose-50 via-white to-amber-50">
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
                  <p className="text-blue-600 font-medium">Founder & CEO, Glow Housekeeping</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Originally from Latvia, Glorija moved to the Netherlands in 2022 and founded Glow Housekeeping in 2024
                  with a mission to create a cleaning service where integrity, care, and professionalism come first. Her
                  passion for transforming spaces and helping others shines through in every aspect of the business.
                </p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline">
                    <Link href="/about">Learn More About Glorija</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <Link href="/contact">Contact Us</Link>
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
