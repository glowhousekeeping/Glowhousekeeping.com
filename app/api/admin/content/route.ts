import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from("website_content").select("*")

    if (error) throw error

    const content: Record<string, any> = {}
    data?.forEach((item) => {
      content[item.section] = item.content
    })

    return NextResponse.json(content)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { section, content } = await request.json()

    const { error } = await supabaseAdmin
      .from("website_content")
      .upsert({ section, content, updated_at: new Date().toISOString() })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 })
  }
}
