import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PopularEvents from '@/components/PopularEvents'
import ArtistSpotlight from '@/components/ArtistSpotlight'
import AppFeatures from '@/components/AppFeatures'
import OrganizerSection from '@/components/OrganizerSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <PopularEvents />
      <ArtistSpotlight />
      <AppFeatures />
      <OrganizerSection />
      <Footer />
    </div>
  )
}
