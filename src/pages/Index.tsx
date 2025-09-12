/**
 * Index - Home page component for Gorilla Tech Solution
 * 
 * This is the main landing page that showcases our digital marketing services.
 * Includes hero section, process overview, testimonials, and call-to-action.
 * 
 * Used as: Main entry point for the website (route: "/")
 */

// Component imports - organized by type
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

// SEO hook import
import { useSEO } from '@/hooks/useSEO';

/**
 * Index component renders the main landing page
 * 
 * Layout structure:
 * - Header: Main navigation and branding
 * - Main: Primary page content sections
 *   - HeroSection: Main value proposition and CTA
 *   - ProcessSection: Our process explanation
 *   - TestimonialsSection: Client testimonials
 *   - CTASection: Final call-to-action
 * - Footer: Contact info and links
 * - FloatingActionButton: Quick contact access
 */
const Index = () => {
  // SEO setup for home page
  useSEO({
    title: "Gorilla Tech Solution - Digital Marketing Agency | Web Development & SEO Services",
    description: "Professional digital marketing agency offering web development, SEO, social media marketing, and business growth solutions. Drive results with data-driven strategies.",
    keywords: "digital marketing, web development, SEO, social media marketing, business growth, Gorilla Tech Solution",
    ogTitle: "Gorilla Tech Solution - Digital Marketing Excellence",
    ogDescription: "Transform your business with our comprehensive digital marketing services. Professional web development, SEO optimization, and growth strategies.",
    canonicalUrl: "https://gorillatechsolution.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gorilla Tech Solution",
      "description": "Digital marketing agency specializing in web development and SEO services",
      "url": "https://gorillatechsolution.com",
      "logo": "https://gorillatechsolution.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "0381 359 9517",
        "contactType": "customer service",
        "email": "business@gorillatechsolution.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Agartala",
        "addressRegion": "Tripura",
        "addressCountry": "IN",
        "postalCode": "799006"
      },
      "sameAs": [
        "https://facebook.com/gorillatechsolution",
        "https://linkedin.com/company/gorillatechsolution"
      ]
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Site Header - Navigation and branding */}
      <Header />
      
      {/* Main Content - Primary page sections */}
      <main role="main" aria-label="Main content">
        {/* Hero Section - Main value proposition */}
        <HeroSection />
        
        {/* Process Section - How we work */}
        <ProcessSection />
        
        {/* Testimonials Section - Client feedback */}
        <TestimonialsSection />
        
        {/* Call-to-Action Section - Final conversion point */}
        <CTASection />
      </main>
      
      {/* Site Footer - Contact and links */}
      <Footer />
      
      {/* Floating Action Button - Quick contact access */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
