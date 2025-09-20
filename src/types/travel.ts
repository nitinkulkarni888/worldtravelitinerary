export interface TravelPreferences {
  destination: string;
  days: number;
  budget?: string;
  travelStyle: string[];
  startDate?: string;
  travelers: number;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  price: string;
  duration: string;
  image: string;
  category: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
  distance: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  activities: {
    time: string;
    attraction: Attraction;
    transport?: string;
    transportCost?: number;
  }[];
  hotel?: Hotel;
  totalCost: number;
}

export interface TripItinerary {
  destination: string;
  duration: number;
  startDate: string;
  endDate: string;
  days: DayItinerary[];
  totalCost: number;
  costBreakdown: {
    accommodation: number;
    transport: number;
    activities: number;
    food: number;
  };
  hotels: Hotel[];
}