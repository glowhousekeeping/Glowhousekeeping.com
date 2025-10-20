"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, FileText, ImageIcon, Package, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalMessages: 0,
    unreadMessages: 0,
    totalServices: 0,
    totalImages: 0,
    totalVisits: 0,
    uniqueVisitors: 0,
  })

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch("/api/admin/stats")
      const data = await response.json()
      setStats(data)
    }
    fetchStats()
  }, [])

  const cards = [
    {
      title: "Contact Messages",
      value: stats.totalMessages,
      subtitle: `${stats.unreadMessages} unread`,
      icon: Mail,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Services",
      value: stats.totalServices,
      subtitle: "Published services",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Gallery Images",
      value: stats.totalImages,
      subtitle: "Total images",
      icon: ImageIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Total Visits",
      value: stats.totalVisits,
      subtitle: `${stats.uniqueVisitors} unique visitors`,
      icon: TrendingUp,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{card.title}</CardTitle>
              <div className={`p-2 rounded-lg ${card.bgColor}`}>
                <card.icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="/admin/content"
              className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-gray-600" />
                <div>
                  <div className="font-medium">Edit Website Content</div>
                  <div className="text-sm text-gray-500">Update homepage and pages</div>
                </div>
              </div>
            </a>
            <a
              href="/admin/messages"
              className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <div>
                  <div className="font-medium">View Messages</div>
                  <div className="text-sm text-gray-500">Check contact form submissions</div>
                </div>
              </div>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              <p className="mb-2">• Last login: {new Date().toLocaleDateString()}</p>
              <p className="mb-2">• Total admin sessions: 1</p>
              <p>• System status: All systems operational</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
