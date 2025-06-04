export interface Event {
  id: string
  title: string
  artist: string
  date: string
  time: string
  venue: string
  location: string
  price: number
  image: string
  description: string
  lineup: string[]
  tags: string[]
  latitude?: number
  longitude?: number
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Adam Beyer Extended Set",
    artist: "Adam Beyer",
    date: "2025-06-20",
    time: "22:00",
    venue: "Berhta",
    location: "Berlin, Germany",
    price: 22.70,
    image: "https://ext.same-assets.com/2826683752/1176851733.jpeg",
    description: "Experience the master of techno in an extended 4-hour set. Adam Beyer brings his signature dark and driving techno sound to Berhta for an unforgettable night.",
    lineup: ["Adam Beyer", "Special Guest"],
    tags: ["TECHNO", "ELECTRONIC"],
    latitude: 52.5200,
    longitude: 13.4050
  },
  {
    id: "2", 
    title: "Pride 2025: Glitterbox X Tiki Disco",
    artist: "Various Artists",
    date: "2025-06-29",
    time: "14:00",
    venue: "Brooklyn Mirage",
    location: "New York, USA",
    price: 46.35,
    image: "https://ext.same-assets.com/2826683752/3819867081.jpeg",
    description: "Celebrate Pride with the ultimate disco house experience. Glitterbox and Tiki Disco join forces for an epic celebration of love, music, and diversity.",
    lineup: ["Honey Dijon", "Purple Disco Machine", "Todd Terry", "DJ Paulette"],
    tags: ["DISCO HOUSE", "HOUSE", "DANCE", "PRIDE"],
    latitude: 40.7128,
    longitude: -74.0060
  },
  {
    id: "3",
    title: "140+ X Fwb X Xunt X Gw World Pride",
    artist: "Various Artists", 
    date: "2025-06-07",
    time: "22:00",
    venue: "Echostage",
    location: "Washington, USA",
    price: 59.68,
    image: "https://ext.same-assets.com/2826683752/1201052356.jpeg",
    description: "A groundbreaking collaboration bringing together the best of club, techno, and hyperpop for World Pride. Expect the unexpected in this genre-bending experience.",
    lineup: ["100 gecs", "GFOTY", "Dorian Electra", "Tommy Cash"],
    tags: ["CLUB", "TECHNO", "HYPERPOP", "EXPERIMENTAL"],
    latitude: 38.9072,
    longitude: -77.0369
  },
  {
    id: "4",
    title: "Tale of Us: Afterlife Journey",
    artist: "Tale of Us",
    date: "2025-06-15",
    time: "23:00", 
    venue: "Printworks",
    location: "London, UK",
    price: 75.00,
    image: "https://ext.same-assets.com/2826683752/2589886941.jpeg",
    description: "Join Tale of Us on a transcendent journey through melodic techno and electronic soundscapes. An immersive audio-visual experience at the iconic Printworks.",
    lineup: ["Tale of Us", "Mind Against", "Mathame"],
    tags: ["MELODIC TECHNO", "ELECTRONIC", "AFTERLIFE"],
    latitude: 51.5074,
    longitude: -0.1278
  }
]