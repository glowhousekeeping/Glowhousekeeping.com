"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "/thank-you-note-1.png",
    alt: "Thank you note from satisfied client",
    caption: "Heartfelt appreciation from our clients",
  },
  {
    src: "/client-appreciation-gift.png",
    alt: "Client appreciation gift",
    caption: "Thoughtful gifts from happy customers",
  },
  {
    src: "/positive-client-review.png",
    alt: "Positive client review",
    caption: "5-star reviews and testimonials",
  },
  {
    src: "/cleaning-transformation.png",
    alt: "Before and after cleaning transformation",
    caption: "Amazing transformation results",
  },
  {
    src: "/client-testimonial-card.png",
    alt: "Client testimonial card",
    caption: "Personal testimonials from clients",
  },
  {
    src: "/holiday-appreciation-card.png",
    alt: "Holiday appreciation card",
    caption: "Holiday greetings from clients",
  },
  {
    src: "/professional-cleaner-home.png",
    alt: "Professional cleaner at work",
    caption: "Our team in action",
  },
  {
    src: "/professional-office-cleaning.png",
    alt: "Professional office cleaning",
    caption: "Commercial cleaning excellence",
  },
]

export default function AutoScrollingGallery() {
  return (
    <div className="py-8">
      <div className="scroll-container">
        <div className="scroll-content">
          {/* First set of images */}
          {galleryImages.map((image, index) => (
            <div key={`first-${index}`} className="inline-block mx-4 group">
              <div className="relative w-80 h-60 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless scrolling */}
          {galleryImages.map((image, index) => (
            <div key={`second-${index}`} className="inline-block mx-4 group">
              <div className="relative w-80 h-60 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
