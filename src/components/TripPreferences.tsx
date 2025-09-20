import { useState } from "react";
import { Calendar, Users, DollarSign, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TravelPreferences } from "@/types/travel";

interface TripPreferencesProps {
  destination: string;
  onSubmit: (preferences: TravelPreferences) => void;
  onBack: () => void;
}

const travelStyles = [
  { id: "adventure", label: "Adventure", icon: "🏔️" },
  { id: "cultural", label: "Cultural", icon: "🏛️" },
  { id: "beach", label: "Beach & Relaxation", icon: "🏖️" },
  { id: "food", label: "Food & Culinary", icon: "🍜" },
  { id: "family", label: "Family Friendly", icon: "👨‍👩‍👧‍👦" },
  { id: "luxury", label: "Luxury", icon: "💎" },
  { id: "budget", label: "Budget Travel", icon: "💰" },
  { id: "nightlife", label: "Nightlife", icon: "🎉" },
  { id: "nature", label: "Nature & Wildlife", icon: "🦁" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
];

const budgetRanges = [
  { id: "budget", label: "Budget", range: "$0 - $500" },
  { id: "moderate", label: "Moderate", range: "$500 - $1500" },
  { id: "comfort", label: "Comfort", range: "$1500 - $3000" },
  { id: "luxury", label: "Luxury", range: "$3000+" },
];

export function TripPreferences({ destination, onSubmit, onBack }: TripPreferencesProps) {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<TravelPreferences>({
    destination,
    days: 5,
    budget: "moderate",
    travelStyle: [],
    travelers: 2,
    startDate: "",
  });

  const handleStyleToggle = (styleId: string) => {
    setPreferences(prev => ({
      ...prev,
      travelStyle: prev.travelStyle.includes(styleId)
        ? prev.travelStyle.filter(id => id !== styleId)
        : [...prev.travelStyle, styleId]
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onSubmit(preferences);
  };

  const canProceed = () => {
    if (step === 1) return preferences.days > 0 && preferences.travelers > 0;
    if (step === 2) return preferences.travelStyle.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/20 via-background to-primary/5 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Plan Your Trip to {destination}</h2>
            <span className="text-sm text-muted-foreground">Step {step} of 3</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <Card className="p-8 shadow-xl border-0 bg-card/95 backdrop-blur">
          {/* Step 1: Basic Details */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-6">Trip Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="days" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Number of Days
                    </Label>
                    <Input
                      id="days"
                      type="number"
                      min="1"
                      max="30"
                      value={preferences.days}
                      onChange={(e) => setPreferences({ ...preferences, days: parseInt(e.target.value) || 1 })}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Number of Travelers
                    </Label>
                    <Input
                      id="travelers"
                      type="number"
                      min="1"
                      max="20"
                      value={preferences.travelers}
                      onChange={(e) => setPreferences({ ...preferences, travelers: parseInt(e.target.value) || 1 })}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Start Date (Optional)
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={preferences.startDate}
                      onChange={(e) => setPreferences({ ...preferences, startDate: e.target.value })}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Budget Range
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {budgetRanges.map(range => (
                        <button
                          key={range.id}
                          onClick={() => setPreferences({ ...preferences, budget: range.id })}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            preferences.budget === range.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-medium">{range.label}</div>
                          <div className="text-xs text-muted-foreground">{range.range}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Travel Style */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Travel Style</h3>
                <p className="text-muted-foreground mb-6">Select all that apply to personalize your itinerary</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {travelStyles.map(style => (
                    <button
                      key={style.id}
                      onClick={() => handleStyleToggle(style.id)}
                      className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                        preferences.travelStyle.includes(style.id)
                          ? "border-primary bg-primary/10 text-primary shadow-lg"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="text-2xl mb-2">{style.icon}</div>
                      <div className="text-sm font-medium">{style.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Ready to Generate Your Perfect Itinerary!
                </h3>
                
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Destination</span>
                    <span className="font-medium">{destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{preferences.days} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Travelers</span>
                    <span className="font-medium">{preferences.travelers} people</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Budget</span>
                    <span className="font-medium capitalize">{preferences.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Travel Styles</span>
                    <span className="font-medium">
                      {preferences.travelStyle.length} selected
                    </span>
                  </div>
                </div>

                <p className="text-center text-muted-foreground mt-6">
                  Our AI will create a personalized day-by-day itinerary with attractions, 
                  hotels, and cost estimates tailored to your preferences.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={step === 1 ? onBack : () => setStep(step - 1)}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2 bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg"
            >
              {step === 3 ? "Generate Itinerary" : "Next"}
              {step === 3 ? <Sparkles className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}