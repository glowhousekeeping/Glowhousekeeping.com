import type { Metadata } from "next"
import BookServiceForm from "@/components/book-service-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Book Cleaning Service - Glow Housekeeping",
  description:
    "Book your professional cleaning service with Glow Housekeeping. Easy online booking, flexible scheduling, and trusted professionals across the Netherlands.",
}

export default function BookServicePage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">✨ Easy Booking Process</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book Your <span className="gradient-text">Professional Cleaning</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience the Glow difference? Fill out our simple booking form and we'll contact you within 24
            hours to confirm your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookServiceForm />
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Why Choose Glow?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Fully Insured</h4>
                    <p className="text-sm text-gray-600">Complete peace of mind with comprehensive coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Flexible Scheduling</h4>
                    <p className="text-sm text-gray-600">We work around your busy schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Trusted Professionals</h4>
                    <p className="text-sm text-gray-600">Experienced and reliable cleaning specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">5-Star Service</h4>
                    <p className="text-sm text-gray-600">Consistently high-quality results</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Get in touch with our friendly team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Phone:</span>
                  <span className="text-blue-600">+31 6 10756699</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Email:</span>
                  <span className="text-blue-600">glowhousekeeping.org@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Response Time:</span>
                  <span className="text-green-600">Within 24 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>We proudly serve clients across the Netherlands</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Our professional cleaning services are available throughout the Netherlands. Contact us to confirm
                  service availability in your specific area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
