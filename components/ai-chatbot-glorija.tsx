"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Volume2, VolumeX, Sun, Moon, Sparkles, Send } from "lucide-react"

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
    placeholders: {
      typeMessage: "Type your message...",
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
    placeholders: {
      typeMessage: "Typ je bericht...",
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
    placeholders: {
      typeMessage: "Typ dyn berjocht...",
    },
  },
}

export default function AIChatbotGlorija() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<keyof typeof translations>("en")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showLanguageSelector, setShowLanguageSelector] = useState(true)
  const [inputMessage, setInputMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const t = translations[currentLanguage]

  // Auto-greeting on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("glorija-greeted")
    if (!hasVisited && !isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        addMessage("bot", t.greeting, true)
        setHasGreeted(true)
        localStorage.setItem("glorija-greeted", "true")
      }, 3000) // Auto-open after 3 seconds

      return () => clearTimeout(timer)
    } else {
      setHasGreeted(true)
      setShowLanguageSelector(false)
    }
  }, [t.greeting, isOpen])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Play subtle sound when opening (optional)
  const playNotificationSound = () => {
    if (soundEnabled && typeof window !== "undefined") {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)

        gainNode.gain.setValueAtTime(0, audioContext.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.2)
      } catch (error) {
        console.log("Audio not supported")
      }
    }
  }

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

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addMessage("user", inputMessage)
      setInputMessage("")

      // Simple bot response
      simulateTyping(() => {
        addMessage(
          "bot",
          "Thank you for your message! For immediate assistance, please use our WhatsApp support or quick reply buttons above.",
        )
      })
    }
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)

    if (!isOpen) {
      playNotificationSound()

      if (!hasGreeted) {
        addMessage("bot", t.greeting, true)
        setHasGreeted(true)
        localStorage.setItem("glorija-greeted", "true")
      }
    }
  }

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
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
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] z-50 animate-in slide-in-from-bottom-4 duration-300">
          <div
            className={`w-full h-full rounded-2xl shadow-2xl border ${
              isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
            } flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Glorija</h3>
                    <p className="text-xs opacity-90">Housekeeping Assistant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Sound Toggle */}
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    title={soundEnabled ? "Disable sound" : "Enable sound"}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                  {/* Theme Toggle */}
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    title={isDarkMode ? "Light mode" : "Dark mode"}
                  >
                    {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    title="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
              {messages.map((message) => (
                <div key={message.id} className="animate-in slide-in-from-bottom-2 duration-300">
                  {message.type === "bot" ? (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div className="flex-1">
                        <div
                          className={`p-3 rounded-2xl rounded-tl-md max-w-xs ${
                            isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                          } shadow-sm`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>

                        {/* Language Selector */}
                        {message.isLanguageSelector && showLanguageSelector && (
                          <div className="mt-3 space-y-2">
                            <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                              {t.languagePrompt}
                            </p>
                            <div className="flex flex-col gap-2">
                              {languages.map((lang) => (
                                <button
                                  key={lang.code}
                                  onClick={() => handleLanguageSelect(lang.code as keyof typeof translations)}
                                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105 shadow-md"
                                >
                                  <span>{lang.flag}</span>
                                  <span>{lang.nativeName}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Quick Reply Buttons */}
                        {!showLanguageSelector && message.content === t.conversationPrompt && (
                          <div className="mt-3 grid grid-cols-1 gap-2">
                            {Object.entries(t.quickReplies).map(([key, label]) => (
                              <button
                                key={key}
                                onClick={() => handleQuickReply(key)}
                                className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-sm ${
                                  isDarkMode
                                    ? "bg-gray-600 text-white hover:bg-gray-500"
                                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                }`}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-2xl rounded-tr-md max-w-xs shadow-sm">
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-3 animate-in slide-in-from-bottom-2 duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div className={`p-3 rounded-2xl rounded-tl-md ${isDarkMode ? "bg-gray-700" : "bg-white"} shadow-sm`}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={`p-3 border-t ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder={t.placeholders.typeMessage}
                  className={`flex-1 px-3 py-2 rounded-full border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="p-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full hover:from-blue-600 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Powered by Glow Housekeeping ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
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

        /* Mobile Responsive Adjustments */
        @media (max-width: 640px) {
          .chatbot-container {
            right: 1rem;
            left: 1rem;
            width: calc(100vw - 2rem);
            max-width: 350px;
          }
        }
      `}</style>
    </>
  )
}
