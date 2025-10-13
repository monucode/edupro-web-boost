import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // WhatsApp integration
    const whatsappNumber = "+918208368355";
    const message = `
Contact Form Submission - Hiran EduPro Academy

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Branch Interest: ${formData.branch}
Subject: ${formData.subject}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      branch: "",
      subject: "",
      message: ""
    });
  };

  const branches = [
    {
      name: "Govind Nagar Branch",
      address: "Plot No. 14, Rambagh Colony, Bhujbal Farm Road, Behind Runghta Bela Vista, Govind Nagar, Nashik, Maharashtra 401203",
      phone: "+91-8208368355",
      email: "govindnagar@hiraneduproacademy.com",
      timings: "Monday - Friday: 9:00 AM - 7:00 PM | Saturday - Sunday: 09:00 AM - 06:00 PM",
      incharge: "Mrs. Harshada Hiran",
      designation: "Branch Coordinator",
      specialties: ["Vedic Maths", "Robotics", "All Courses"],
      isMain: true
    },
    {
      name: "Manmad Branch", 
      address: "First floor Hemsuraj kirana, Near Sundar Selection Aajad Road, Manmad, Maharashtra 423104",
      phone: "+91-8208368355",
      email: "manmad@hiraneduproacademy.com",
      timings: "Monday - Thursday: 9:00 AM - 7:00 PM | Saturday - Sunday: 10:00 AM - 3:00 PM | Friday: Holiday",
      incharge: "Mrs. Harshada Hiran",
      designation: "Branch Coordinator",
      specialties: ["Abacus Training", "Mnemonic Science", "Phonics"]
    }
  ];

  const contactReasons = [
    "Course Inquiry",
    "Admission Information", 
    "Branch Visit Scheduling",
    "Fee Structure Query",
    "Event Registration",
    "Feedback/Suggestion",
    "Technical Support",
    "Other"
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white backdrop-blur-sm">
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              We're Here to Help You
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Have questions about our courses, admission process, or want to schedule a visit? 
              Our friendly team is ready to assist you at any of our convenient locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+918208368355">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
              
              <a
                href="https://wa.me/+918208368355?text=Hi! I have a question about Hiran EduPro Academy."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="hero" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 9999999999"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch of Interest</Label>
                      <Select value={formData.branch} onValueChange={(value) => setFormData({...formData, branch: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="govind-nagar">Govind Nagar</SelectItem>
                          <SelectItem value="manmad">Manmad</SelectItem>
                          <SelectItem value="any">Any Branch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="What's this about?" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason} value={reason.toLowerCase().replace(/\s+/g, '-')}>
                              {reason}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please describe your question or how we can help you..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Info */}
            <div className="space-y-8">
              <Card className="card-enhanced bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Main Office</div>
                      <a href="tel:+918208368355" className="text-white/90 hover:text-white">
                        +91-8208368355
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <a href="mailto:info@hiraneduproacademy.com" className="text-white/90 hover:text-white">
                        info@hiraneduproacademy.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Office Hours</div>
                      <div className="text-white/90">Mon-Fri: 8:45 AM - 2:00 PM</div>
                      <div className="text-white/90">Sat-Sun: 10:00 AM - 3:00 PM</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="font-semibold mb-2">Need Immediate Help?</div>
                      <a
                        href="https://wa.me/+918208368355?text=I need immediate assistance regarding Hiran EduPro Academy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" className="w-full gap-2">
                          <MessageCircle className="h-5 w-5" />
                          WhatsApp Support
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-enhanced">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Visit Our Academy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We encourage parents and students to visit our facilities. See our classrooms, 
                    meet our faculty, and experience our learning environment.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">Free campus tours available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">No appointment necessary</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-primary" />
                      <span className="text-sm">Both branches open for visits</span>
                    </div>
                  </div>
                  
                  <Link to="/branches">
                    <Button variant="outline" className="w-full gap-2">
                      View Branch Details
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Branch Locations
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit any of our conveniently located branches across Maharashtra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {branches.map((branch, index) => (
              <Card key={index} className="card-enhanced">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-primary">{branch.name}</CardTitle>
                    {branch.isMain && (
                      <Badge className="bg-secondary text-secondary-foreground">Main Branch</Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${branch.phone}`} className="text-sm text-primary hover:underline">
                        {branch.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${branch.email}`} className="text-sm text-primary hover:underline">
                        {branch.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{branch.timings}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="mb-3">
                      <div className="font-semibold text-sm">{branch.incharge}</div>
                      <div className="text-xs text-muted-foreground">{branch.designation}</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-muted-foreground">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {branch.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        Call
                      </Button>
                    </a>
                    
                    <a
                      href={`https://wa.me/${branch.phone.replace(/[^\d]/g, '')}?text=Hi! I'd like to visit the ${branch.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full bg-gradient-secondary hover:opacity-90">
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Find Us on the Map</h2>
            <p className="text-xl text-muted-foreground">
              Interactive map and directions coming soon
            </p>
          </div>
          
          <Card className="card-enhanced">
            <CardContent className="p-12 text-center">
              <MapPin className="h-20 w-20 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Location Map Integration</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're working on integrating interactive maps for all our branches. 
                For now, please use the contact details above or call us for precise directions 
                to any of our locations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:opacity-90">
                  Get Directions via Phone
                </Button>
                <Button variant="outline">
                  Download Location Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Contact;
