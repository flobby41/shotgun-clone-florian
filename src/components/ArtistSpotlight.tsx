export default function ArtistSpotlight() {
  const artists = [
    {
      name: "LANA DEL REY",
      event: "Rock en Seine 2024",
      image: "https://ext.same-assets.com/2826683752/3572400520.jpeg"
    },
    {
      name: "AYA NAKAMURA",
      event: "Marsatac",
      image: "https://ext.same-assets.com/2826683752/3109598932.jpeg"
    },
    {
      name: "TALE OF US",
      event: "Afterlife",
      image: "https://ext.same-assets.com/2826683752/2589886941.jpeg"
    },
    {
      name: "EVERGLOW",
      event: "2024 Everglow Us & Latam Tour",
      image: "https://ext.same-assets.com/2826683752/3727602980.jpeg"
    },
    {
      name: "BILLIE EILISH",
      event: "Rock en Seine 2023",
      image: "https://ext.same-assets.com/2826683752/3957460086.jpeg"
    }
  ]

  return (
    <section className="bg-black py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {artists.map((artist) => (
            <div key={artist.name} className="group cursor-pointer">
              <div className="text-center">
                <h2 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-wider mb-4 group-hover:text-violet-400 transition-colors duration-300">
                  {artist.name}
                </h2>
                <p className="text-xl lg:text-2xl text-gray-400 uppercase tracking-widest">
                  {artist.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
