'use client';

export default function SearchBar() {
  return (
    <div className="absolute top-[338px] left-1/2 transform -translate-x-1/2 bg-white p-0 rounded-md shadow-md w-full max-w-6xl z-50 border-4 border-yellow-400">
      <div className="flex flex-row divide-x-4 divide-yellow-400">
        {/* First Input - Where are you going? */}
        <div className="relative flex-1 border-r-4 border-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25m0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18m22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0m-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0m-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25m0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75z" />
          </svg>
          <input
            type="text"
            placeholder="Where are you going?"
            className="flex-1 px-10 py-4 pt-4 pb-3 rounded w-full text-black placeholder:text-black"
          />
        </div>

        {/* Second Input - Dates */}
        <div className="relative flex-1 border-r-4 border-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5" />
          </svg>
          <input
            type="text"
            placeholder="check-in-date -- check-out-date"
            className="flex-1 px-10 py-10 pt-4 pb-3 rounded w-full text-black placeholder:text-black"
          />
        </div>

        {/* Third Input - Guests */}
        <div className="relative flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0M3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0" />
          </svg>
          <input
            type="number"
            placeholder="2 adults.0 children.1 room"
            className="flex-1 px-10 py-10 pt-4 pb-3 rounded mx-0 w-full text-black placeholder:text-black "
          />
        </div>

        {/* Search Button */}
        <button className="bg-blue-600 text-white px-5 py-3 rounded">
          Search
        </button>

      </div>
    </div>

    
  );
}
