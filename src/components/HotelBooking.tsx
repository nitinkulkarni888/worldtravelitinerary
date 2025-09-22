import { useState } from "react";
import { Hotel as HotelIcon, Star, Wifi, Car, Coffee, Dumbbell, Users, Bath, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Hotel } from "@/types/travel";
import { globalHotels } from "@/data/globalDestinations";
import { useToast } from "@/hooks/use-toast";

interface HotelBookingProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
  checkIn: string;
  checkOut: string;
  currentHotel?: Hotel;
  onSelectHotel?: (hotel: Hotel) => void;
}

export function HotelBooking({
  isOpen,
  onClose,
  destination,
  checkIn,
  checkOut,
  currentHotel,
  onSelectHotel
}: HotelBookingProps) {
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [selectedType, setSelectedType] = useState("all");
  const { toast } = useToast();

  // Generate hotels based on destination
  const hotels: Hotel[] = globalHotels.map((template, index) => ({
    id: `hotel-${index}`,
    name: `${destination} ${template.name}`,
    rating: template.rating,
    price: Math.floor((template.priceRange.min + template.priceRange.max) / 2),
    image: "/hotel-placeholder.jpg",
    amenities: template.amenities,
    distance: `${(index + 1) * 1.5} km from city center`,
    coordinates: { lat: 0, lng: 0 }
  }));

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    const matchesType = selectedType === "all" || 
      (selectedType === "luxury" && hotel.price > 200) ||
      (selectedType === "mid-range" && hotel.price >= 80 && hotel.price <= 200) ||
      (selectedType === "budget" && hotel.price < 80);
    return matchesPrice && matchesType;
  });

  const handleBookHotel = (hotel: Hotel) => {
    // Simulate opening booking platform
    const bookingUrl = `https://www.booking.com/search.html?ss=${encodeURIComponent(hotel.name)}&checkin=${checkIn}&checkout=${checkOut}`;
    window.open(bookingUrl, '_blank');
    
    toast({
      title: "Opening Booking Platform",
      description: `Redirecting to book ${hotel.name}...`,
    });

    if (onSelectHotel) {
      onSelectHotel(hotel);
    }
  };

  const getAmenityIcon = (amenity: string) => {
    const icons: Record<string, any> = {
      "WiFi": Wifi,
      "Pool": Users,
      "Spa": Bath,
      "Gym": Dumbbell,
      "Parking": Car,
      "Breakfast": Coffee,
    };
    const Icon = icons[amenity] || HotelIcon;
    return <Icon className="h-4 w-4" />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Find Hotels in {destination}</DialogTitle>
          <DialogDescription>
            Check-in: {new Date(checkIn).toLocaleDateString()} | Check-out: {new Date(checkOut).toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Filters */}
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Price Range: ${priceRange[0]} - ${priceRange[1]} per night
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={500}
                step={10}
                className="w-full"
              />
            </div>

            <Tabs value={selectedType} onValueChange={setSelectedType}>
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
                <TabsTrigger value="mid-range">Mid-range</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Hotel List */}
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {filteredHotels.map(hotel => (
              <Card key={hotel.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">{hotel.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{hotel.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">• {hotel.distance}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">${hotel.price}</p>
                          <p className="text-xs text-muted-foreground">per night</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {hotel.amenities.map(amenity => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {getAmenityIcon(amenity)}
                            <span className="ml-1">{amenity}</span>
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => handleBookHotel(hotel)}
                          className="flex-1"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Book on Booking.com
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            const expediaUrl = `https://www.expedia.com/Hotels-Search?destination=${encodeURIComponent(destination)}&startDate=${checkIn}&endDate=${checkOut}`;
                            window.open(expediaUrl, '_blank');
                          }}
                        >
                          Check Expedia
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            const hotelsUrl = `https://www.hotels.com/search.do?q-destination=${encodeURIComponent(destination)}&q-check-in=${checkIn}&q-check-out=${checkOut}`;
                            window.open(hotelsUrl, '_blank');
                          }}
                        >
                          Hotels.com
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">Compare prices on:</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://www.airbnb.com/s/${encodeURIComponent(destination)}`, '_blank')}
              >
                Airbnb
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://www.agoda.com/search?city=${encodeURIComponent(destination)}`, '_blank')}
              >
                Agoda
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://www.tripadvisor.com/Hotels-g1-${encodeURIComponent(destination)}-Hotels.html`, '_blank')}
              >
                TripAdvisor
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}