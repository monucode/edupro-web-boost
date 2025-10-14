import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Import course images
import vedicMathsImg from "@/assets/vedic-maths.jpg";
import roboticsImg from "@/assets/robotics-pro.jpg";
import abacusImg from "@/assets/abacus-training.jpg";
import mnemonicImg from "@/assets/mnemonic-science.jpg";
import phonicsImg from "@/assets/phonics-course.png";
import handwritingImg from "@/assets/handwriting-course.png";

const Courses = () => {
  const courses = [
    {
      title: "Vedic Mathematics",
      description: "Master ancient calculation techniques that make mathematics fun, fast, and fascinating. Learn to solve complex problems mentally in seconds using time-tested Vedic methods.",
      image: vedicMathsImg,
      Grade: "Std. 5th+",
      duration: "4 months (5 Levels in total)",
      students: "200+",
      rating: "4.9",
      highlights: [
        "Mental calculation mastery",
        "Speed and accuracy improvement", 
        "Confidence building in mathematics",
        "Competitive exam preparation",
        "Ancient wisdom meets modern application"
      ],
      slug: "vedic-mathematics"
    },
    {
      title: "Robotics",
      description: "Hands-on robotics and coding experience designed for future engineers. Build, program, and compete with cutting-edge robotics technology.",
      image: roboticsImg,
      Grade: "Std. 1st+",
      duration: "4 months (6 Levels in total)",
      students: "150+",
      rating: "4.8",
      highlights: [
        "Build and program robots",
        "STEM skill development",
        "Competition preparation",
        "Arduino and Raspberry Pi programming",
        "AI and machine learning basics"
      ],
      slug: "robotics-pro"
    },
    {
      title: "Abacus Training",
      description: "Traditional counting method enhanced with modern techniques for comprehensive brain development and mathematical excellence through visual and tactile learning.",
      image: abacusImg,
      Grade: "Jr.Kg - Std. 7th",
      duration: "4 months (8 Levels in total)",
      students: "300+",
      rating: "4.9",
      highlights: [
        "Brain development exercises",
        "Concentration improvement",
        "Visual calculation skills",
        "Memory enhancement techniques",
        "International competition preparation"
      ],
      slug: "abacus-training"
    },
    {
      title: "Mnemonic Science",
      description: "Revolutionary memory techniques and learning strategies based on cognitive science. Transform how your child learns and remembers information.",
      image: mnemonicImg,
      Grade: "Std. 4th+",
      duration: "6 months (5 Levels in total)",
      students: "120+",
      rating: "4.7",
      highlights: [
        "Memory palace techniques",
        "Visual learning strategies",
        "Study skill enhancement",
        "Academic performance boost",
        "Lifelong learning skills"
      ],
      slug: "mnemonic-science"
    },
    {
      title: "Phonics",
      description: "Comprehensive phonics program that builds strong reading foundations through systematic sound-symbol relationships and interactive learning methods.",
      image: phonicsImg,
      Grade: "UKG.+",
      duration: "4 months (3 Levels in total)",
      students: "250+",
      rating: "4.9",
      highlights: [
        "Reading foundation building",
        "Pronunciation improvement",
        "Vocabulary expansion",
        "Spelling mastery",
        "Communication confidence"
      ],
      slug: "phonics-reading"
    },
    {
      title: "Handwriting",
      description:
        "Enhance writing clarity, speed, and presentation with our comprehensive handwriting improvement program. This course focuses on both English and Marathi handwriting, ensuring legibility, neatness, and confidence in written communication. Structured up to 3 levels, it gradually builds precision and fluency through guided practice and personalized feedback.",
      image: handwritingImg, 
      Grade: "Kg.+",
      duration: "4 months per level (3 Levels in total)",
      students: "250+",
      rating: "4.8",
      highlights: [
        "English & Marathi handwriting",
        "Improves letter formation",
        "Boosts writing speed & clarity",
      ],
      slug: "handwriting",
    }
  ];

  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Curriculum",
      description: "Each course is carefully designed with age-appropriate content and progressive learning modules."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Qualified teachers with specialized training in each subject area and modern pedagogical methods."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Timings",
      description: "Multiple batch timings available to accommodate different schedules and preferences."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Proven Results",
      description: "Track record of improved academic performance and enhanced cognitive abilities in students."
    }
  ];

  const whatsappNumber = "+918208368355";
  const whatsappMessage = "Hi! I'd like to know more about the courses available at Hiran EduPro Academy.";

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              Specialized Learning Programs
            </Badge>
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Courses That Transform Learning
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our comprehensive range of specialized courses designed to unlock your child's 
              potential and build essential skills for academic and personal success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2">
                  Start Enrollment
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  Get Course Info
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {/* Course Benefits */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Our Courses Stand Out
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every course at Hiran EduPro Academy is designed with student success in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 card-enhanced group">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                What Makes Our Courses Special?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Personalized Learning Paths</h3>
                    <p className="text-muted-foreground">Each student receives individualized attention with customized learning plans based on their pace and learning style.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interactive Learning Methods</h3>
                    <p className="text-muted-foreground">Engaging activities, hands-on projects, and technology integration make learning fun and effective.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Regular Progress Tracking</h3>
                    <p className="text-muted-foreground">Continuous assessment and feedback ensure steady progress and help identify areas for improvement.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Small Batch Sizes</h3>
                    <p className="text-muted-foreground">Limited students per batch ensure optimal teacher-student ratio and personalized attention for everyone.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="card-enhanced p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Free</div>
                  <div className="text-muted-foreground">Trial Class Available</div>
                </div>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Meet our expert teachers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Experience our teaching methods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>See our learning environment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>No commitment required</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link to="/admissions">
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Book Free Trial Class
                    </Button>
                  </Link>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I'd like to book a free trial class at Hiran EduPro Academy.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Choose Excellence. Choose Success.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the hundreds of students who have transformed their learning journey with our specialized courses. 
            Your child's success story starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Enroll Today
              </Button>
            </Link>
            
            <Link to="/branches">
              <Button size="lg" variant="hero">
                Visit Our Branches
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
