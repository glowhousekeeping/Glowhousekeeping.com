import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const posts = [
    {
      title: "Why Professional Cleaning is Essential for Businesses in the Netherlands",
      excerpt:
        "Discover how professional cleaning services can boost productivity, improve health, and create a positive impression for your business in the Netherlands.",
      slug: "professional-cleaning-essential",
      date: "January 15, 2024",
      readTime: "5 min read",
      author: "Glow Team",
      category: "Business Tips",
      image: "/placeholder-bpt2g.png",
    },
    {
      title: "5 Tips to Keep Your Solar Panels in Top Shape",
      excerpt:
        "Learn essential maintenance tips to maximize your solar panel efficiency and extend their lifespan with proper care and professional cleaning.",
      slug: "solar-panel-maintenance-tips",
      date: "January 10, 2024",
      readTime: "4 min read",
      author: "Glow Team",
      category: "Maintenance",
      image: "/solar-panel-cleaning.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cleaning Tips & Insights</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert advice, industry insights, and practical tips to help you maintain a clean, healthy, and productive
            environment.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white hover:bg-blue-600">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Stay Updated with Cleaning Tips</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest cleaning tips, industry insights, and special offers delivered to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
