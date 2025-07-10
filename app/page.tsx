"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import NavButton from "@/components/NavButton"
import Preferences from "@/components/Preferences"
import HeroSection from "@/components/ui/HeroSection"
import { PromoBannerCard } from "@/components/ui/PromoBannerCard"
import { HolidayPromoCard } from "@/components/ui/HolidayPromoCard"
import Footer from "@/components/ui/FooterTemp"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FeatureHighlights } from "@/components/ui/FeatureHighlights"
import GeniusSignIn from "@/components/ui/GeniusSignIn"
import Footer1 from "@/components/Footer1"

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState(2)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <header className="bg-[#003580] px-4 py-4 sm:px-6 md:px-10 flex flex-col gap-3">
        <div className="w-full flex flex-wrap items-center justify-end gap-2 text-sm">
          <Button variant="ghost" className="text-white hover:bg-white/10">INR</Button>
          <img src="/flag1.png" alt="India Flag" className="w-6 h-6 rounded-full" />
          <img src="/mark.png" alt="Help" className="w-8 h-8 rounded-full filter invert" />
          <Button variant="ghost" className="text-white hover:bg-white/10">List your property</Button>
          <div className="flex gap-1">
            <Button className="bg-white text-blue-600 px-2 py-1 text-xs">Register</Button>
            <Button className="bg-white text-blue-600 px-3 py-1 text-xs">Sign in</Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Booking.com</h1>
        </div>

        <NavButton />
      </header>

      <main className="bg-[#003580] text-white pt-8 px-4 sm:px-6 md:px-16">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold">Find your next stay</h2>
          <p className="text-base sm:text-xl mt-2">Search low prices on hotels, homes and much more...</p>
        </div>

        <Preferences />
      </main>

      <section className="px-4 sm:px-6 md:px-11 py-8">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Offers</h3>
          <p className="text-sm text-gray-600">Promotions, deals and special offers for you</p>
        </div>

        <div className="space-y-6">
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

      <section className="px-4 sm:px-6 md:px-11">
        <h4 className="text-xl sm:text-2xl font-bold text-black mb-4">Popular destinations with travellers from India</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{ src: "/taj.PNG", title: "New Delhi" }, { src: "/vidhana.png", title: "Bengaluru" }].map((img, i) => (
            <div key={i} className="relative w-full h-[220px] sm:h-[250px] rounded-lg shadow-md overflow-hidden">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30">
                <h2 className="absolute top-4 left-4 text-white text-lg sm:text-2xl font-bold">{img.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[{ src: "/mumbai.png", title: "Mumbai" }, { src: "/chennai.png", title: "Chennai" }, { src: "/varanasi.png", title: "Varanasi" }].map((img, i) => (
            <div key={i} className="relative w-full h-[200px] sm:h-[220px] rounded-lg shadow-md overflow-hidden">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30">
                <h2 className="absolute top-4 left-4 text-white text-lg sm:text-2xl font-bold">{img.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-11 mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Explore destinations in India</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {/* Carousel items */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="px-4 sm:px-6 md:px-11 mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-1">Deals for the weekend</h2>
        <p className="text-sm text-gray-600">Save on stays for 11 July - 13 July</p>
        <Carousel className="w-full mt-4">
          <CarouselContent>
            {/* Carousel items */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <HeroSection />
      <HeroSection />

      <section className="px-4 sm:px-6 md:px-11 mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">Homes guests love</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {/* Homes carousel items */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <FeatureHighlights />

      <section className="px-4 sm:px-6 md:px-11 mt-10">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Travel more, spend less</h3>
        <GeniusSignIn />
        <Footer1 />
        <Footer />
      </section>
    </div>
  )
}
