"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const GeniusSignIn = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border rounded-lg p-4 sm:p-6 bg-white shadow-sm gap-4">
      
      {/* Text Section */}
      <div className="flex flex-col gap-2 w-full sm:max-w-[60%] text-center sm:text-left">
        <h2 className="font-semibold text-black text-base sm:text-lg">
          Sign in to save 10% or more
        </h2>
        <p className="text-sm text-gray-700">
          Enjoy instant discounts on select stays and book faster with a Genius membership
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 justify-center sm:justify-start">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2">
            Sign in
          </Button>
          <button className="text-blue-600 text-sm hover:underline">
            Register
          </button>
        </div>
      </div>

      {/* Genius Image */}
      <div className="hidden sm:block">
        <Image
          src="/genius.png"
          alt="Genius Membership"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}

export default GeniusSignIn
