import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Award, Clock, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function JoinOurTeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Career Opportunities</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Join the <span className="text-blue-600">Glow</span> Family
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Be part of a team that takes pride in transforming spaces and making a real difference in people's
                  lives. We're looking for dedicated individuals who share our passion for excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfCAYy3SpoE5apdVfkjBaE6jjghogN1Lfc0KfFiXLwFt3F8eg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="https://wa.me/31610756699">WhatsApp Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/diverse-cleaning-team.png"
                alt="Happy cleaning team"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Glow Housekeeping as Your Employer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that happy employees deliver exceptional service. That's why we've created a supportive,
              rewarding work environment where you can thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Work around your life with flexible hours and scheduling options that fit your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Pay</h3>
                <p className="text-gray-600">
                  Earn competitive wages with opportunities for bonuses and performance incentives.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Support</h3>
                <p className="text-gray-600">
                  Join a supportive team that values collaboration, growth, and mutual respect.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Meaningful Work</h3>
                <p className="text-gray-600">
                  Make a real difference in people's lives by creating clean, healthy environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="rounded-2xl border-0 shadow-lg max-w-lg w-full">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Cleaning Specialist</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-800">Full-time</Badge>
                      <Badge className="bg-green-100 text-green-800">Part-time</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll do:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Perform general cleaning tasks in offices and homes</li>
                      <li>• Maintain high standards of cleanliness and hygiene</li>
                      <li>• Use professional cleaning equipment and products</li>
                      <li>• Provide excellent customer service</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What we're looking for:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Attention to detail and pride in your work</li>
                      <li>• Reliable and punctual</li>
                      <li>• Physical ability to perform cleaning tasks</li>
                      <li>• Positive attitude and team player</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfCAYy3SpoE5apdVfkjBaE6jjghogN1Lfc0KfFiXLwFt3F8eg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply for This Position
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-xl text-gray-600">Ready to join our team? Here's how to get started.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fill Out Application</h3>
              <p className="text-gray-600">Complete our online application form with your details and experience.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Interview</h3>
              <p className="text-gray-600">
                We'll contact you for a brief phone or video interview to get to know you better.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Welcome Aboard</h3>
              <p className="text-gray-600">
                If you're a good fit, we'll welcome you to the team and provide full training.
              </p>
            </div>
          </div>

          {/* Google Form Embed */}
          <Card className="rounded-2xl border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Fill out our application form below to get started. We'll review your application and get back to you
                  within 48 hours.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfCAYy3SpoE5apdVfkjBaE6jjghogN1Lfc0KfFiXLwFt3F8eg/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">Having trouble with the form? You can also apply directly:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" className="rounded-full bg-transparent">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:gbeberina@gmail.com">Email Application</a>
                  </Button>
                  <Button variant="outline" className="rounded-full bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    <Link href="https://wa.me/31610756699">WhatsApp Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-xl text-gray-600">
              Hear from current team members about their experience working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Working with Glow Housekeeping has been amazing. The flexible schedule allows me to balance work with
                  my studies, and the team is incredibly supportive. I feel valued and appreciated here."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-gray-500">Cleaning Specialist, 2 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "I love the variety in this job - every day is different, and I get to work in different locations.
                  The training was thorough, and management really cares about our safety and well-being."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-600">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mark J.</p>
                    <p className="text-sm text-gray-500">Cleaning Specialist, 1 year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
