import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Calendar, Users, MapPin } from "lucide-react";
import nationalComp1 from "@/assets/events/national-comp-1.jpeg";
import nationalComp2 from "@/assets/events/national-comp-2.jpeg";
import nationalComp3 from "@/assets/events/national-comp-3.jpeg";
import nationalComp4 from "@/assets/events/national-comp-4.jpeg";
import nationalComp5 from "@/assets/events/national-comp-5.jpeg";
import nationalComp6 from "@/assets/events/national-comp-6.jpeg";
import nationalComp7 from "@/assets/events/national-comp-7.jpeg";
import nationalComp8 from "@/assets/events/national-comp-8.jpeg";
import nationalComp9 from "@/assets/events/national-comp-9.jpeg";
import regionalComp1 from "@/assets/events/regional-comp-1.jpeg";
import regionalComp2 from "@/assets/events/regional-comp-2.jpeg";
import regionalComp3 from "@/assets/events/regional-comp-3.jpeg";
import regionalComp4 from "@/assets/events/regional-comp-4.jpeg";

const EventGallery = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // Event data based on eventId
  const eventData: Record<string, {
    title: string;
    date: string;
    venue: string;
    participants: string;
    description: string;
    storageKey: string;
    defaultImages?: string[];
  }> = {
    "regional-abacus-2024": {
      title: "Regional Abacus Competition",
      date: "November 2024",
      venue: "Govind Nagar Branch",
      participants: "60+ students",
      description: "Regional level abacus competition held with great success, showcasing exceptional calculation skills and mental math abilities.",
      storageKey: "event-gallery-regional-abacus-competition",
      defaultImages: [
        regionalComp1,
        regionalComp2,
        regionalComp3,
        regionalComp4
      ]
    },
    "national-competition-summer-2025": {
      title: "National Competition Summer 2025",
      date: "June 2025",
      venue: "Nashik",
      participants: "100+ students",
      description: "National level competition showcasing talent from across the country in various academic disciplines.",
      storageKey: "event-gallery-national-competition-summer",
      defaultImages: [
        nationalComp1,
        nationalComp2,
        nationalComp3,
        nationalComp4,
        nationalComp5,
        nationalComp6,
        nationalComp7,
        nationalComp8,
        nationalComp9
      ]
    },
    "parent-teacher-2024": {
      title: "Parent-Teacher Conference",
      date: "January 2024",
      venue: "All Branches",
      participants: "300+ parents",
      description: "Comprehensive academic review sessions with personalized feedback and development planning.",
      storageKey: "event-gallery-parent-teacher-conference"
    }
  };

  const event = eventId ? eventData[eventId] : null;

  useEffect(() => {
    if (event) {
      const saved = localStorage.getItem(event.storageKey);
      const savedImages = saved ? JSON.parse(saved) : [];
      // Merge default images with saved images from localStorage
      const allImages = event.defaultImages 
        ? [...event.defaultImages, ...savedImages]
        : savedImages;
      setGalleryImages(allImages);
    }
  }, [event]);

  if (!event) {
    return (
      <main className="pt-16 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">The event gallery you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/events")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/events")}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>

          <div className="max-w-4xl">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Event Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {event.title}
            </h1>
            <p className="text-lg text-white/90 mb-6">
              {event.description}
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>{event.participants}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Event Photos</h2>
            <p className="text-muted-foreground">
              {galleryImages.length > 0 ? `${galleryImages.length} photos from this event` : "No photos uploaded yet"}
            </p>
          </div>

          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer group card-enhanced">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={image}
                          alt={`${event.title} - Photo ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                  <div className="relative">
                    <img
                      src={image}
                      alt={`${event.title} - Photo ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No images have been uploaded for this event yet.</p>
              <Button onClick={() => navigate("/events")} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Button>
            </div>
          )}

          {/* Event Highlights */}
          <Card className="mt-12 card-enhanced">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Event Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">About the Event</h4>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Event Details</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-medium text-foreground">Date:</span> {event.date}</p>
                    <p><span className="font-medium text-foreground">Venue:</span> {event.venue}</p>
                    <p><span className="font-medium text-foreground">Participants:</span> {event.participants}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-gradient-subtle p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Want to Participate in Our Next Event?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay updated with our upcoming events and competitions. Join our community to never miss an opportunity!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/events")}
                className="bg-gradient-primary hover:opacity-90"
              >
                View Upcoming Events
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventGallery;
