import { Attraction } from "@/types/travel";

// Global attractions database - expandable for any destination
export const globalAttractions: Record<string, Attraction[]> = {
  default: [
    {
      id: "d1",
      name: "Historic City Center",
      description: "Explore the heart of the city with its historical landmarks and cultural sites",
      rating: 4.6,
      reviews: 3421,
      price: "Free",
      duration: "3-4 hours",
      image: "/city-center.jpg",
      category: "Cultural",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d2",
      name: "Local Market Tour",
      description: "Experience authentic local culture through traditional markets and street food",
      rating: 4.5,
      reviews: 2156,
      price: "$15",
      duration: "2-3 hours",
      image: "/market.jpg",
      category: "Shopping",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d3",
      name: "Museum Quarter",
      description: "World-class museums showcasing art, history, and culture",
      rating: 4.7,
      reviews: 4532,
      price: "$20",
      duration: "4-5 hours",
      image: "/museum.jpg",
      category: "Cultural",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d4",
      name: "Scenic Viewpoint",
      description: "Panoramic views of the city and surrounding landscape",
      rating: 4.8,
      reviews: 5643,
      price: "Free",
      duration: "1-2 hours",
      image: "/viewpoint.jpg",
      category: "Nature",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d5",
      name: "Food & Culinary Tour",
      description: "Taste the best local cuisine with a guided food tour",
      rating: 4.9,
      reviews: 3876,
      price: "$45",
      duration: "3-4 hours",
      image: "/food-tour.jpg",
      category: "Food",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d6",
      name: "Adventure Activity",
      description: "Exciting outdoor activities and adventure sports",
      rating: 4.7,
      reviews: 2341,
      price: "$60",
      duration: "Half day",
      image: "/adventure.jpg",
      category: "Adventure",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d7",
      name: "Evening Entertainment",
      description: "Experience the nightlife with shows, concerts, or local performances",
      rating: 4.4,
      reviews: 1987,
      price: "$35",
      duration: "2-3 hours",
      image: "/entertainment.jpg",
      category: "Nightlife",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d8",
      name: "Day Trip Excursion",
      description: "Explore nearby attractions and scenic spots outside the city",
      rating: 4.6,
      reviews: 3210,
      price: "$75",
      duration: "Full day",
      image: "/day-trip.jpg",
      category: "Nature",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d9",
      name: "Religious & Spiritual Sites",
      description: "Visit temples, churches, mosques or other spiritual landmarks",
      rating: 4.5,
      reviews: 2876,
      price: "Free",
      duration: "2-3 hours",
      image: "/spiritual.jpg",
      category: "Cultural",
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: "d10",
      name: "Parks & Gardens",
      description: "Relax in beautiful parks and botanical gardens",
      rating: 4.3,
      reviews: 1654,
      price: "Free",
      duration: "2-3 hours",
      image: "/park.jpg",
      category: "Nature",
      coordinates: { lat: 0, lng: 0 }
    }
  ]
};

// Activity categories for different travel styles
export const activityCategories = {
  adventure: ["Adventure", "Nature", "Beach"],
  cultural: ["Cultural", "Museum", "Historical"],
  beach: ["Beach", "Water Sports", "Coastal"],
  food: ["Food", "Culinary", "Local Cuisine"],
  family: ["Family", "Parks", "Entertainment"],
  luxury: ["Luxury", "Spa", "Fine Dining"],
  budget: ["Free", "Budget", "Walking Tours"],
  nightlife: ["Nightlife", "Bars", "Clubs"],
  nature: ["Nature", "Wildlife", "Hiking"],
  shopping: ["Shopping", "Markets", "Souvenirs"],
  wellness: ["Spa", "Yoga", "Wellness"],
  photography: ["Scenic", "Viewpoints", "Photogenic"]
};

// Get attractions based on destination and preferences
export function getAttractionsForDestination(
  destination: string,
  travelStyles: string[]
): Attraction[] {
  // For now, return default attractions
  // In a real app, this would fetch from an API based on the destination
  const baseAttractions = globalAttractions.default;
  
  // Customize attraction names based on destination
  return baseAttractions.map((attraction, index) => ({
    ...attraction,
    id: `${destination.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`,
    name: `${destination} ${attraction.name}`
  }));
}

// Global hotel templates
export const globalHotels = [
  {
    type: "luxury",
    name: "5-Star Luxury Hotel",
    rating: 4.8,
    priceRange: { min: 200, max: 500 },
    amenities: ["Pool", "Spa", "Fine Dining", "Concierge", "Gym"]
  },
  {
    type: "business",
    name: "Business Hotel",
    rating: 4.5,
    priceRange: { min: 100, max: 200 },
    amenities: ["WiFi", "Business Center", "Restaurant", "Gym"]
  },
  {
    type: "boutique",
    name: "Boutique Hotel",
    rating: 4.6,
    priceRange: { min: 80, max: 150 },
    amenities: ["WiFi", "Breakfast", "Bar", "Local Art"]
  },
  {
    type: "budget",
    name: "Budget Hotel",
    rating: 4.2,
    priceRange: { min: 30, max: 80 },
    amenities: ["WiFi", "Breakfast", "24/7 Reception"]
  },
  {
    type: "hostel",
    name: "Backpacker Hostel",
    rating: 4.3,
    priceRange: { min: 15, max: 40 },
    amenities: ["WiFi", "Shared Kitchen", "Lockers", "Common Area"]
  },
  {
    type: "resort",
    name: "Beach Resort",
    rating: 4.7,
    priceRange: { min: 150, max: 400 },
    amenities: ["Beach Access", "Pool", "Spa", "Multiple Restaurants"]
  }
];