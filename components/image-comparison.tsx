"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageComparisonProps {
  beforeImage: string
  afterImage: string
  title: string
  caption: string
  className?: string
}

export default function ImageComparison({
  beforeImage,
  afterImage,
  title,
  caption,
  className = "",
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-animate on mount to hint interactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderPosition(30)
      setTimeout(() => setSliderPosition(70), 800)
      setTimeout(() => setSliderPosition(50), 1600)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateSliderPosition(e.clientX)
      }
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault()
        updateSliderPosition(e.touches[0].clientX)
      }
    }

    const handleGlobalTouchEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)
      document.addEventListener("touchmove", handleGlobalTouchMove, { passive: false })
      document.addEventListener("touchend", handleGlobalTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchmove", handleGlobalTouchMove)
      document.removeEventListener("touchend", handleGlobalTouchEnd)
    }
  }, [isDragging])

  return (
    <div className={`group ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage || "/placeholder.svg"}
            alt={`${title} - After`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt={`${title} - Before`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Before Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-red-500 text-white hover:bg-red-500 font-semibold px-3 py-1">Before</Badge>
        </div>

        {/* After Badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-green-500 text-white hover:bg-green-500 font-semibold px-3 py-1">After</Badge>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 transition-all duration-300 ease-out"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-200">
            <ChevronLeft className="w-4 h-4 text-gray-600 -mr-1" />
            <ChevronRight className="w-4 h-4 text-gray-600 -ml-1" />
          </div>
        </div>

        {/* Drag Hint Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-6 bg-white rounded-b-2xl">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{caption}</p>
      </div>
    </div>
  )
}
