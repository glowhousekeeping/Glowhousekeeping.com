"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab5bebcd-e2eb-48ee-9462-738915c244f8-4Dwql9zDm9EDiKrC9oO2IKDNAyfsmh.jpeg",
    alt: "Modern dishwasher cleaning result",
    caption: "Spotless Kitchen Appliances",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7622768b-5906-4ee9-b67b-73bcf55768f6-xlagS1u7tsPAtvINBfWA24glCTyxUO.jpeg",
    alt: "Perfect floor and baseboard cleaning",
    caption: "Pristine Floor Detailing",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-mastercowley-713297.jpg-kOCc9hVm8Rd9WziREzjPj6K0039xzo.jpeg",
    alt: "Professional window cleaning service",
    caption: "Crystal Clear Windows",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5b98614e-1817-413f-8d40-fdf73b446a10-3tLl9ZqykLhbg3Tz0svqDhY7mOgKks.jpeg",
    alt: "Sparkling clean modern shower",
    caption: "Luxurious Shower Spaces",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ea253628-dd30-4009-a220-fc27324c6b1b-Y573GFY1IwMOpGnj8d0TecRo5XyHsK.jpeg",
    alt: "Clean shower enclosure with glass doors",
    caption: "Immaculate Bathroom Details",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-mizunokozuki-13735879.jpg-8u1K1RMNxspMSz8XhCPBWn58lReD9I.jpeg",
    alt: "Professional appliance cleaning",
    caption: "Expert Equipment Care",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d81f7e3-9f50-4d6f-b3eb-26b06ca6abd1-E5NWVqGtWeSn9Z0BL71PsTlKxijs0D.jpeg",
    alt: "Pristine white bathtub",
    caption: "Gleaming Bathtub Restoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/40c8e121-0628-4a1a-bd35-7d8be957981b-YUdzELnYyZM5WDgGoQgwroJ8T6jsSV.jpeg",
    alt: "Sparkling chrome fixtures",
    caption: "Polished Chrome Perfection",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/93c2ecae-0a6e-4006-9d11-067e21836a15-Gcq2il96rqYTs4VCeYsmLrhuQ0JFVs.jpeg",
    alt: "Clean bathroom vanity area",
    caption: "Modern Vanity Excellence",
  },
]

export default function AutoScrollingGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    let isPaused = false

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed

        // Reset position when we've scrolled past the first set of images
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }

        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">
              Professional Results
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Professional Results</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A glimpse into the spaces we've transformed — spotless, glowing, and beautifully organized.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mt-6"></div>
        </div>
      </div>

      {/* Desktop Gallery */}
      <div className="hidden md:block relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide"
          style={{ width: "100vw", paddingLeft: "2rem", paddingRight: "2rem" }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="flex-shrink-0 group cursor-pointer"
              style={{ width: "320px" }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={320}
                    height={250}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {image.caption}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Gallery - Stacked Grid */}
      <div className="md:hidden px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={320}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to See Your Space Transformed?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These results speak for themselves. Experience the same level of professional cleaning excellence in your
            own space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Your Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
