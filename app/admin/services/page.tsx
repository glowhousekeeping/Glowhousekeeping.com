"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface Service {
  id: string
  title: string
  description: string
  price: string
  features: string[]
  icon: string
  is_active: boolean
  display_order: number
}

export default function ServicesManagementPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/admin/services")
      const data = await response.json()
      setServices(data)
    } catch (error) {
      toast.error("Failed to load services")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const serviceData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: formData.get("price") as string,
      features: (formData.get("features") as string).split("\n").filter(Boolean),
      icon: formData.get("icon") as string,
      is_active: formData.get("is_active") === "on",
    }

    try {
      const url = editingService ? `/api/admin/services/${editingService.id}` : "/api/admin/services"
      const method = editingService ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceData),
      })

      if (response.ok) {
        toast.success(editingService ? "Service updated!" : "Service created!")
        setIsDialogOpen(false)
        setEditingService(null)
        fetchServices()
      } else {
        toast.error("Failed to save service")
      }
    } catch (error) {
      toast.error("An error occurred")
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return

    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Service deleted!")
        fetchServices()
      } else {
        toast.error("Failed to delete service")
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

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Services Management
          </h1>
          <p className="text-gray-600 mt-2">Manage your cleaning services</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingService(null)} className="bg-gradient-to-r from-cyan-500 to-blue-500">
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingService ? "Edit Service" : "Create New Service"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Service Title</Label>
                <Input id="title" name="title" defaultValue={editingService?.title} required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={editingService?.description}
                  rows={3}
                  required
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" defaultValue={editingService?.price} placeholder="€99/month" required />
              </div>
              <div>
                <Label htmlFor="features">Features (one per line)</Label>
                <Textarea
                  id="features"
                  name="features"
                  defaultValue={editingService?.features.join("\n")}
                  rows={5}
                  placeholder="Feature 1
Feature 2
Feature 3"
                />
              </div>
              <div>
                <Label htmlFor="icon">Icon Name (Lucide React)</Label>
                <Input id="icon" name="icon" defaultValue={editingService?.icon} placeholder="Sparkles" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="is_active" name="is_active" defaultChecked={editingService?.is_active ?? true} />
                <Label htmlFor="is_active">Active</Label>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
                {editingService ? "Update Service" : "Create Service"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="truncate">{service.title}</span>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => {
                      setEditingService(service)
                      setIsDialogOpen(true)
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => handleDelete(service.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
              <p className="font-bold text-lg text-cyan-600 mb-2">{service.price}</p>
              <div className="text-xs text-gray-500">
                {service.features.length} features
                {!service.is_active && <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded">Inactive</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
