import { useState } from "react";
import { Car, Train, Bus, Plane, Navigation, MapPin, Clock, DollarSign, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface TransportOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  from: string;
  to: string;
  date?: string;
}

export function TransportOptions({
  isOpen,
  onClose,
  from,
  to,
  date
}: TransportOptionsProps) {
  const [transportType, setTransportType] = useState("all");
  const { toast } = useToast();

  const transportOptions = [
    {
      id: "1",
      type: "taxi",
      provider: "Uber",
      estimatedPrice: "$15-25",
      duration: "20-30 min",
      description: "Door-to-door service, most convenient",
      bookingUrl: "https://m.uber.com"
    },
    {
      id: "2",
      type: "taxi",
      provider: "Local Taxi",
      estimatedPrice: "$12-20",
      duration: "20-30 min",
      description: "Traditional taxi service",
      bookingUrl: null
    },
    {
      id: "3",
      type: "public",
      provider: "Metro/Subway",
      estimatedPrice: "$2-5",
      duration: "35-45 min",
      description: "Economical option, may require transfers",
      bookingUrl: null
    },
    {
      id: "4",
      type: "public",
      provider: "Bus",
      estimatedPrice: "$1-3",
      duration: "45-60 min",
      description: "Most affordable, scenic route",
      bookingUrl: null
    },
    {
      id: "5",
      type: "rental",
      provider: "Car Rental",
      estimatedPrice: "$40-80/day",
      duration: "20-30 min",
      description: "Freedom to explore at your own pace",
      bookingUrl: "https://www.enterprise.com"
    },
    {
      id: "6",
      type: "rideshare",
      provider: "Lyft",
      estimatedPrice: "$14-24",
      duration: "20-30 min",
      description: "Rideshare alternative",
      bookingUrl: "https://www.lyft.com"
    }
  ];

  const filteredOptions = transportOptions.filter(option => {
    return transportType === "all" || 
      (transportType === "taxi" && (option.type === "taxi" || option.type === "rideshare")) ||
      (transportType === "public" && option.type === "public") ||
      (transportType === "rental" && option.type === "rental");
  });

  const handleBookTransport = (option: any) => {
    if (option.bookingUrl) {
      window.open(option.bookingUrl, '_blank');
      toast({
        title: "Opening Booking Platform",
        description: `Redirecting to ${option.provider}...`,
      });
    } else {
      toast({
        title: "Booking Information",
        description: `${option.provider} can be booked locally or at the station.`,
      });
    }
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(to)}`;
    window.open(url, '_blank');
  };

  const getTransportIcon = (type: string) => {
    switch(type) {
      case 'taxi':
      case 'rideshare':
        return <Car className="h-5 w-5" />;
      case 'public':
        return <Bus className="h-5 w-5" />;
      case 'rental':
        return <Car className="h-5 w-5" />;
      default:
        return <Navigation className="h-5 w-5" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Transportation Options</DialogTitle>
          <DialogDescription>
            Find the best way to travel from {from} to {to}
            {date && ` on ${new Date(date).toLocaleDateString()}`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Route Info */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{from}</span>
                <span className="text-muted-foreground">→</span>
                <span className="font-medium">{to}</span>
              </div>
              <Button size="sm" variant="outline" onClick={openGoogleMaps}>
                <Navigation className="h-4 w-4 mr-1" />
                View on Google Maps
              </Button>
            </div>
          </div>

          {/* Filter Tabs */}
          <Tabs value={transportType} onValueChange={setTransportType}>
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">All Options</TabsTrigger>
              <TabsTrigger value="taxi">Taxi & Ride</TabsTrigger>
              <TabsTrigger value="public">Public Transit</TabsTrigger>
              <TabsTrigger value="rental">Car Rental</TabsTrigger>
            </TabsList>

            <TabsContent value={transportType} className="mt-4">
              <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2">
                {filteredOptions.map(option => (
                  <Card key={option.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {getTransportIcon(option.type)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{option.provider}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {option.description}
                            </p>
                            <div className="flex gap-3 mt-2">
                              <Badge variant="outline" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {option.duration}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {option.estimatedPrice}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button 
                          size="sm"
                          onClick={() => handleBookTransport(option)}
                        >
                          {option.bookingUrl ? (
                            <>
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Book Now
                            </>
                          ) : (
                            'Get Info'
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Additional Resources */}
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Additional booking platforms:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://www.rome2rio.com', '_blank')}
              >
                Rome2Rio
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://moovitapp.com`, '_blank')}
              >
                Moovit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://citymapper.com', '_blank')}
              >
                Citymapper
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://www.kayak.com/cars', '_blank')}
              >
                Kayak Cars
              </Button>
            </div>
          </div>

          {/* Google Maps Embed Option */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <Label className="text-sm font-medium mb-2 block">
              Plan your route with Google Transit
            </Label>
            <Button 
              className="w-full"
              onClick={() => {
                const transitUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&travelmode=transit`;
                window.open(transitUrl, '_blank');
              }}
            >
              <Train className="h-4 w-4 mr-2" />
              View Public Transit Options on Google Maps
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}