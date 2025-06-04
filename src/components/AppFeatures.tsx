import { Button } from '@/components/ui/button'

export default function AppFeatures() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            LOOKING TO GO OUT? ALL THE EVENTS
            <br />
            YOU LOVE ARE RIGHT THERE!
          </h2>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold">
            GET THE SHOTGUN APP
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Feature */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">
              DISCOVER THE BEST
              <br />
              EVENTS IN TOWN
            </h3>
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://ext.same-assets.com/2826683752/3986449454.jpeg"
                alt="Discover events mobile app interface"
                className="w-64 h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Feature */}
          <div className="text-center lg:text-right">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">
              RESELL YOUR TICKET
              <br />
              IF YOU CAN'T MAKE IT
            </h3>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://ext.same-assets.com/2826683752/2973469865.jpeg"
                alt="Resell tickets mobile app interface"
                className="w-64 h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
