import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { getSession } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get all page analytics
    const { data: pageViews, error: pageError } = await supabaseAdmin
      .from("page_analytics")
      .select("*")
      .order("visit_count", { ascending: false })

    if (pageError) throw pageError

    // Calculate total visits
    const totalVisits = pageViews?.reduce((sum, page) => sum + page.visit_count, 0) || 0

    // Get top pages
    const topPages =
      pageViews?.slice(0, 10).map((page) => ({
        path: page.page_path,
        views: page.visit_count,
      })) || []

    // Get daily stats (last 30 days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const { data: dailyData, error: dailyError } = await supabaseAdmin
      .from("page_analytics")
      .select("date, visit_count")
      .gte("date", thirtyDaysAgo.toISOString().split("T")[0])
      .order("date", { ascending: true })

    if (dailyError) throw dailyError

    // Aggregate by date
    const dailyStats = dailyData?.reduce(
      (acc, item) => {
        const existingDay = acc.find((d) => d.date === item.date)
        if (existingDay) {
          existingDay.visits += item.visit_count
        } else {
          acc.push({ date: item.date, visits: item.visit_count })
        }
        return acc
      },
      [] as Array<{ date: string; visits: number }>,
    )

    return NextResponse.json({
      pageViews: pageViews || [],
      dailyStats: dailyStats || [],
      totalVisits,
      topPages,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
  }
}
