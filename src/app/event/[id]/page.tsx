import { mockEvents } from '@/lib/events'
import EventPageClient from './EventPageClient'

interface EventPageProps {
  params: Promise<{
    id: string
  }>
}

// Génère les paramètres statiques pour toutes les routes d'événements
export async function generateStaticParams() {
  return mockEvents.map((event) => ({
    id: event.id,
  }))
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params
  return <EventPageClient eventId={id} />
}