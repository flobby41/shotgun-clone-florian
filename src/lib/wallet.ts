export interface Ticket {
  id: string
  eventId: string
  eventTitle: string
  eventDate: string
  eventTime: string
  venue: string
  price: number
  purchaseDate: string
  qrCode: string
  status: 'upcoming' | 'expired' | 'used'
}

export class WalletService {
  private static STORAGE_KEY = 'shotgun_wallet'

  static getTickets(): Ticket[] {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem(this.STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  }

  static addTicket(ticket: Omit<Ticket, 'id' | 'purchaseDate' | 'qrCode' | 'status'>): Ticket {
    const newTicket: Ticket = {
      ...ticket,
      id: `ticket_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      purchaseDate: new Date().toISOString(),
      qrCode: `https://shotgun.live/verify/${ticket.eventId}/${Date.now()}`,
      status: new Date(ticket.eventDate) > new Date() ? 'upcoming' : 'expired'
    }

    const tickets = this.getTickets()
    tickets.push(newTicket)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tickets))
    }

    return newTicket
  }

  static removeTicket(ticketId: string): void {
    const tickets = this.getTickets().filter(t => t.id !== ticketId)
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tickets))
    }
  }

  static getTicketsByStatus(status: Ticket['status']): Ticket[] {
    return this.getTickets().filter(ticket => ticket.status === status)
  }

  static updateTicketStatus(ticketId: string, status: Ticket['status']): void {
    const tickets = this.getTickets()
    const ticketIndex = tickets.findIndex(t => t.id === ticketId)
    
    if (ticketIndex !== -1) {
      tickets[ticketIndex].status = status
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tickets))
      }
    }
  }
}