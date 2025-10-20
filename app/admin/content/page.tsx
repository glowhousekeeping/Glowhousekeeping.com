"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContentManagement() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [content, setContent] = useState<Record<string, any>>({})

  useEffect(() => {
    async function fetchContent() {
      const response = await fetch("/api/admin/content")
      const data = await response.json()
      setContent(data)
      setLoading(false)
    }
    fetchContent()
  }, [])

  const handleSave = async (section: string) => {
    setSaving(true)
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, content: content[section] }),
      })

      if (!response.ok) throw new Error("Failed to save")

      toast({
        title: "Success",
        description: "Content updated successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-600" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <p className="text-gray-600 mt-2">Edit website content sections</p>
      </div>

      <div className="space-y-6">
        {/* Homepage Hero */}
        <Card>
          <CardHeader>
            <CardTitle>Homepage Hero Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hero-title">Main Title</Label>
              <Input
                id="hero-title"
                value={content.homepage_hero?.title || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    homepage_hero: { ...content.homepage_hero, title: e.target.value },
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={content.homepage_hero?.subtitle || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    homepage_hero: { ...content.homepage_hero, subtitle: e.target.value },
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-cta">Call-to-Action Text</Label>
              <Input
                id="hero-cta"
                value={content.homepage_hero?.cta_text || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    homepage_hero: { ...content.homepage_hero, cta_text: e.target.value },
                  })
                }
              />
            </div>
            <Button onClick={() => handleSave("homepage_hero")} disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle>About Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="about-title">Section Title</Label>
              <Input
                id="about-title"
                value={content.about_section?.title || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    about_section: { ...content.about_section, title: e.target.value },
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="about-description">Description</Label>
              <Textarea
                id="about-description"
                rows={6}
                value={content.about_section?.description || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    about_section: { ...content.about_section, description: e.target.value },
                  })
                }
              />
            </div>
            <Button onClick={() => handleSave("about_section")} disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
