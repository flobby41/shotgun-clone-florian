'use client'

import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/apollo'
import EventDetail from '@/components/EventDetail'
import AppHeader from '@/components/AppHeader'

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen bg-black text-white">
        <AppHeader />
        <main>
          <EventDetail eventId={params.id} />
        </main>
      </div>
    </ApolloProvider>
  )
}