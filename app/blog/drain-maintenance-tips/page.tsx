import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, AlertTriangle, Droplets } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maintaining Clean Drains: Prevention is Better Than Cure | Glow Housekeeping",
  description:
    "Simple maintenance tips to keep your drains flowing freely and avoid costly blockages and emergency repairs.",
  keywords: "drain maintenance, drain cleaning, prevent clogs, plumbing maintenance, home maintenance",
}

export default function DrainMaintenanceTipsPage() {
  const relatedPosts = [
    {
      title: "The Ultimate Spring Cleaning Checklist for Dutch Homes",
      slug: "spring-cleaning-checklist",
      category: "Cleaning Tips",
    },
    {
      title: "Why Professional Cleaning is Essential for Your Health and Well-being",
      slug: "professional-cleaning-essential",
      category: "Health & Wellness",
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
            <Badge className="bg-purple-100 text-purple-800">Maintenance</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Maintaining Clean Drains: Prevention is Better Than Cure
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Glorija Beberina</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>December 15, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/professional-drain-cleaning-service.jpg"
              alt="Professional drain cleaning and maintenance service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Clogged drains are one of the most common and frustrating household problems. At Glow Housekeeping, we've
              seen countless cases where simple preventive maintenance could have saved homeowners from expensive
              emergency repairs. Here's everything you need to know about keeping your drains flowing freely.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">The Cost of Neglect</h3>
                    <p className="text-gray-700">
                      A blocked drain can lead to water damage, unpleasant odors, and even structural issues if left
                      untreated. Emergency plumbing services can cost hundreds of euros, while regular maintenance costs
                      just a fraction of that amount.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Your Drains</h2>
            <p className="text-gray-700 leading-relaxed">
              Before we dive into maintenance tips, it's important to understand what causes drain blockages:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    Kitchen Drains
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Grease and cooking oil buildup</li>
                    <li>• Food particles and debris</li>
                    <li>• Coffee grounds and eggshells</li>
                    <li>• Soap scum accumulation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-green-600" />
                    Bathroom Drains
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hair and soap buildup</li>
                    <li>• Toothpaste and dental floss</li>
                    <li>• Mineral deposits from hard water</li>
                    <li>• Cotton swabs and hygiene products</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Daily Prevention Habits</h2>
            <p className="text-gray-700 leading-relaxed">
              The best way to maintain clean drains is to prevent problems before they start. Here are simple daily
              habits that make a big difference:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Use Drain Screens</h3>
                  <p className="text-gray-700">
                    Install mesh screens or strainers in all sinks, showers, and tubs. These catch hair, food particles,
                    and other debris before they enter your pipes. Clean them regularly—it takes just seconds but
                    prevents major problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Never Pour Grease Down the Drain</h3>
                  <p className="text-gray-700">
                    Cooking oil and grease solidify as they cool, coating your pipes and trapping other debris. Instead,
                    pour grease into a container, let it solidify, and dispose of it in the trash.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Run Hot Water After Each Use</h3>
                  <p className="text-gray-700">
                    After using your sink, run hot water for 30 seconds to help flush away any soap, grease, or debris.
                    This simple habit keeps pipes cleaner and prevents buildup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Be Mindful of What Goes Down</h3>
                  <p className="text-gray-700">
                    Even with a garbage disposal, avoid putting fibrous vegetables (celery, asparagus), starchy foods
                    (pasta, rice), or hard items (bones, fruit pits) down the drain. These can cause serious blockages.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Weekly Maintenance Routine</h2>
            <p className="text-gray-700 leading-relaxed">
              Set aside a few minutes each week for these simple maintenance tasks:
            </p>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900">Natural Drain Cleaner</h3>
                  <p className="text-gray-700">
                    Once a week, pour this eco-friendly solution down each drain to keep them fresh and clear:
                  </p>
                  <ol className="space-y-2 text-gray-700 ml-4">
                    <li>1. Pour 1/2 cup of baking soda down the drain</li>
                    <li>2. Follow with 1 cup of white vinegar</li>
                    <li>3. Let it fizz for 15 minutes</li>
                    <li>4. Flush with hot water for 1 minute</li>
                  </ol>
                  <p className="text-gray-700 text-sm italic">
                    This natural solution breaks down buildup without harsh chemicals that can damage pipes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monthly Deep Cleaning</h2>
            <p className="text-gray-700 leading-relaxed">
              Once a month, give your drains extra attention with these deeper cleaning methods:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Remove and clean drain stoppers:</strong> Unscrew or pull out stoppers and clean away any
                  accumulated hair, soap, and debris
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Use a drain snake:</strong> For bathroom drains, use a plastic drain snake to pull out hair
                  and buildup from deeper in the pipe
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Check overflow drains:</strong> Don't forget the overflow holes in sinks and tubs—these can
                  harbor bacteria and odors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Inspect for leaks:</strong> While you're at it, check under sinks for any signs of moisture or
                  leaks
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Warning Signs of Trouble</h2>
            <p className="text-gray-700 leading-relaxed">
              Even with good maintenance, problems can develop. Watch for these warning signs:
            </p>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Slow drainage:</strong> Water taking longer than usual to drain is an early warning sign
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Gurgling sounds:</strong> Strange noises from drains indicate air trapped by blockages
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Unpleasant odors:</strong> Bad smells suggest buildup of organic matter in your pipes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Multiple clogged drains:</strong> If several drains are slow, you may have a main line
                      issue
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When to Call a Professional</h2>
            <p className="text-gray-700 leading-relaxed">
              While regular maintenance prevents most problems, some situations require professional help:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Persistent clogs that don't respond to home remedies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Multiple drains backing up simultaneously</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Water backing up into other fixtures</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Sewage odors or visible sewage backup</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Old pipes that may need inspection or replacement</span>
              </li>
            </ul>

            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white mt-12">
              <CardContent className="pt-8 pb-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Need Professional Drain Maintenance?</h3>
                  <p className="text-blue-50">
                    Glow Housekeeping offers comprehensive drain cleaning and maintenance services. We use eco-friendly
                    methods and professional equipment to keep your drains flowing freely.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" variant="secondary" asChild className="rounded-full">
                      <Link href="/book-service">Book Maintenance Service</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="rounded-full bg-white/10 hover:bg-white/20">
                      <Link href="/contact">Get Expert Advice</Link>
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
