"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Volume2, VolumeX, Sun, Moon, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

interface Message {
  id: string;
  type: "bot" | "user" | "system";
  content: string;
  timestamp: Date;
  isLanguageSelector?: boolean;
  isQuickReply?: boolean;
}

interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: "nl", name: "Dutch", flag: "🇳🇱", nativeName: "Nederlands" },
  { code: "fy", name: "Frisian", flag: "🏴", nativeName: "Frysk" },
  { code: "en", name: "English", flag: "🇬🇧", nativeName: "English" },
];

export default function AIChatbotGlorija() {
  const { t } = useTranslation("common"); // <-- pull text from common.json
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);
  const [showAutoGreeting, setShowAutoGreeting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-show greeting bubble on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("glorija-greeted");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowAutoGreeting(true);
        setTimeout(() => setShowAutoGreeting(false), 8000);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setHasGreeted(true);
      setShowLanguageSelector(false);
    }
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (type: "bot" | "user" | "system", content: string, isLanguageSelector = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      isLanguageSelector,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleLanguageSelect = (langCode: string) => {
    i18n.changeLanguage(langCode); // change i18n language
    setShowLanguageSelector(false);
    setMessages([]);
    simulateTyping(() => {
      addMessage("bot", t("conversationPrompt")); // translated prompt
    });
  };

  const handleQuickReply = (action: string) => {
    addMessage("user", t(`quickReplies.${action}`));
    simulateTyping(() => {
      addMessage("bot", t(`responses.${action}`));

      // Open links for specific actions
      if (action === "quote") window.open("/book-service", "_blank");
      if (action === "booking") window.open("https://calendar.app.google/RU6yxXUM6GZED7Nm7", "_blank");
      if (action === "whatsapp") window.open("https://wa.me/31610756699", "_blank");
      if (action === "services") window.open("/services/general-cleaning", "_blank");
    });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowAutoGreeting(false);
    if (!hasGreeted && !isOpen) {
      addMessage("bot", t("greeting"), true);
      setHasGreeted(true);
      localStorage.setItem("glorija-greeted", "true");
    }
  };

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
                <p className="text-sm text-gray-800 font-medium mb-1">{t("greeting")}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{t("conversationPrompt")}</p>
              </div>
              <button onClick={() => setShowAutoGreeting(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Chatbot Icon */}
        <button onClick={toggleChatbot} className={`relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${isDarkMode ? "bg-gradient-to-r from-blue-600 to-green-600" : "bg-gradient-to-r from-blue-500 to-green-500"}`}>
          <div className="flex items-center justify-center w-full h-full text-white">{isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}</div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] z-50 animate-in slide-in-from-bottom-4 duration-300 chatbot-container">
          <div className={`w-full h-full rounded-2xl shadow-2xl border ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} flex flex-col overflow-hidden`}>
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
                        <div className={`p-3 rounded-2xl rounded-tl-md max-w-xs ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"} shadow-sm`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>

                        {/* Language Selector */}
                        {message.isLanguageSelector && showLanguageSelector && (
                          <div className="mt-3 space-y-2">
                            <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{t("languagePrompt")}</p>
                            <div className="flex flex-col gap-2">
                              {languages.map((lang) => (
                                <button key={lang.code} onClick={() => handleLanguageSelect(lang.code)} className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105 shadow-md">
                                  <span>{lang.flag}</span>
                                  <span>{lang.nativeName}</span>
                                </button>
                              ))}
                            </div>
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
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
