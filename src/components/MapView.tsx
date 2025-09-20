import { useEffect, useRef } from "react";
import { Attraction, Hotel } from "@/types/travel";

interface MapViewProps {
  attractions: Attraction[];
  hotels: Hotel[];
}

export function MapView({ attractions, hotels }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real app, this would integrate with a mapping library like Mapbox or Google Maps
    // For now, we'll create a placeholder visualization
    if (mapRef.current) {
      // Placeholder for map initialization
    }
  }, [attractions, hotels]);

  return (
    <div ref={mapRef} className="h-[300px] relative bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg overflow-hidden">
      {/* Placeholder Map Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Interactive Map</p>
          <p className="text-xs text-muted-foreground">
            {attractions.length} attractions • {hotels.length} hotels
          </p>
        </div>
      </div>

      {/* Map Points Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {attractions.slice(0, 3).map((attraction, index) => (
          <div
            key={attraction.id}
            className="absolute animate-pulse"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 15}%`,
            }}
          >
            <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg" />
          </div>
        ))}
        {hotels.slice(0, 2).map((hotel, index) => (
          <div
            key={hotel.id}
            className="absolute animate-pulse"
            style={{
              left: `${60 + index * 20}%`,
              top: `${50 + index * 20}%`,
            }}
          >
            <div className="w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}