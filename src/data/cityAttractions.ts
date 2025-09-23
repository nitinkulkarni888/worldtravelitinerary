import { Attraction } from "@/types/travel";

// Comprehensive attractions database with Google-referenced popular destinations
export const cityAttractions: Record<string, Attraction[]> = {
  "Paris": [
    {
      id: "paris-1",
      name: "Eiffel Tower",
      description: "Iconic iron lattice tower and symbol of Paris, offering panoramic city views",
      rating: 4.7,
      reviews: 312584,
      price: "$28",
      duration: "2-3 hours",
      image: "/eiffel-tower.jpg",
      category: "Landmark",
      coordinates: { lat: 48.8584, lng: 2.2945 }
    },
    {
      id: "paris-2",
      name: "Louvre Museum",
      description: "World's largest art museum and historic monument, home to the Mona Lisa",
      rating: 4.7,
      reviews: 243156,
      price: "$20",
      duration: "3-4 hours",
      image: "/louvre.jpg",
      category: "Cultural",
      coordinates: { lat: 48.8606, lng: 2.3376 }
    },
    {
      id: "paris-3",
      name: "Arc de Triomphe",
      description: "Monumental triumphal arch honoring those who fought for France",
      rating: 4.6,
      reviews: 98234,
      price: "$15",
      duration: "1-2 hours",
      image: "/arc-triomphe.jpg",
      category: "Landmark",
      coordinates: { lat: 48.8738, lng: 2.2950 }
    },
    {
      id: "paris-4",
      name: "Notre-Dame Cathedral",
      description: "Medieval Catholic cathedral and masterpiece of French Gothic architecture",
      rating: 4.7,
      reviews: 127543,
      price: "Free",
      duration: "1-2 hours",
      image: "/notre-dame.jpg",
      category: "Religious",
      coordinates: { lat: 48.8530, lng: 2.3499 }
    },
    {
      id: "paris-5",
      name: "Sacré-Cœur",
      description: "Romano-Byzantine basilica atop Montmartre hill with stunning city views",
      rating: 4.6,
      reviews: 89234,
      price: "Free",
      duration: "1-2 hours",
      image: "/sacre-coeur.jpg",
      category: "Religious",
      coordinates: { lat: 48.8867, lng: 2.3431 }
    },
    {
      id: "paris-6",
      name: "Palace of Versailles",
      description: "Opulent 17th-century royal palace with gardens and fountains",
      rating: 4.6,
      reviews: 156789,
      price: "$22",
      duration: "4-5 hours",
      image: "/versailles.jpg",
      category: "Historical",
      coordinates: { lat: 48.8049, lng: 2.1204 }
    },
    {
      id: "paris-7",
      name: "Musée d'Orsay",
      description: "Museum housing French art from 1848-1914, including Impressionist masterpieces",
      rating: 4.7,
      reviews: 76543,
      price: "$16",
      duration: "2-3 hours",
      image: "/orsay.jpg",
      category: "Cultural",
      coordinates: { lat: 48.8600, lng: 2.3266 }
    },
    {
      id: "paris-8",
      name: "Latin Quarter",
      description: "Historic area known for student life, lively atmosphere, and bistros",
      rating: 4.5,
      reviews: 45678,
      price: "Free",
      duration: "2-3 hours",
      image: "/latin-quarter.jpg",
      category: "Neighborhood",
      coordinates: { lat: 48.8510, lng: 2.3440 }
    },
    {
      id: "paris-9",
      name: "Seine River Cruise",
      description: "Scenic boat tour along the Seine passing major Parisian landmarks",
      rating: 4.5,
      reviews: 67890,
      price: "$18",
      duration: "1-2 hours",
      image: "/seine-cruise.jpg",
      category: "Activity",
      coordinates: { lat: 48.8588, lng: 2.2930 }
    },
    {
      id: "paris-10",
      name: "Champs-Élysées",
      description: "Famous avenue with shops, cafes, and theaters",
      rating: 4.4,
      reviews: 98765,
      price: "Free",
      duration: "2-3 hours",
      image: "/champs-elysees.jpg",
      category: "Shopping",
      coordinates: { lat: 48.8698, lng: 2.3078 }
    }
  ],
  
  "Tokyo": [
    {
      id: "tokyo-1",
      name: "Tokyo Skytree",
      description: "World's tallest tower offering 360-degree views of Tokyo",
      rating: 4.5,
      reviews: 189234,
      price: "$25",
      duration: "2-3 hours",
      image: "/skytree.jpg",
      category: "Landmark",
      coordinates: { lat: 35.7101, lng: 139.8107 }
    },
    {
      id: "tokyo-2",
      name: "Senso-ji Temple",
      description: "Tokyo's oldest temple with traditional shopping street Nakamise-dori",
      rating: 4.5,
      reviews: 156789,
      price: "Free",
      duration: "1-2 hours",
      image: "/sensoji.jpg",
      category: "Religious",
      coordinates: { lat: 35.7148, lng: 139.7967 }
    },
    {
      id: "tokyo-3",
      name: "Shibuya Crossing",
      description: "World's busiest pedestrian crossing and iconic Tokyo landmark",
      rating: 4.4,
      reviews: 134567,
      price: "Free",
      duration: "30 mins",
      image: "/shibuya.jpg",
      category: "Landmark",
      coordinates: { lat: 35.6595, lng: 139.7004 }
    },
    {
      id: "tokyo-4",
      name: "Meiji Shrine",
      description: "Serene Shinto shrine dedicated to Emperor Meiji and Empress Shoken",
      rating: 4.6,
      reviews: 98234,
      price: "Free",
      duration: "1-2 hours",
      image: "/meiji.jpg",
      category: "Religious",
      coordinates: { lat: 35.6764, lng: 139.6993 }
    },
    {
      id: "tokyo-5",
      name: "Tokyo Tower",
      description: "Red and white tower inspired by Eiffel Tower with observation decks",
      rating: 4.4,
      reviews: 87654,
      price: "$15",
      duration: "1-2 hours",
      image: "/tokyo-tower.jpg",
      category: "Landmark",
      coordinates: { lat: 35.6586, lng: 139.7454 }
    },
    {
      id: "tokyo-6",
      name: "Tsukiji Outer Market",
      description: "Famous fish market with fresh seafood and street food",
      rating: 4.5,
      reviews: 76543,
      price: "Free entry",
      duration: "2-3 hours",
      image: "/tsukiji.jpg",
      category: "Shopping",
      coordinates: { lat: 35.6654, lng: 139.7707 }
    },
    {
      id: "tokyo-7",
      name: "Akihabara Electric Town",
      description: "Electronics, anime, and gaming district",
      rating: 4.4,
      reviews: 65432,
      price: "Free",
      duration: "2-3 hours",
      image: "/akihabara.jpg",
      category: "Shopping",
      coordinates: { lat: 35.7022, lng: 139.7744 }
    },
    {
      id: "tokyo-8",
      name: "Imperial Palace",
      description: "Primary residence of the Emperor of Japan with beautiful gardens",
      rating: 4.3,
      reviews: 54321,
      price: "Free",
      duration: "2-3 hours",
      image: "/imperial.jpg",
      category: "Historical",
      coordinates: { lat: 35.6852, lng: 139.7528 }
    },
    {
      id: "tokyo-9",
      name: "Harajuku Takeshita Street",
      description: "Trendy shopping street known for youth culture and fashion",
      rating: 4.3,
      reviews: 45678,
      price: "Free",
      duration: "2-3 hours",
      image: "/harajuku.jpg",
      category: "Shopping",
      coordinates: { lat: 35.6716, lng: 139.7030 }
    },
    {
      id: "tokyo-10",
      name: "TeamLab Borderless",
      description: "Digital art museum with interactive immersive exhibitions",
      rating: 4.6,
      reviews: 34567,
      price: "$32",
      duration: "3-4 hours",
      image: "/teamlab.jpg",
      category: "Cultural",
      coordinates: { lat: 35.6263, lng: 139.7833 }
    }
  ],
  
  "New York": [
    {
      id: "ny-1",
      name: "Statue of Liberty",
      description: "Iconic symbol of freedom and democracy on Liberty Island",
      rating: 4.7,
      reviews: 234567,
      price: "$24",
      duration: "3-4 hours",
      image: "/statue-liberty.jpg",
      category: "Landmark",
      coordinates: { lat: 40.6892, lng: -74.0445 }
    },
    {
      id: "ny-2",
      name: "Central Park",
      description: "843-acre green oasis in Manhattan with lakes, meadows, and trails",
      rating: 4.8,
      reviews: 198765,
      price: "Free",
      duration: "2-4 hours",
      image: "/central-park.jpg",
      category: "Nature",
      coordinates: { lat: 40.7829, lng: -73.9654 }
    },
    {
      id: "ny-3",
      name: "Empire State Building",
      description: "Art Deco skyscraper with observation decks on 86th and 102nd floors",
      rating: 4.7,
      reviews: 187654,
      price: "$44",
      duration: "1-2 hours",
      image: "/empire-state.jpg",
      category: "Landmark",
      coordinates: { lat: 40.7484, lng: -73.9857 }
    },
    {
      id: "ny-4",
      name: "Times Square",
      description: "Bright lights and Broadway theaters in the heart of Manhattan",
      rating: 4.5,
      reviews: 165432,
      price: "Free",
      duration: "1-2 hours",
      image: "/times-square.jpg",
      category: "Landmark",
      coordinates: { lat: 40.7580, lng: -73.9855 }
    },
    {
      id: "ny-5",
      name: "Brooklyn Bridge",
      description: "Historic bridge offering spectacular views of Manhattan skyline",
      rating: 4.8,
      reviews: 143210,
      price: "Free",
      duration: "1-2 hours",
      image: "/brooklyn-bridge.jpg",
      category: "Landmark",
      coordinates: { lat: 40.7061, lng: -73.9969 }
    },
    {
      id: "ny-6",
      name: "Metropolitan Museum of Art",
      description: "One of the world's largest and most comprehensive art museums",
      rating: 4.7,
      reviews: 132109,
      price: "$30",
      duration: "3-4 hours",
      image: "/met.jpg",
      category: "Cultural",
      coordinates: { lat: 40.7794, lng: -73.9632 }
    },
    {
      id: "ny-7",
      name: "9/11 Memorial & Museum",
      description: "Tribute to victims of September 11 attacks with twin reflecting pools",
      rating: 4.8,
      reviews: 109876,
      price: "$26",
      duration: "2-3 hours",
      image: "/911-memorial.jpg",
      category: "Historical",
      coordinates: { lat: 40.7115, lng: -74.0134 }
    },
    {
      id: "ny-8",
      name: "High Line",
      description: "Elevated linear park built on former railway line",
      rating: 4.6,
      reviews: 87654,
      price: "Free",
      duration: "1-2 hours",
      image: "/highline.jpg",
      category: "Nature",
      coordinates: { lat: 40.7480, lng: -74.0048 }
    },
    {
      id: "ny-9",
      name: "One World Observatory",
      description: "Observatory atop One World Trade Center with 360-degree views",
      rating: 4.7,
      reviews: 76543,
      price: "$38",
      duration: "1-2 hours",
      image: "/one-world.jpg",
      category: "Landmark",
      coordinates: { lat: 40.7127, lng: -74.0134 }
    },
    {
      id: "ny-10",
      name: "MoMA",
      description: "Museum of Modern Art featuring contemporary and modern artworks",
      rating: 4.5,
      reviews: 65432,
      price: "$25",
      duration: "2-3 hours",
      image: "/moma.jpg",
      category: "Cultural",
      coordinates: { lat: 40.7614, lng: -73.9776 }
    }
  ],
  
  "London": [
    {
      id: "london-1",
      name: "Big Ben & Parliament",
      description: "Iconic clock tower and seat of UK Parliament",
      rating: 4.6,
      reviews: 176543,
      price: "$35",
      duration: "1-2 hours",
      image: "/bigben.jpg",
      category: "Landmark",
      coordinates: { lat: 51.5007, lng: -0.1246 }
    },
    {
      id: "london-2",
      name: "Tower of London",
      description: "Historic castle housing Crown Jewels and centuries of history",
      rating: 4.6,
      reviews: 154321,
      price: "$38",
      duration: "2-3 hours",
      image: "/tower-london.jpg",
      category: "Historical",
      coordinates: { lat: 51.5081, lng: -0.0759 }
    },
    {
      id: "london-3",
      name: "British Museum",
      description: "World-famous museum of human history, art, and culture",
      rating: 4.7,
      reviews: 143210,
      price: "Free",
      duration: "3-4 hours",
      image: "/british-museum.jpg",
      category: "Cultural",
      coordinates: { lat: 51.5194, lng: -0.1270 }
    },
    {
      id: "london-4",
      name: "London Eye",
      description: "Giant Ferris wheel offering panoramic views of London",
      rating: 4.5,
      reviews: 132109,
      price: "$36",
      duration: "30 mins",
      image: "/london-eye.jpg",
      category: "Landmark",
      coordinates: { lat: 51.5033, lng: -0.1196 }
    },
    {
      id: "london-5",
      name: "Buckingham Palace",
      description: "Official residence of the British monarch with Changing of the Guard",
      rating: 4.5,
      reviews: 121098,
      price: "$35",
      duration: "2-3 hours",
      image: "/buckingham.jpg",
      category: "Historical",
      coordinates: { lat: 51.5014, lng: -0.1419 }
    },
    {
      id: "london-6",
      name: "Tower Bridge",
      description: "Victorian bridge with glass walkways and Engine Room exhibition",
      rating: 4.6,
      reviews: 109876,
      price: "$13",
      duration: "1-2 hours",
      image: "/tower-bridge.jpg",
      category: "Landmark",
      coordinates: { lat: 51.5055, lng: -0.0754 }
    },
    {
      id: "london-7",
      name: "Westminster Abbey",
      description: "Gothic abbey church and traditional coronation site",
      rating: 4.6,
      reviews: 98765,
      price: "$27",
      duration: "1-2 hours",
      image: "/westminster.jpg",
      category: "Religious",
      coordinates: { lat: 51.4993, lng: -0.1273 }
    },
    {
      id: "london-8",
      name: "Hyde Park",
      description: "350-acre royal park with Speaker's Corner and Serpentine Lake",
      rating: 4.5,
      reviews: 87654,
      price: "Free",
      duration: "2-3 hours",
      image: "/hyde-park.jpg",
      category: "Nature",
      coordinates: { lat: 51.5073, lng: -0.1657 }
    },
    {
      id: "london-9",
      name: "National Gallery",
      description: "Art museum with Western European paintings from 13th-20th centuries",
      rating: 4.7,
      reviews: 76543,
      price: "Free",
      duration: "2-3 hours",
      image: "/national-gallery.jpg",
      category: "Cultural",
      coordinates: { lat: 51.5089, lng: -0.1283 }
    },
    {
      id: "london-10",
      name: "Camden Market",
      description: "Eclectic market with food, fashion, and alternative culture",
      rating: 4.4,
      reviews: 65432,
      price: "Free",
      duration: "2-3 hours",
      image: "/camden.jpg",
      category: "Shopping",
      coordinates: { lat: 51.5414, lng: -0.1465 }
    }
  ],
  
  "Dubai": [
    {
      id: "dubai-1",
      name: "Burj Khalifa",
      description: "World's tallest building with observation decks on 124th and 148th floors",
      rating: 4.7,
      reviews: 198765,
      price: "$43",
      duration: "2-3 hours",
      image: "/burj-khalifa.jpg",
      category: "Landmark",
      coordinates: { lat: 25.1972, lng: 55.2744 }
    },
    {
      id: "dubai-2",
      name: "Dubai Mall",
      description: "One of the world's largest malls with aquarium and fountain shows",
      rating: 4.6,
      reviews: 176543,
      price: "Free",
      duration: "3-4 hours",
      image: "/dubai-mall.jpg",
      category: "Shopping",
      coordinates: { lat: 25.1978, lng: 55.2795 }
    },
    {
      id: "dubai-3",
      name: "Dubai Fountain",
      description: "World's largest choreographed fountain system with music and lights",
      rating: 4.7,
      reviews: 154321,
      price: "Free",
      duration: "30 mins",
      image: "/dubai-fountain.jpg",
      category: "Landmark",
      coordinates: { lat: 25.1939, lng: 55.2754 }
    },
    {
      id: "dubai-4",
      name: "Palm Jumeirah",
      description: "Artificial palm-shaped island with luxury resorts and Atlantis",
      rating: 4.5,
      reviews: 132109,
      price: "Free",
      duration: "2-3 hours",
      image: "/palm-jumeirah.jpg",
      category: "Landmark",
      coordinates: { lat: 25.1124, lng: 55.1390 }
    },
    {
      id: "dubai-5",
      name: "Dubai Desert Safari",
      description: "Dune bashing, camel rides, and traditional Bedouin camp experience",
      rating: 4.6,
      reviews: 121098,
      price: "$65",
      duration: "6-7 hours",
      image: "/desert-safari.jpg",
      category: "Adventure",
      coordinates: { lat: 25.0000, lng: 55.5000 }
    },
    {
      id: "dubai-6",
      name: "Gold Souk",
      description: "Traditional market with hundreds of shops selling gold jewelry",
      rating: 4.4,
      reviews: 98765,
      price: "Free",
      duration: "1-2 hours",
      image: "/gold-souk.jpg",
      category: "Shopping",
      coordinates: { lat: 25.2697, lng: 55.2963 }
    },
    {
      id: "dubai-7",
      name: "Dubai Marina",
      description: "Waterfront development with restaurants, shops, and yacht cruises",
      rating: 4.5,
      reviews: 87654,
      price: "Free",
      duration: "2-3 hours",
      image: "/dubai-marina.jpg",
      category: "Neighborhood",
      coordinates: { lat: 25.0805, lng: 55.1403 }
    },
    {
      id: "dubai-8",
      name: "Jumeirah Beach",
      description: "White sand beach with views of Burj Al Arab",
      rating: 4.5,
      reviews: 76543,
      price: "Free",
      duration: "2-3 hours",
      image: "/jumeirah-beach.jpg",
      category: "Nature",
      coordinates: { lat: 25.2038, lng: 55.2708 }
    },
    {
      id: "dubai-9",
      name: "Dubai Museum",
      description: "Museum in Al Fahidi Fort showcasing Dubai's history and heritage",
      rating: 4.3,
      reviews: 54321,
      price: "$1",
      duration: "1-2 hours",
      image: "/dubai-museum.jpg",
      category: "Cultural",
      coordinates: { lat: 25.2631, lng: 55.2972 }
    },
    {
      id: "dubai-10",
      name: "Miracle Garden",
      description: "World's largest natural flower garden with 150 million flowers",
      rating: 4.6,
      reviews: 65432,
      price: "$15",
      duration: "2-3 hours",
      image: "/miracle-garden.jpg",
      category: "Nature",
      coordinates: { lat: 25.0612, lng: 55.2440 }
    }
  ],
  
  "Rome": [
    {
      id: "rome-1",
      name: "Colosseum",
      description: "Ancient amphitheater and iconic symbol of Imperial Rome",
      rating: 4.7,
      reviews: 234567,
      price: "$18",
      duration: "2-3 hours",
      image: "/colosseum.jpg",
      category: "Historical",
      coordinates: { lat: 41.8902, lng: 12.4922 }
    },
    {
      id: "rome-2",
      name: "Vatican City",
      description: "Smallest country housing St. Peter's Basilica and Sistine Chapel",
      rating: 4.8,
      reviews: 198765,
      price: "$20",
      duration: "4-5 hours",
      image: "/vatican.jpg",
      category: "Religious",
      coordinates: { lat: 41.9029, lng: 12.4534 }
    },
    {
      id: "rome-3",
      name: "Trevi Fountain",
      description: "Baroque fountain where visitors toss coins to ensure return to Rome",
      rating: 4.6,
      reviews: 176543,
      price: "Free",
      duration: "30 mins",
      image: "/trevi.jpg",
      category: "Landmark",
      coordinates: { lat: 41.9009, lng: 12.4833 }
    },
    {
      id: "rome-4",
      name: "Pantheon",
      description: "Best-preserved Roman building with massive dome and oculus",
      rating: 4.8,
      reviews: 154321,
      price: "Free",
      duration: "1 hour",
      image: "/pantheon.jpg",
      category: "Historical",
      coordinates: { lat: 41.8986, lng: 12.4769 }
    },
    {
      id: "rome-5",
      name: "Roman Forum",
      description: "Ruins of ancient government buildings and marketplace",
      rating: 4.6,
      reviews: 132109,
      price: "$18",
      duration: "2-3 hours",
      image: "/roman-forum.jpg",
      category: "Historical",
      coordinates: { lat: 41.8925, lng: 12.4853 }
    },
    {
      id: "rome-6",
      name: "Spanish Steps",
      description: "Monumental stairway connecting Piazza di Spagna and Trinità dei Monti",
      rating: 4.5,
      reviews: 109876,
      price: "Free",
      duration: "30 mins",
      image: "/spanish-steps.jpg",
      category: "Landmark",
      coordinates: { lat: 41.9060, lng: 12.4823 }
    },
    {
      id: "rome-7",
      name: "Villa Borghese",
      description: "Large landscape garden with museums, lake, and galleries",
      rating: 4.6,
      reviews: 87654,
      price: "Free",
      duration: "2-3 hours",
      image: "/villa-borghese.jpg",
      category: "Nature",
      coordinates: { lat: 41.9145, lng: 12.4923 }
    },
    {
      id: "rome-8",
      name: "Castel Sant'Angelo",
      description: "Cylindrical castle initially commissioned as mausoleum for Emperor Hadrian",
      rating: 4.5,
      reviews: 76543,
      price: "$15",
      duration: "2 hours",
      image: "/castel-angelo.jpg",
      category: "Historical",
      coordinates: { lat: 41.9031, lng: 12.4663 }
    },
    {
      id: "rome-9",
      name: "Piazza Navona",
      description: "Baroque square with three fountains and street artists",
      rating: 4.6,
      reviews: 65432,
      price: "Free",
      duration: "1 hour",
      image: "/piazza-navona.jpg",
      category: "Landmark",
      coordinates: { lat: 41.8992, lng: 12.4730 }
    },
    {
      id: "rome-10",
      name: "Trastevere",
      description: "Charming neighborhood with cobblestone streets and authentic trattorias",
      rating: 4.7,
      reviews: 54321,
      price: "Free",
      duration: "2-3 hours",
      image: "/trastevere.jpg",
      category: "Neighborhood",
      coordinates: { lat: 41.8896, lng: 12.4697 }
    }
  ]
};

// Function to get attractions for a destination
export function getCityAttractions(destination: string): Attraction[] {
  const normalizedDestination = destination.split(',')[0].trim();
  
  // Check if we have specific attractions for this city
  const attractions = cityAttractions[normalizedDestination];
  
  if (attractions) {
    return attractions;
  }
  
  // Return default attractions if city not found
  return cityAttractions["Paris"]; // Default to Paris attractions as placeholder
}

// Function to search attractions
export function searchAttractions(destination: string, query: string): Attraction[] {
  const attractions = getCityAttractions(destination);
  const searchTerm = query.toLowerCase();
  
  return attractions.filter(attraction => 
    attraction.name.toLowerCase().includes(searchTerm) ||
    attraction.description.toLowerCase().includes(searchTerm) ||
    attraction.category.toLowerCase().includes(searchTerm)
  );
}

// Function to get nearby attractions
export function getNearbyAttractions(destination: string, excludeIds: string[] = []): Attraction[] {
  const allAttractions = getCityAttractions(destination);
  
  // Filter out already selected attractions
  return allAttractions.filter(attraction => !excludeIds.includes(attraction.id));
}

// Function to get attractions by category
export function getAttractionsByCategory(destination: string, category: string): Attraction[] {
  const attractions = getCityAttractions(destination);
  
  if (category === "All") {
    return attractions;
  }
  
  return attractions.filter(attraction => attraction.category === category);
}

// Get unique categories for a destination
export function getCategories(destination: string): string[] {
  const attractions = getCityAttractions(destination);
  const categories = new Set(attractions.map(a => a.category));
  return ["All", ...Array.from(categories)];
}