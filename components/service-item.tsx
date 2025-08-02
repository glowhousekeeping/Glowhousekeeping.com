import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ServiceItemProps {
  title: string
  description: string
  price: string
  href: string
  icon: LucideIcon
  gradient: string
}

export default function ServiceItem({ title, description, price, href, icon: Icon, gradient }: ServiceItemProps) {
  return (
    <Link
      href={href}
      className="group block p-4 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-lg ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 text-sm">
              {title}
            </h3>
            <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{price}</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 group-hover:text-slate-700 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
