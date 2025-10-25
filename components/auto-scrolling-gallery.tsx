"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AutoScrollingGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // Reduced speed for smoother animation

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition

        // Reset scroll position when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
      }
    }

    const intervalId = setInterval(scroll, 20)

    return () => clearInterval(intervalId)
  }, [])

  const images = [
    { src: "/kitchen-after-new.jpeg", alt: "Modern kitchen after professional cleaning" },
    { src: "/workspace-after-new.jpeg", alt: "Clean workspace after professional service" },
    { src: "/entrance-after-new.jpeg", alt: "Pristine entrance after cleaning" },
    { src: "/clean-kitchen-detail-1.jpeg", alt: "Kitchen detail showing professional results" },
    { src: "/clean-kitchen-detail-2.jpeg", alt: "Another view of professionally cleaned kitchen" },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1013-csmlb9AsSbeqDrppZI1GgAIoZg7jEq.jpeg",
      alt: "Sparkling clean office space",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1009%20%281%29-8OOXzLVPxBdmkMOLla9HkXEQVQiJDD.jpeg",
      alt: "Spotless kitchen transformation",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1011-3IwnA2h3VJCNzab5ViMXeDe6aGP437.jpeg",
      alt: "Pristine bathroom cleaning",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1015-qvmtEMC3MoLS495sCf4LDTrDwyCM1i.jpeg",
      alt: "Shining sink and fixtures",
    },
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Transformations</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          See the remarkable difference professional cleaning makes. These are real results from our satisfied clients.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scrollbar-hide transition-all duration-300 ease-linear"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 h-64 relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
