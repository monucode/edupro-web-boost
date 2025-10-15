import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, CheckCircle, Brain, Eye, Hand, Target, Trophy, Award } from "lucide-react";
import { Link } from "react-router-dom";
import abacusImg from "@/assets/abacus-training.jpg";

const AbacusTraining = () => {
  const whatsappNumber = "+918208368355";
  const whatsappMessage = "Hi! I'd like to know more about the Abacus Training course at Hiran EduPro Academyy.";

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary"> Jr.Kg.- Std. 7th </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Abacus Training
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                ₹4000 (includes kit & study material) | 2 hours/day | Saturday & Sunday
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Traditional counting method enhanced with modern techniques for comprehensive brain development 
                and mathematical excellence through visual and tactile learning.
              </p>
              
              <div className="flex items-center space-x-6 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>4 months duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>300+ students enrolled</span>
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
                src={abacusImg}
                alt="Abacus Training course at Hiran EduPro Academyy"
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
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Brain Development</h3>
                <p className="text-muted-foreground">Stimulate both hemispheres for enhanced cognitive abilities</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Visual Calculation</h3>
                <p className="text-muted-foreground">Develop photographic memory for rapid calculations</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Hand className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Finger Dexterity</h3>
                <p className="text-muted-foreground">Improve fine motor skills and hand-eye coordination</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Concentration</h3>
                <p className="text-muted-foreground">Build focus and attention span for academic success</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">What You'll Master</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Physical Abacus Operation</h3>
                    <p className="text-muted-foreground">Learn to use the traditional abacus for all arithmetic operations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Mental Abacus (Anzan)</h3>
                    <p className="text-muted-foreground">Visualize the abacus mentally for lightning-fast calculations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Speed & Accuracy Training</h3>
                    <p className="text-muted-foreground">Progressive exercises to increase calculation speed and precision</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Memory Enhancement</h3>
                    <p className="text-muted-foreground">Techniques to improve working memory and information retention</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Competition Preparation</h3>
                    <p className="text-muted-foreground">Training for national and international abacus competitions</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-enhanced p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Course Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Enhanced mathematical confidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Improved concentration and focus</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Better academic performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Enhanced memory capacity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Increased self-confidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Logical thinking development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Learning Levels</h2>
            <p className="text-xl text-muted-foreground">Systematic progression through 4 months of structured learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Level 1-3</Badge>
                <CardTitle>Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Abacus introduction and basic operations</li>
                  <li>• Simple addition and subtraction</li>
                  <li>• Number recognition and bead manipulation</li>
                  <li>• Basic finger techniques</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Level 4-6</Badge>
                <CardTitle>Intermediate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complex addition and subtraction</li>
                  <li>• Introduction to multiplication</li>
                  <li>• Speed building exercises</li>
                  <li>• Mental calculation basics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Level 7-9</Badge>
                <CardTitle>Advanced</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced multiplication and division</li>
                  <li>• Mental abacus development</li>
                  <li>• Decimal operations</li>
                  <li>• Competition techniques</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Level 10-12</Badge>
                <CardTitle>Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• High-speed mental calculations</li>
                  <li>• Complex problem solving</li>
                  <li>• International competition prep</li>
                  <li>• Teaching assistance skills</li>
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
            Unlock Your Child's Mathematical Potential
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your child the gift of enhanced brain development and mathematical excellence. 
            Our proven abacus program has transformed thousands of young minds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Begin the Journey
              </Button>
            </Link>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="hero">
                Book Assessment
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AbacusTraining;
