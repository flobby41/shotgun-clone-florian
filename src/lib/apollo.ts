import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { mockEvents, Event } from './events'
import { WalletService, Ticket } from './wallet'

// Mock GraphQL resolver
const mockResolvers = {
  Query: {
    events: (_: any, { filter }: { filter?: string }) => {
      let events = mockEvents
      if (filter === 'today') {
        const today = new Date().toDateString()
        events = events.filter(event => new Date(event.date).toDateString() === today)
      } else if (filter === 'weekend') {
        events = events.filter(event => {
          const eventDate = new Date(event.date)
          const day = eventDate.getDay()
          return day === 0 || day === 6 // Sunday or Saturday
        })
      }
      return events
    },
    event: (_: any, { id }: { id: string }) => {
      return mockEvents.find(event => event.id === id)
    },
    walletTickets: () => {
      return WalletService.getTickets()
    }
  }
}

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // This would be your real GraphQL endpoint
  cache: new InMemoryCache(),
  // For now, we'll use local state with mock data
  typeDefs: `
    type Event {
      id: ID!
      title: String!
      artist: String!
      date: String!
      time: String!
      venue: String!
      location: String!
      price: Float!
      image: String!
      description: String
      lineup: [String!]
      tags: [String!]
      latitude: Float
      longitude: Float
    }

    type Ticket {
      id: ID!
      eventId: String!
      eventTitle: String!
      eventDate: String!
      eventTime: String!
      venue: String!
      price: Float!
      purchaseDate: String!
      qrCode: String!
      status: String!
    }

    type Query {
      events(filter: String): [Event!]!
      event(id: ID!): Event
      walletTickets: [Ticket!]!
    }
  `,
  resolvers: mockResolvers
})