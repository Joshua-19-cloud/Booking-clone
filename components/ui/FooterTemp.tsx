"use client"

export default function FooterTemp() {
  return (
    <footer className="bg-[#f2f2f2] text-sm text-gray-700 mt-445">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            {
              title: "Countries",
              links: ["India", "USA", "UK", "France", "Germany"],
            },
            {
              title: "Cities",
              links: ["New Delhi", "Mumbai", "Chennai", "Bangalore", "Pune"],
            },
            {
              title: "Airports",
              links: ["Delhi", "Mumbai", "Chennai", "Kolkata", "Bangalore"],
            },
            {
              title: "Support",
              links: ["Customer Service", "FAQs", "How It Works", "Contact Us"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Investor Relations"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i} className="text-gray-600 hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Booking Clone. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
