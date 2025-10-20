import { supabaseAdmin } from "./supabase"
import bcrypt from "bcryptjs"

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export async function authenticateAdmin(email: string, password: string) {
  const { data: admin, error } = await supabaseAdmin.from("admin_users").select("*").eq("email", email).single()

  if (error || !admin) {
    return { success: false, error: "Invalid credentials" }
  }

  const isValid = await verifyPassword(password, admin.password_hash)

  if (!isValid) {
    return { success: false, error: "Invalid credentials" }
  }

  return { success: true, admin: { id: admin.id, email: admin.email } }
}
