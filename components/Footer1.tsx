"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const words = ["vacation homes", "cottages", "cabins", "villas"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1150px] mx-auto mt-4 relative overflow-hidden border rounded-lg bg-white px-3 sm:px-20">
      {/* Left Golden Circle */}
      <div className="absolute left-[-15px] sm:left-[-35px] top-1/2 transform -translate-y-1/2 bg-[#ffb700] h-[40px] w-[40px] sm:h-[80px] sm:w-[80px] rounded-full z-0"></div>

      {/* Blue Bubble Section */}
      <div className="w-full flex justify-center sm:justify-start">
        <div className="relative bg-blue-600 w-full sm:w-[600px] h-[120px] sm:h-[200px] rounded-[50px] sm:rounded-[100px] flex flex-col justify-center items-center text-white text-center px-3 sm:px-6 py-4 sm:py-6 my-4 sm:my-10">
          <h1 className="text-base sm:text-3xl font-bold mb-2 leading-snug flex flex-col sm:flex-row gap-1 sm:gap-2 flex-wrap justify-center items-center">
            <span className="flex gap-1">
              Find{" "}
              <span className="underline decoration-yellow-400">
                {words[currentWordIndex]}
              </span>
            </span>
            <span>for your next trip</span>
          </h1>

          <button className="mt-3 sm:mt-6 bg-white text-blue-600 font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 rounded shadow hover:bg-gray-100 transition w-full sm:w-auto">
            Discover homes
          </button>
        </div>
      </div>

      {/* Image - Hidden on mobile */}
      <div className="hidden sm:flex absolute right-0 bottom-0">
        <Image src="/Footer1.png" alt="illustration" width={400} height={300} />
      </div>
    </div>
  );
}
