"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-karolina-grabowska-4239037.jpg-R5r64ltfSDkOmKYuxNJpmjw8wmyvsG.jpeg",
    alt: "Professional cleaning service in action",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-mvntlie-17085462.jpg-fqixxMmyxdUHVdqDaJ0fZ7Ar2q3jpa.jpeg",
    alt: "Crystal clear window cleaning",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-doPfwCDXXc8UHdMVYdAo5oP36vxbfy.png",
    alt: "Solar panel cleaning service",
  },
  {
    src: "/professional-office-cleaning.png",
    alt: "Professional office cleaning",
  },
  {
    src: "/modern-dutch-office-cleaning.png",
    alt: "Modern office cleaning in Netherlands",
  },
  {
    src: "/dutch-house-solar-panels.png",
    alt: "Dutch house with clean solar panels",
  },
]

export default function AutoScrollingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and care we bring to every cleaning project across the Netherlands
          </p>
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <p className="text-gray-800 font-semibold text-center">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation dots */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
