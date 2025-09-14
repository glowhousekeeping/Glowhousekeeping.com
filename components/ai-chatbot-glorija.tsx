"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "bot" | "user" | "system"
  content: string
  timestamp: Date
  isLanguageSelector?: boolean
  isQuickReply?: boolean
}

interface Language {
  code: string
  name: string
  flag: string
  nativeName: string
}

const languages: Language[] = [
  { code: "nl", name: "Dutch", flag: "🇳🇱", nativeName: "Nederlands" },
  { code: "fy", name: "Frisian", flag: "🏴", nativeName: "Frysk" },
  { code: "en", name: "English", flag: "🇬🇧", nativeName: "English" },
]

// Multi-language strings
const translations = {
  en: {
    greeting:
      "Hi! I'm Glorija 🌟 — your personal housekeeping assistant. Would you like to continue in a different language?",
    languagePrompt: "Please select your preferred language:",
    conversationPrompt: "Do you have any questions about our services, pricing, or booking? I'm here to help ✨",
    quickReplies: {
      services: "View Services",
      quote: "Request Quote",
      booking: "Book Appointment",
      whatsapp: "WhatsApp Support",
    },
    responses: {
      services:
        "I'd be happy to tell you about our services! We offer general cleaning, solar panel cleaning, window cleaning, and drain cleaning. Which service interests you most?",
      quote:
        "Great! I can help you get a personalized quote. Let me redirect you to our booking form where you can share your specific needs.",
      booking:
        "Perfect! You can book an appointment directly through our calendar or WhatsApp. Which would you prefer?",
      whatsapp:
        "Connecting you to our WhatsApp support! You'll be able to chat directly with our team for immediate assistance.",
    },
  },
  nl: {
    greeting: "Hoi! Ik ben Glorija 🌟 — jouw persoonlijke schoonmaakassistent. Wil je doorgaan in een andere taal?",
    languagePrompt: "Selecteer je voorkeurstaal:",
    conversationPrompt: "Heb je vragen over onze diensten, prijzen of boekingen? Ik help je graag ✨",
    quickReplies: {
      services: "Bekijk Diensten",
      quote: "Offerte Aanvragen",
      booking: "Afspraak Maken",
      whatsapp: "WhatsApp Ondersteuning",
    },
    responses: {
      services:
        "Ik vertel je graag over onze diensten! We bieden algemene reiniging, zonnepaneel reiniging, ramen wassen en afvoer reiniging. Welke dienst interesseert je het meest?",
      quote:
        "Geweldig! Ik kan je helpen met een persoonlijke offerte. Laat me je doorverwijzen naar ons boekingsformulier waar je je specifieke behoeften kunt delen.",
      booking: "Perfect! Je kunt direct een afspraak maken via onze agenda of WhatsApp. Wat heeft je voorkeur?",
      whatsapp: "Ik verbind je met onze WhatsApp ondersteuning! Je kunt direct chatten met ons team voor directe hulp.",
    },
  },
  fy: {
    greeting: "Hoi! Ik bin Glorija 🌟 — dyn persoanlike skjinmakassistent. Wolsto trochgean yn in oare taal?",
    languagePrompt: "Selektearje dyn foarkarstaal:",
    conversationPrompt: "Hasto fragen oer ús tsjinsten, prizen of boekings? Ik help dy graach ✨",
    quickReplies: {
      services: "Tsjinsten Besjen",
      quote: "Offerte Freegje",
      booking: "Ôfspraak Meitsje",
      whatsapp: "WhatsApp Stipe",
    },
    responses: {
      services:
        "Ik fertel dy graach oer ús tsjinsten! Wy biede algemiene skjinmaak, sinnepaniel skjinmaak, ruten waskjen en ôfwetter skjinmaak. Hokker tsjinst ynteressearret dy it meast?",
      quote:
        "Geweldich! Ik kin dy helpe mei in persoanlike offerte. Lit my dy trochferwize nei ús boekingsformulier wêr't do dyn spesifike behoeften diele kinst.",
      booking: "Perfekt! Do kinst direkt in ôfspraak meitsje fia ús aginda of WhatsApp. Wat hat dyn foarkar?",
      whatsapp: "Ik ferbyn dy mei ús WhatsApp stipe! Do kinst direkt chatten mei ús team foar direkte hulp.",
    },
  },
}

export default function AIChatbotGlorija() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<keyof typeof translations>("en")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: Date.now().toString(),
      type: "bot",
      content: translations.en.greeting,
      timestamp: new Date(),
      isLanguageSelector: true,
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showLanguageSelector, setShowLanguageSelector] = useState(true)
  const [showAutoGreeting, setShowAutoGreeting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const t = translations[currentLanguage]

  // Auto-show greeting bubble on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("glorija-greeted")
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowAutoGreeting(true)
        // Auto-hide greeting bubble after 8 seconds
        setTimeout(() => {
          setShowAutoGreeting(false)
        }, 8000)
      }, 3000) // Show greeting bubble after 3 seconds

      return () => clearTimeout(timer)
    } else {
      setHasGreeted(true)
      setShowLanguageSelector(false)
    }
  }, [])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const addMessage = (type: "bot" | "user" | "system", content: string, isLanguageSelector = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      isLanguageSelector,
    }

    setMessages((prev) => [...prev, newMessage])
  }

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, delay)
  }

  const handleLanguageSelect = (langCode: keyof typeof translations) => {
    setCurrentLanguage(langCode)
    setShowLanguageSelector(false)

    // Clear previous messages and add new greeting in selected language
    setMessages([])

    simulateTyping(() => {
      const newTranslations = translations[langCode]
      addMessage("bot", newTranslations.conversationPrompt)
    })
  }

  const handleQuickReply = (action: string) => {
    // Add user message
    addMessage("user", t.quickReplies[action as keyof typeof t.quickReplies])

    // Simulate bot response
    simulateTyping(() => {
      const response = t.responses[action as keyof typeof t.responses]
      addMessage("bot", response)

      // Handle specific actions
      if (action === "quote") {
        setTimeout(() => {
          window.open("/book-service", "_blank")
        }, 1000)
      } else if (action === "booking") {
        setTimeout(() => {
          window.open("https://calendar.app.google/RU6yxXUM6GZED7Nm7", "_blank")
        }, 1000)
      } else if (action === "whatsapp") {
        setTimeout(() => {
          window.open("https://wa.me/31610756699", "_blank")
        }, 1000)
      } else if (action === "services") {
        setTimeout(() => {
          window.open("/services/general-cleaning", "_blank")
        }, 1000)
      }
    })
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    setShowAutoGreeting(false)

    if (!hasGreeted && !isOpen) {
      addMessage("bot", t.greeting, true)
      setHasGreeted(true)
      localStorage.setItem("glorija-greeted", "true")
    }
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputMessage("")

    // Simulate bot response
    simulateTyping(() => {
      const botResponse = {
        id: Date.now().toString(),
        type: "bot",
        content:
          "Thanks for your message! For immediate assistance, please call us at +31 6 10756699 or send us a WhatsApp message. We'll get back to you right away!",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    })
  }

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Auto-greeting bubble */}
        {showAutoGreeting && !isOpen && (
          <div className="absolute bottom-20 right-0 w-64 sm:w-72 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-bounce">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">G</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 font-medium mb-1">Hi! I'm Glorija 👋</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Your personal housekeeping assistant. Click to chat with me about our services!
                </p>
              </div>
              <button
                onClick={() => setShowAutoGreeting(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
          </div>
        )}

        {/* Chatbot Icon */}
        <Button
          onClick={toggleChatbot}
          className={`relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
          }`}
          style={{
            boxShadow: isOpen
              ? "0 20px 40px rgba(59, 130, 246, 0.3)"
              : "0 10px 30px rgba(59, 130, 246, 0.2), 0 0 20px rgba(34, 197, 94, 0.1)",
          }}
        >
          {/* Sparkle Animation */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>

          {/* Main Icon */}
          <div className="flex items-center justify-center w-full h-full text-white">
            {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-20 animate-pulse"></div>
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] z-50 animate-in slide-in-from-bottom-4 duration-300 chatbot-container">
          <Card className="rounded-2xl border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">G</span>
                </div>
                <div>
                  <h3 className="font-semibold">Glorija</h3>
                  <p className="text-xs text-green-100">Glow Housekeeping</p>
                </div>
              </div>
            </div>

            <CardContent className="p-0">
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.type === "user" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>

                    {/* Language Selector */}
                    {message.isLanguageSelector && showLanguageSelector && (
                      <div className="mt-3 space-y-2">
                        <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {t.languagePrompt}
                        </p>
                        <div className="flex flex-col gap-2">
                          {languages.map((lang) => (
                            <Button
                              key={lang.code}
                              onClick={() => handleLanguageSelect(lang.code as keyof typeof translations)}
                              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105 shadow-md"
                            >
                              <span>{lang.flag}</span>
                              <span>{lang.nativeName}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Reply Buttons */}
                    {!showLanguageSelector && message.content === t.conversationPrompt && (
                      <div className="mt-3 grid grid-cols-1 gap-2">
                        {Object.entries(t.quickReplies).map(([key, label]) => (
                          <Button
                            key={key}
                            onClick={() => handleQuickReply(key)}
                            className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-sm ${
                              isDarkMode
                                ? "bg-gray-600 text-white hover:bg-gray-500"
                                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                            }`}
                          >
                            {label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                  <Button onClick={handleSendMessage} size="sm" className="bg-green-600 hover:bg-green-700 px-3">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .chatbot-container {
            right: 1rem;
            left: 1rem;
            width: calc(100vw - 2rem);
            max-width: 350px;
          }
        }
        
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.3s ease-out;
        }
        
        .slide-in-from-bottom-2 {
          animation: slide-in-from-bottom-2 0.3s ease-out;
        }
        
        .slide-in-from-bottom-4 {
          animation: slide-in-from-bottom-4 0.3s ease-out;
        }
        
        @keyframes slide-in-from-bottom-2 {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-from-bottom-4 {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
