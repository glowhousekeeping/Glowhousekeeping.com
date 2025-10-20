"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Eye } from "lucide-react"

export default function Analytics() {
  const [analytics, setAnalytics] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    topPages: [] as Array<{ page: string; visits: number }>,
    recentActivity: [] as Array<{ page: string; timestamp: string }>,
  })

  useEffect(() => {
    async function fetchAnalytics() {
      const response = await fetch("/api/admin/analytics")
      const data = await response.json()
      setAnalytics(data)
    }
    fetchAnalytics()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Website traffic and visitor statistics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Visits</CardTitle>
            <Eye className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalVisits}</div>
            <p className="text-xs text-gray-500 mt-1">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.uniqueVisitors}</div>
            <p className="text-xs text-gray-500 mt-1">Tracked by IP</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg. Daily Visits</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(analytics.totalVisits / 30)}</div>
            <p className="text-xs text-gray-500 mt-1">Last 30 days estimate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topPages.length === 0 ? (
                <p className="text-sm text-gray-500">No data available</p>
              ) : (
                analytics.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{page.page}</span>
                    <span className="text-sm text-gray-600">{page.visits} visits</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.recentActivity.length === 0 ? (
                <p className="text-sm text-gray-500">No recent activity</p>
              ) : (
                analytics.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{activity.page}</span>
                    <span className="text-xs text-gray-500">{new Date(activity.timestamp).toLocaleTimeString()}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
