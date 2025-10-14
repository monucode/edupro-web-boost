import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Trophy, BookOpen, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      title: "National Competition Summer",
      date: "June 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Nashik",
      description: "National level competition showcasing talent from across the country in various academic disciplines.",
      category: "Competition",
      participants: "100+ students",
      ageGroup: "All ages",
      registration: "Completed",
      highlights: ["Multi-category competitions", "National recognition", "Grand prizes", "Networking opportunities"]
    },
    {
      title: "Regional Abacus Competition",
      date: "November 2024",
      time: "9:00 AM - 3:00 PM", 
      venue: "Nashik",
      description: "Regional level abacus competition showcasing speed calculation and mental math skills.",
      category: "Competition",
      participants: "60+ students",
      ageGroup: "7-12 years",
      registration: "Completed",
      highlights: ["Regional recognition", "Speed calculation rounds", "Mental math challenges", "Trophy and medals ceremony"]
    }
  ];

  const pastEvents = [
    {
      id: "Class-event-2025",
      title: "Class Event", 
      date: "June 2025",
      description: "Interactive sessions for enhancing mental math, concentration, and problem-solving skills with personalized guidance.",
      images: 3,
      participants: "50+ students",
      hasGallery: true
    },
    {
      id: "national-competition-summer-2025",
      title: "National Competition Summer 2025",
      date: "June 2025",
      description: "National level competition showcasing talent from across the country in various academic disciplines.",
      images: 0,
      participants: "100+ students",
      hasGallery: true
    },
    {
      id: "regional-abacus-2024",
      title: "Regional Abacus Competition",
      date: "November 2024",
      description: "Regional level abacus competition held with great success, showcasing exceptional calculation skills.",
      images: 6,
      participants: "60+ students",
      hasGallery: true
    },    
    {
      id: "parent-teacher-2024",
      title: "Parent-Teacher Conference", 
      date: "January 2024",
      description: "Comprehensive academic review sessions with personalized feedback and development planning.",
      images: 3,
      participants: "300+ parents",
      hasGallery: true
    }
  ];

  const eventCategories = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Competitions",
      description: "Inter-branch and regional academic competitions to showcase student skills",
      count: "8+ annually"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Workshops",
      description: "Hands-on learning sessions with expert instructors and industry professionals", 
      count: "12+ per year"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Seminars",
      description: "Educational seminars for parents and students on learning strategies",
      count: "6+ sessions"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Celebrations",
      description: "Cultural events, festivals, and achievement recognition ceremonies",
      count: "4+ events"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white backdrop-blur-sm">
              Academy Events & Activities
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Engaging Events & Workshops
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Participate in exciting competitions, educational workshops, and community events 
              that enhance learning and build lasting memories.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">30+</div>
                <div className="text-white/80">Annual Events</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-white/80">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">12</div>
                <div className="text-white/80">Competitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Types of Events We Organize
            </h2>
            <p className="text-xl text-muted-foreground">
              Diverse activities designed to enhance learning and build community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventCategories.map((category, index) => (
              <Card key={index} className="text-center p-6 card-enhanced group">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Badge variant="outline">{category.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Recent Updates
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recent Events & Workshops
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't miss these exciting learning opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-enhanced overflow-hidden">
                <div className="bg-gradient-primary p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      {event.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm text-white/80">Registration</div>
                      <div className="font-semibold text-sm">{event.registration}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <p className="text-white/90 mb-6">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold">Event Highlights</h4>
                        <Badge variant="outline">{event.ageGroup}</Badge>
                      </div>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-primary hover:opacity-90 gap-2">
                        Register Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      
                      <a
                        href={`https://wa.me/+918208368355?text=${encodeURIComponent(`I want to register for: ${event.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="gap-2">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Past Event Highlights
            </h2>
            <p className="text-xl text-muted-foreground">
              Celebrating our successful events and student achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="card-enhanced">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-subtle rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">{event.images} Photos Available</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{event.participants}</Badge>
                    <Link to={`/events/${event.id}`}>
                      <Button variant="ghost" size="sm" className="gap-2">
                        View Gallery
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated with Our Events
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community to receive notifications about upcoming events, workshops, 
            and competitions. Never miss an opportunity for your child to shine!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Subscribe to Updates
              </Button>
            </Link>
            
            <a
              href="https://wa.me/+918208368355?text=I want to stay updated about Hiran EduPro Academy events"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="hero">
                WhatsApp Updates
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
