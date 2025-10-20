"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MailOpen, Trash2, Loader2, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  service: string
  is_read: boolean
  created_at: string
}

export default function MessagesManagement() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [filter, setFilter] = useState<"all" | "unread">("all")

  useEffect(() => {
    fetchMessages()
  }, [])

  async function fetchMessages() {
    const response = await fetch("/api/admin/messages")
    const data = await response.json()
    setMessages(data)
    setLoading(false)
  }

  async function handleMarkAsRead(id: string) {
    try {
      await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_read: true }),
      })

      setMessages(messages.map((msg) => (msg.id === id ? { ...msg, is_read: true } : msg)))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update message",
        variant: "destructive",
      })
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this message?")) return

    try {
      await fetch(`/api/admin/messages/${id}`, { method: "DELETE" })
      setMessages(messages.filter((msg) => msg.id !== id))
      toast({
        title: "Success",
        description: "Message deleted successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      })
    }
  }

  function exportToCSV() {
    const csv = [
      ["Date", "Name", "Email", "Phone", "Subject", "Service", "Message"],
      ...messages.map((msg) => [
        new Date(msg.created_at).toLocaleDateString(),
        msg.name,
        msg.email,
        msg.phone || "",
        msg.subject || "",
        msg.service || "",
        msg.message,
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `messages-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const filteredMessages = filter === "unread" ? messages.filter((msg) => !msg.is_read) : messages

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-600" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600 mt-2">{messages.filter((msg) => !msg.is_read).length} unread messages</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setFilter("all")}>
            All ({messages.length})
          </Button>
          <Button variant="outline" onClick={() => setFilter("unread")}>
            Unread ({messages.filter((msg) => !msg.is_read).length})
          </Button>
          <Button onClick={exportToCSV}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredMessages.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Mail className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-gray-500">No messages to display</p>
            </CardContent>
          </Card>
        ) : (
          filteredMessages.map((message) => (
            <Card key={message.id} className={!message.is_read ? "border-cyan-200 bg-cyan-50/30" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{message.name}</CardTitle>
                      {!message.is_read && <Badge variant="default">New</Badge>}
                      {message.service && <Badge variant="outline">{message.service}</Badge>}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {message.email} • {message.phone}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{new Date(message.created_at).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2">
                    {!message.is_read && (
                      <Button variant="outline" size="icon" onClick={() => handleMarkAsRead(message.id)}>
                        <MailOpen className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(message.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {message.subject && <p className="font-medium mb-2">Subject: {message.subject}</p>}
                <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
