"use client"

export function FeatureHighlights() {

  return (
    <section className="-mt-3 px-25">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <img src="/feature1.png" alt="Pay at property" className="w-16 h-10" />
          <div>
            <h3 className="font-bold text-base text-gray-900">Book now, pay at the property</h3>
            <p className="text-sm text-black">FREE cancellation on most rooms</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <img src="/feature2.png" alt="2+ million properties" className="w-13 h-17" />
          <div>
            <h3 className="font-bold text-base text-gray-900">2+ million properties worldwide</h3>
            <p className="text-sm black">Hotels, guest houses, apartments, and more…</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <img src="/feature3.png" alt="24/7 support" className="w-10 h-14" />
          <div>
            <h3 className="font-bold text-base text-gray-900">Trusted customer service you can rely on, 24/7</h3>
            <p className="text-sm text-black">We’re always here to help</p>
          </div>
        </div>
      </div>
    </section>
  )
}
