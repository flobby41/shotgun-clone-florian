'use client'

import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/apollo'
import EventsList from '@/components/EventsList'
import AppHeader from '@/components/AppHeader'
import Footer from '@/components/Footer'


export default function EventsPage() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen bg-black text-white">
        <AppHeader />
        <main>
          <EventsList />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  )
}