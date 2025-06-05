'use client'

import { useQuery } from '@apollo/client'
import { GET_EVENT_DETAIL } from '@/lib/graphql'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Clock, Calendar, Users, Share } from 'lucide-react'
import Link from 'next/link'
import { WalletService } from '@/lib/wallet'
import { useState } from 'react'

interface EventDetailProps {
  eventId: string
}

export default function EventDetail({ eventId }: EventDetailProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { loading, error, data } = useQuery(GET_EVENT_DETAIL, {
    variables: { id: eventId }
  })

  const handleBuyTicket = () => {
    if (!data?.event) return

    setIsLoading(true)
    
    // Simulate purchase process
    setTimeout(() => {
      const ticket = WalletService.addTicket({
        eventId: data.event.id,
        eventTitle: data.event.title,
        eventDate: data.event.date,
        eventTime: data.event.time,
        venue: data.event.venue,
        price: data.event.price
      })
      
      setIsLoading(false)
      alert('Ticket purchased successfully! Check your wallet.')
    }, 1500)
  }

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-gray-400">Loading event details...</div>
    </div>
  )

  if (error || !data?.event) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-red-400">Event not found</div>
    </div>
  )

  const event = data.event

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric',
      month: 'long', 
      day: 'numeric' 
    })
  }

  const formatTime = (timeString: string) => {
    return timeString.slice(0, 5)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back Button */}
      <Link href="/events">
        <Button variant="ghost" size="sm" className="mb-6 text-gray-400 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Button>
      </Link>

      {/* Event Hero */}
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-200">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatTime(event.time)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Info */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Event Details</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-violet-400" />
                <span>{event.venue} • {event.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-violet-400" />
                <span>Artist: {event.artist}</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Lineup */}
          {event.lineup && event.lineup.length > 0 && (
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Lineup</h3>
              <div className="space-y-2">
                {event.lineup.map((artist: string, index: number) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg ${index === 0 ? 'bg-violet-600/20 text-violet-300' : 'bg-gray-800'}`}
                  >
                    {artist}
                    {index === 0 && <span className="ml-2 text-xs text-violet-400">• HEADLINER</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Music Genres</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-2 bg-violet-600/20 text-violet-300 rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Purchase Card */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 sticky top-24">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-white mb-2">
                ${event.price.toFixed(2)}
              </div>
              <div className="text-sm text-gray-400">Per ticket</div>
            </div>

            <Button 
              onClick={handleBuyTicket}
              disabled={isLoading}
              className="w-full bg-violet-600 hover:bg-violet-700 py-3 text-lg font-semibold"
            >
              {isLoading ? 'Processing...' : 'Buy Ticket'}
            </Button>

            <Button 
              variant="outline"
              className="w-full mt-3 border-gray-600 text-gray-300 hover:text-white"
            >
              <Share className="w-4 h-4 mr-2" />
              Share Event
            </Button>

            <div className="mt-4 text-xs text-gray-500 text-center">
              Secure payment • Instant delivery
            </div>
          </div>

          {/* Map Preview */}
          {event.latitude && event.longitude && (
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Interactive Map</div>
                  <div className="text-xs">{event.venue}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}