import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, FileText, Users, Clock, MessageCircle, Phone, ArrowRight } from "lucide-react";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    branch: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.parentName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // WhatsApp integration
    const whatsappNumber = "+919999999999";
    const message = `
New Admission Inquiry - Hiran EduPro Academy

Student Name: ${formData.studentName}
Parent Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}
Age: ${formData.age}
Preferred Branch: ${formData.branch}
Interested Course: ${formData.course}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Inquiry Sent!",
      description: "We'll contact you within 24 hours to discuss admission details.",
    });

    // Reset form
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      age: "",
      branch: "",
      course: "",
      message: ""
    });
  };

  const admissionProcess = [
    {
      step: "1",
      title: "Initial Inquiry",
      description: "Submit your inquiry form or contact us directly"
    },
    {
      step: "2", 
      title: "Counseling Session",
      description: "Meet with our academic counselor to discuss programs"
    },
    {
      step: "3",
      title: "Trial Class",
      description: "Attend a complimentary trial class in your chosen course"
    },
    {
      step: "4",
      title: "Enrollment",
      description: "Complete admission formalities and begin learning journey"
    }
  ];

  const documents = [
    "Student's birth certificate",
    "Recent passport-size photographs (2 copies)",
    "Previous academic records (if applicable)",
    "Parent/Guardian ID proof",
    "Address proof document",
    "Medical certificate (if any specific requirements)"
  ];

  const faqs = [
    {
      question: "What is the minimum age for enrollment?",
      answer: "Age requirements vary by course - Phonics (4+ years), Abacus (5+ years), Vedic Maths (8+ years), Robotics (10+ years), Mnemonic Science (7+ years)."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes! We offer complimentary trial classes for all courses so students can experience our teaching methods before enrollment."
    },
    {
      question: "What are the batch sizes?", 
      answer: "We maintain small batch sizes of 8-12 students per class to ensure personalized attention and optimal learning outcomes."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we have a transparent refund policy. Please contact our admission team for detailed terms and conditions."
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white backdrop-blur-sm">
              Join Our Learning Community
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Start Your Child's Success Journey Today
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Simple admission process, expert guidance, and personalized learning paths. 
              Join 500+ successful students at Hiran EduPro Academy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#admission-form">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              
              <a href="tel:+919999999999">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
                  <Phone className="h-5 w-5" />
                  Call for Info
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Simple 4-Step Admission Process
            </h2>
            <p className="text-xl text-muted-foreground">
              We've made joining our academy easy and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((step, index) => (
              <Card key={index} className="card-enhanced text-center relative">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {index < admissionProcess.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="admission-form" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Admission Inquiry Form</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        placeholder="Enter parent's name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 9999999999"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Student Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        placeholder="Age in years"
                        min="4"
                        max="18"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="branch">Preferred Branch</Label>
                      <Select value={formData.branch} onValueChange={(value) => setFormData({...formData, branch: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="govind-nagar">Govind Nagar</SelectItem>
                          <SelectItem value="manmad">Manmad</SelectItem>
                          <SelectItem value="bafna-bazar">Bafna Bazar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="course">Course of Interest</Label>
                      <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vedic-maths">Vedic Mathematics</SelectItem>
                          <SelectItem value="robotics">Robotics Pro</SelectItem>
                          <SelectItem value="abacus">Abacus Training</SelectItem>
                          <SelectItem value="mnemonic">Mnemonic Science</SelectItem>
                          <SelectItem value="phonics">Phonics & Reading</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Any specific questions or requirements..."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to be contacted by Hiran EduPro Academy regarding admission details
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Panel */}
            <div className="space-y-8">
              {/* Documents Required */}
              <Card className="card-enhanced">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Documents Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="card-enhanced bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-white/90 mb-4">
                      Our admission counselors are available to help you choose the right course and answer any questions.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-medium">Call Us</div>
                        <div className="text-white/80 text-sm">+91-9999999999</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-medium">Counseling Hours</div>
                        <div className="text-white/80 text-sm">Mon-Sat: 9 AM - 6 PM</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-medium">Walk-in Counseling</div>
                        <div className="text-white/80 text-sm">Available at all branches</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common admission queries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-enhanced">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;