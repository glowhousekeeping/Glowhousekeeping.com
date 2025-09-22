"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getCurrentTranslations } from "./language-switcher"

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
  const [translations, setTranslations] = useState(getCurrentTranslations())
  const containerRef = useRef<HTMLDivElement>(null)

  // Update translations on global language change
  useEffect(() => {
    const handleGlobalLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations)
    }
    if (typeof window !== "undefined") {
      window.addEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)
      return () => {
        window.removeEventListener("globalLanguageChanged", handleGlobalLanguageChange as EventListener)
      }
    }
  }, [])

  const t = translations

  // Auto-animate slider on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderPosition(30)
      setTimeout(() => setSliderPosition(70), 800)
      setTimeout(() => setSliderPosition(50), 1600)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }
  const handleMouseMove = (e: React.MouseEvent) => isDragging && updateSliderPosition(e.clientX)
  const handleMouseUp = () => setIsDragging(false)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    updateSliderPosition(e.touches[0].clientX)
  }
  const handleTouchEnd = () => setIsDragging(false)

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => isDragging && updateSliderPosition(e.clientX)
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault()
        updateSliderPosition(e.touches[0].clientX)
      }
    }
    const handleGlobalTouchEnd = () => setIsDragging(false)

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
            alt={`${title} - ${t.after || "After"}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt={`${title} - ${t.before || "Before"}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Before Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-red-500 text-white hover:bg-red-500 font-semibold px-3 py-1">
            {t.before || "Before"}
          </Badge>
        </div>

        {/* After Badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-green-500 text-white hover:bg-green-500 font-semibold px-3 py-1">
            {t.after || "After"}
          </Badge>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 transition-all duration-300 ease-out"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-200">
            <ChevronLeft className="w-4 h-4 text-gray-600 -mr-1" />
            <ChevronRight className="w-4 h-4 text-gray-600 -ml-1" />
          </div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
      </div>

      <div className="p-6 bg-white rounded-b-2xl">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{caption}</p>
      </div>
    </div>
  )
}
