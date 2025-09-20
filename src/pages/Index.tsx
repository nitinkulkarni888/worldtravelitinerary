import { useState } from "react";
import { Hero } from "@/components/Hero";
import { TripPreferences } from "@/components/TripPreferences";
import { ItineraryView } from "@/components/ItineraryView";
import { TravelPreferences, TripItinerary } from "@/types/travel";
import { generateMockItinerary } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

type AppState = "home" | "preferences" | "itinerary";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("home");
  const [destination, setDestination] = useState("");
  const [itinerary, setItinerary] = useState<TripItinerary | null>(null);
  const { toast } = useToast();

  const handleDestinationSearch = (dest: string) => {
    setDestination(dest);
    setAppState("preferences");
  };

  const handlePreferencesSubmit = (preferences: TravelPreferences) => {
    // Simulate AI processing
    toast({
      title: "Generating Your Perfect Itinerary",
      description: "Our AI is crafting a personalized travel plan just for you...",
    });

    // Simulate API delay
    setTimeout(() => {
      const generatedItinerary = generateMockItinerary(preferences.destination, preferences.days);
      setItinerary(generatedItinerary);
      setAppState("itinerary");
      
      toast({
        title: "Itinerary Ready!",
        description: "Your personalized travel plan has been created.",
      });
    }, 2000);
  };

  const handleBackToHome = () => {
    setAppState("home");
    setDestination("");
    setItinerary(null);
  };

  const handleEditItinerary = () => {
    setAppState("preferences");
  };

  if (appState === "preferences") {
    return (
      <TripPreferences
        destination={destination}
        onSubmit={handlePreferencesSubmit}
        onBack={handleBackToHome}
      />
    );
  }

  if (appState === "itinerary" && itinerary) {
    return (
      <ItineraryView
        itinerary={itinerary}
        onEdit={handleEditItinerary}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Hero onSearch={handleDestinationSearch} />
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Destination</h3>
              <p className="text-muted-foreground">Enter your dream destination and travel dates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-secondary-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Preferences</h3>
              <p className="text-muted-foreground">Tell us your travel style, budget, and interests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Itinerary</h3>
              <p className="text-muted-foreground">Receive a personalized day-by-day travel plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Goa, India", "Paris, France", "Tokyo, Japan", "Bali, Indonesia"].map((place) => (
              <div 
                key={place}
                onClick={() => handleDestinationSearch(place)}
                className="group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-lg">{place}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;