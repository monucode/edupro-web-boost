import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Users, Award, CheckCircle, ArrowRight, Building, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";

const GovindNagar = () => {
  const branchData = {
    name: "Govind Nagar Branch",
    tagline: "Our Flagship Centre of Excellence",
    address: "Plot No. 123, Govind Nagar, Near Central School, Maharashtra 401203",
    phone: "+91-8208368355",
    email: "govindnagar@hiraneduproacademy.com",
    timings: "Monday - Friday: 8:45 AM - 2:00 PM | Saturday - Sunday: 10:00 AM - 3:00 PM",
    established: "2020",
    studentsCount: "200+",
    floorArea: "2500 sq ft",
    incharge: "Mrs. Priya Sharma",
    designation: "Branch Manager"
  };

  const features = [
    "Modern smart classrooms with displays",
    "Activity and recreation area for students",
    "Parent waiting rooms",
    "CCTV surveillance for safety"
  ];

  const courses = [
    {
      name: "Vedic Mathematics",
      students: "80+",
      batches: "4 batches",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      name: "Robotics",
      students: "50+",
      batches: "3 batches",
      icon: <Award className="h-5 w-5" />
    },
    {
      name: "Abacus Training",
      students: "40+",
      batches: "3 batches",
      icon: <Users className="h-5 w-5" />
    },
    {
      name: "Mnemonic Science",
      students: "20+",
      batches: "2 batches",
      icon: <Star className="h-5 w-5" />
    },
    {
      name: "Phonics & Reading",
      students: "10+",
      batches: "1 batch",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  const specialPrograms = [
    "Vedic Maths Championship Training",
    "Advanced Robotics Workshop",
    "Parent-Teacher Interaction Sessions",
    "Monthly Progress Assessment"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "The Govind Nagar branch has excellent facilities. My son loves attending the robotics classes here!",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Parent",
      content: "Best decision we made was enrolling our daughter here. The teachers are very caring and professional.",
      rating: 5
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">
              Flagship Branch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {branchData.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {branchData.tagline}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">2020</div>
                <div className="text-sm text-white/80">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">200+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">2500</div>
                <div className="text-sm text-white/80">Sq Ft Area</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">5</div>
                <div className="text-sm text-white/80">All Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-enhanced">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="text-sm text-muted-foreground">{branchData.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href={`tel:${branchData.phone}`} className="text-sm text-primary hover:underline">
                      {branchData.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href={`mailto:${branchData.email}`} className="text-sm text-primary hover:underline break-all">
                      {branchData.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Timings</div>
                    <p className="text-sm text-muted-foreground">{branchData.timings}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branch Features */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art infrastructure for optimal learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-enhanced">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Courses at This Branch
            </h2>
            <p className="text-xl text-muted-foreground">
              All our specialized programs are available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="card-enhanced">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{course.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{course.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{course.students} students</span>
                        <span>•</span>
                        <span>{course.batches}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Special Programs & Events
              </h2>
              <p className="text-xl text-muted-foreground">
                Exclusive offerings at Govind Nagar Branch
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specialPrograms.map((program, index) => (
                <Card key={index} className="card-enhanced">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium">{program}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Feedback from our Govind Nagar families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-enhanced">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Visit Govind Nagar Branch Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience our flagship facility and see why parents choose us for their children's education
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Enroll Now
              </Button>
            </Link>
            
            <a href={`tel:${branchData.phone}`}>
              <Button size="lg" variant="hero">
                Call Branch
              </Button>
            </a>
            
            <Link to="/contact">
              <Button size="lg" variant="hero" className="gap-2">
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GovindNagar;
