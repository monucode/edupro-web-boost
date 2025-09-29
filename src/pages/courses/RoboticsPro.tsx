import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, CheckCircle, Cpu, Code, Zap, Wrench, Trophy, Award } from "lucide-react";
import { Link } from "react-router-dom";
import roboticsImg from "@/assets/robotics-pro.jpg";

const RoboticsPro = () => {
  const whatsappNumber = "+919999999999";
  const whatsappMessage = "Hi! I'd like to know more about the Robotics Pro course at Hiran EduPro Academy.";

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Age 10-18 Years</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Robotics Pro
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Hands-on robotics and coding experience designed for future engineers. 
                Build, program, and compete with cutting-edge robotics technology.
              </p>
              
              <div className="flex items-center space-x-6 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>8 months duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>150+ students enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>4.8 rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2">
                    Enroll Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    WhatsApp Inquiry
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={roboticsImg}
                alt="Robotics Pro course at Hiran EduPro Academy"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hardware Building</h3>
                <p className="text-muted-foreground">Construct robots from scratch using Arduino and sensors</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Programming</h3>
                <p className="text-muted-foreground">Learn C++, Python, and visual programming languages</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">AI & ML Basics</h3>
                <p className="text-muted-foreground">Introduction to artificial intelligence and machine learning</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Competitions</h3>
                <p className="text-muted-foreground">Participate in national and international robotics contests</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">What You'll Learn</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Arduino Programming</h3>
                    <p className="text-muted-foreground">Master microcontroller programming and electronic circuit design</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sensor Integration</h3>
                    <p className="text-muted-foreground">Work with ultrasonic, temperature, motion, and camera sensors</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Robot Mechanics</h3>
                    <p className="text-muted-foreground">Understand gear systems, motors, and mechanical movement</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Python for Robotics</h3>
                    <p className="text-muted-foreground">Advanced programming with Raspberry Pi and computer vision</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Project Development</h3>
                    <p className="text-muted-foreground">Build complete autonomous robots from concept to completion</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-enhanced p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Wrench className="h-6 w-6 text-primary" />
                  STEM Skills Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Problem-solving and critical thinking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Programming and computational thinking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Engineering design process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Teamwork and collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Innovation and creativity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Future career preparation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">8-Month Learning Journey</h2>
            <p className="text-xl text-muted-foreground">Progressive curriculum from basics to advanced robotics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 1-2</Badge>
                <CardTitle>Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Introduction to robotics</li>
                  <li>• Basic electronics</li>
                  <li>• Arduino programming basics</li>
                  <li>• Simple LED and sensor projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 3-4</Badge>
                <CardTitle>Building & Motors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Motor control and movement</li>
                  <li>• Chassis design and assembly</li>
                  <li>• Sensor integration</li>
                  <li>• Basic autonomous robots</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 5-6</Badge>
                <CardTitle>Advanced Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Raspberry Pi introduction</li>
                  <li>• Python programming</li>
                  <li>• Computer vision basics</li>
                  <li>• Wireless communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 7-8</Badge>
                <CardTitle>Projects & Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Final project development</li>
                  <li>• Competition preparation</li>
                  <li>• AI and ML applications</li>
                  <li>• Presentation skills</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Shape the Future Engineers
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Enroll your child in our Robotics Pro course and watch them build the technology of tomorrow. 
            Limited seats available in each batch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Reserve Your Spot
              </Button>
            </Link>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule Demo Class
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoboticsPro;