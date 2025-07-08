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
    <div className="pl-[43px]">
  <div className="flex justify-between items-center p-4 w-[540px] border border-gray-200 shadow-lg rounded-xl bg-white">
    {/* Text Content */}
    <div>
      <h3 className="text-xl font-bold text-gray-900">Quick escape, quality time</h3>
      <p className="text-sm text-gray-600">Save up to 20% with a Getaway Deal</p>
      <button className="mt-3 px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-md">
        Save on stays
      </button>
    </div>

    {/* Image on the right */}
    <img
      
      src="/travel.png"
      alt="promo"
      className="w-[100px] h-[100px] object-cover rounded-md ml-4"
    />
  </div>
</div>


  )
}
