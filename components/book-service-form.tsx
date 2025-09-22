"use client"

import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MessageCircle } from "lucide-react"

interface BookServiceFormProps {
  className?: string
}

export default function BookServiceForm({ className = "" }: BookServiceFormProps) {
  const { t } = useTranslation("common")

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

    const message = `${t("bookForm.messageIntro")}

- ${t("bookForm.fullName")}: ${formData.fullName}
- ${t("bookForm.phoneNumber")}: ${formData.phoneNumber}
- ${t("bookForm.emailAddress")}: ${formData.emailAddress}
- ${t("bookForm.businessAddress")}: ${formData.businessAddress}
- ${t("bookForm.desiredService")}: ${formData.desiredService}
- ${t("bookForm.preferredDate")}: ${formData.preferredDate}
- ${t("bookForm.preferredTime")}: ${formData.preferredTime}
- ${t("bookForm.additionalComments")}: ${formData.additionalComments || t("bookForm.none")}

${t("bookForm.thankYou")}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/31610756699?text=${encodedMessage}`
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
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("bookForm.title")}</h2>
        <p className="text-lg text-gray-600">{t("bookForm.subtitle")}</p>
      </div>

      <Card className="rounded-3xl border-0 shadow-xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                {t("bookForm.fullName")} *
              </label>
              <Input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder={t("bookForm.fullNamePlaceholder")}
              />
            </div>

            {/* Phone Number and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
                  {t("bookForm.phoneNumber")} *
                </label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t("bookForm.phoneNumberPlaceholder")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="emailAddress" className="block text-sm font-semibold text-gray-700">
                  {t("bookForm.emailAddress")} *
                </label>
                <Input
                  id="emailAddress"
                  type="email"
                  required
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                  className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t("bookForm.emailAddressPlaceholder")}
                />
              </div>
            </div>

            {/* Business Address */}
            <div className="space-y-2">
              <label htmlFor="businessAddress" className="block text-sm font-semibold text-gray-700">
                {t("bookForm.businessAddress")} *
              </label>
              <Input
                id="businessAddress"
                type="text"
                required
                value={formData.businessAddress}
                onChange={(e) => handleInputChange("businessAddress", e.target.value)}
                className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder={t("bookForm.businessAddressPlaceholder")}
              />
            </div>

            {/* Desired Service */}
            <div className="space-y-2">
              <label htmlFor="desiredService" className="block text-sm font-semibold text-gray-700">
                {t("bookForm.desiredService")} *
              </label>
              <Select
                value={formData.desiredService}
                onValueChange={(value) => handleInputChange("desiredService", value)}
              >
                <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder={t("bookForm.selectServicePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={t("services.generalCleaning")}>{t("services.generalCleaning")}</SelectItem>
                  <SelectItem value={t("services.solarPanelCleaning")}>{t("services.solarPanelCleaning")}</SelectItem>
                  <SelectItem value={t("services.windowCleaning")}>{t("services.windowCleaning")}</SelectItem>
                  <SelectItem value={t("services.drainCleaning")}>{t("services.drainCleaning")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Preferred Date and Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700">
                  {t("bookForm.preferredDate")} *
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
                  {t("bookForm.preferredTime")} *
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
                {t("bookForm.additionalComments")}
              </label>
              <Textarea
                id="additionalComments"
                value={formData.additionalComments}
                onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                className="min-h-[100px] rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                placeholder={t("bookForm.additionalCommentsPlaceholder")}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid()}
                className="w-full h-12 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-xl text-base font-semibold transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("bookForm.sendViaWhatsApp")}
              </Button>

              <p className="text-sm text-gray-500 text-center mt-3">
                {t("bookForm.whatsappDisclaimer")}
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
