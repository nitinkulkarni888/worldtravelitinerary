import { DollarSign, Hotel, Car, Ticket, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CostBreakdownProps {
  totalCost: number;
  breakdown: {
    accommodation: number;
    transport: number;
    activities: number;
    food: number;
  };
}

export function CostBreakdown({ totalCost, breakdown }: CostBreakdownProps) {
  const categories = [
    { 
      name: "Accommodation", 
      value: breakdown.accommodation, 
      icon: Hotel, 
      color: "bg-primary" 
    },
    { 
      name: "Transport", 
      value: breakdown.transport, 
      icon: Car, 
      color: "bg-secondary" 
    },
    { 
      name: "Activities", 
      value: breakdown.activities, 
      icon: Ticket, 
      color: "bg-accent" 
    },
    { 
      name: "Food", 
      value: breakdown.food, 
      icon: UtensilsCrossed, 
      color: "bg-muted-foreground" 
    },
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-base">
            <DollarSign className="h-5 w-5" />
            Cost Breakdown
          </span>
          <span className="text-2xl font-bold text-primary">${totalCost}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category) => {
          const percentage = (category.value / totalCost) * 100;
          const Icon = category.icon;
          
          return (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  {category.name}
                </span>
                <span className="font-medium">${category.value}</span>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          );
        })}
        
        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Estimated costs based on average prices
          </p>
        </div>
      </CardContent>
    </Card>
  );
}