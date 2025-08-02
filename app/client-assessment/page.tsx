"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { User, Home, Calendar, Key, CheckCircle, Shield, MessageCircle, Sparkles } from "lucide-react"

export default function ClientAssessmentPage() {
  const [formData, setFormData] = useState({
    clientName: "",
    propertyType: "",
    propertySize: "",
    numberOfRooms: "",
    numberOfBathrooms: "",
    cleaningMaterials: [] as string[],
    cleaningFrequency: "",
    preferredTime: "",
    budgetExpectation: "",
    specialRequests: "",
    accessInfo: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCheckboxChange = (material: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      cleaningMaterials: checked
        ? [...prev.cleaningMaterials, material]
        : prev.cleaningMaterials.filter((item) => item !== material),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `Hello! I've completed the Client Assessment Form:

🔹 CLIENT INFORMATION
• Name: ${formData.clientName}
• Property Type: ${formData.propertyType}

🏠 PROPERTY INFORMATION
• Property Size: ${formData.propertySize}
• Number of Rooms: ${formData.numberOfRooms}
• Number of Bathrooms: ${formData.numberOfBathrooms}
• Available Cleaning Materials: ${formData.cleaningMaterials.length > 0 ? formData.cleaningMaterials.join(", ") : "None specified"}

🧹 SERVICE DETAILS
• Cleaning Frequency: ${formData.cleaningFrequency}
• Preferred Time: ${formData.preferredTime}
• Budget Expectation: ${formData.budgetExpectation}
• Special Requests: ${formData.specialRequests || "None"}

🚪 ACCESS INFORMATION
• Access Info: ${formData.accessInfo || "Will provide later"}

Please review and let me know the next steps for my personalized cleaning plan!`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/31610756699?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    // Show confirmation
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl mx-auto rounded-3xl border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Submitted!</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Thank you! We'll review your details and contact you shortly to finalize your personalized cleaning plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                <a href="/">Return Home</a>
              </Button>
              <Button variant="outline" className="rounded-full px-8 bg-transparent">
                <a href="/services">View Services</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">Client Assessment</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Client Assessment Form</h1>
          <p className="text-xl text-gray-600 leading-relaxed">Collect all necessary information for a new client</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* No Worries Guarantee */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Worries Guarantee</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">No deposit or charges upfront</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">No contracts required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">No long signup forms</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">No worries – we handle everything!</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client Information */}
            <Card className="rounded-3xl border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  Client Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="clientName" className="block text-sm font-semibold text-gray-700">
                      Client Name *
                    </label>
                    <Input
                      id="clientName"
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => handleInputChange("clientName", e.target.value)}
                      className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700">
                      Property Type *
                    </label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => handleInputChange("propertyType", value)}
                    >
                      <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Office">Office</SelectItem>
                        <SelectItem value="Commercial Space">Commercial Space</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Information */}
            <Card className="rounded-3xl border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  Property Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="propertySize" className="block text-sm font-semibold text-gray-700">
                      Property Size *
                    </label>
                    <Select
                      value={formData.propertySize}
                      onValueChange={(value) => handleInputChange("propertySize", value)}
                    >
                      <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Small">Small</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Large">Large</SelectItem>
                        <SelectItem value="XL">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="numberOfRooms" className="block text-sm font-semibold text-gray-700">
                      Number of Rooms *
                    </label>
                    <Input
                      id="numberOfRooms"
                      type="number"
                      required
                      min="1"
                      value={formData.numberOfRooms}
                      onChange={(e) => handleInputChange("numberOfRooms", e.target.value)}
                      className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., 3"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="numberOfBathrooms" className="block text-sm font-semibold text-gray-700">
                      Number of Bathrooms *
                    </label>
                    <Input
                      id="numberOfBathrooms"
                      type="number"
                      required
                      min="1"
                      value={formData.numberOfBathrooms}
                      onChange={(e) => handleInputChange("numberOfBathrooms", e.target.value)}
                      className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., 2"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">Available Cleaning Materials</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {["Vacuum Cleaner", "Mop & Bucket", "Cleaning Products", "Cleaning Cloths", "Bucket", "Gloves"].map(
                      (material) => (
                        <div key={material} className="flex items-center space-x-3">
                          <Checkbox
                            id={material}
                            checked={formData.cleaningMaterials.includes(material)}
                            onCheckedChange={(checked) => handleCheckboxChange(material, checked as boolean)}
                            className="rounded-md"
                          />
                          <label htmlFor={material} className="text-sm text-gray-700 cursor-pointer">
                            {material}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Details */}
            <Card className="rounded-3xl border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  Service Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="cleaningFrequency" className="block text-sm font-semibold text-gray-700">
                      Cleaning Frequency *
                    </label>
                    <Select
                      value={formData.cleaningFrequency}
                      onValueChange={(value) => handleInputChange("cleaningFrequency", value)}
                    >
                      <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="One-Time">One-Time</SelectItem>
                        <SelectItem value="Weekly">Weekly</SelectItem>
                        <SelectItem value="Bi-Weekly">Bi-Weekly</SelectItem>
                        <SelectItem value="Monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700">
                      Preferred Time *
                    </label>
                    <Input
                      id="preferredTime"
                      type="text"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                      className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., Morning, Afternoon, Evening"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budgetExpectation" className="block text-sm font-semibold text-gray-700">
                    Budget Expectation
                  </label>
                  <Input
                    id="budgetExpectation"
                    type="text"
                    value={formData.budgetExpectation}
                    onChange={(e) => handleInputChange("budgetExpectation", e.target.value)}
                    className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="€ per hour or total budget"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700">
                    Special Requests
                  </label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="min-h-[120px] rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    placeholder="Any special cleaning requirements or areas of focus..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Access Information */}
            <Card className="rounded-3xl border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Key className="w-6 h-6 text-yellow-600" />
                  </div>
                  Access Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="accessInfo" className="block text-sm font-semibold text-gray-700">
                    Access Info
                  </label>
                  <Textarea
                    id="accessInfo"
                    value={formData.accessInfo}
                    onChange={(e) => handleInputChange("accessInfo", e.target.value)}
                    className="min-h-[120px] rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    placeholder="Key location, access codes, parking info, etc."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Submit Assessment
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Your assessment will be sent via WhatsApp for immediate review
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
