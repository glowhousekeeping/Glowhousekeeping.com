import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { getSession } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get message stats
    const { data: messages, error: messagesError } = await supabaseAdmin.from("contact_messages").select("*")

    const totalMessages = messages?.length || 0
    const unreadMessages = messages?.filter((m) => !m.is_read).length || 0

    // Get gallery stats
    const { data: gallery, error: galleryError } = await supabaseAdmin.from("gallery_images").select("*")

    const totalGalleryImages = gallery?.length || 0

    // Get service stats
    const { data: services, error: servicesError } = await supabaseAdmin.from("services").select("*")

    const totalServices = services?.length || 0
    const activeServices = services?.filter((s) => s.is_active).length || 0

    // Get page view stats
    const { data: analytics, error: analyticsError } = await supabaseAdmin.from("page_analytics").select("visit_count")

    const totalPageViews = analytics?.reduce((sum, a) => sum + a.visit_count, 0) || 0

    // Get recent messages
    const recentMessages = messages?.slice(0, 5) || []

    return NextResponse.json({
      totalMessages,
      unreadMessages,
      totalGalleryImages,
      totalServices,
      activeServices,
      totalPageViews,
      recentMessages,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
