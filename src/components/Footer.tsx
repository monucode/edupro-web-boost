import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import logoImage from "@/assets/hiran-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+918208368355";

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Hiran EduPro Academy Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-primary text-lg">Hiran EduPro Academyy</h3>
                <p className="text-sm text-muted-foreground">Learning Beyond Limits</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering young minds with innovative learning techniques in Vedic Maths, 
              Robotics, Abacus, Mnemonic Science, and Phonics across multiple branches.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/hiran_edupro_academyy?igsh=MWpxbW9vZmc2ZXN5eg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-muted-foreground hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Our Courses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/vedic-mathematics" className="text-muted-foreground hover:text-primary transition-colors">
                  Vedic Mathematics
                </Link>
              </li>
              <li>
                <Link to="/courses/robotics-pro" className="text-muted-foreground hover:text-primary transition-colors">
                  Robotics
                </Link>
              </li>
              <li>
                <Link to="/courses/abacus-training" className="text-muted-foreground hover:text-primary transition-colors">
                  Abacus Training
                </Link>
              </li>
              <li>
                <Link to="/courses/mnemonic-science" className="text-muted-foreground hover:text-primary transition-colors">
                  Mnemonic Science
                </Link>
              </li>
              <li>
                <Link to="/courses/phonics-reading" className="text-muted-foreground hover:text-primary transition-colors">
                  Phonics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Main Branch - Manmad</p>
                  <p className="text-muted-foreground">First floor Hemsuraj kirana, Near Sundar Selection Aajad Road, Manmad, Maharashtra 423104</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918208368355" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 82083 68355
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@hiranedupro.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@hiranedupro.com
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© {currentYear} Hiran EduPro Academyy. All rights reserved.</p>
              <p className="mt-1">
                Designed & Developed by{" "}
                <a 
                  href="https://www.hexamad.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Hexamad Digital
                </a>
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
