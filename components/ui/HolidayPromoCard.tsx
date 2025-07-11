// components/ui/HolidayPromoCard.tsx

"use client"

interface HolidayPromoCardProps {
  tag: string
  title: string
  subtitle: string
  buttonText: string
  backgroundImage: string
}

export function HolidayPromoCard({
  tag,
  title,
  subtitle,
  buttonText,
  backgroundImage,
}: HolidayPromoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-md h-38 w-full sm:w-140 sm:ml-150 sm:-mt-34 mt-4">
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 p-4 sm:p-6 text-white">
        <p className="text-xs">{tag}</p>
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        <p className="text-sm mb-2 sm:mb-3">{subtitle}</p>
        <button className="bg-white text-blue-700 px-2 py-1 rounded hover:bg-blue-100 text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
