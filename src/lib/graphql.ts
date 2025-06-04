import { gql } from '@apollo/client'

export const GET_EVENTS = gql`
  query GetEvents($filter: String) {
    events(filter: $filter) {
      id
      title
      artist
      date
      time
      venue
      location
      price
      image
      tags
    }
  }
`

export const GET_EVENT_DETAIL = gql`
  query GetEventDetail($id: ID!) {
    event(id: $id) {
      id
      title
      artist
      date
      time
      venue
      location
      price
      image
      description
      lineup
      tags
      latitude
      longitude
    }
  }
`

export const GET_WALLET_TICKETS = gql`
  query GetWalletTickets {
    walletTickets {
      id
      eventId
      eventTitle
      eventDate
      eventTime
      venue
      price
      purchaseDate
      qrCode
      status
    }
  }
`