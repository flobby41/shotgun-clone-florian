'use client'

import { Calendar, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Event } from '@/lib/events'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const formatTime = (timeString: string) => {
    return timeString.slice(0, 5) // Convert "22:00" format to "22:00"
  }

  return (
    <Link href={`/event/${event.id}`}>
      <div className="group cursor-pointer bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-violet-600 text-white px-2 py-1 rounded-md text-xs font-medium">
              {formatDate(event.date)}
            </span>
          </div>
        </div>

        {/* Event Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-violet-400 transition-colors mb-2">
            {event.title}
          </h3>
          
          <div className="space-y-2 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{event.venue} • {event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{formatTime(event.time)}</span>
            </div>
          </div>

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {event.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 uppercase"
                >
                  {tag}
                </span>
              ))}
              {event.tags.length > 2 && (
                <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                  +{event.tags.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold">
              ${event.price.toFixed(2)}
            </span>
            <Button 
              size="sm" 
              className="bg-violet-600 hover:bg-violet-700"
              onClick={(e) => {
                e.preventDefault()
                // Handle quick buy action
              }}
            >
              View Event
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}