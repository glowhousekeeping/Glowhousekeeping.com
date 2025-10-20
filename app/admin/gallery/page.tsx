"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trash2, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface GalleryImage {
  id: string
  category: string
  image_url: string
  title: string
  description: string
  display_order: number
}

export default function GalleryManagement() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState<GalleryImage[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const response = await fetch("/api/admin/gallery")
    const data = await response.json()
    setImages(data)
    setLoading(false)
  }

  async function handleUpload(category: string, file: File) {
    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("category", category)

    try {
      const response = await fetch("/api/admin/gallery/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Upload failed")

      toast({
        title: "Success",
        description: "Image uploaded successfully",
      })

      fetchImages()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this image?")) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Delete failed")

      toast({
        title: "Success",
        description: "Image deleted successfully",
      })

      fetchImages()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      })
    }
  }

  const beforeImages = images.filter((img) => img.category === "before")
  const afterImages = images.filter((img) => img.category === "after")
  const transitionImages = images.filter((img) => img.category === "transition")

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
        <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
        <p className="text-gray-600 mt-2">Manage before, after, and transition images</p>
      </div>

      <Tabs defaultValue="before" className="w-full">
        <TabsList>
          <TabsTrigger value="before">Before ({beforeImages.length})</TabsTrigger>
          <TabsTrigger value="after">After ({afterImages.length})</TabsTrigger>
          <TabsTrigger value="transition">Transition ({transitionImages.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="before" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Before Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label htmlFor="before-upload">Select Image</Label>
                <Input
                  id="before-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleUpload("before", file)
                  }}
                  disabled={uploading}
                />
                {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beforeImages.map((img) => (
              <Card key={img.id}>
                <CardContent className="p-4">
                  <div className="relative aspect-video mb-4">
                    <Image
                      src={img.image_url || "/placeholder.svg"}
                      alt={img.title || "Before image"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{img.title || "Untitled"}</span>
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(img.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="after" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload After Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label htmlFor="after-upload">Select Image</Label>
                <Input
                  id="after-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleUpload("after", file)
                  }}
                  disabled={uploading}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {afterImages.map((img) => (
              <Card key={img.id}>
                <CardContent className="p-4">
                  <div className="relative aspect-video mb-4">
                    <Image
                      src={img.image_url || "/placeholder.svg"}
                      alt={img.title || "After image"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{img.title || "Untitled"}</span>
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(img.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transition" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Transition Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label htmlFor="transition-upload">Select Image</Label>
                <Input
                  id="transition-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleUpload("transition", file)
                  }}
                  disabled={uploading}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {transitionImages.map((img) => (
              <Card key={img.id}>
                <CardContent className="p-4">
                  <div className="relative aspect-video mb-4">
                    <Image
                      src={img.image_url || "/placeholder.svg"}
                      alt={img.title || "Transition image"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{img.title || "Untitled"}</span>
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(img.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
