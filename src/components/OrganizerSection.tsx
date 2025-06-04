import { Button } from '@/components/ui/button'

export default function OrganizerSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            LAUNCHING AN EVENT? YOUR EVENT
            <br />
            DESERVES THE BEST CROWD!
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
            Sell your tickets to the right person, at the right moment, with the right message, at the right price and on the right channel.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold">
            LIST MY EVENT
          </Button>
        </div>

        {/* Dashboard Mockup */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://ext.same-assets.com/2826683752/3037436938.jpeg"
              alt="Event organizer dashboard interface"
              className="w-full max-w-4xl h-auto rounded-xl shadow-2xl"
            />
            {/* Overlay gradient for better visual effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
