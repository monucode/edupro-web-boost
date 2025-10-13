import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  Grade: string;
  duration: string;
  students: string;
  rating: string;
  highlights: string[];
  slug: string;
}

const CourseCard = ({ 
  title, 
  description, 
  image, 
  Grade, 
  duration, 
  students, 
  rating, 
  highlights, 
  slug 
}: CourseCardProps) => {
  return (
    <Card className="card-enhanced group hover:scale-[1.02] overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={`${title} course at Hiran EduPro Academy`}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-secondary text-secondary-foreground">
            {Grade}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-500 fill-current" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students} enrolled</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Key Highlights:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex w-full gap-2">
          <Link to={`/courses/${slug}`} className="flex-1">
            <Button className="w-full gap-2" variant="outline">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/admissions">
            <Button className="bg-gradient-primary hover:opacity-90">
              Enroll
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
