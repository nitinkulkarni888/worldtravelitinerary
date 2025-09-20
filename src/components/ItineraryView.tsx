import { useState } from "react";
import { MapPin, Clock, DollarSign, Star, Calendar, Hotel, Car, ArrowRight, Download, Share2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TripItinerary, DayItinerary } from "@/types/travel";
import { MapView } from "./MapView";
import { CostBreakdown } from "./CostBreakdown";
import { useToast } from "@/hooks/use-toast";

interface ItineraryViewProps {
  itinerary: TripItinerary;
  onEdit: () => void;
}

export function ItineraryView({ itinerary, onEdit }: ItineraryViewProps) {
  const [selectedDay, setSelectedDay] = useState(0);
  const { toast } = useToast();

  const handleExportPDF = () => {
    // In a real app, this would generate and download a PDF
    toast({
      title: "Exporting PDF",
      description: "Your itinerary is being prepared for download...",
    });
  };

  const handleShare = () => {
    // In a real app, this would generate a shareable link
    toast({
      title: "Share Link Created",
      description: "Link copied to clipboard!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-background to-primary/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{itinerary.destination} Adventure</h1>
              <p className="text-primary-foreground/90">
                {itinerary.duration} days • {new Date(itinerary.startDate).toLocaleDateString()} - {new Date(itinerary.endDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="hero" size="sm" onClick={handleExportPDF}>
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
              <Button variant="hero" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="hero" size="sm" onClick={onEdit}>
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={`day-${selectedDay}`} onValueChange={(value) => setSelectedDay(parseInt(value.split('-')[1]))}>
              <TabsList className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7 gap-1">
                {itinerary.days.slice(0, 7).map((day, index) => (
                  <TabsTrigger key={index} value={`day-${index}`} className="text-xs">
                    Day {day.day}
                  </TabsTrigger>
                ))}
              </TabsList>

              {itinerary.days.map((day, index) => (
                <TabsContent key={index} value={`day-${index}`} className="space-y-4 mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          Day {day.day}: {day.title}
                        </span>
                        <Badge variant="secondary">
                          ${day.totalCost} estimated
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="relative">
                            {actIndex > 0 && (
                              <div className="absolute left-6 -top-3 h-6 w-0.5 bg-border" />
                            )}
                            <div className="flex gap-4">
                              <div className="flex-shrink-0">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Clock className="h-5 w-5 text-primary" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">{activity.time}</p>
                                    <h4 className="font-semibold text-lg">{activity.attraction.name}</h4>
                                  </div>
                                  <div className="text-right">
                                    <div className="flex items-center gap-1 mb-1">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                      <span className="text-sm font-medium">{activity.attraction.rating}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{activity.attraction.price}</p>
                                  </div>
                                </div>
                                <p className="text-muted-foreground mb-3">{activity.attraction.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {activity.attraction.duration}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {activity.attraction.category}
                                  </Badge>
                                  {activity.transport && (
                                    <Badge variant="outline" className="text-xs">
                                      <Car className="h-3 w-3 mr-1" />
                                      {activity.transport} - ${activity.transportCost}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {day.hotel && (
                        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Hotel className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold">Tonight's Accommodation</h4>
                          </div>
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium">{day.hotel.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm">{day.hotel.rating}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">• {day.hotel.distance} from center</span>
                              </div>
                            </div>
                            <p className="font-semibold text-primary">${day.hotel.price}/night</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base">Interactive Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <MapView 
                  attractions={itinerary.days[selectedDay].activities.map(a => a.attraction)}
                  hotels={itinerary.hotels}
                />
              </CardContent>
            </Card>

            {/* Cost Breakdown */}
            <CostBreakdown 
              totalCost={itinerary.totalCost}
              breakdown={itinerary.costBreakdown}
            />

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Hotel className="h-4 w-4 mr-2" />
                  View All Hotels
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Car className="h-4 w-4 mr-2" />
                  Transportation Options
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Add Custom Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}