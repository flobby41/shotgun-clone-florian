'use client'

import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/apollo'
import EventDetail from '@/components/EventDetail'
import AppHeader from '@/components/AppHeader'

interface EventPageClientProps {
  eventId: string
}

export default function EventPageClient({ eventId }: EventPageClientProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen bg-black text-white">
        <AppHeader />
        <main>
          <EventDetail eventId={eventId} />
        </main>
      </div>
    </ApolloProvider>
  )
}