import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const category = formData.get("category") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Upload to Supabase Storage
    const fileName = `${Date.now()}-${file.name}`
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage.from("gallery").upload(fileName, file)

    if (uploadError) throw uploadError

    // Get public URL
    const { data: urlData } = supabaseAdmin.storage.from("gallery").getPublicUrl(fileName)

    // Save to database
    const { error: dbError } = await supabaseAdmin.from("gallery_images").insert({
      category,
      image_url: urlData.publicUrl,
      title: file.name,
      is_active: true,
    })

    if (dbError) throw dbError

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
