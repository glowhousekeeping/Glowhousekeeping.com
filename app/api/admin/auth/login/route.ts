import { type NextRequest, NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { supabaseAdmin } from "@/lib/supabase"
import { signToken, setSession } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Fetch user from database
    const { data: user, error } = await supabaseAdmin.from("admin_users").select("*").eq("email", email).single()

    if (error || !user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Verify password
    const isValidPassword = await compare(password, user.password_hash)

    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Update last login
    await supabaseAdmin.from("admin_users").update({ last_login: new Date().toISOString() }).eq("id", user.id)

    // Create session token
    const token = await signToken({
      userId: user.id,
      email: user.email,
    })

    // Set cookie
    await setSession(token)

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
