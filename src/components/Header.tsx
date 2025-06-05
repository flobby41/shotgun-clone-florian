import { Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <svg className="h-12 w-auto text-white hover:text-violet-400 transition-colors" viewBox="0 0 200 40" fill="currentColor">
                <text x="10" y="28" fontSize="20" fontWeight="bold" className="fill-current">
                  SHOTGUN
                </text>
              </svg>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Link href="/events">
                <input
                  type="text"
                  placeholder="Search for an event, artist, organizer or city"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm cursor-pointer hover:border-violet-500 transition-colors"
                  readOnly
                />
              </Link>
            </div>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/events">
              <Button variant="ghost" className="text-gray-300 uppercase">
                BROWSE EVENTS
              </Button>
            </Link>
            <Button variant="ghost" className="text-gray-300 uppercase">
              I'M AN ORGANIZER
            </Button>
            <Button variant="outline" className="border-gray-600 text-black uppercase hover:opacity-90 transition-opacity">
              LOGIN / SIGN UP
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <Link href="/events">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events, artists..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm cursor-pointer hover:border-violet-500 transition-colors"
                readOnly
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
