"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from Glow Housekeeping website contact form
    `.trim()

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/31610756699?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to experience the Glow difference? We're here to answer your questions and provide you with a
            personalized cleaning solution.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We're available to discuss your cleaning needs and provide personalized quotes. Reach out through any
                  of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="rounded-2xl border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a
                          href="mailto:glowhousekeeping.org@gmail.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          glowhousekeeping.org@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                        <a
                          href="https://wa.me/31610756699"
                          className="text-green-600 hover:text-green-700 transition-colors"
                        >
                          +31 6 10756699
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Service Area</h3>
                        <p className="text-gray-600">Netherlands</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-yellow-100 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Response Time</h3>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prefer Instant Communication?</h3>
                <p className="text-gray-600 mb-4">
                  For immediate responses and quick quotes, WhatsApp is your best option. We're usually online during
                  business hours and respond quickly.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 rounded-full">
                  <Link href="https://wa.me/31610756699">Chat on WhatsApp</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="+31 6 12345678"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Please describe your cleaning needs, preferred schedule, and any specific requirements..."
                      />
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600">
                        <strong>For faster service:</strong> Include your location, type of property (office/home),
                        approximate size, and preferred cleaning frequency in your message.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">
                      We respect your privacy and will never share your information with third parties. You can expect a
                      response within 24 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions about our services.</p>
          </div>

          <div className="space-y-6">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can you provide a quote?</h3>
                <p className="text-gray-600">
                  We typically provide quotes within 24 hours via email, or immediately via WhatsApp for standard
                  services. For complex projects, we may schedule a brief consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you provide cleaning supplies and equipment?
                </h3>
                <p className="text-gray-600">
                  Yes, we bring all necessary professional-grade cleaning supplies and equipment. We use eco-friendly
                  products that are safe for your family, pets, and the environment.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are you insured and bonded?</h3>
                <p className="text-gray-600">
                  Absolutely. We are fully insured and bonded for your peace of mind. All our team members are
                  background-checked and professionally trained.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What areas do you serve in the Netherlands?
                </h3>
                <p className="text-gray-600">
                  We provide services throughout the Netherlands. Contact us to confirm availability in your specific
                  area and discuss any travel fees if applicable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
