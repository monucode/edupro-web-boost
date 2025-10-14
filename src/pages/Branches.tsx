import BranchCard from "@/components/BranchCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Car, ArrowRight, Building, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Branches = () => {
  const branches = [
    {
      name: "Govind Nagar Branch",
      address: "Plot No. 14, Rambagh Colony, Bhujbal Farm Road, Behind Runghta Bela Vista, Govind Nagar, Nashik, Maharashtra 401203",
      phone: "+91-8208368355",
      timings: "Monday - Friday: 9:00 AM - 7:00 PM | Saturday - Sunday: 09:00 AM - 06:00 PM",
      studentsCount: "200+",
      features: [
        "Modern smart classrooms",
        "CCTV surveillance for safety",
        "Activity and recreation area",
        "Parent waiting room"
      ],
      slug: "govind-nagar",
      status: "Opening soon",
      description: "Our flagship branch with state-of-the-art facilities and comprehensive programs.",
      established: "2025",
      floorArea: "2500 sq ft",
      specialPrograms: ["Vedic Maths Championship Training", "Advanced Robotics Workshop"]
    },
    {
      name: "Manmad Branch", 
      address: "First floor Hemsuraj kirana, Near Sundar Selection Aajad Road, Manmad, Maharashtra 423104",
      phone: "+91-8208368355",
      timings: "Monday - Thursday: 9:00 AM - 7:00 PM | Saturday - Sunday: 10:00 AM - 3:00 PM | Friday: Holiday",
      studentsCount: "150+",
      features: [
        "Interactive smart boards",
        "Modern smart classrooms",
        "CCTV surveillance for safety",
        "Activity and recreation area",
        "Parent waiting room"
      ],
      slug: "manmad",
      description: "Conveniently located branch serving the Manmad community with excellence.",
      established: "2024",
      floorArea: "1800 sq ft",
      specialPrograms: ["Abacus Competition Prep", "Memory Training Workshop"]
    }
  ];

  const commonFeatures = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Modern Infrastructure",
      description: "All branches feature contemporary learning spaces with the latest educational technology."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Qualified and experienced teachers available at each location to ensure consistent quality."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Standardized Curriculum", 
      description: "Same high-quality courses and teaching standards maintained across all branches."
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Convenient Locations",
      description: "Strategically located branches with easy accessibility and parking facilities."
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              Our Locations
            </Badge>
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              2 Convenient Branches Across Maharashtra
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Visit any of our well-equipped branches for the same exceptional learning experience. 
              Each location is designed to provide the best educational environment for your child.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <div className="text-muted-foreground">Strategic Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">350+</div>
                <div className="text-muted-foreground">Total Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">4300+</div>
                <div className="text-muted-foreground">Sq Ft Learning Space</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {branches.map((branch, index) => (
              <BranchCard key={index} {...branch} />
            ))}
          </div>

          {/* Individual Branch Details */}
          <div className="space-y-12">
            {branches.map((branch, index) => (
              <Card key={index} className="card-enhanced overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-primary p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{branch.name}</h3>
                      {branch.isPopular && (
                        <Badge className="bg-secondary text-secondary-foreground">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-white/90 mb-6">{branch.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                        <div>
                          <div className="font-medium">Address</div>
                          <div className="text-white/80 text-sm">{branch.address}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-secondary" />
                        <div>
                          <div className="font-medium">Contact</div>
                          <div className="text-white/80 text-sm">{branch.phone}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-secondary" />
                        <div>
                          <div className="font-medium">Timings</div>
                          <div className="text-white/80 text-sm">{branch.timings}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                      <Link to={`/branches/${branch.slug}`}>
                        <Button variant="secondary" className="gap-2">
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      
                      <a href={`tel:${branch.phone}`}>
                        <Button variant="hero">
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Established</div>
                        <div className="font-semibold">{branch.established}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Floor Area</div>
                        <div className="font-semibold">{branch.floorArea}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Students</div>
                        <div className="font-semibold">{branch.studentsCount}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Programs</div>
                        <div className="font-semibold">All Courses</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Branch Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {branch.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Special Programs</h4>
                        <div className="space-y-2">
                          {branch.specialPrograms.map((program, idx) => (
                            <Badge key={idx} variant="outline" className="mr-2 mb-2">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Consistent Excellence Across All Branches
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every Hiran EduPro Academy branch maintains the same high standards and quality of education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 card-enhanced group">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Find Us on the Map</h2>
            <p className="text-xl text-muted-foreground">
              Easily locate our branches and plan your visit
            </p>
          </div>
          
          <Card className="card-enhanced">
            <CardContent className="p-8 text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on an interactive map to help you find the nearest branch. 
                For now, please use the contact details above or call us for directions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Get Directions
                  </Button>
                </Link>
                <Button variant="outline">
                  Call Nearest Branch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Visit Any Branch Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience our learning environment firsthand. Schedule a visit to any of our branches 
            and see why parents trust us with their children's education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Schedule Visit
              </Button>
            </Link>
            
            <Link to="/admissions">
              <Button size="lg" variant="hero">
                Start Enrollment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branches;
