"use client";

export default function SearchBar() {
  return (
    <div className="relative sm:absolute top-[338px] sm:top-[338px] left-1/2 sm:transform sm:-translate-x-1/2 bg-white rounded-xl shadow-lg w-[95%] sm:w-full max-w-6xl z-50 border-2 sm:border-4 border-yellow-400">
      <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-yellow-400">
        
        {/* Location */}
        <div className="relative flex-1 order-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full px-8 sm:px-10 py-2 sm:py-4 text-xs sm:text-base text-black placeholder:text-gray-500 rounded-t-xl sm:rounded-l-xl focus:outline-none"
          />
        </div>

        {/* Dates */}
        <div className="relative flex-1 order-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm13 8H4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z" />
          </svg>
          <input
            type="text"
            placeholder="Check-in — Check-out"
            className="w-full px-8 sm:px-10 py-2 sm:py-4 text-xs sm:text-base text-black placeholder:text-gray-500 focus:outline-none"
          />
        </div>

        {/* Search Button (moved before Guests on mobile) */}
        <div className="flex justify-end sm:justify-center order-3 sm:order-4">
          <button className="bg-blue-600 text-white w-full px-6 sm:px-6 py-4 sm:py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-sm sm:text-base">
            Search
          </button>
        </div>

        {/* Guests */}
        <div className="relative flex-1 order-4 sm:order-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-7 9a7 7 0 0 1 14 0H5z" />
          </svg>
          <input
            type="text"
            placeholder="2 adults • 0 children • 1 room"
            className="w-full px-8 sm:px-10 py-2 sm:py-4 text-xs sm:text-base text-black placeholder:text-gray-500 rounded-b-xl sm:rounded-r-xl focus:outline-none"
          />
        </div>

      </div>
    </div>
  );
}
