import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    const [messages, services, images, analytics] = await Promise.all([
      supabaseAdmin.from("contact_messages").select("id, is_read"),
      supabaseAdmin.from("services").select("id").eq("is_active", true),
      supabaseAdmin.from("gallery_images").select("id"),
      supabaseAdmin.from("page_analytics").select("visits, unique_visitors"),
    ])

    const totalVisits = analytics.data?.reduce((sum, page) => sum + page.visits, 0) || 0
    const uniqueVisitors = analytics.data?.reduce((sum, page) => sum + page.unique_visitors, 0) || 0

    return NextResponse.json({
      totalMessages: messages.data?.length || 0,
      unreadMessages: messages.data?.filter((m) => !m.is_read).length || 0,
      totalServices: services.data?.length || 0,
      totalImages: images.data?.length || 0,
      totalVisits,
      uniqueVisitors,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
