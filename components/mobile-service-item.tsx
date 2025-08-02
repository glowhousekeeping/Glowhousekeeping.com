"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface MobileServiceItemProps {
  title: string
  description: string
  price: string
  href: string
  icon: LucideIcon
  gradient: string
  onClick?: () => void
}

export default function MobileServiceItem({
  title,
  description,
  price,
  href,
  icon: Icon,
  gradient,
  onClick,
}: MobileServiceItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group block p-4 rounded-lg border border-slate-200 hover:border-emerald-300 bg-white hover:bg-emerald-50 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${gradient} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-slate-800 text-sm truncate">{title}</h3>
            <span className="text-xs font-semibold text-emerald-600 ml-2">{price}</span>
          </div>
          <p className="text-xs text-slate-600 line-clamp-1">{description}</p>
        </div>
      </div>
    </Link>
  )
}
