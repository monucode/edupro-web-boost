import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Upload, X, ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EventGalleryProps {
  eventTitle: string;
}

export const EventGallery = ({ eventTitle }: EventGalleryProps) => {
  const storageKey = `event-gallery-${eventTitle.toLowerCase().replace(/\s+/g, '-')}`;
  const [images, setImages] = useState<string[]>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            const updatedImages = [...images, ...newImages];
            setImages(updatedImages);
            localStorage.setItem(storageKey, JSON.stringify(updatedImages));
            toast({
              title: "Images uploaded successfully",
              description: `${newImages.length} image(s) added to ${eventTitle} gallery`,
            });
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    localStorage.setItem(storageKey, JSON.stringify(updatedImages));
    toast({
      title: "Image removed",
      description: "Image has been removed from the gallery",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ImageIcon className="h-4 w-4" />
          Manage Gallery ({images.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{eventTitle} - Photo Gallery</DialogTitle>
          <DialogDescription>
            Upload and manage photos for this competition
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upload Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  id={`upload-${eventTitle}`}
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor={`upload-${eventTitle}`} className="cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm font-medium mb-2">Click to upload images</p>
                  <p className="text-xs text-muted-foreground">
                    Support for JPG, PNG, GIF (max 10MB each)
                  </p>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Grid */}
          {images.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gallery Images ({images.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {images.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <ImageIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>No images uploaded yet. Start by uploading your first image!</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
