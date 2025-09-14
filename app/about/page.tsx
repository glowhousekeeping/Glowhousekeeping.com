import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Our Story: Passion for <span className="text-blue-600">Perfection</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded on the belief that every space deserves to shine, Glow Housekeeping has been transforming
                  homes and offices across the Netherlands with dedication, care, and an unwavering commitment to
                  excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/cleaning-company-founder-team.png"
                alt="Glow Housekeeping founder and team"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder - Enhanced Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Founder Photo */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-36-45%20%281%29%20-%20Copy.jpg-tyznK0h4KEFdNsuZh2flOllKICk6a0.jpeg"
                  alt="Glorija Gbeberina, Founder & CEO of Glow Housekeeping"
                  width={500}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Founded</p>
                  <p className="text-2xl font-bold text-rose-600">2024</p>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium">
                  Founder & CEO of Glow Housekeeping
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Glorija Gbeberina</h3>
              </div>

              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Glorija Gbeberina is the founder and CEO of Glow Housekeeping, a company built on trust, transparency,
                  and a passion for helping others live and work in clean, uplifting spaces.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Originally from Latvia, Glorija moved to the Netherlands in 2022. After spending a year working in a
                  warehouse—a job that left her unfulfilled—she took a step back to ask herself a simple but powerful
                  question:
                </p>

                <blockquote className="border-l-4 border-rose-400 pl-6 italic text-gray-600 bg-rose-50 py-4 rounded-r-lg">
                  "What do I enjoy doing, and how can I use it to help others?"
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  The answer was clear—cleaning. It wasn't just a task to her; it was a meaningful service. The ability
                  to transform a space and bring comfort through cleanliness gave her purpose and energy.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  She began her journey in professional cleaning with a company that supported elderly and chronically
                  ill clients. There, she found joy and connection in her work and was deeply appreciated by the clients
                  she served.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  However, witnessing unethical practices behind the scenes—where management treated staff unfairly and
                  misled vulnerable clients—motivated Glorija to take a stand.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  In 2024, she launched Glow Housekeeping with a mission:{" "}
                  <strong className="text-rose-600">
                    To create a cleaning service where integrity, care, and professionalism come first—for both clients
                    and staff.
                  </strong>
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Today, Glow Housekeeping proudly serves a diverse range of clients—from families and busy
                  professionals to offices and commercial spaces—bringing not just cleanliness, but peace of mind. With
                  Glorija's leadership, the company is grounded in compassion, honesty, and a deep belief in doing
                  things the right way.
                </p>
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
            <div className="max-w-4xl mx-auto px-8">
              <div className="text-6xl text-rose-300 mb-6">"</div>
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed mb-8">
                When I clean, you see the difference—and that's what I love.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-rose-400"></div>
                <cite className="text-rose-600 font-medium not-italic">Glorija Gbeberina</cite>
                <div className="w-12 h-px bg-rose-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appreciation from Our Clients */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Appreciation from Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We don't just clean — we connect. Over the years, our clients have shown their appreciation through
              heartfelt gifts, messages, and moments we'll never forget. Here are a few that remind us why we love what
              we do.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sinterklaas Gift */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-36-47.jpg-eVurb5n6d0NeCETDB7WHR3qNwEH9FP.jpeg"
                  alt="Sinterklaas gift from grateful client"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "A special Sinterklaas surprise - Dutch traditions shared with love!"
              </p>
            </div>

            {/* Flowers and Treats */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-39-50.jpg-BqMYb9gWwM8uy9YxMoeClxUji8GDvf.jpeg"
                  alt="Beautiful flowers and treats from client"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "Fresh flowers and homemade treats - pure thoughtfulness!"
              </p>
            </div>

            {/* Gift Box with Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-24-19.jpg-w9zd7wxka1BW2WWH7zuUTT2aSxLLH4.jpeg"
                  alt="Thoughtful gift box with personal card"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "Beautifully wrapped with a personal touch - so thoughtful!"
              </p>
            </div>

            {/* Rainbow Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-44-46.jpg-trb74pzhsybyBOXoYarFcADyAu86Bp.jpeg"
                  alt="Colorful rainbow card specially for you"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "Rainbows and sparkles - this card brightened our whole week!"
              </p>
            </div>

            {/* Children's Handmade Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-36-46%20%281%29.jpg-E6TMfXqM79PUJG7ui6KwDWQQHp4zyh.jpeg"
                  alt="Handmade congratulations card from children"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "A handmade card from the kids - these moments melt our hearts!"
              </p>
            </div>

            {/* Bakery Note */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-48-06.jpg-4v1ckuPInUQw42sK6Z45PFSPCpD2Tu.jpeg"
                  alt="Sweet note from local bakery"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "Even the local bakery knows us - 'Just eat the pie!' 😊"
              </p>
            </div>

            {/* Christmas Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-44-45%20-%20Copy.jpg-I2N3qSd49hmpeOXyPlqNqKoNcUYb6v.jpeg"
                  alt="Heartfelt Christmas card with personal message"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "Holiday wishes that warm the heart - family connections matter!"
              </p>
            </div>

            {/* Celebrations and Gifts */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-07-24-23-36-46.jpg-u9pdSPaWr3wpzroSoSCAxjOkrFOYpd.jpeg"
                  alt="Celebrations chocolates and greeting card collection"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "Celebrations chocolates and sweet cards - pure appreciation!"
              </p>
            </div>

            {/* Thank You Message Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center h-48 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl mb-4">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">💝</div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Every Gift Tells a Story</p>
                  <p className="text-gray-600 text-sm">
                    Each token of appreciation represents a relationship built on trust, care, and genuine connection.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 font-medium text-center italic">
                "These moments remind us why we do what we do - it's about people, not just cleaning!"
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Family of Happy Clients?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the personal care and professional excellence that creates these meaningful connections. Let
                us show you the Glow difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 rounded-full px-8">
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-transparent border-amber-300 text-amber-600 hover:bg-amber-50"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide, ensuring that we consistently
              deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  We genuinely love what we do. This passion shows in the care and attention we bring to every cleaning
                  task, no matter how big or small.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We set high standards for ourselves and consistently strive to exceed expectations, delivering results
                  that make our clients proud.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that inviting someone into your space requires trust. We honor that trust through
                  reliability, honesty, and respect.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're not just a service provider—we're part of the communities we serve, building lasting
                  relationships with our clients and team members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Approach: Like It's Our Own Home</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  This isn't just a slogan—it's the principle that guides every aspect of our work. When we clean your
                  space, we bring the same care and attention we'd want in our own homes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Touch</h3>
                    <p className="text-gray-600">
                      We take time to understand your specific needs and preferences, customizing our approach for each
                      client.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Respect for Your Space</h3>
                    <p className="text-gray-600">
                      We treat your belongings with care, respect your privacy, and work around your schedule and
                      preferences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Every job is completed to our high standards, with quality checks to ensure your complete
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-cleaner-home.png"
                alt="Professional cleaning with care"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We're committed to providing more than just cleaning services. We're here to give you peace of mind, save
            you time, and create spaces where you can focus on what matters most to you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                If you're not completely satisfied, we'll make it right—no questions asked.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured & Bonded</h3>
              <p className="text-gray-600">
                Complete peace of mind with comprehensive insurance coverage for your protection.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600">
                Safe for your family, pets, and the environment—without compromising on effectiveness.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
