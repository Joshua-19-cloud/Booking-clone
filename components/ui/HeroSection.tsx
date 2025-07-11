'use client';

export default function SearchBar() {
  return (
    <div className="absolute top-[338px] left-1/2 transform -translate-x-1/2 bg-white p-0 rounded-md shadow-md w-full max-w-6xl z-50 border-4 border-yellow-400">
      <div className="flex flex-col sm:flex-row divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-yellow-400">
        {/* First Input - Where are you going? */}
        <div className="relative flex-1 border-b-4 sm:border-b-0 sm:border-r-4 border-yellow-400">
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
            className="flex-1 px-10 py-4 pt-4 pb-3 rounded w-full text-black placeholder:text-black"
          />
        </div>

        {/* Second Input - Dates */}
        <div className="relative flex-1 border-b-4 sm:border-b-0 sm:border-r-4 border-yellow-400">
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
            placeholder="check-in-date -- check-out-date"
            className="flex-1 px-10 py-10 pt-4 pb-3 rounded w-full text-black placeholder:text-black"
          />
        </div>

        {/* Third Input - Guests */}
        <div className="relative flex-1 border-b-4 sm:border-b-0 border-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.5 6a4.5 4.5 0 1 1-9 0..." />
          </svg>
          <input
            type="number"
            placeholder="2 adults.0 children.1 room"
            className="flex-1 px-10 py-10 pt-4 pb-3 rounded mx-0 w-full text-black placeholder:text-black"
          />
        </div>

        {/* Search Button */}
        <button className="bg-blue-600 text-white px-5 py-3 rounded w-full sm:w-auto">
          Search
        </button>
      </div>
    </div>
  );
}
