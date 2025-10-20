import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { getSession } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data, error } = await supabaseAdmin.from("website_content").select("section, content")

    if (error) throw error

    // Transform array to object
    const contentObject = data?.reduce(
      (acc, item) => {
        acc[item.section] = item.content
        return acc
      },
      {} as Record<string, any>,
    )

    return NextResponse.json(contentObject || {})
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { section, content } = await request.json()

    const { error } = await supabaseAdmin.from("website_content").upsert({
      section,
      content,
      updated_at: new Date().toISOString(),
      updated_by: session.userId,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 })
  }
}
