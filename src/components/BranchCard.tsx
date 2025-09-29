import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
  timings: string;
  studentsCount: string;
  features: string[];
  slug: string;
  isPopular?: boolean;
}

const BranchCard = ({ 
  name, 
  address, 
  phone, 
  timings, 
  studentsCount, 
  features, 
  slug,
  isPopular = false 
}: BranchCardProps) => {
  const whatsappMessage = `Hi! I'm interested in visiting the ${name} branch of Hiran EduPro Academy. Please provide more details.`;

  return (
    <Card className="card-enhanced group relative">
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
            Popular Choice
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-primary flex items-center justify-between">
          {name}
          <Badge variant="outline" className="ml-2">
            <Users className="h-3 w-3 mr-1" />
            {studentsCount}
          </Badge>
        </CardTitle>
        <CardDescription className="flex items-start space-x-2">
          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <span>{address}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a href={`tel:${phone}`} className="text-primary hover:underline">
              {phone}
            </a>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{timings}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Branch Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="gap-2 pt-0">
        <Link to={`/branches/${slug}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        
        <a
          href={`https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-gradient-secondary hover:opacity-90 gap-2">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default BranchCard;