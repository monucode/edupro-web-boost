import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, CheckCircle, BookOpen, PenTool, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import handwritingImg from "@/assets/handwriting-course.png";

const Handwriting = () => {
  const whatsappNumber = "+918208368355";
  const whatsappMessage = "Hi! I'd like to know more about the Handwriting course at Hiran EduPro Academyy.";

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Kg.+</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Handwriting Improvement
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                ₹3500 per level (includes study material) | 2 hours/day | Saturday & Sunday
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Enhance clarity, speed, and presentation with our structured handwriting improvement program. 
                This course covers both <strong>English and Marathi</strong> handwriting with personalized guidance 
                across 3 levels for comprehensive skill development.
              </p>

              <div className="flex items-center space-x-6 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>4 months per level</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>250+ students trained</span>
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
                src={handwritingImg}
                alt="Handwriting Improvement course at Hiran EduPro Academy"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Letter Formation</h3>
                <p className="text-muted-foreground">
                  Learn proper strokes, spacing, and structure for beautiful English and Marathi writing.
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Improved Legibility</h3>
                <p className="text-muted-foreground">
                  Achieve neat, consistent, and readable handwriting with guided practice and feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6 text-center">
              <CardContent className="pt-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Confidence Boost</h3>
                <p className="text-muted-foreground">
                  Build writing confidence through personalized coaching and progressive improvement levels.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What You'll Learn */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">What You'll Learn</h2>
              <div className="space-y-6">
                {[
                  { title: "English and Marathi Handwriting", text: "Master both languages with proper technique and balance." },
                  { title: "Stroke and Pattern Practice", text: "Develop rhythm, consistency, and smooth pen control." },
                  { title: "Word and Sentence Formation", text: "Improve spacing, alignment, and handwriting flow." },
                  { title: "Speed Writing", text: "Enhance writing pace without compromising legibility." },
                  { title: "Creative Writing Exercises", text: "Build writing confidence through fun and engaging activities." },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Card */}
            <Card className="card-enhanced p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Course Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Improves clarity and neatness in writing",
                  "Develops fine motor and visual coordination",
                  "Boosts memory and focus through pattern repetition",
                  "Encourages disciplined and confident writing habits",
                  "Enhances presentation skills for academics",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Course Levels</h2>
            <p className="text-xl text-muted-foreground">
              Three-level program designed for gradual handwriting mastery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { level: "Level 1", focus: "Foundations & Basics", points: ["Grip correction", "Letter and stroke formation", "Basic English & Marathi writing"] },
              { level: "Level 2", focus: "Speed & Neatness", points: ["Word and sentence writing", "Spacing & alignment", "Speed writing drills"] },
              { level: "Level 3", focus: "Fluency & Presentation", points: ["Creative writing exercises", "Fluency in English & Marathi", "Confidence enhancement"] },
            ].map((lvl, index) => (
              <Card key={index} className="card-enhanced p-6">
                <CardHeader>
                  <Badge className="w-fit">{lvl.level}</Badge>
                  <CardTitle>{lvl.focus}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {lvl.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
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
            Build Beautiful, Confident Handwriting
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Enroll your child in our Handwriting program and see remarkable improvements 
            in writing speed, neatness, and confidence across both English and Marathi.
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

export default Handwriting;
