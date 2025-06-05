import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'


const events = [
  {
    id: 1,
    title: "Adam Beyer [Extended Set] At Berhta",
    venue: "Berhta",
    date: "Fri, Jun 20",
    time: "10:00 PM",
    price: "$22.70",
    image: "https://ext.same-assets.com/2826683752/1176851733.jpeg",
    tags: []
  },
  {
    id: 2,
    title: "Pride 2025: Glitterbox X Tiki Disco X House Of Yes",
    venue: "New York County",
    date: "Sun, Jun 29",
    time: "2:00 PM",
    price: "$46.35",
    image: "https://ext.same-assets.com/2826683752/3819867081.jpeg",
    tags: ["DISCO HOUSE", "HOUSE", "DANCE"]
  },
  {
    id: 3,
    title: "140+ X Fwb X Xunt X Gw World Pride",
    venue: "Washington",
    date: "Sat, Jun 7",
    time: "10:00 PM",
    price: "$59.68",
    image: "https://ext.same-assets.com/2826683752/1201052356.jpeg",
    tags: ["CLUB", "TECHNO", "HYPERPOP"]
  }
]

export default function PopularEvents() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold flex items-center gap-4">
            POPULAR EVENTS IN
            <Button variant="ghost" className="text-white border border-gray-600 rounded-lg px-4 py-2 flex items-center gap-2">
              <img src="https://ext.same-assets.com/2826683752/358296007.svg" alt="US Flag" className="w-6 h-4" />
              UNITED STATES
              <ChevronDown className="w-4 h-4" />
            </Button>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-gray-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                      FRIDAY JUNE 20
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-violet-400 transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{event.venue}</span>
                    <span className="text-white font-semibold">{event.price}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-orange-400 font-medium">
                      {event.date} | {event.time}
                    </span>
                  </div>

                  {event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Events Button */}
        <div className="text-center">
          <Link href="/events">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto">
            MORE EVENTS IN
            <img src="https://ext.same-assets.com/2826683752/358296007.svg" alt="US Flag" className="w-5 h-3" />
            UNITED STATES
          </Button>
            </Link>
        </div>
      </div>
    </section>
  )
}
