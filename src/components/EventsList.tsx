'use client'

import { useQuery } from '@apollo/client'
import { GET_EVENTS } from '@/lib/graphql'
import { Button } from '@/components/ui/button'
import EventCard from './EventCard'
import { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import { Event } from '@/lib/events'

export default function EventsList() {
  const [filter, setFilter] = useState<string>('')
  const { loading, error, data } = useQuery(GET_EVENTS, {
    variables: { filter }
  })

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-gray-400">Loading events...</div>
    </div>
  )

  if (error) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-red-400">Error loading events</div>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Filters */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Discover Events</h1>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant={filter === '' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('')}
            className={filter === '' ? 'bg-violet-600 hover:bg-violet-700' : 'border-gray-600 text-gray-300 hover:text-black'}
          >
            All Events
          </Button>
          <Button
            variant={filter === 'today' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('today')}
            className={filter === 'today' ? 'bg-violet-600 hover:bg-violet-700' : 'border-gray-600 text-gray-300 hover:text-black'}
          >
            <Calendar className="w-4 h-4 mr-1" />
            Today
          </Button>
          <Button
            variant={filter === 'weekend' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('weekend')}
            className={filter === 'weekend' ? 'bg-violet-600 hover:bg-violet-700' : 'border-gray-600 text-gray-300 hover:text-black'}
          >
            <Clock className="w-4 h-4 mr-1" />
            This Weekend
          </Button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.events?.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {(!data?.events || data.events.length === 0) && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No events found</div>
          <div className="text-gray-500 text-sm mt-2">Try adjusting your filters</div>
        </div>
      )}
    </div>
  )
}