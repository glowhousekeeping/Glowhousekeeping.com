"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Save, Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function ContentManagementPage() {
  const [content, setContent] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch("/api/admin/content")
      const data = await response.json()
      setContent(data)
    } catch (error) {
      toast.error("Failed to load content")
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (section: string) => {
    setSaving(true)
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section,
          content: content[section],
        }),
      })

      if (response.ok) {
        toast.success("Content updated successfully!")
      } else {
        toast.error("Failed to update content")
      }
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setSaving(false)
    }
  }

  const updateContent = (section: string, field: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-cyan-500" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Content Management
        </h1>
        <p className="text-gray-600 mt-2">Edit website text and content</p>
      </div>

      {/* Hero Section */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Hero Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="hero-title">Title</Label>
            <Input
              id="hero-title"
              value={content.hero?.title || ""}
              onChange={(e) => updateContent("hero", "title", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="hero-subtitle">Subtitle</Label>
            <Input
              id="hero-subtitle"
              value={content.hero?.subtitle || ""}
              onChange={(e) => updateContent("hero", "subtitle", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="hero-cta">CTA Button Text</Label>
            <Input
              id="hero-cta"
              value={content.hero?.cta || ""}
              onChange={(e) => updateContent("hero", "cta", e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleSave("hero")}
            disabled={saving}
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Saving..." : "Save Hero"}
          </Button>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>About Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="about-title">Title</Label>
            <Input
              id="about-title"
              value={content.about?.title || ""}
              onChange={(e) => updateContent("about", "title", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="about-description">Description</Label>
            <Textarea
              id="about-description"
              value={content.about?.description || ""}
              onChange={(e) => updateContent("about", "description", e.target.value)}
              rows={5}
            />
          </div>
          <Button
            onClick={() => handleSave("about")}
            disabled={saving}
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Saving..." : "Save About"}
          </Button>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              value={content.contact?.email || ""}
              onChange={(e) => updateContent("contact", "email", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="contact-phone">Phone</Label>
            <Input
              id="contact-phone"
              value={content.contact?.phone || ""}
              onChange={(e) => updateContent("contact", "phone", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="contact-address">Address</Label>
            <Input
              id="contact-address"
              value={content.contact?.address || ""}
              onChange={(e) => updateContent("contact", "address", e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleSave("contact")}
            disabled={saving}
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Saving..." : "Save Contact"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
