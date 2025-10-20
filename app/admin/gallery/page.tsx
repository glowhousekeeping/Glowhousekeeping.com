"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Loader2, ImageIcon } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

interface GalleryImage {
  id: string
  title: string
  image_url: string
  image_type: "before" | "after" | "transition"
  pair_id?: string
  display_order: number
}

export default function GalleryManagementPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedType, setSelectedType] = useState<"before" | "after" | "transition">("after")

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/admin/gallery")
      const data = await response.json()
      setImages(data)
    } catch (error) {
      toast.error("Failed to load images")
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("type", selectedType)

    try {
      const response = await fetch("/api/admin/gallery/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast.success("Image uploaded successfully!")
        fetchImages()
      } else {
        toast.error("Failed to upload image")
      }
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Image deleted successfully!")
        fetchImages()
      } else {
        toast.error("Failed to delete image")
      }
    } catch (error) {
      toast.error("An error occurred")
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-cyan-500" />
      </div>
    )
  }

  const beforeImages = images.filter((img) => img.image_type === "before")
  const afterImages = images.filter((img) => img.image_type === "after")
  const transitionImages = images.filter((img) => img.image_type === "transition")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Gallery Management
        </h1>
        <p className="text-gray-600 mt-2">Upload and manage before/after images</p>
      </div>

      {/* Upload Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Upload New Image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="image-type">Image Type</Label>
            <Select value={selectedType} onValueChange={(value: any) => setSelectedType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="before">Before</SelectItem>
                <SelectItem value="after">After</SelectItem>
                <SelectItem value="transition">Transition Gallery</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="file-upload">Choose Image</Label>
            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              className="cursor-pointer"
            />
          </div>
          {uploading && (
            <div className="flex items-center gap-2 text-cyan-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Uploading...</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Before Images */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-orange-500" />
            Before Images ({beforeImages.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beforeImages.map((image) => (
              <div key={image.id} className="relative group">
                <Image
                  src={image.image_url || "/placeholder.svg"}
                  alt={image.title || "Before image"}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(image.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          {beforeImages.length === 0 && <p className="text-center text-gray-500 py-8">No before images yet</p>}
        </CardContent>
      </Card>

      {/* After Images */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-green-500" />
            After Images ({afterImages.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {afterImages.map((image) => (
              <div key={image.id} className="relative group">
                <Image
                  src={image.image_url || "/placeholder.svg"}
                  alt={image.title || "After image"}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(image.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          {afterImages.length === 0 && <p className="text-center text-gray-500 py-8">No after images yet</p>}
        </CardContent>
      </Card>

      {/* Transition Gallery Images */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-purple-500" />
            Transition Gallery ({transitionImages.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transitionImages.map((image) => (
              <div key={image.id} className="relative group">
                <Image
                  src={image.image_url || "/placeholder.svg"}
                  alt={image.title || "Transition image"}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(image.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          {transitionImages.length === 0 && <p className="text-center text-gray-500 py-8">No transition images yet</p>}
        </CardContent>
      </Card>
    </div>
  )
}
