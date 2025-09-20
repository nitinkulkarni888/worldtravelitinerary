import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-travel.jpg";

interface HeroProps {
  onSearch: (destination: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      onSearch(destination);
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Travel destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Plan Your Perfect Journey
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          AI-powered travel planning that creates personalized itineraries in seconds
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Where do you want to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-12 h-14 text-base border-0 focus-visible:ring-0"
              />
            </div>
            <Button type="submit" variant="ocean" size="xl">
              <Search className="mr-2" />
              Start Planning
            </Button>
          </div>
        </form>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-white">
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-1">10K+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-white/80">AI Planning</div>
          </div>
        </div>
      </div>

      {/* Animated decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}