"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import NavButton from "@/components/NavButton"
import Preferences from "@/components/Preferences"
import HeroSection from "@/components/ui/HeroSection"
import { PromoBannerCard } from "@/components/ui/PromoBannerCard"
import { HolidayPromoCard } from "@/components/ui/HolidayPromoCard"
import Footer from "@/components/ui/FooterTemp"
import { FeatureHighlights } from "@/components/ui/FeatureHighlights"
import GeniusSignIn from "@/components/ui/GeniusSignIn"
import Footer1 from "@/components/Footer1"

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState(2)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== Top Header ===== */}
      <header className="bg-[#003580] text-white">
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-24 py-3 sm:py-4">
          {/* Logo */}
          <h1 className="text-lg sm:text-2xl font-bold">Booking.com</h1>

          {/* Right Actions */}
          <div className="flex items-center px-12 gap-2 sm:gap-2">
            <Button variant="ghost" className="text-white text-sm sm:text-sm hover:bg-white/10">
              INR
            </Button>
            <img src="/flag1.png" alt="India Flag" className="w-5 h-5 sm:w-7 sm:h-7 rounded-full" />
            <img src="/mark.png" alt="Help" className="w-6 h-6 sm:w-10 sm:h-10 invert" />
            <Button
              variant="ghost"
              className="hidden sm:inline-block text-white text-base px-3 hover:bg-white/10"
            >
              List your property
            </Button>
            <Button className="bg-white text-blue-600 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 hover:bg-blue-100 border border-blue-600 rounded-md">
              Register
            </Button>
            <Button className="bg-white text-blue-600 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2   hover:bg-blue-100 border border-blue-600 rounded-md">
              Sign in
            </Button>
          </div>
        </div>
        <NavButton />
      </header>

      {/* ===== Hero Section ===== */}
      <section className="bg-[#003580] text-white px-3 sm:px-3 md:px-30 py-15 sm:py-15">
        <div className="container mx-auto">
          <h2 className="text-5xl sm:text-5xl font-extrabold">Find your next stay</h2>
          <p className="text-xl sm:text-2xl mt-2 sm:mt-3">Search low prices...</p>
        </div>
        </section>

        <Preferences />
      

      {/* ===== Offers Section ===== */}
      <section className="container mx-auto px-3 sm:px-6 lg:px-11 mt-8 sm:mt-10">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Offers</h3>
        <p className="text-sm sm:text-base text-gray-600">Promotions, deals and special offers for you</p>

        <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-6">
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
        </div>
      </section>

      {/* ===== Popular Destinations ===== */}
      <section className="container mx-auto px-3 sm:px-6 lg:px-11 mt-10 sm:mt-14">
        <h4 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
          Popular destinations with travellers from India
        </h4>

        {/* First row */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="relative w-full sm:w-1/2 h-[200px] sm:h-[250px] rounded-lg shadow-md overflow-hidden">
            <img src="/taj.PNG" alt="Taj Mahal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-start p-2 sm:p-4">
              <h2 className="text-white text-lg sm:text-2xl font-bold">New Delhi</h2>
            </div>
          </div>
          <div className="relative w-full sm:w-1/2 h-[200px] sm:h-[250px] rounded-lg shadow-md overflow-hidden">
            <img src="/vidhana.png" alt="Vidhana Soudha" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-start p-2 sm:p-4">
              <h2 className="text-white text-lg sm:text-2xl font-bold">Bengaluru</h2>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
          {[{ src: "/mumbai.png", title: "Mumbai" }, { src: "/chennai.png", title: "Chennai" }, { src: "/varanasi.png", title: "Varanasi" }].map((img, i) => (
            <div key={i} className="relative w-full sm:flex-1 min-w-[180px] h-[180px] sm:h-[220px] rounded-lg shadow-md overflow-hidden">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-start p-2 sm:p-4">
                <h2 className="text-white text-lg sm:text-2xl font-bold">{img.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Carousels, Deals, Homes, etc. ===== */}
      <HeroSection />
      <FeatureHighlights />

      {/* ===== Genius Sign In & Footer ===== */}
      <section className="container mx-auto px-3 sm:px-6 lg:px-11 mt-8 sm:mt-10">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Travel more, spend less</h3>
        <GeniusSignIn />
      </section>

      <Footer1 />
      <Footer />
    </div>
  )
}
