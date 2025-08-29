"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import NavButton from "@/components/NavButton"
import Preferences from "@/components/Preferences"
import HeroSection from "@/components/ui/HeroSection"
import { PromoBannerCard } from "@/components/ui/PromoBannerCard"
import { HolidayPromoCard } from "@/components/ui/HolidayPromoCard"
import Footer from "@/components/ui/FooterTemp"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FeatureHighlights } from "@/components/ui/FeatureHighlights"
import GeniusSignIn from "@/components/ui/GeniusSignIn"
import Footer1 from "@/components/Footer1"
import type { Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState(2)

  const carouselItems = [
    { src: "/taj.png", name: "New Delhi", location: "4,109 properties" },
    { src: "/vidhana.png", name: "Banglore", location: "2,883 properties" },
    { src: "/mumbai.png", name: "Mumbai", location: "1,930 properties" },
    { src: "/chennai.png", name: "Chennai", location: "1,301 properties" },
    { src: "/varanasi.png", name: "Varanasi", location: "2,131 properties" },
    { src: "/hyderabad.png", name: "Hyderabad", location: "1,529 properties" },
    { src: "/gurgoan.png", name: "Gurgoan", location: "1,539 properties" },
    { src: "/pondicherry.png", name: "Pondicherry", location: "911 properties" },
    { src: "/jaipur.png", name: "Jaipur", location: "1,769 properties" },
    { src: "/pune.png", name: "Pune", location: "1,058 properties" },
  ]

  const hotelCarouselItems = [
    {
      image: "/hotel1.png",
      name: "Super Townhouse Oak Alandur Near Chennai Airport Formerly",
      location: "Chennai, India",
      rating: "8",
      ratingText: "Very good",
      reviews: "122",
      originalPrice: "₹7,170",
      discountedPrice: "₹3,513",
    },
    {
      image: "/hotel2.png",
      name: "STARLIGHT HOTELs PUDUCHERRY",
      location: "Puducherry, India",
      rating: "8.1",
      ratingText: "Very good",
      reviews: "376",
      originalPrice: "₹3,200",
      discountedPrice: "₹2,560",
    },
    {
      image: "/hotel3.png",
      name: "Hotel Hari Govindas Mysore - Explore the Heart of Mysore",
      location: "Mysore, India",
      rating: "8.5",
      ratingText: "Very good",
      reviews: "283",
      originalPrice: "₹8,450",
      discountedPrice: "₹6,344",
    },
    {
      image: "/hotel4.png",
      name: "Fabhotel Home Tree Service Apartment T Nagar - Near",
      location: "Chennai, India",
      rating: "7.3",
      ratingText: "Good",
      reviews: "51",
      originalPrice: "₹7,479",
      discountedPrice: "₹4,039",
    },
    {
      image: "/hotel5.png",
      name: "Your Hotel Service Apartment T Nagar - Near",
      location: "Andhra, India",
      rating: "8.4",
      ratingText: "Good",
      reviews: "72",
      originalPrice: "₹6,379",
      discountedPrice: "₹3,839",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <header className="bg-[#003580] py-0 sm:py-1 flex flex-col gap-1">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-white text-left sm:text-center">
            Booking.com
          </h1>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-2">
            <Button
              variant="ghost"
              className="text-white text-sm sm:text-base hover:bg-white/10 px-2 sm:px-3"
            >
              INR
            </Button>
            <img src="/flag1.png" alt="India Flag" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full" />
            <img
              src="/mark.png"
              alt="Help"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full filter invert"
            />
            <Button
              variant="ghost"
              className="hidden sm:inline-block text-white text-sm sm:text-base hover:bg-white/10"
            >
              List your property
            </Button>

            <div className="flex items-center gap-1 sm:gap-2">
              <Button className="bg-white text-blue-600 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-blue-100 border border-blue-600 rounded-md">
                Register
              </Button>
              <Button className="bg-white text-blue-600 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 hover:bg-blue-100 border border-blue-600 rounded-md">
                Sign in
              </Button>
            </div>
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="overflow-x-auto sm:overflow-visible px-2 sm:px-0">
          <NavButton />
        </div>
      </header>

      {/* Rest of your code remains unchanged... */}


      {/* Hero Section */}
      <div className="bg-[#003580] text-white h-[15] sm:h-[35vh] px-4 sm:px-6 md:px-16 pt-3 relative">
        <div className="px-20 sm:px-[55px] py6 sm:py-8">
          <h2 className="font-booking text-3xl sm:text-5xl font-extrabold">
            Find your next stay
          </h2>
          <p className="text-base sm:text-xl md:text-2xl mt-3 font-sans">
            Search low prices...
          </p>
        </div>

        <Preferences />

        <div className="left-0 w-full items-center -mt-3">
          <h3 className="text-2xl font-bold px-11 text-gray-900">Offers</h3>
          <p className="text-l text-gray-600 px-11 py-1">
            Promotions, deals and special offers for you
          </p>
        </div>

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

        <div className="w-full items-center justify-between px-11 mt-14">
          <h4 className="text-2xl font-bold text-black">
            Popular destinations with travellers from India
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-11 mt-10">
          <div className="relative w-full sm:w-[48%] h-[160px] sm:h-[250px] rounded-lg shadow-md overflow-hidden">
            <img src="/taj.PNG" alt="Taj Mahal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="absolute top-4 left-4 text-white text-2xl font-bold">New Delhi</h2>
            </div>
          </div>
          <div className="relative w-full sm:w-[48%] h-[250px] rounded-lg shadow-md overflow-hidden">
            <img src="/vidhana.png" alt="Vidhana Soudha" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="absolute top-4 left-4 text-white text-2xl font-bold">Bengaluru</h2>
            </div>
          </div>
        </div>

        <div className="flex gap-4 px-11 mt-10">
          {[
            { src: "/mumbai.png", title: "Mumbai" },
            { src: "/chennai.png", title: "Chennai" },
            { src: "/varanasi.png", title: "Varanasi" },
          ].map((img, i) => (
            <div
              key={i}
              className="relative w-full sm:w-[380px] h-[220px] rounded-lg shadow-md overflow-hidden"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30">
                <h2 className="absolute top-4 left-4 text-white text-2xl font-bold">
                  {img.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="px-11 mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Explore destinations in India
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-[48%] md:basis-[18%] px-2"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-[150px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h2 className="mt-2 text-sm font-semibold text-gray-800 truncate text-center">
                      {item.name}
                    </h2>
                    <p className="text-xs text-gray-500 truncate text-center">
                      {item.location}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="px-11 mt-10">
          <h2 className="text-2xl font-bold text-black mb-4">Deals for the weekend</h2>
          <p className="text-m text-gray-600 -mt-3">Save on stays for 11 July - 13 July</p>
        </div>

        <div className="pl-11">
          <Carousel className="w-full">
            <CarouselContent>
              {hotelCarouselItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-[48%] md:basis-[23%] px-2 py-4"
                >
                  <div className="flex flex-col w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[180px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-blue-700 font-semibold">Genius</span>
                      <h2 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                        {item.name}
                      </h2>
                      <p className="text-xs text-gray-600">{item.location}</p>
                      <div className="flex items-center gap-1 text-xs mt-1">
                        <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
                          {item.rating}
                        </span>
                        <span className="text-gray-800 font-medium">{item.ratingText}</span>
                        <span className="text-gray-500">({item.reviews} reviews)</span>
                      </div>
                      <span className="text-xs text-green-700 font-medium mt-1">
                        Getaway Deal
                      </span>
                      <div className="mt-1 text-xs text-gray-800">
                        2 nights{" "}
                        <span className="line-through text-gray-500 ml-1">
                          {item.originalPrice}
                        </span>{" "}
                        <span className="font-bold text-red-600 ml-1">
                          {item.discountedPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <HeroSection />

      {/* Discover Homes Promo Section */}
      <HeroSection />

      {/* Homes guests love Carousel */}
      <div className="px-4 sm:px-8 md:px-26 mt-10 md:mt-438">
        <h2 className="text-2xl font-bold text-black mb-0">Home guests love</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {[
              {
                img: "/Aparthotel Stare Miasto.png",
                title: "Aparthotel Stare Miasto",
                location: "Old Town, Poland, Kraków",
                rating: "8.8",
                reviewText: "Fabulous",
                reviewCount: "3,297",
                price: "₹13,257",
              },
              {
                img: "/7Seasons Apartments Budapest.png",
                title: "7Seasons Apartments Budapest",
                location: "06. Terézváros, Hungary, Budapest",
                rating: "8.7",
                reviewText: "Fabulous",
                reviewCount: "11,119",
                price: "₹11,885",
              },
              {
                img: "/Downtown Synagogue.png",
                title: "Downtown Synagogue",
                location: "07. Erzsébetváros, Hungary, Budapest",
                rating: "8.4",
                reviewText: "Very good",
                reviewCount: "134",
                price: "₹11,042",
              },
              {
                img: "/Numa Florence Vita.png",
                title: "Numa Florence Vita",
                location: "Santa Maria Novella, Italy, Florence",
                rating: "8.9",
                reviewText: "Fabulous",
                reviewCount: "1,314",
                price: "₹23,489",
              },
              {
                img: "/Cheval Three Quays at The Tower of London.png",
                title: "Cheval Three Quays at The Tower of London",
                location: "City of London, United Kingdom, London",
                rating: "9.4",
                reviewText: "Superb",
                reviewCount: "757",
                price: "₹49,850",
              },
            ].map((item, i) => (
              <CarouselItem key={i} className="basis-[22%] px-2 py-4">
                <div className="min-w-[250px] max-w-[280px] bg-white rounded-lg shadow hover:shadow-md transition p-3">
                  <div className="relative h-[220px] w-full rounded-lg overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">{item.location}</p>
                    <div className="flex items-center gap-1 text-xs mt-2">
                      <span className="bg-blue-700 text-white px-1.5 py-0.5 rounded text-xs font-bold">
                        {item.rating}
                      </span>
                      <span className="text-gray-700 font-medium">{item.reviewText}</span>
                      <span className="text-gray-500">({item.reviewCount} reviews)</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      Starting from <span className="font-bold">{item.price}</span>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <FeatureHighlights />

      <div className="px-4 sm:px-26 mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel more, spend less</h3>
        <GeniusSignIn />
        <Footer1 />
        <Footer />
      </div>
    </div>
  )
}