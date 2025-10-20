"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Images, Wrench, Eye } from "lucide-react"

interface Stats {
  totalMessages: number
  unreadMessages: number
  totalGalleryImages: number
  totalServices: number
  activeServices: number
  totalPageViews: number
  recentMessages: Array<{
    id: string
    name: string
    email: string
    message: string
    created_at: string
  }>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats")
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500" />
      </div>
    )
  }

  const statCards = [
    {
      title: "Total Messages",
      value: stats?.totalMessages || 0,
      icon: MessageSquare,
      description: `${stats?.unreadMessages || 0} unread`,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Gallery Images",
      value: stats?.totalGalleryImages || 0,
      icon: Images,
      description: "Before/After photos",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Services",
      value: stats?.totalServices || 0,
      icon: Wrench,
      description: `${stats?.activeServices || 0} active`,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Page Views",
      value: stats?.totalPageViews || 0,
      icon: Eye,
      description: "Total visits",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Messages */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-cyan-500" />
            Recent Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          {stats?.recentMessages && stats.recentMessages.length > 0 ? (
            <div className="space-y-4">
              {stats.recentMessages.map((message) => (
                <div key={message.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{message.name}</p>
                      <p className="text-sm text-gray-600">{message.email}</p>
                    </div>
                    <span className="text-xs text-gray-500">{new Date(message.created_at).toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{message.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No messages yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
