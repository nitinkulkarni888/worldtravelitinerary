import { useState, useEffect } from "react";
import { Search, Star, Clock, DollarSign, MapPin, Plus, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Attraction } from "@/types/travel";
import { getAttractionsForDestination, activityCategories } from "@/data/globalDestinations";

interface AttractionSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
  currentAttractions: Attraction[];
  onSelectAttractions: (attractions: Attraction[]) => void;
  dayNumber?: number;
}

export function AttractionSelector({
  isOpen,
  onClose,
  destination,
  currentAttractions,
  onSelectAttractions,
  dayNumber
}: AttractionSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAttractions, setSelectedAttractions] = useState<Attraction[]>(currentAttractions);
  const [availableAttractions, setAvailableAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    // Get all attractions for the destination
    const attractions = getAttractionsForDestination(destination, []);
    // Add more mock attractions for variety
    const extendedAttractions = [
      ...attractions,
      {
        id: `${destination}-museum-1`,
        name: `${destination} National Museum`,
        description: "Discover the rich history and cultural heritage through extensive collections",
        rating: 4.6,
        reviews: 3245,
        price: "$15",
        duration: "2-3 hours",
        image: "/museum.jpg",
        category: "Museum",
        coordinates: { lat: 0, lng: 0 }
      },
      {
        id: `${destination}-park-1`,
        name: `${destination} Central Park`,
        description: "Beautiful green space perfect for relaxation and outdoor activities",
        rating: 4.4,
        reviews: 2876,
        price: "Free",
        duration: "1-2 hours",
        image: "/park.jpg",
        category: "Nature",
        coordinates: { lat: 0, lng: 0 }
      },
      {
        id: `${destination}-food-tour`,
        name: `${destination} Street Food Tour`,
        description: "Taste authentic local cuisine and discover hidden culinary gems",
        rating: 4.8,
        reviews: 1987,
        price: "$35",
        duration: "3-4 hours",
        image: "/food.jpg",
        category: "Food",
        coordinates: { lat: 0, lng: 0 }
      },
      {
        id: `${destination}-temple`,
        name: `${destination} Historic Temple`,
        description: "Ancient religious site with stunning architecture and peaceful atmosphere",
        rating: 4.7,
        reviews: 4123,
        price: "$5",
        duration: "1-2 hours",
        image: "/temple.jpg",
        category: "Cultural",
        coordinates: { lat: 0, lng: 0 }
      },
      {
        id: `${destination}-beach`,
        name: `${destination} Beach`,
        description: "Pristine coastline with crystal clear waters and water sports",
        rating: 4.5,
        reviews: 5432,
        price: "Free",
        duration: "Half day",
        image: "/beach.jpg",
        category: "Beach",
        coordinates: { lat: 0, lng: 0 }
      },
      {
        id: `${destination}-nightlife`,
        name: `${destination} Night Market`,
        description: "Vibrant evening atmosphere with shopping, food, and entertainment",
        rating: 4.3,
        reviews: 2341,
        price: "Free entry",
        duration: "2-3 hours",
        image: "/night-market.jpg",
        category: "Nightlife",
        coordinates: { lat: 0, lng: 0 }
      }
    ];
    setAvailableAttractions(extendedAttractions);
  }, [destination]);

  const filteredAttractions = availableAttractions.filter(attraction => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attraction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || attraction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAttraction = (attraction: Attraction) => {
    const isSelected = selectedAttractions.some(a => a.id === attraction.id);
    if (isSelected) {
      setSelectedAttractions(selectedAttractions.filter(a => a.id !== attraction.id));
    } else {
      setSelectedAttractions([...selectedAttractions, attraction]);
    }
  };

  const handleConfirm = () => {
    onSelectAttractions(selectedAttractions);
    onClose();
  };

  const categories = ["all", "Cultural", "Nature", "Beach", "Food", "Adventure", "Shopping", "Nightlife", "Museum"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>
            Select Attractions for {dayNumber ? `Day ${dayNumber}` : destination}
          </DialogTitle>
          <DialogDescription>
            Choose attractions to add to your itinerary. You can select multiple attractions.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search and Filter */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search attractions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Badge variant="secondary" className="px-3 py-2">
              {selectedAttractions.length} selected
            </Badge>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start flex-wrap h-auto p-1">
              {categories.map(category => (
                <TabsTrigger key={category} value={category} className="text-xs">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-4">
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-3">
                  {filteredAttractions.map(attraction => {
                    const isSelected = selectedAttractions.some(a => a.id === attraction.id);
                    return (
                      <div
                        key={attraction.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50 hover:bg-accent/50'
                        }`}
                        onClick={() => toggleAttraction(attraction)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold">{attraction.name}</h4>
                              <div className="flex items-center gap-2">
                                {isSelected && (
                                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                                    <Check className="h-4 w-4 text-primary-foreground" />
                                  </div>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {attraction.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="text-xs">
                                <Star className="h-3 w-3 mr-1" />
                                {attraction.rating} ({attraction.reviews} reviews)
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {attraction.duration}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {attraction.price}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <MapPin className="h-3 w-3 mr-1" />
                                {attraction.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>
              <Plus className="h-4 w-4 mr-1" />
              Add {selectedAttractions.length} Attraction{selectedAttractions.length !== 1 ? 's' : ''}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}