import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, CheckCircle, Brain, Lightbulb, BookOpen, Zap, Trophy, Award } from "lucide-react";
import { Link } from "react-router-dom";
import mnemonicImg from "@/assets/mnemonic-science.jpg";

const MnemonicScience = () => {
  const whatsappNumber = "+919999999999";
  const whatsappMessage = "Hi! I'd like to know more about the Mnemonic Science course at Hiran EduPro Academy.";

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Age 4+ Years</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Mnemonic Science
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                ₹6000 (includes study material) | 2 hours/day | Sunday only
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Revolutionary memory techniques and learning strategies based on cognitive science. 
                Transform how your child learns and remembers information.
              </p>
              
              <div className="flex items-center space-x-6 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>6 months duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>120+ students enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>4.7 rating</span>
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
                src={mnemonicImg}
                alt="Mnemonic Science course at Hiran EduPro Academy"
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
                <h3 className="text-xl font-bold mb-2">Memory Palace</h3>
                <p className="text-muted-foreground">Build mental maps for unlimited information storage</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Creative Learning</h3>
                <p className="text-muted-foreground">Transform abstract concepts into memorable stories</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Speed Learning</h3>
                <p className="text-muted-foreground">Accelerate learning and retention by 5-10 times</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Study Skills</h3>
                <p className="text-muted-foreground">Master effective study strategies for all subjects</p>
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
                    <h3 className="font-bold text-lg mb-2">Memory Palace Technique</h3>
                    <p className="text-muted-foreground">Create mental spaces to store and retrieve vast amounts of information</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Visual Association Methods</h3>
                    <p className="text-muted-foreground">Link new information to vivid images for enhanced recall</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Speed Reading Techniques</h3>
                    <p className="text-muted-foreground">Increase reading speed while maintaining comprehension</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Mind Mapping</h3>
                    <p className="text-muted-foreground">Organize information visually for better understanding and recall</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Concentration Techniques</h3>
                    <p className="text-muted-foreground">Develop laser-sharp focus and eliminate distractions</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-enhanced p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Learning Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>5-10x faster information retention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Improved academic performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Enhanced concentration span</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Better exam preparation skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Increased self-confidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Lifelong learning abilities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">6-Month Intensive Program</h2>
            <p className="text-xl text-muted-foreground">Comprehensive memory training modules for maximum effectiveness</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 1-2</Badge>
                <CardTitle>Memory Foundations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• How memory works scientifically</li>
                  <li>• Basic visualization techniques</li>
                  <li>• Simple association methods</li>
                  <li>• Memory assessment and goals</li>
                  <li>• Memory palace construction</li>
                  <li>• Chain and story methods</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 3-4</Badge>
                <CardTitle>Advanced Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Number and name memorization</li>
                  <li>• Speed reading introduction</li>
                  <li>• History and geography techniques</li>
                  <li>• Science concepts memorization</li>
                  <li>• Language learning methods</li>
                  <li>• Mathematics formulas retention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Month 5-6</Badge>
                <CardTitle>Mastery & Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exam preparation strategies</li>
                  <li>• Long-term retention methods</li>
                  <li>• Memory competition training</li>
                  <li>• Personal system development</li>
                  <li>• Advanced speed reading</li>
                  <li>• Real-world applications</li>
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
            Unlock the Power of Your Mind
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your child into a super learner with scientifically proven memory techniques. 
            Give them the ultimate learning advantage for life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Start Memory Training
              </Button>
            </Link>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="hero">
                See Memory Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MnemonicScience;