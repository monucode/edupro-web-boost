import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, BookOpen, Target, Heart, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import facultyImage from "@/assets/faculty-team.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence in Education",
      description: "We strive for the highest standards in every aspect of our teaching and student development."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Student-Centered Approach",
      description: "Every child is unique. We tailor our teaching methods to each student's learning style and pace."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Innovation in Learning", 
      description: "We blend traditional wisdom with modern technology to create engaging learning experiences."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Building",
      description: "We foster a supportive community of learners, parents, and educators working together."
    }
  ];

  const milestones = [
    { year: "2020", event: "Academy Founded", description: "Started with a vision to revolutionize education" },
    { year: "2021", event: "First 100 Students", description: "Reached our first major milestone with growing community" },
    { year: "2022", event: "Multi-Branch Expansion", description: "Opened branches in Manmad and Bafna Bazar" },
    { year: "2023", event: "500+ Students", description: "Became the preferred choice for specialized education" },
    { year: "2024", event: "Award Recognition", description: "Recognized for excellence in innovative teaching methods" }
  ];

  const faculty = [
    {
      name: "Dr. Hiran Sharma",
      role: "Founder & Principal",
      qualification: "M.Ed, PhD in Educational Psychology",
      experience: "15+ years in education",
      specialization: "Vedic Mathematics & Learning Psychology"
    },
    {
      name: "Prof. Anjali Patel",
      role: "Head of Robotics Department",
      qualification: "B.Tech in Electronics, M.Tech in Robotics",
      experience: "10+ years in STEM education",
      specialization: "Robotics & Programming"
    },
    {
      name: "Mrs. Kavita Desai",
      role: "Senior Abacus Trainer",
      qualification: "Certified Abacus Master Trainer",
      experience: "12+ years in Abacus training",
      specialization: "Mental Math & Brain Development"
    },
    {
      name: "Mr. Rohan Gupta",
      role: "Mnemonic Science Expert",
      qualification: "M.A. in Psychology, Memory Training Certification",
      experience: "8+ years in memory training",
      specialization: "Memory Techniques & Learning Strategies"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                About Hiran EduPro Academy
              </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Learning Beyond Limits
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded in 2020, Hiran EduPro Academy has been at the forefront of innovative 
                education, combining time-tested traditional methods with cutting-edge modern 
                techniques to unlock every child's potential.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-muted-foreground">Expert Faculty</div>
                </div>
              </div>
              
              <Link to="/admissions">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2">
                  Join Our Family
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img
                src={facultyImage}
                alt="Hiran EduPro Academy Faculty Team"
                className="rounded-2xl shadow-primary w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-card">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-secondary" />
                  <div>
                    <div className="font-bold text-lg">Excellence Award</div>
                    <div className="text-sm text-muted-foreground">Innovative Teaching 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-enhanced p-8">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional education that combines traditional wisdom with modern innovation, 
                  empowering every child to reach their full potential and become confident, capable learners 
                  ready for future challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-8">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading educational institution that transforms learning experiences, 
                  creating a generation of innovative thinkers, problem solvers, and lifelong learners 
                  who contribute positively to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Hiran EduPro Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 card-enhanced group">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that mark our commitment to educational excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`card-enhanced p-6 w-full max-w-md ${index % 2 === 1 ? 'mr-auto ml-8' : 'ml-auto mr-8'}`}>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-secondary text-secondary-foreground">{milestone.year}</Badge>
                      <div className={`w-4 h-4 bg-secondary rounded-full absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`}></div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Faculty</h2>
            <p className="text-xl text-muted-foreground">
              Qualified educators passionate about student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="card-enhanced text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <Badge className="mb-3 bg-secondary/10 text-secondary">{member.role}</Badge>
                  
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Qualification:</strong> {member.qualification}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Specialization:</strong> {member.specialization}</p>
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
            Experience the Hiran EduPro Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our academy, meet our faculty, and see how we're transforming education. 
            Schedule a visit today and discover why parents choose us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Schedule a Visit
              </Button>
            </Link>
            
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;