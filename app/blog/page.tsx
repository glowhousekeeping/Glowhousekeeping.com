"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const blogPosts = [
    {
      id: 1,
      title: "Why Professional Cleaning is Essential for Your Health and Well-being",
      excerpt:
        "Discover how professional cleaning services go beyond aesthetics to create healthier living and working environments for you and your family.",
      author: "Glorija Beberina",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Health & Wellness",
      image: "/professional-cleaning-team.png",
      slug: "professional-cleaning-essential",
      featured: true,
    },
    {
      id: 2,
      title: "Solar Panel Maintenance: Tips for Maximum Efficiency",
      excerpt:
        "Learn how proper solar panel cleaning and maintenance can significantly improve your energy output and extend the life of your investment.",
      author: "Glorija Beberina",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Solar Care",
      image: "/solar-panel-cleaning.png",
      slug: "solar-panel-maintenance-tips",
      featured: false,
    },
    {
      id: 3,
      title: "The Ultimate Spring Cleaning Checklist for Dutch Homes",
      excerpt:
        "A comprehensive guide to spring cleaning that covers every room in your home, with tips specific to Dutch weather and lifestyle.",
      author: "Glorija Beberina",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Cleaning Tips",
      image: "/modern-dutch-office-cleaning.png",
      slug: "spring-cleaning-checklist",
      featured: false,
    },
    {
      id: 4,
      title: "Eco-Friendly Cleaning: Better for You and the Environment",
      excerpt:
        "Explore the benefits of eco-friendly cleaning products and methods that keep your home spotless while protecting the planet.",
      author: "Glorija Beberina",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Eco-Friendly",
      image: "/professional-cleaner-home.png",
      slug: "eco-friendly-cleaning",
      featured: false,
    },
    {
      id: 5,
      title: "Window Cleaning Secrets: Achieving Streak-Free Results",
      excerpt:
        "Professional techniques and tools for getting crystal-clear windows that let in maximum light and enhance your home's appearance.",
      author: "Glorija Beberina",
      date: "2023-12-20",
      readTime: "4 min read",
      category: "Window Care",
      image: "/professional-window-cleaning.png",
      slug: "window-cleaning-secrets",
      featured: false,
    },
    {
      id: 6,
      title: "Maintaining Clean Drains: Prevention is Better Than Cure",
      excerpt:
        "Simple maintenance tips to keep your drains flowing freely and avoid costly blockages and emergency repairs.",
      author: "Glorija Beberina",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "Maintenance",
      image: "/professional-drain-cleaning-service.jpg",
      slug: "drain-maintenance-tips",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Health & Wellness",
    "Solar Care",
    "Cleaning Tips",
    "Eco-Friendly",
    "Window Care",
    "Maintenance",
  ]

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Expert Insights
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Cleaning <span className="text-blue-600">Insights</span> & Tips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert advice, industry insights, and practical tips from Glorija Beberina and the Glow Housekeeping team.
              Learn how to maintain a cleaner, healthier, and more beautiful space.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts
        .filter((post) => post.featured)
        .map((post) => (
          <section key={post.id} className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge className="bg-blue-600 text-white">Featured Article</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{post.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800">{post.category}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest cleaning tips, industry insights, and expert advice from our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Stay Updated</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Subscribe to our newsletter for the latest cleaning tips, industry insights, and exclusive offers from
              Glow Housekeeping.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">Subscribe</Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                No spam, unsubscribe at any time. Founded by Glorija Beberina.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
