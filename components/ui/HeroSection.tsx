"use client";

export default function SearchBar() {
  return (
    <div className="relative sm:absolute sm:top-[338px] left-1/2 sm:transform sm:-translate-x-1/2 bg-white rounded-md shadow-md w-full max-w-6xl z-50 border-4 border-yellow-400 mx-auto">
      <div className="flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-yellow-400">
        {/* Location */}
        <div className="relative flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25m0-1.5..." />
          </svg>
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full px-10 py-4 text-sm sm:text-base text-black placeholder:text-gray-500"
          />
        </div>

        {/* Dates */}
        <div className="relative flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a..." />
          </svg>
          <input
            type="text"
            placeholder="Check-in — Check-out"
            className="w-full px-10 py-4 text-sm sm:text-base text-black placeholder:text-gray-500"
          />
        </div>

        {/* Guests */}
        <div className="relative flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.5 6a4.5 4.5 0 1 1-9 0..." />
          </svg>
          <input
            type="text"
            placeholder="2 adults • 0 children • 1 room"
            className="w-full px-10 py-4 text-sm sm:text-base text-black placeholder:text-gray-500"
          />
        </div>

        {/* Button */}
        <div className="flex justify-end sm:justify-center px-4 py-3 sm:px-0 sm:py-0">
          <button className="bg-blue-600 text-white w-full sm:w-auto px-5 py-3 rounded hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
