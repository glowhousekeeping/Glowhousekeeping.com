import type { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Target, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useTranslation("common")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2 mb-4">
              {t("about.title")}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("about.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("about.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">{t("about.ourStory")}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a passion for creating clean, healthy environments, Glow Housekeeping has grown from a
                  small local service to a trusted name across the Netherlands. Our journey began with a simple belief:
                  every space deserves to shine.
                </p>
                <p>
                  What sets us apart is our commitment to treating every client's space as if it were our own home. This
                  personal approach has earned us the trust of hundreds of satisfied customers who rely on us for their
                  most important cleaning needs.
                </p>
                <p>
                  Today, we continue to expand our services while maintaining the same level of care and attention to
                  detail that has made us the preferred choice for professional cleaning in Venlo, Limburg, and beyond.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/glorija-founder-actual.jpeg"
                  alt="Glorija, Founder of Glow Housekeeping"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Glorija - Founder & CEO</h3>
                    <p className="text-gray-600">
                      "We don't just clean — we care. Every space tells a story, and we're here to help it shine."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t("about.ourMission")}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our mission is to provide exceptional cleaning services that exceed expectations while building lasting
              relationships with our clients based on trust, reliability, and outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <Card className="text-center p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards in every cleaning session, ensuring consistent, professional
                  results.
                </p>
              </CardContent>
            </Card>

            {/* Trust */}
            <Card className="text-center p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-green-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our clients trust us with their most important spaces. We honor that trust with reliability and
                  integrity.
                </p>
              </CardContent>
            </Card>

            {/* Care */}
            <Card className="text-center p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-rose-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  We treat every space like our own home, bringing personal attention and care to every detail.
                </p>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="text-center p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly improve our methods and services to provide the best possible experience for our
                  clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t("about.meetTheTeam")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of cleaning professionals brings expertise, passion, and attention to detail to every
              project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/glorija-founder-actual.jpeg"
                    alt="Glorija - Founder"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white hover:bg-green-500">Founder</Badge>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Glorija</h3>
                  <p className="text-green-600 font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600 leading-relaxed">
                    Passionate about creating clean, healthy environments. Glorija founded Glow Housekeeping with a
                    vision to provide exceptional cleaning services across the Netherlands.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/professional-cleaner-home.png"
                    alt="Professional Team Member"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white hover:bg-blue-500">Senior Cleaner</Badge>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maria</h3>
                  <p className="text-blue-600 font-medium mb-3">Senior Cleaning Specialist</p>
                  <p className="text-gray-600 leading-relaxed">
                    With over 8 years of experience, Maria brings expertise in deep cleaning and specialized services.
                    Her attention to detail is unmatched.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/diverse-cleaning-team.png"
                    alt="Professional Team Member"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-500 text-white hover:bg-purple-500">Specialist</Badge>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Anna</h3>
                  <p className="text-purple-600 font-medium mb-3">Window & Solar Panel Specialist</p>
                  <p className="text-gray-600 leading-relaxed">
                    Anna specializes in window and solar panel cleaning, ensuring crystal-clear results and optimal
                    energy efficiency for our clients.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience the Glow Difference?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join our family of satisfied customers and discover why we're the trusted choice for professional cleaning
            services across the Netherlands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8">
              <Link href="/book-service">Get Your Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  }
}
