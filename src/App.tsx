import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Branches from "./pages/Branches";
import Admissions from "./pages/Admissions";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Course detail pages
import VedicMathematics from "./pages/courses/VedicMathematics";
import RoboticsPro from "./pages/courses/RoboticsPro";
import AbacusTraining from "./pages/courses/AbacusTraining";
import MnemonicScience from "./pages/courses/MnemonicScience";
import PhonicsReading from "./pages/courses/PhonicsReading";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/vedic-mathematics" element={<VedicMathematics />} />
            <Route path="/courses/robotics-pro" element={<RoboticsPro />} />
            <Route path="/courses/abacus-training" element={<AbacusTraining />} />
            <Route path="/courses/mnemonic-science" element={<MnemonicScience />} />
            <Route path="/courses/phonics-reading" element={<PhonicsReading />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
