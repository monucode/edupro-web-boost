import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Branches from "./pages/Branches";
import Admissions from "./pages/Admissions";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

// Course detail pages
import VedicMathematics from "./pages/courses/VedicMathematics";
import RoboticsPro from "./pages/courses/RoboticsPro";
import AbacusTraining from "./pages/courses/AbacusTraining";
import MnemonicScience from "./pages/courses/MnemonicScience";
import PhonicsReading from "./pages/courses/PhonicsReading";

// Branch detail pages
import GovindNagar from "./pages/branches/GovindNagar";
import Manmad from "./pages/branches/Manmad";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="flex-1">
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
                <Route path="/branches/govind-nagar" element={<GovindNagar />} />
                <Route path="/branches/manmad" element={<Manmad />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
