"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getCurrentTranslations } from "@/components/language-switcher"

export default function BlogPage() {
  const [translations, setTranslations] = useState(getCurrentTranslations())

  useEffect(() => {
    // Listen for global language changes
    const handleGlobalLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)

      return () => {
        window.removeEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)
      }
    }
  }, [])

  const t = translations

  const blogPosts = [
    {
      id: 1,
      title: "Professional Cleaning: Why It's Essential for Your Business",
      titleKey: "professionalCleaningEssential",
      excerpt:
        "Discover how professional cleaning services can transform your business environment and boost productivity.",
      excerptKey: "professionalCleaningExcerpt",
      image: "/professional-office-cleaning.png",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Business",
      categoryKey: "business",
      slug: "professional-cleaning-essential",
    },
    {
      id: 2,
      title: "Solar Panel Maintenance: Tips for Maximum Efficiency",
      titleKey: "solarPanelMaintenance",
      excerpt: "Learn the best practices for maintaining your solar panels to ensure optimal energy production.",
      excerptKey: "solarPanelExcerpt",
      image: "/solar-panel-cleaning.png",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Maintenance",
      categoryKey: "maintenance",
      slug: "solar-panel-maintenance-tips",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">{t.blog}</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.blogTitle}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.blogSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-600">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                        {t.readMore}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Coming Soon Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 rounded-3xl border-0 shadow-lg overflow-hidden border-dashed border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">More Articles Coming Soon</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're working on more helpful cleaning tips and insights. Stay tuned for updates!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Professional Cleaning Services?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Don't just read about it - experience the Glow difference for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
              <Link href="/book-service">{t.getFreeQuote}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">{t.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
