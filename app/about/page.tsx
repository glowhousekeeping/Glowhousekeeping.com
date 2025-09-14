import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Star, CheckCircle, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Our Story</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  About <span className="text-blue-600">Glow Housekeeping</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded with a passion for creating clean, healthy, and beautiful spaces that enhance the lives of our
                  clients across the Netherlands.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">500+ Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/cleaning-company-founder-portrait.png"
                alt="Glorija Beberina, Founder of Glow Housekeeping"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/glorija-founder-actual.jpeg"
                alt="Glorija Beberina - Founder and CEO of Glow Housekeeping"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600">Glorija Beberina</p>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Glorija Beberina</h3>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Glorija Beberina is the heart and soul behind Glow Housekeeping. With a background in hospitality and
                  a natural eye for detail, she founded the company with a simple yet powerful vision: to create spaces
                  that truly glow with cleanliness and care.
                </p>
                <p>
                  "I believe that a clean space is more than just aesthetics—it's about creating an environment where
                  people can thrive, feel comfortable, and focus on what matters most to them," says Glorija.
                </p>
                <p>
                  Her commitment to excellence and personal approach to customer service has made Glow Housekeeping the
                  trusted choice for hundreds of families and businesses across the Netherlands.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the exceptional service we provide to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Genuine Care",
                description:
                  "We treat every home and office as if it were our own, bringing genuine care and attention to every detail.",
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Trust & Reliability",
                description:
                  "Our clients trust us with their most personal spaces. We honor that trust with consistent, reliable service.",
              },
              {
                icon: <Award className="w-8 h-8 text-green-500" />,
                title: "Excellence",
                description:
                  "We're not satisfied with 'good enough.' We strive for excellence in every cleaning task, big or small.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-500" />,
                title: "Innovation",
                description:
                  "We continuously improve our methods and adopt eco-friendly practices for better results and sustainability.",
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "Personal Service",
                description:
                  "Every client is unique. We tailor our services to meet your specific needs and preferences.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
                title: "Transparency",
                description:
                  "Clear communication, honest pricing, and no hidden fees. You always know what to expect from us.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Professional Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who bring the Glow Housekeeping standard to your space.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Trained, Trusted, Professional</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our team consists of carefully selected, thoroughly trained cleaning professionals who share our
                  commitment to excellence. Each team member undergoes comprehensive background checks and receives
                  ongoing training in the latest cleaning techniques and safety protocols.
                </p>
                <p>
                  We believe that great cleaning starts with great people. That's why we invest in our team, providing
                  them with the tools, training, and support they need to deliver exceptional results every time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Background Checked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5.0</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/diverse-cleaning-team.png"
                alt="Professional cleaning team at Glow Housekeeping"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why We Started Glow Housekeeping</h2>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                "I started Glow Housekeeping because I saw how much a clean, organized space could transform someone's
                day, their mood, and even their life. Having worked in hospitality, I understood the power of a pristine
                environment."
              </p>
              <p>
                "But more than that, I wanted to create a service that people could truly trust. Too often, I heard
                stories of unreliable cleaners, damaged items, or services that promised more than they delivered."
              </p>
              <p className="text-xl font-semibold text-gray-900">
                "At Glow Housekeeping, we're not just cleaning your space—we're caring for the place where you live,
                work, and create memories."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-lg font-semibold text-blue-600">— Glorija Beberina, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Glow Difference?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Join our family of satisfied clients and discover why personal care and professional excellence make all the
            difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
              <Link href="/book-service">Book Your Service</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Fully Insured</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
