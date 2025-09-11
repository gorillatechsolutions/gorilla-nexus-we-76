import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";

import AppSuite from "./pages/AppSuite";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import CollabWithUs from "./pages/CollabWithUs";
import InvestWithUs from "./pages/InvestWithUs";
import WebsiteRoadmap from "./pages/WebsiteRoadmap";
import Reviews from "./pages/Reviews";
import SiteMap from "./pages/SiteMap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const AppContent = () => {
  usePerformanceMonitor();
  
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/apps" element={<AppSuite />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/collab" element={<CollabWithUs />} />
          <Route path="/invest" element={<InvestWithUs />} />
          <Route path="/roadmap" element={<WebsiteRoadmap />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="gorilla-tech-theme">
      <AppContent />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
