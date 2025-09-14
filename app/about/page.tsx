import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Star, CheckCircle, Award, Sparkles, MapPin, Calendar, Target } from "lucide-react"
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

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Glorija Beberina</h3>
              </div>

              {/* Introduction Card */}
              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <span className="font-semibold text-blue-600">Glorija Beberina</span> is the founder and CEO of{" "}
                    <span className="font-semibold text-blue-600">Glow Housekeeping</span>, a company built on trust,
                    transparency, and a passion for helping others live and work in clean, uplifting spaces.
                  </p>
                </CardContent>
              </Card>

              {/* Journey Timeline */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">From Latvia to the Netherlands</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Originally from Latvia, Glorija moved to the Netherlands in 2022, bringing with her a strong work
                      ethic and determination to build a meaningful life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Finding Her Purpose</h4>
                    <p className="text-gray-600 leading-relaxed">
                      After spending a year working in a warehouse—a job that left her unfulfilled—she took a step back
                      to ask herself a simple but powerful question:{" "}
                      <em>"What do I enjoy doing, and how can I use it to help others?"</em>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">The Answer Was Clear</h4>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Cleaning.</strong> It wasn't just a task to her; it was a meaningful service. The ability
                      to transform a space and bring comfort through cleanliness gave her{" "}
                      <span className="font-semibold text-purple-600">purpose and energy</span>.
                    </p>
                  </div>
                </div>
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

      {/* Professional Journey Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Professional Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovering her passion to building a company based on integrity and care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Experience Card */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Finding Joy in Service</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    She began her journey in professional cleaning with a company that supported elderly and chronically
                    ill clients. There, she found joy and connection in her work and was deeply appreciated by the
                    clients she served.
                  </p>
                </CardContent>
              </Card>

              {/* Motivation Card */}
              <Card className="shadow-xl border-0 border-l-4 border-l-orange-500">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Taking a Stand</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    However, witnessing unethical practices behind the scenes—where management treated staff unfairly
                    and misled vulnerable clients—motivated Glorija to take a stand and create something better.
                  </p>
                </CardContent>
              </Card>

              {/* Launch Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Launching Glow Housekeeping</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    In 2024, she launched <span className="font-semibold text-blue-600">Glow Housekeeping</span> with a
                    mission:
                  </p>
                  <blockquote className="text-lg font-medium text-blue-700 italic border-l-4 border-blue-300 pl-4">
                    "To create a cleaning service where integrity, care, and professionalism come first—for both clients
                    and staff."
                  </blockquote>
                </CardContent>
              </Card>
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

      {/* Current Success Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Today's Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a company grounded in compassion, honesty, and doing things the right way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/professional-cleaner-home.png"
                alt="Professional cleaning service in action"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <div className="space-y-8">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Serving Diverse Clients</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Today, <span className="font-semibold text-blue-600">Glow Housekeeping</span> proudly serves a
                    diverse range of clients—from families and busy professionals to offices and commercial
                    spaces—bringing not just cleanliness, but peace of mind.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">2024</div>
                      <div className="text-sm text-gray-600">Company Founded</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
                    <p className="text-gray-700 leading-relaxed">
                      With Glorija's leadership, the company is grounded in{" "}
                      <span className="font-semibold text-blue-600">compassion</span>,
                      <span className="font-semibold text-green-600"> honesty</span>, and a deep belief in doing things
                      the right way.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Philosophy Quote */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="p-8 text-center">
                  <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                    "When I clean, you see the difference—and that's what I love."
                  </blockquote>
                  <p className="text-lg font-semibold text-purple-600">— Glorija Beberina</p>
                </CardContent>
              </Card>
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
