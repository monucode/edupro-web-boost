import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, CheckCircle, Volume2, BookOpen, Mic, Sparkles, Trophy, Award } from "lucide-react";
import { Link } from "react-router-dom";
import phonicsImg from "@/assets/phonics-course.jpg";

const PhonicsReading = () => {
  const whatsappNumber = "+918208368355";
  const whatsappMessage = "Hi! I'd like to know more about the Phonics course at Hiran EduPro Academy.";

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Age 4-7 Years</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Phonics
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Comprehensive phonics program that builds strong reading foundations through systematic 
                sound-symbol relationships and interactive learning methods.
              </p>
              
              <div className="flex items-center space-x-6 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>4 months duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>250+ students enrolled</span>
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
                src={phonicsImg}
                alt="Phonics & Reading course at Hiran EduPro Academy"
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
                <Volume2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Sound Recognition</h3>
                <p className="text-muted-foreground">Master letter sounds and phonetic patterns</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Reading Fluency</h3>
                <p className="text-muted-foreground">Develop smooth and confident reading skills</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Mic className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Clear Speech</h3>
                <p className="text-muted-foreground">Improve pronunciation and articulation</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Vocabulary Building</h3>
                <p className="text-muted-foreground">Expand word knowledge and usage</p>
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
                    <h3 className="font-bold text-lg mb-2">Letter Sound Correspondence</h3>
                    <p className="text-muted-foreground">Learn the relationship between letters and their sounds systematically</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Blending Techniques</h3>
                    <p className="text-muted-foreground">Master the art of combining sounds to form words fluently</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sight Words Recognition</h3>
                    <p className="text-muted-foreground">Identify and read common high-frequency words instantly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Reading Comprehension</h3>
                    <p className="text-muted-foreground">Understand and analyze text meaning and context</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Creative Expression</h3>
                    <p className="text-muted-foreground">Develop storytelling and creative writing abilities</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-enhanced p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Reading Success Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Strong academic foundation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Improved communication skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Enhanced vocabulary and language</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Increased confidence in expression</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Better spelling and writing abilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Lifelong love for reading</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Phases */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Learning Journey</h2>
            <p className="text-xl text-muted-foreground">4-month comprehensive program building reading excellence step by step</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Phase 1 (Months 1-2)</Badge>
                <CardTitle>Sound Foundations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Letter recognition and sounds</li>
                  <li>• Basic phonetic patterns</li>
                  <li>• Simple CVC words</li>
                  <li>• Listening and speaking activities</li>
                  <li>• Blending and segmenting basics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6">
              <CardHeader>
                <Badge className="w-fit">Phase 2 (Months 3-4)</Badge>
                <CardTitle>Reading Fluency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced blending and segmenting</li>
                  <li>• Sight word recognition</li>
                  <li>• Simple sentence reading</li>
                  <li>• Comprehension activities</li>
                  <li>• Fluent reading practice</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Learning Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold mb-4">Interactive Games</h3>
                <p className="text-muted-foreground">Fun phonics games and activities that make learning enjoyable and memorable</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold mb-4">Multi-Sensory Approach</h3>
                <p className="text-muted-foreground">Visual, auditory, and kinesthetic learning techniques for all learning styles</p>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold mb-4">Progress Tracking</h3>
                <p className="text-muted-foreground">Regular assessments and reports to monitor reading development milestones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Give Your Child the Gift of Reading
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Build strong reading foundations that will serve your child throughout their academic journey and beyond. 
            Start their love affair with books today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Begin Reading Journey
              </Button>
            </Link>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule Reading Assessment
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhonicsReading;