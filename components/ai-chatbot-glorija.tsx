"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm Glorija's AI assistant. How can I help you with your cleaning needs today?",
    "Hi there! Welcome to Glow Housekeeping. What cleaning service are you interested in?",
    "Greetings! I'm here to help you learn more about our professional cleaning services.",
  ],
  services: [
    "We offer general cleaning, deep cleaning, window cleaning, solar panel cleaning, carpet care, and drain cleaning. Which service interests you most?",
    "Our main services include residential and commercial cleaning, specialized solar panel maintenance, and professional carpet care. Would you like details about any specific service?",
  ],
  pricing: [
    "Our general cleaning starts at €35 per hour, but pricing varies based on your space size and specific needs. Would you like a personalized quote?",
    "Pricing depends on the service type and space size. General cleaning starts at €35/hour, window cleaning from €25, and solar panel cleaning from €50. Shall I help you get a custom quote?",
  ],
  booking: [
    "You can book our services through our website, WhatsApp (+31 6 10756699), or our online booking form. Which method would you prefer?",
    "To schedule a service, you can use our online booking system, contact us via WhatsApp, or call us directly. What works best for you?",
  ],
  areas: [
    "We proudly serve Venlo, Limburg, and surrounding areas throughout the Netherlands. Are you located in our service area?",
    "Our service area covers Venlo, Limburg, and nearby regions. We'd be happy to confirm if we serve your specific location!",
  ],
  default: [
    "That's a great question! For detailed information, I'd recommend contacting Glorija directly at +31 6 10756699 or glowhousekeeping.org@gmail.com.",
    "I'd love to help you with that! For the most accurate information, please reach out to our team directly through WhatsApp or email.",
    "Thanks for your interest! For specific details about that, our team can provide the best assistance. Feel free to contact us directly!",
  ],
}

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
  }

  if (lowerMessage.includes("service") || lowerMessage.includes("clean") || lowerMessage.includes("what do you")) {
    return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)]
  }

  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
    return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)]
  }

  if (lowerMessage.includes("book") || lowerMessage.includes("schedule") || lowerMessage.includes("appointment")) {
    return predefinedResponses.booking[Math.floor(Math.random() * predefinedResponses.booking.length)]
  }

  if (lowerMessage.includes("area") || lowerMessage.includes("location") || lowerMessage.includes("where")) {
    return predefinedResponses.areas[Math.floor(Math.random() * predefinedResponses.areas.length)]
  }

  return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
}

export default function AIChatbotGlorija() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Glorija's AI assistant. How can I help you with your cleaning needs today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)

    setInputMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window open">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold">Glorija's Assistant</div>
                <div className="text-xs opacity-90">Online now</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "bot" && <Bot className="w-4 h-4 mt-0.5 text-blue-600" />}
                    {message.sender === "user" && <User className="w-4 h-4 mt-0.5 text-white" />}
                    <div>
                      <div className="text-sm">{message.text}</div>
                      <div className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={sendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      <div className="chatbot-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </div>
    </div>
  )
}
