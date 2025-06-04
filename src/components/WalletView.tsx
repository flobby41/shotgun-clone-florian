'use client'

import { useEffect, useState } from 'react'
import { WalletService, Ticket } from '@/lib/wallet'
import { Button } from '@/components/ui/button'
import { QrCode, Calendar, MapPin, Clock, Trash2, ArrowLeft } from 'lucide-react'
import QRCode from 'react-qr-code'
import Link from 'next/link'

export default function WalletView() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [activeTab, setActiveTab] = useState<'upcoming' | 'expired' | 'used'>('upcoming')
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  useEffect(() => {
    setTickets(WalletService.getTickets())
  }, [])

  const filteredTickets = tickets.filter(ticket => ticket.status === activeTab)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const formatTime = (timeString: string) => {
    return timeString.slice(0, 5)
  }

  const handleDeleteTicket = (ticketId: string) => {
    WalletService.removeTicket(ticketId)
    setTickets(WalletService.getTickets())
    if (selectedTicket?.id === ticketId) {
      setSelectedTicket(null)
    }
  }

  if (selectedTicket) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setSelectedTicket(null)}
          className="mb-6 text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Wallet
        </Button>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 max-w-md mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">{selectedTicket.eventTitle}</h2>
            <div className="text-gray-400 space-y-1">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(selectedTicket.eventDate)}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                {formatTime(selectedTicket.eventTime)}
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {selectedTicket.venue}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg mb-6">
            <QRCode
              size={200}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={selectedTicket.qrCode}
              viewBox={`0 0 200 200`}
            />
          </div>

          <div className="text-center space-y-2">
            <div className="text-sm text-gray-400">Ticket ID</div>
            <div className="font-mono text-xs bg-gray-800 p-2 rounded">
              {selectedTicket.id}
            </div>
            
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              selectedTicket.status === 'upcoming' ? 'bg-green-600/20 text-green-400' :
              selectedTicket.status === 'expired' ? 'bg-red-600/20 text-red-400' :
              'bg-gray-600/20 text-gray-400'
            }`}>
              {selectedTicket.status.toUpperCase()}
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">
            Show this QR code at the venue entrance
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Tickets</h1>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-900/50 p-1 rounded-lg">
        {(['upcoming', 'expired', 'used'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-violet-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            <span className="ml-2 text-xs">
              ({tickets.filter(t => t.status === tab).length})
            </span>
          </button>
        ))}
      </div>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.length === 0 ? (
          <div className="text-center py-12">
            <QrCode className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <div className="text-gray-400 text-lg">No {activeTab} tickets</div>
            <div className="text-gray-500 text-sm mt-2">
              {activeTab === 'upcoming' ? 'Purchase tickets to see them here' : 'Your tickets will appear here'}
            </div>
            {activeTab === 'upcoming' && (
              <Link href="/">
                <Button className="mt-4 bg-violet-600 hover:bg-violet-700">
                  Browse Events
                </Button>
              </Link>
            )}
          </div>
        ) : (
          filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-violet-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{ticket.eventTitle}</h3>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(ticket.eventDate)} at {formatTime(ticket.eventTime)}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {ticket.venue}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="font-semibold">${ticket.price.toFixed(2)}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      ticket.status === 'upcoming' ? 'bg-green-600/20 text-green-400' :
                      ticket.status === 'expired' ? 'bg-red-600/20 text-red-400' :
                      'bg-gray-600/20 text-gray-400'
                    }`}>
                      {ticket.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    size="sm"
                    onClick={() => setSelectedTicket(ticket)}
                    className="bg-violet-600 hover:bg-violet-700"
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    QR Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteTicket(ticket.id)}
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {filteredTickets.length > 0 && (
        <div className="mt-8 text-center text-sm text-gray-500">
          Purchased on {new Date(filteredTickets[0]?.purchaseDate).toLocaleDateString()}
        </div>
      )}
    </div>
  )
}