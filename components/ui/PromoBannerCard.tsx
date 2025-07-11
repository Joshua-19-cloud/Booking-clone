// components/PromoBannerCard.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PromoBannerCardProps {
  title: string
  subtitle: string
  buttonText: string
  image: string
}

export function PromoBannerCard({
  title,
  subtitle,
  buttonText,
  image,
}: PromoBannerCardProps) {
  return (
    <div className="px-4 sm:pl-[43px] w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full max-w-[540px] border border-gray-200 shadow-lg rounded-xl bg-white mx-auto">
        
        {/* Text Content */}
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mt-1">{subtitle}</p>
          <button className="mt-3 px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            {buttonText}
          </button>
        </div>

        {/* Image */}
        <div className="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto flex justify-center">
          <img
            src={image}
            alt="promo"
            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  )
}
