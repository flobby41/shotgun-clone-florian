import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createHttpLink } from '@apollo/client/link/http'
import { mockEvents } from './events'
import { WalletService } from './wallet'

// Error link pour gérer les erreurs
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
    // En cas d'erreur réseau, on utilise les données mock locales
    return forward(operation)
  }
})

// Configuration Apollo Client avec données mock locales
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          events: {
            read(existing, { args }) {
              const filter = args?.filter
              let events = mockEvents
              
              if (filter === 'today') {
                const today = new Date().toDateString()
                events = events.filter(event => new Date(event.date).toDateString() === today)
              } else if (filter === 'weekend') {
                events = events.filter(event => {
                  const eventDate = new Date(event.date)
                  const day = eventDate.getDay()
                  return day === 0 || day === 6
                })
              }
              
              return events
            }
          },
          event: {
            read(existing, { args }) {
              const id = args?.id
              return mockEvents.find(event => event.id === id) || null
            }
          },
          walletTickets: {
            read() {
              return WalletService.getTickets()
            }
          }
        }
      }
    }
  }),
  link: from([errorLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore'
    }
  }
})