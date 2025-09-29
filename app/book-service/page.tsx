"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MessageCircle, CheckCircle } from "lucide-react"

export default function BookServicePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    businessAddress: "",
    desiredService: "",
    preferredDate: "",
    preferredTime: "",
    additionalComments: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `Hello, I would like to request a cleaning service quote:

- Name: ${formData.fullName}
- Phone: ${formData.phoneNumber}
- Email: ${formData.emailAddress}
- Address: ${formData.businessAddress}
- Service: ${formData.desiredService}
- Date: ${formData.preferredDate}
- Time: ${formData.preferredTime}
- Comments: ${formData.additionalComments || "None"}

Thank you!`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/31610756699?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.phoneNumber &&
      formData.emailAddress &&
      formData.businessAddress &&
      formData.desiredService &&
      formData.preferredDate &&
      formData.preferredTime
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Book Your Service</h1>
          <p className="text-xl text-gray-600 leading-relaxed">Fill out the form and we'll contact you via WhatsApp</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="rounded-3xl border-0 shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone Number and Email - Side by side on larger screens */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
                      Phone Number *
                    </label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="+31 6 12345678"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="emailAddress" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="emailAddress"
                      type="email"
                      required
                      value={formData.emailAddress}
                      onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                      className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Business Address */}
                <div className="space-y-2">
                  <label htmlFor="businessAddress" className="block text-sm font-semibold text-gray-700">
                    Business Address *
                  </label>
                  <Input
                    id="businessAddress"
                    type="text"
                    required
                    value={formData.businessAddress}
                    onChange={(e) => handleInputChange("businessAddress", e.target.value)}
                    className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your business address"
                  />
                </div>

                {/* Desired Service */}
                <div className="space-y-2">
                  <label htmlFor="desiredService" className="block text-sm font-semibold text-gray-700">
                    Desired Service *
                  </label>
                  <Select
                    value={formData.desiredService}
                    onValueChange={(value) => handleInputChange("desiredService", value)}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Cleaning">General Cleaning</SelectItem>
                      <SelectItem value="Solar Panel Cleaning">Solar Panel Cleaning</SelectItem>
                      <SelectItem value="Window Cleaning">Window Cleaning</SelectItem>
                      <SelectItem value="Drain Cleaning">Drain Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date and Time - Side by side */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Input
                        id="preferredDate"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Calendar className="absolute right-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Input
                        id="preferredTime"
                        type="time"
                        required
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                        className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Clock className="absolute right-3 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Additional Comments */}
                <div className="space-y-2">
                  <label htmlFor="additionalComments" className="block text-sm font-semibold text-gray-700">
                    Additional Comments
                  </label>
                  <Textarea
                    id="additionalComments"
                    value={formData.additionalComments}
                    onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                    className="min-h-[120px] rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your specific cleaning needs..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={!isFormValid()}
                    className="w-full h-14 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-xl text-lg font-semibold transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    By clicking, you will be redirected to WhatsApp to confirm your booking.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Response</h3>
              <p className="text-sm text-gray-600">Get a quick response via WhatsApp within minutes</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-sm text-gray-600">Simple form with all the details we need</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-gray-600">Choose your preferred date and time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
