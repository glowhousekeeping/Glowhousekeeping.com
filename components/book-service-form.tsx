"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Home, Building, CheckCircle } from "lucide-react"

export default function BookServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    propertyType: "",
    preferredDate: "",
    preferredTime: "",
    frequency: "",
    specialRequests: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Glow Housekeeping! We've received your booking request and will contact you within 24
            hours to confirm your appointment.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-blue-800 font-medium">For immediate assistance, contact us:</p>
            <p className="text-blue-600">📞 +31 6 10756699 | ✉️ glowhousekeeping.org@gmail.com</p>
          </div>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Book Your Cleaning Service
        </CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+31 6 12345678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
              <Input
                required
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Street address, City"
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
              <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general-cleaning">General Cleaning</SelectItem>
                  <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                  <SelectItem value="window-cleaning">Window Cleaning</SelectItem>
                  <SelectItem value="solar-panel-cleaning">Solar Panel Cleaning</SelectItem>
                  <SelectItem value="carpet-care">Carpet Care</SelectItem>
                  <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                  <SelectItem value="multiple-services">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type *</label>
              <Select onValueChange={(value) => handleInputChange("propertyType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      Apartment
                    </div>
                  </SelectItem>
                  <SelectItem value="house">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      House
                    </div>
                  </SelectItem>
                  <SelectItem value="office">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Office
                    </div>
                  </SelectItem>
                  <SelectItem value="commercial">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Commercial Space
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Scheduling */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <Input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
              <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Morning (8AM - 12PM)
                    </div>
                  </SelectItem>
                  <SelectItem value="afternoon">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Afternoon (12PM - 5PM)
                    </div>
                  </SelectItem>
                  <SelectItem value="evening">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Evening (5PM - 8PM)
                    </div>
                  </SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
              <Select onValueChange={(value) => handleInputChange("frequency", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one-time">One-time Service</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requests or Additional Information
            </label>
            <Textarea
              value={formData.specialRequests}
              onChange={(e) => handleInputChange("specialRequests", e.target.value)}
              placeholder="Please let us know about any specific requirements, areas of focus, pets, allergies, or other important details..."
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
              Submit Booking Request
            </Button>
            <p className="text-sm text-gray-500 text-center mt-3">
              We'll contact you within 24 hours to confirm your appointment and provide a detailed quote.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
