import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolarPanelMaintenanceTipsPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 pb-20">
        <header className="mb-12">
          <Badge className="bg-green-600 text-white hover:bg-green-600 mb-4">Maintenance</Badge>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            5 Tips to Keep Your Solar Panels in Top Shape
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              January 10, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />4 min read
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Glow Team
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/dutch-house-solar-panels.png"
              alt="Clean solar panels on roof"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Solar panels are a significant investment in your home's energy future. With proper maintenance, they can
            provide clean energy for 25+ years. Here are five essential tips to maximize their efficiency and extend
            their lifespan.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Regular Professional Cleaning</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dust, bird droppings, leaves, and other debris can significantly reduce your solar panels' efficiency. In
            the Netherlands, where weather conditions can vary dramatically, regular cleaning is essential for optimal
            performance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Professional cleaning can improve efficiency by up to 25%. While rain helps, it's not enough to remove all
            contaminants, especially stubborn substances like bird droppings or tree sap.
          </p>

          {/* Embedded YouTube Video */}
          <div className="my-12">
            <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Solar Panel Cleaning Demonstration"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Watch: Professional solar panel cleaning techniques
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Monitor Performance Regularly</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Keep track of your solar panels' energy production through your monitoring system. A sudden drop in
            performance could indicate cleaning needs, equipment issues, or shading problems.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Most modern solar systems come with apps that let you monitor performance in real-time. Set up alerts for
            significant performance drops to address issues quickly.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Trim Surrounding Vegetation</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Trees and bushes that cast shadows on your panels can dramatically reduce their efficiency. Even partial
            shading can impact the entire system's performance due to how solar panels are wired together.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Regularly trim branches and vegetation around your solar installation. Consider the growth patterns of
            nearby plants when planning your solar installation to minimize future shading issues.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Schedule Professional Inspections</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Annual professional inspections can catch potential issues before they become expensive problems.
            Technicians check for loose connections, damaged panels, inverter issues, and mounting system integrity.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            In the Netherlands' variable climate, thermal cycling and weather exposure can affect system components over
            time. Professional inspections ensure everything remains secure and functional.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Keep Detailed Maintenance Records</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Document all maintenance activities, performance data, and any issues. This information is valuable for
            warranty claims, insurance purposes, and optimizing your system's performance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Good records also help identify patterns in performance or maintenance needs, allowing you to proactively
            address recurring issues.
          </p>

          <div className="bg-green-50 rounded-2xl p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Solar Panel Cleaning Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Visual inspection for damage",
                "Gentle cleaning with specialized equipment",
                "Performance testing before and after",
                "Inverter and connection checks",
                "Mounting system inspection",
                "Detailed cleaning report",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Maximize Your Solar Investment?</h3>
            <p className="text-gray-700 mb-6">
              Professional solar panel cleaning and maintenance can significantly improve your system's efficiency and
              lifespan. Contact Glow Housekeeping for expert solar panel care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-600 hover:bg-green-700 rounded-full">
                <Link href="/services/solar-panel-cleaning">Solar Panel Service</Link>
              </Button>
              <Button variant="outline" className="rounded-full bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
