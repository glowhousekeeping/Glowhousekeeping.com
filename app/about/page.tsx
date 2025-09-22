import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Users, Award, CheckCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Glorija Beberina - Founder of Glow Housekeeping",
  description:
    "Meet Glorija Beberina, the passionate founder of Glow Housekeeping. Learn about our story, values, and commitment to exceptional cleaning services across the Netherlands.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">✨ Meet Our Founder</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  The Heart Behind <span className="gradient-text">Glow Housekeeping</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded by Glorija Beberina, Glow Housekeeping was born from a simple belief: every space deserves to
                  be treated with the same care and attention you'd give your own home.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="btn-hover-effect">
                  <Link href="/book-service">Work With Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-hover-effect bg-transparent">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/glorija-founder-actual.jpeg"
                  alt="Glorija Beberina - Founder of Glow Housekeeping"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Glorija Beberina</h3>
                    <p className="text-gray-600 mb-3">Founder & Lead Cleaning Specialist</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">5.0 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to becoming the Netherlands' trusted cleaning service
              </p>
            </div>

            <div className="space-y-12">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Glorija started Glow Housekeeping with a simple mission: to provide cleaning services that go
                        beyond the surface. Having experienced firsthand the difference that genuine care makes, she
                        founded the company on principles of integrity, excellence, and personal touch.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        "I treat every client's space as if it were my own home. This isn't just a business
                        philosophy—it's a personal commitment to excellence that drives everything we do."
                      </p>
                    </div>
                    <div className="relative">
                      <Image
                        src="/cleaning-company-founder-team.png"
                        alt="Glow Housekeeping team"
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Growth</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        What started as a one-person operation has grown into a trusted team of professional cleaners
                        serving clients across the Netherlands. Our growth has been driven by word-of-mouth
                        recommendations and the genuine relationships we build with our clients.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Today, we're proud to serve hundreds of satisfied customers, from busy families to large
                        commercial spaces, always maintaining the personal touch that sets us apart.
                      </p>
                    </div>
                    <div className="md:order-1 relative">
                      <Image
                        src="/diverse-cleaning-team.png"
                        alt="Professional cleaning team"
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center card-hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Genuine Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We treat every space with the same love and attention we'd give our own homes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Honest communication, fair pricing, and reliable service you can always count on.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We never settle for "good enough." Every job is an opportunity to exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're not just service providers—we're part of the communities we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional cleaning specialists are the heart of Glow Housekeeping
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center card-hover-lift">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/glorija-founder-portrait.png"
                    alt="Glorija Beberina"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Glorija Beberina</h3>
                <p className="text-blue-600 font-medium mb-3">Founder & Lead Specialist</p>
                <p className="text-gray-600 text-sm">
                  Passionate about creating clean, healthy environments with a personal touch that makes all the
                  difference.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover-lift">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/professional-cleaning-team.png"
                    alt="Professional cleaning specialist"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Specialists</h3>
                <p className="text-green-600 font-medium mb-3">Certified Professionals</p>
                <p className="text-gray-600 text-sm">
                  Trained, insured, and dedicated professionals who share our commitment to excellence and care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover-lift">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Team</h3>
                <p className="text-purple-600 font-medium mb-3">We're Growing!</p>
                <p className="text-gray-600 text-sm mb-4">
                  Looking for passionate individuals who share our values and commitment to excellence.
                </p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/join-our-team">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience the Glow Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our family of satisfied customers and discover what it means to have a cleaning service that truly
            cares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="btn-hover-effect">
              <Link href="/book-service">Book Your Service</Link>
            </Button>
            <Button asChild size="lg" className="btn-hover-effect bg-white text-blue-600 hover:bg-gray-100">
              <Link href="https://wa.me/31610756699" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
