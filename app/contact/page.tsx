import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Glow Housekeeping - Professional Cleaning Services",
  description:
    "Get in touch with Glow Housekeeping for professional cleaning services across the Netherlands. Call, email, or WhatsApp us for a free quote.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">✨ Get In Touch</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="gradient-text">Glow Housekeeping</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience professional cleaning services? We're here to help with all your cleaning needs across
            the Netherlands.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  Call Us
                </CardTitle>
                <CardDescription>Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">+31 6 10756699</p>
                    <p className="text-gray-600">Available 7 days a week</p>
                  </div>
                  <Button asChild className="w-full">
                    <a href="tel:+31610756699">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  WhatsApp
                </CardTitle>
                <CardDescription>Quick and convenient messaging</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Instant Response</p>
                    <p className="text-gray-600">Get quick answers to your questions</p>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/31610756699" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-600" />
                  Email
                </CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">glowhousekeeping.org@gmail.com</p>
                    <p className="text-gray-600">We respond within 24 hours</p>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="mailto:glowhousekeeping.org@gmail.com">Send Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  Book Online
                </CardTitle>
                <CardDescription>Schedule your service instantly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Easy Online Booking</p>
                    <p className="text-gray-600">Fill out our form and we'll confirm within 24 hours</p>
                  </div>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/book-service">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Service
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  Service Areas
                </CardTitle>
                <CardDescription>We serve clients across the Netherlands</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Coverage Area</h4>
                    <p className="text-gray-600 mb-4">
                      Our professional cleaning services are available throughout the Netherlands. We're proud to serve
                      both residential and commercial clients with the same level of care and attention to detail.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Free Quotes Available</strong>
                      <br />
                      Contact us to confirm service availability in your specific area and receive a personalized quote.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  Business Hours
                </CardTitle>
                <CardDescription>When you can reach us</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="border-t pt-3 mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>Emergency Services:</strong> Available 24/7 for urgent cleaning needs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Glow Housekeeping?</CardTitle>
                <CardDescription>What sets us apart</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Founded by Glorija Beberina with passion for excellence
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Fully insured and bonded professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Flexible scheduling to fit your needs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Eco-friendly cleaning products available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">100% satisfaction guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-4">
                  Join hundreds of satisfied customers who trust Glow Housekeeping with their cleaning needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/book-service">Book Service</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <a href="https://wa.me/31610756699" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
