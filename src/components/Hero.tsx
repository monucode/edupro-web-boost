import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const whatsappNumber = "+919999999999";
  const whatsappMessage = "Hi! I'm interested in learning more about courses at Hiran EduPro Academy.";

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning at Hiran EduPro Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">Nurturing minds, Shaping futures</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Learning
              <span className="block text-secondary mt-2">Beyond Limits</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Unlock your child's potential with our innovative courses in Vedic Maths, 
              Robotics Pro, Abacus, Mnemonic Science, and Phonics. Join thousands of 
              successful students across our 3 branches.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Badge className="bg-secondary text-secondary-foreground">Online & Offline</Badge>
              <span className="text-sm font-medium">Classes Available</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Happy Students</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-white/80">Specialized Courses</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-secondary" />
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-white/80">Branches</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/admissions" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 font-semibold shadow-lg">
                  Enroll Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold shadow-lg">
                  WhatsApp Inquiry
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Features Highlight */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Expert Faculty</h4>
                    <p className="text-white/80 text-sm">Qualified teachers with years of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Small Class Sizes</h4>
                    <p className="text-white/80 text-sm">Personalized attention for every student</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Proven Results</h4>
                    <p className="text-white/80 text-sm">Track record of student success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-primary-light/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;