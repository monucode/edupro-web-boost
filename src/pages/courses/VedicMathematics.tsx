import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, CheckCircle, BookOpen, Calculator, Trophy, Brain, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import vedicMathsImg from "@/assets/vedic-maths.jpg";

const VedicMathematics = () => {
  const whatsappNumber = "+918208368355";
  const whatsappMessage = "Hi! I'd like to know more about the Vedic Mathematics course at Hiran EduPro Academy.";

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Std. 7th+</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Vedic Mathematics
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                ₹4000 (includes study material) | 2 hours/day | Saturday & Sunday
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Master ancient calculation techniques that make mathematics fun, fast, and fascinating. 
                Learn to solve complex problems mentally in seconds using time-tested Vedic methods.
              </p>
              
              <div className="flex items-center space-x-6 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>4 months duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>200+ students enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>4.9 rating</span>
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
                src={vedicMathsImg}
                alt="Vedic Mathematics course at Hiran EduPro Academy"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Mental Calculation</h3>
                <p className="text-muted-foreground">Perform complex calculations mentally with speed and accuracy</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Brain Development</h3>
                <p className="text-muted-foreground">Enhance cognitive abilities and mathematical thinking</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Competition Ready</h3>
                <p className="text-muted-foreground">Excel in mathematics olympiads and competitive exams</p>
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
                    <h3 className="font-bold text-lg mb-2">16 Vedic Sutras</h3>
                    <p className="text-muted-foreground">Master all 16 fundamental Vedic mathematical principles for rapid calculations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Speed Multiplication</h3>
                    <p className="text-muted-foreground">Multiply large numbers mentally in seconds using ancient techniques</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Division Shortcuts</h3>
                    <p className="text-muted-foreground">Learn rapid division methods and check your answers instantly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Square & Cube Roots</h3>
                    <p className="text-muted-foreground">Calculate square and cube roots mentally without calculators</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Algebraic Calculations</h3>
                    <p className="text-muted-foreground">Solve algebraic equations using Vedic mathematical principles</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-enhanced p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Course Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Increase calculation speed by 10-15x</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Boost confidence in mathematics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Improve memory and concentration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Excel in competitive exams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Develop logical thinking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Reduce math anxiety and fear</span>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Course Structure</h2>
            <p className="text-xl text-muted-foreground">Comprehensive 4-month program with progressive learning modules</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 1-2</Badge>
                <CardTitle>Foundation & Basics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Introduction to Vedic Mathematics</li>
                  <li>• Basic Sutras and principles</li>
                  <li>• Simple addition and subtraction</li>
                  <li>• Digit sum method</li>
                  <li>• Advanced multiplication methods</li>
                  <li>• Division shortcuts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 3-4</Badge>
                <CardTitle>Advanced Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Percentage calculations</li>
                  <li>• Fraction operations</li>
                  <li>• Square and cube calculations</li>
                  <li>• Algebraic operations</li>
                  <li>• Competition problem solving</li>
                  <li>• Speed practice sessions</li>
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
            Transform Your Child's Mathematical Abilities
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our Vedic Mathematics program and watch your child develop lightning-fast calculation skills 
            that will last a lifetime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Start Free Trial Class
              </Button>
            </Link>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="hero">
                Get Course Details
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VedicMathematics;
