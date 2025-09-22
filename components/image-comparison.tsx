"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface ImageComparisonProps {
  beforeImage: string
  afterImage: string
  title: string
  description: string
}

export default function ImageComparison({ beforeImage, afterImage, title, description }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="relative h-80 image-comparison">
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image src={beforeImage || "/placeholder.svg"} alt="Before cleaning" fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Before</span>
          </div>
        </div>

        {/* After Image */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image src={afterImage || "/placeholder.svg"} alt="After cleaning" fill className="object-cover" />
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">After</span>
          </div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-0 w-full h-1 bg-white rounded-lg appearance-none cursor-pointer z-10 transform -translate-y-1/2"
          style={{
            background: `linear-gradient(to right, transparent ${sliderPosition}%, white ${sliderPosition}%)`,
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
