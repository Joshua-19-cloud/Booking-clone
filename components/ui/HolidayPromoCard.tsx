// components/ui/HolidayPromoCard.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HolidayPromoCardProps {
  tag: string
  title: string
  subtitle: string
  buttonText: string
  backgroundImage: string
  className?: string
}

export function HolidayPromoCard({
  tag,
  title,
  subtitle,
  buttonText,
  backgroundImage,
  className,
}: HolidayPromoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-md h-38 w-full sm:w-140 sm:ml-150 sm:-mt-34 mt-4",
        className
      )}
    >
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* content */}
      <div className="relative z-10 p-4 sm:p-6 text-white">
        <p className="text-xs uppercase tracking-wide opacity-90">{tag}</p>
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        <p className="text-sm mb-2 sm:mb-3">{subtitle}</p>
        <button
          type="button"
          className="bg-white text-blue-700 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-blue-100 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
