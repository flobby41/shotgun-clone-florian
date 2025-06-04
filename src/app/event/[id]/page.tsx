import { mockEvents } from '@/lib/events'
import EventPageClient from './EventPageClient'

interface EventPageProps {
  params: {
    id: string
  }
}

// Génère les paramètres statiques pour toutes les routes d'événements
export async function generateStaticParams() {
  return mockEvents.map((event) => ({
    id: event.id,
  }))
}

export default function EventPage({ params }: EventPageProps) {
  return <EventPageClient eventId={params.id} />
}