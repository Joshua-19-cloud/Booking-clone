"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CalendarIcon, UsersIcon } from "lucide-react"
import { useState } from "react"
import NavButton from "@/components/NavButton"
import Preferences from "@/components/Preferences"
import HeroSection from "@/components/ui/HeroSection"
import { PromoBannerCard } from "@/components/ui/PromoBannerCard"
import { HolidayPromoCard } from "@/components/ui/HolidayPromoCard"


export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState(2)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <header className="bg-[#003580] px-38 py-4 flex flex-col gap-3">
        {/* Top Right Buttons */}
        <div className="w-full flex items-center justify-end gap-3">
          <Button variant="ghost" className="text-white text-base hover:bg-white/10">
            INR
          </Button>

          <img src="/flag1.png" alt="India Flag" className="w-7 h-7 rounded-full" />
          <img src="/mark.png" alt="Question mark" className="w-10 h-10 rounded-full filter invert" />

          <Button variant="ghost" className="text-white text-base hover:bg-white/10">
            List your property
          </Button>

          <div className="flex items-center gap-2">
            <Button className="bg-white text-blue-600 text-sm px-3 py-2 hover:bg-blue-100 border border-blue-600 rounded-md">
              Register
            </Button>
            <Button className="bg-white text-blue-600 text-sm px-4 py-2 hover:bg-blue-100 border border-blue-600 rounded-md">
              Sign in
            </Button>
          </div>
        </div>

        {/* Logo and NavButtons */}
        <div className="fixed top-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between px-34 py-4 z-50">
          <h1 className="text-2xl font-bold text-white">Booking.com</h1>
        </div>

        
        <NavButton />
      </header>

      {/* Hero Section */}
      <div className="bg-[#003580] text-white h-[38vh] px-6 md:px-16 pt-8 relative">
        <div className="px-[60px] py-12">
          <h2 className="font-booking text-5xl font-extrabold">Find your next stay</h2>
          <p className="text-xl md:text-2xl mt-3 font-sans">
            Search low prices on hotels, homes and much more...
          </p>
        </div>
        <Preferences />
        <div className=" left-0 w-full items-center -mt-8">
          <h3 className=" text-2xl font-bold px-11 text-gray-900">Offers</h3>
          <p className="text-l text-gray-600 px-11 py-1">Promotions, deals and special offers for you</p>
        </div>

        
        {/* Removed search bar here */}
        <PromoBannerCard
        
  title="Quick escape, quality time"
  subtitle="Save up to 20% with a Getaway Deal"
  buttonText="Save on stays"
  image="/travel.png"

/>

<HolidayPromoCard
  tag="Holiday rentals"
  title="Live the dream in a holiday home"
  subtitle="Choose from houses, villas, chalets and more"
  buttonText="Book yours"
  backgroundImage="/holiday.png"
/>

      
<div className="w-full items-center justify-between px-11 mt-14 ">
  <h4 className="text-2xl font-bold text-black">Popular destinations with travellers from India</h4>
</div>

{/* 👇 Add your custom image section here */}
<div className="flex gap-4 px-11 mt-10">
  <div></div>
  <img
    src="/taj.PNG"
    alt="Promotional Image"
    className="w-[595px] h-[250px] rounded-lg shadow-md object-cover"
  />
  <img
    src="/vidhana.png"
    alt="Second Promo"
    className="w-[595px] h-[250px] rounded-lg shadow-md object-cover"
  />
</div>

   <div className="flex gap-4 px-11 mt-10">
     <img
        src="/mumbai.png" 
        alt="third promo"
        className="w-[380px] h-[220px] rounded-lg shadow-md object-cover"
  />
      <img
        src="/chennai.png" 
        alt="third promo"
        className="w-[380px] h-[220px] rounded-lg shadow-md object-cover"
  />
      <img
        src="/varanasi.png" 
        alt="third promo"
        className="w-[380px] h-[220px] rounded-lg shadow-md object-cover"
  />
        
   </div>
        <HeroSection />
      
      </div>
    </div>
  )
}
