import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from("page_analytics").select("*")

    if (error) throw error

    const totalVisits = data?.reduce((sum, page) => sum + page.visits, 0) || 0
    const uniqueVisitors = data?.reduce((sum, page) => sum + page.unique_visitors, 0) || 0

    const topPages =
      data
        ?.sort((a, b) => b.visits - a.visits)
        .slice(0, 5)
        .map((page) => ({ page: page.page_path, visits: page.visits })) || []

    return NextResponse.json({
      totalVisits,
      uniqueVisitors,
      topPages,
      recentActivity: [],
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
  }
}
