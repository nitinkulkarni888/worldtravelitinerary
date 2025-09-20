import { TripItinerary, Attraction, Hotel } from "@/types/travel";
import { getAttractionsForDestination, globalHotels } from "./globalDestinations";

export const generateMockItinerary = (destination: string, days: number): TripItinerary => {
  // Get attractions for any global destination
  const baseAttractions = getAttractionsForDestination(destination, []);
  
  // Generate dynamic attractions based on destination
  const attractions: Attraction[] = baseAttractions.length > 0 ? baseAttractions : [
    {
      id: "1",
      name: `${destination} City Center`,
      description: "Explore the heart of the city with its main attractions and landmarks",
      rating: 4.5,
      reviews: 2341,
      price: "Free",
      duration: "3-4 hours",
      image: "/beach1.jpg",
      category: "Beach",
      coordinates: { lat: 15.5553, lng: 73.7517 }
    },
    {
      id: "2",
      name: `${destination} Historic Quarter`,
      description: "UNESCO World Heritage Sites and historical landmarks",
      rating: 4.7,
      reviews: 5632,
      price: "Free",
      duration: "1-2 hours",
      image: "/church.jpg",
      category: "Cultural",
      coordinates: { lat: 15.5009, lng: 73.9116 }
    },
    {
      id: "3",
      name: `${destination} Natural Wonder`,
      description: "Spectacular natural attractions and scenic viewpoints",
      rating: 4.8,
      reviews: 3421,
      price: "$30",
      duration: "Full day",
      image: "/waterfall.jpg",
      category: "Nature",
      coordinates: { lat: 15.3144, lng: 74.3143 }
    },
    {
      id: "4",
      name: `${destination} Popular District`,
      description: "Famous area perfect for exploration and entertainment",
      rating: 4.4,
      reviews: 4521,
      price: "Free",
      duration: "3-4 hours",
      image: "/beach2.jpg",
      category: "Beach",
      coordinates: { lat: 15.5494, lng: 73.7535 }
    },
    {
      id: "5",
      name: `${destination} Cultural Experience`,
      description: "Immerse yourself in local culture with traditional experiences",
      rating: 4.6,
      reviews: 1823,
      price: "$25",
      duration: "4-5 hours",
      image: "/spice.jpg",
      category: "Cultural",
      coordinates: { lat: 15.4047, lng: 74.0242 }
    },
    {
      id: "6",
      name: `${destination} Local Market`,
      description: "Vibrant market with local handicrafts and souvenirs",
      rating: 4.3,
      reviews: 2914,
      price: "Free entry",
      duration: "2-3 hours",
      image: "/market.jpg",
      category: "Shopping",
      coordinates: { lat: 15.5736, lng: 73.7405 }
    },
    {
      id: "7",
      name: `${destination} Sunset Experience`,
      description: "Romantic sunset experience with stunning views",
      rating: 4.5,
      reviews: 1654,
      price: "$20",
      duration: "2 hours",
      image: "/cruise.jpg",
      category: "Experience",
      coordinates: { lat: 15.5013, lng: 73.8278 }
    },
    {
      id: "8",
      name: `${destination} Adventure Activity`,
      description: "Thrilling activities with panoramic views",
      rating: 4.7,
      reviews: 892,
      price: "$40",
      duration: "30 minutes",
      image: "/parasailing.jpg",
      category: "Adventure",
      coordinates: { lat: 15.5173, lng: 73.7629 }
    }
  ];

  // Generate hotels based on destination
  const hotelTypes = destination.toLowerCase().includes("budget") 
    ? ["budget", "hostel"] 
    : ["luxury", "boutique", "business"];
    
  const hotels: Hotel[] = globalHotels
    .filter(h => hotelTypes.includes(h.type))
    .slice(0, 3)
    .map((template, index) => ({
      id: `h${index + 1}`,
      name: `${destination} ${template.name}`,
      rating: template.rating,
      price: Math.floor((template.priceRange.min + template.priceRange.max) / 2),
      image: "/hotel-placeholder.jpg",
      amenities: template.amenities,
      distance: `${(index + 1) * 2} km`,
      coordinates: { lat: 0, lng: 0 }
    }));

  const dayItineraries = [];
  const activitiesPerDay = 3;
  
  for (let day = 1; day <= days; day++) {
    const dayActivities = [];
    const startIndex = ((day - 1) * activitiesPerDay) % attractions.length;
    
    // Morning activity
    dayActivities.push({
      time: "9:00 AM",
      attraction: attractions[startIndex % attractions.length],
      transport: day === 1 ? "Airport Transfer" : "Taxi",
      transportCost: day === 1 ? 30 : 15
    });
    
    // Afternoon activity
    dayActivities.push({
      time: "2:00 PM",
      attraction: attractions[(startIndex + 1) % attractions.length],
      transport: "Auto-rickshaw",
      transportCost: 8
    });
    
    // Evening activity
    dayActivities.push({
      time: "6:00 PM",
      attraction: attractions[(startIndex + 2) % attractions.length],
      transport: "Walk",
      transportCost: 0
    });

    const dayTitles = [
      "City Exploration & Landmarks",
      "Cultural Heritage Tour",
      "Adventure & Nature Discovery",
      "Local Markets & Shopping",
      "Scenic Views & Entertainment",
      "Food & Culinary Journey",
      "Day Trip & Excursions",
      "Museums & Art Galleries",
      "Relaxation & Wellness",
      "Nightlife & Entertainment"
    ];

    dayItineraries.push({
      day,
      date: new Date(Date.now() + (day - 1) * 24 * 60 * 60 * 1000).toISOString(),
      title: dayTitles[(day - 1) % dayTitles.length],
      activities: dayActivities,
      hotel: hotels[day % 2],
      totalCost: 350 + (day * 50)
    });
  }

  return {
    destination,
    duration: days,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString(),
    days: dayItineraries,
    totalCost: days * 400,
    costBreakdown: {
      accommodation: days * 200,
      transport: days * 50,
      activities: days * 80,
      food: days * 70
    },
    hotels
  };
};