import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { getSession } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File
    const type = formData.get("type") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Upload to Supabase Storage
    const fileName = `${Date.now()}-${file.name}`
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("gallery")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })

    if (uploadError) throw uploadError

    // Get public URL
    const {
      data: { publicUrl },
    } = supabaseAdmin.storage.from("gallery").getPublicUrl(fileName)

    // Save to database
    const { error: dbError } = await supabaseAdmin.from("gallery_images").insert({
      title: file.name,
      image_url: publicUrl,
      image_type: type,
      is_active: true,
      display_order: 0,
    })

    if (dbError) throw dbError

    return NextResponse.json({ success: true, url: publicUrl })
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
