import { type NextRequest, NextResponse } from "next/server"
import { authenticateAdmin } from "@/lib/auth"
import { SignJWT } from "jose"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const result = await authenticateAdmin(email, password)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 401 })
    }

    // Create JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")
    const token = await new SignJWT({ email: result.admin?.email, id: result.admin?.id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret)

    const response = NextResponse.json({ success: true })
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 24 hours
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
