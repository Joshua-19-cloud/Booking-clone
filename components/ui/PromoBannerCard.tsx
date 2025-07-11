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
    <div className="sm:pl-[43px] pl-4">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 w-full max-w-[540px] border border-gray-200 shadow-lg rounded-xl bg-white">
        {/* Text Content */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
          <button className="mt-3 px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            {buttonText}
          </button>
        </div>

        {/* Image on the right */}
        <img
          src={image}
          alt="promo"
          className="w-[100px] h-[100px] object-cover rounded-md mt-4 sm:mt-0 sm:ml-4"
        />
      </div>
    </div>
  )
}
