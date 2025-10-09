import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import BranchCard from "@/components/BranchCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Quote, Users, BookOpen, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Import course images
import vedicMathsImg from "@/assets/vedic-maths.jpg";
import roboticsImg from "@/assets/robotics-pro.jpg";
import abacusImg from "@/assets/abacus-training.jpg";
import mnemonicImg from "@/assets/mnemonic-science.jpg";
import phonicsImg from "@/assets/phonics-course.jpg";

const Home = () => {
  const courses = [
    {
      title: "Vedic Mathematics",
      description: "Ancient calculation techniques that make math fun and fast. Students learn to solve complex problems mentally in seconds.",
      image: vedicMathsImg,
      ageGroup: "Age 7+",
      duration: "4 months",
      students: "200+",
      rating: "4.9",
      highlights: [
        "Mental calculation mastery",
        "Speed and accuracy improvement",
        "Confidence building in mathematics"
      ],
      slug: "vedic-mathematics"
    },
    {
      title: "Robotics",
      description: "Hands-on robotics and coding experience for future engineers. Learn programming, electronics, and problem-solving.",
      image: roboticsImg,
      ageGroup: "Age 7+",
      duration: "4 months",
      students: "150+",
      rating: "4.8",
      highlights: [
        "Build and program robots",
        "STEM skill development",
        "Competition preparation"
      ],
      slug: "robotics-pro"
    },
    {
      title: "Abacus Training",
      description: "Traditional counting method for enhanced brain development and mathematical skills through visual and tactile learning.",
      image: abacusImg,
      ageGroup: "Age 7-12",
      duration: "4 months",
      students: "300+",
      rating: "4.9",
      highlights: [
        "Brain development exercises",
        "Concentration improvement",
        "Visual calculation skills"
      ],
      slug: "abacus-training"
    }
  ];

  const branches = [
    {
      name: "Govind Nagar Branch",
      address: "123 Govind Nagar, Near Central School, Maharashtra",
      phone: "+91-8208368355",
      timings: "Mon-Sat: 9 AM - 7 PM",
      studentsCount: "200+",
      features: ["Modern classrooms", "Robotics lab", "Library"],
      slug: "govind-nagar",
      isPopular: true
    },
    {
      name: "Manmad Branch", 
      address: "456 Main Road, Manmad, Maharashtra",
      phone: "+91-9999999997",
      timings: "Mon-Sat: 10 AM - 6 PM",
      studentsCount: "150+",
      features: ["Smart boards", "Computer lab", "Activity room"],
      slug: "manmad"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "My daughter's confidence in math has improved tremendously after joining Vedic Maths classes. She now solves problems faster than her calculator!",
      rating: 5
    },
    {
      name: "Rajesh Patel", 
      role: "Parent",
      content: "The Robotics course opened up a whole new world for my son. He's now planning to become a robotics engineer!",
      rating: 5
    },
    {
      name: "Anita Desai",
      role: "Parent", 
      content: "Excellent faculty and personalized attention. The Abacus training has significantly improved my child's concentration and mental abilities.",
      rating: 5
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Our Specialized Courses
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Unlock Your Child's Potential
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully designed courses that combine traditional wisdom with modern teaching methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90">
                View All Courses
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Parents Choose Hiran EduPro Academy
            </h2>
            <p className="text-xl text-muted-foreground">
              Excellence in education with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 card-enhanced">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-muted-foreground">Qualified teachers with specialized training and years of experience</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-enhanced">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Methods</h3>
                <p className="text-muted-foreground">Time-tested teaching techniques combined with modern technology</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-enhanced">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Track Record</h3>
                <p className="text-muted-foreground">500+ successful students with improved academic performance</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 card-enhanced">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Small Classes</h3>
                <p className="text-muted-foreground">Personalized attention with optimal student-teacher ratios</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              Our Locations
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              2 Convenient Branches
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit any of our well-equipped branches across Maharashtra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {branches.map((branch, index) => (
              <BranchCard key={index} {...branch} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/branches">
              <Button size="lg" variant="outline" className="gap-2">
                View All Branches
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from our academy families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-enhanced">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
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
            Ready to Begin Your Child's Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who have chosen excellence in education. 
            Enroll today and unlock your child's true potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Start Enrollment
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;