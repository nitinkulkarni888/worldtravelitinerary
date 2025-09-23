import { useState } from "react";
import { Edit, Trash2, Plus, Save, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Attraction } from "@/types/travel";
import { useToast } from "@/hooks/use-toast";

interface AttractionEditorProps {
  isOpen: boolean;
  onClose: () => void;
  attraction: Attraction | null;
  onSave: (attraction: Attraction) => void;
  onDelete?: (id: string) => void;
}

export function AttractionEditor({ isOpen, onClose, attraction, onSave, onDelete }: AttractionEditorProps) {
  const { toast } = useToast();
  const [editedAttraction, setEditedAttraction] = useState<Attraction | null>(attraction);

  const handleSave = () => {
    if (!editedAttraction) return;
    
    // Validate required fields
    if (!editedAttraction.name || !editedAttraction.description) {
      toast({
        title: "Validation Error",
        description: "Name and description are required fields",
        variant: "destructive"
      });
      return;
    }
    
    onSave(editedAttraction);
    toast({
      title: "Attraction Saved",
      description: `${editedAttraction.name} has been updated successfully`,
    });
    onClose();
  };

  const handleDelete = () => {
    if (!attraction) return;
    
    if (onDelete) {
      onDelete(attraction.id);
      toast({
        title: "Attraction Removed",
        description: `${attraction.name} has been removed from the itinerary`,
      });
      onClose();
    }
  };

  if (!editedAttraction) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5" />
            {attraction ? "Edit Attraction" : "Add Custom Attraction"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Attraction Name</Label>
            <Input
              id="name"
              value={editedAttraction.name}
              onChange={(e) => setEditedAttraction({ ...editedAttraction, name: e.target.value })}
              placeholder="Enter attraction name"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={editedAttraction.description}
              onChange={(e) => setEditedAttraction({ ...editedAttraction, description: e.target.value })}
              placeholder="Enter description"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={editedAttraction.category}
                onValueChange={(value) => setEditedAttraction({ ...editedAttraction, category: value })}
              >
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Landmark">Landmark</SelectItem>
                  <SelectItem value="Cultural">Cultural</SelectItem>
                  <SelectItem value="Historical">Historical</SelectItem>
                  <SelectItem value="Nature">Nature</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Shopping">Shopping</SelectItem>
                  <SelectItem value="Food & Drink">Food & Drink</SelectItem>
                  <SelectItem value="Religious">Religious</SelectItem>
                  <SelectItem value="Neighborhood">Neighborhood</SelectItem>
                  <SelectItem value="Activity">Activity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                value={editedAttraction.duration}
                onChange={(e) => setEditedAttraction({ ...editedAttraction, duration: e.target.value })}
                placeholder="e.g., 2-3 hours"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                value={editedAttraction.price}
                onChange={(e) => setEditedAttraction({ ...editedAttraction, price: e.target.value })}
                placeholder="e.g., $25 or Free"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="rating">Rating</Label>
              <Input
                id="rating"
                type="number"
                min="1"
                max="5"
                step="0.1"
                value={editedAttraction.rating}
                onChange={(e) => setEditedAttraction({ ...editedAttraction, rating: parseFloat(e.target.value) })}
                placeholder="1-5"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="lat">Latitude</Label>
              <Input
                id="lat"
                type="number"
                step="0.0001"
                value={editedAttraction.coordinates.lat}
                onChange={(e) => setEditedAttraction({ 
                  ...editedAttraction, 
                  coordinates: { ...editedAttraction.coordinates, lat: parseFloat(e.target.value) }
                })}
                placeholder="e.g., 40.7128"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lng">Longitude</Label>
              <Input
                id="lng"
                type="number"
                step="0.0001"
                value={editedAttraction.coordinates.lng}
                onChange={(e) => setEditedAttraction({ 
                  ...editedAttraction, 
                  coordinates: { ...editedAttraction.coordinates, lng: parseFloat(e.target.value) }
                })}
                placeholder="e.g., -74.0060"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-between">
          <div>
            {attraction && onDelete && (
              <Button variant="destructive" onClick={handleDelete}>
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              <X className="h-4 w-4 mr-1" />
              Cancel
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-1" />
              Save Changes
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}