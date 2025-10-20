"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MailOpen, Trash2, Download, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface Message {
  id: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  service?: string
  is_read: boolean
  created_at: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/admin/messages")
      const data = await response.json()
      setMessages(data)
    } catch (error) {
      toast.error("Failed to load messages")
    } finally {
      setLoading(false)
    }
  }

  const toggleRead = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_read: !currentStatus }),
      })

      if (response.ok) {
        toast.success(currentStatus ? "Marked as unread" : "Marked as read")
        fetchMessages()
      }
    } catch (error) {
      toast.error("Failed to update message")
    }
  }

  const deleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Message deleted")
        fetchMessages()
      }
    } catch (error) {
      toast.error("Failed to delete message")
    }
  }

  const exportToCSV = () => {
    const headers = ["Date", "Name", "Email", "Phone", "Subject", "Message", "Service"]
    const rows = messages.map((msg) => [
      new Date(msg.created_at).toLocaleDateString(),
      msg.name,
      msg.email,
      msg.phone || "",
      msg.subject || "",
      msg.message,
      msg.service || "",
    ])

    const csv = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `messages-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    toast.success("Messages exported!")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-cyan-500" />
      </div>
    )
  }

  const unreadCount = messages.filter((m) => !m.is_read).length

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Contact Messages
          </h1>
          <p className="text-gray-600 mt-2">
            {messages.length} total messages, {unreadCount} unread
          </p>
        </div>
        <Button
          onClick={exportToCSV}
          variant="outline"
          className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 bg-transparent"
        >
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <Card
            key={message.id}
            className={`border-0 shadow-lg transition-all ${
              !message.is_read ? "bg-cyan-50/50 border-l-4 border-l-cyan-500" : ""
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{message.name}</CardTitle>
                    {!message.is_read && <Badge variant="default">New</Badge>}
                    {message.service && (
                      <Badge variant="outline" className="text-cyan-600">
                        {message.service}
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Email:</strong> {message.email}
                    </p>
                    {message.phone && (
                      <p>
                        <strong>Phone:</strong> {message.phone}
                      </p>
                    )}
                    {message.subject && (
                      <p>
                        <strong>Subject:</strong> {message.subject}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">{new Date(message.created_at).toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline" onClick={() => toggleRead(message.id, message.is_read)}>
                    {message.is_read ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => deleteMessage(message.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
            </CardContent>
          </Card>
        ))}
        {messages.length === 0 && (
          <Card className="border-0 shadow-lg">
            <CardContent className="py-12 text-center text-gray-500">No messages yet</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
