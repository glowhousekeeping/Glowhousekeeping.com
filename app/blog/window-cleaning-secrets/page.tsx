import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Window Cleaning Secrets: Achieving Streak-Free Results | Glow Housekeeping",
  description:
    "Professional techniques and tools for getting crystal-clear windows that let in maximum light and enhance your home's appearance.",
  keywords: "window cleaning, streak-free windows, professional cleaning, glass cleaning, window maintenance",
}

export default function WindowCleaningSecretsPage() {
  const relatedPosts = [
    {
      title: "Eco-Friendly Cleaning: Better for You and the Environment",
      slug: "eco-friendly-cleaning",
      category: "Eco-Friendly",
    },
    {
      title: "The Ultimate Spring Cleaning Checklist for Dutch Homes",
      slug: "spring-cleaning-checklist",
      category: "Cleaning Tips",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-8">
          {/* Meta Info */}
          <div className="space-y-4">
            <Badge className="bg-blue-100 text-blue-800">Window Care</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Window Cleaning Secrets: Achieving Streak-Free Results
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Glorija Beberina</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>December 20, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>4 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/professional-window-cleaning.png"
              alt="Professional window cleaning achieving streak-free results"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Clean, streak-free windows can transform the appearance of your home, letting in more natural light and
              providing crystal-clear views. At Glow Housekeeping, we've perfected the art of window cleaning through
              years of professional experience. Here are our insider secrets for achieving perfectly clean windows every
              time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Right Tools Make All the Difference</h2>
            <p className="text-gray-700 leading-relaxed">
              Professional window cleaners don't achieve their results by magic—they use the right tools. Here's what
              you need:
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Squeegee:</strong> A professional-grade squeegee with a sharp rubber blade is essential
                      for streak-free results
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Microfiber cloths:</strong> These lint-free cloths are perfect for wiping edges and
                      polishing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Bucket and scrubber:</strong> For applying cleaning solution evenly across the glass
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Extension pole:</strong> For safely reaching high windows without a ladder
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Perfect Cleaning Solution</h2>
            <p className="text-gray-700 leading-relaxed">
              You don't need expensive commercial cleaners to get professional results. Our favorite solution is simple
              and effective:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Mix a few drops of dish soap with warm water in your bucket</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>For extra shine, add a splash of white vinegar</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Avoid using too much soap—it can leave residue and cause streaking</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Professional Technique</h2>
            <p className="text-gray-700 leading-relaxed">
              The secret to streak-free windows isn't just what you use, but how you use it. Follow these steps:
            </p>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Step 1: Prepare the Surface</h3>
                <p className="text-gray-700">
                  Remove dust, cobwebs, and loose dirt with a dry cloth or brush. This prevents muddy streaks when you
                  apply the cleaning solution.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Step 2: Apply the Solution</h3>
                <p className="text-gray-700">
                  Dip your scrubber in the cleaning solution and apply it generously to the window, working from top to
                  bottom. Make sure the entire surface is wet.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Step 3: Squeegee Technique</h3>
                <p className="text-gray-700">
                  Start at the top corner and pull the squeegee across in a reverse-S pattern. Wipe the blade clean
                  after each stroke. Overlap each stroke slightly to avoid leaving lines.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Step 4: Detail Work</h3>
                <p className="text-gray-700">
                  Use a clean microfiber cloth to wipe the edges and corners where the squeegee couldn't reach. This
                  prevents water from dripping down and creating streaks.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Mistakes to Avoid</h2>
            <p className="text-gray-700 leading-relaxed">
              Even with the right tools and technique, these common mistakes can ruin your results:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>
                  <strong>Cleaning in direct sunlight:</strong> The solution dries too quickly, leaving streaks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>
                  <strong>Using paper towels:</strong> They leave lint and don't absorb as well as microfiber
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>
                  <strong>Neglecting the frames:</strong> Dirty frames can transfer grime back onto clean glass
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>
                  <strong>Using a dull squeegee blade:</strong> Replace blades regularly for best results
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When to Call the Professionals</h2>
            <p className="text-gray-700 leading-relaxed">
              While these techniques work great for regular maintenance, some situations call for professional help:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>High or hard-to-reach windows that require special equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Windows with stubborn stains, paint, or mineral deposits</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Large commercial properties with many windows</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>When you simply don't have the time or energy for a thorough job</span>
              </li>
            </ul>

            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white mt-12">
              <CardContent className="pt-8 pb-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Ready for Crystal-Clear Windows?</h3>
                  <p className="text-blue-50">
                    Let Glow Housekeeping's professional team handle your window cleaning needs. We bring the expertise,
                    equipment, and eco-friendly solutions to make your windows sparkle.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" variant="secondary" asChild className="rounded-full">
                      <Link href="/book-service">Book Window Cleaning</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="rounded-full bg-white/10 hover:bg-white/20">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-16 border-t">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300"
                >
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
