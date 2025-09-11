import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Palette, Search, ShoppingCart, Cloud, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
const Services = () => {
  const services = [{
    icon: Code,
    title: "Web Development",
    description: "We build fast, responsive, and user-friendly websites that provide an exceptional user experience and drive conversions.",
    originalPrice: "₹50,000",
    price: "₹35,000",
    discount: "Save 30%",
    isPopular: false
  }, {
    icon: Smartphone,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications for iOS and Android with cutting-edge features and seamless performance.",
    originalPrice: "₹80,000",
    price: "₹65,000",
    discount: "Save 20%",
    isPopular: true
  }, {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience and create lasting impressions on your customers.",
    originalPrice: "₹25,000",
    price: "₹18,000",
    discount: "Save 25%",
    isPopular: false
  }, {
    icon: Search,
    title: "Social Media Management",
    description: "Engage your audience and build a loyal community. We create and manage social media campaigns that resonate with your followers.",
    originalPrice: "₹15,000",
    price: "₹12,000", 
    discount: "Limited Offer | Save 20%",
    isPopular: true
  }, {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store setup with payment gateway integration, inventory management, and customer support systems.",
    originalPrice: "₹60,000",
    price: "₹45,000",
    discount: "Save 25%",
    isPopular: false
  }, {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment services with 24/7 monitoring, backup solutions, and security management.",
    originalPrice: "₹40,000",
    price: "₹30,000",
    discount: "Save 25%",
    isPopular: false
  }];
  const processSteps = [{
    step: "01",
    title: "Discovery & Planning",
    description: "We understand your requirements and create a detailed project roadmap."
  }, {
    step: "02",
    title: "Design & Prototype",
    description: "Create wireframes and prototypes to visualize your project before development."
  }, {
    step: "03",
    title: "Development & Testing",
    description: "Build your solution using best practices with rigorous testing throughout."
  }, {
    step: "04",
    title: "Launch & Support",
    description: "Deploy your project and provide ongoing maintenance and support."
  }];
  return <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Services by Gorilla Tech Solution",
        "description": "Comprehensive digital services including web development, mobile apps, UI/UX design, digital marketing, and cloud solutions in Agartala, Tripura.",
        "provider": {
          "@type": "Organization",
          "name": "Gorilla Tech Solution",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Agartala",
            "addressRegion": "Tripura",
            "addressCountry": "India",
            "postalCode": "799006"
          }
        },
        "serviceType": "Digital Technology Services",
        "areaServed": "Northeast India"
      })
    }} />

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business with our comprehensive digital solutions. From web development 
            to mobile apps, we deliver excellence at every step.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group h-full flex flex-col relative">
                  {service.isPopular && (
                    <Badge className="absolute -top-2 left-4 bg-yellow-500 text-black font-semibold px-3 py-1 text-xs z-10">
                      👑 MOST POPULAR
                    </Badge>
                  )}
                  <CardHeader className="flex items-center text-center pt-6">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground text-sm font-medium">
                      96 × 96
                    </div>
                    <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-center max-w-xs mx-auto leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mt-auto">
                      <div className="text-center mb-4">
                        <Badge variant="outline" className="bg-black text-white px-3 py-1 text-xs font-semibold">
                          STARTING AT
                        </Badge>
                      </div>
                      <div className="text-center mb-2">
                        <div className="text-3xl font-bold text-primary mb-1">{service.price}</div>
                        <div className="text-sm text-muted-foreground">
                          <span className="line-through">{service.originalPrice}</span>
                        </div>
                        <div className="text-sm text-red-500 font-semibold">{service.discount}</div>
                      </div>
                      <div className="mt-6 flex gap-3">
                        <Button className="flex-1 bg-primary text-primary-foreground">Contact Us</Button>
                        <Button variant="outline" className="flex-1">Read More</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border"></div>}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>)}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Gorilla Tech Solution?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="mb-2">Fast Delivery</CardTitle>
              <CardDescription>
                Quick turnaround times without compromising on quality. 
                We respect your deadlines and deliver on time.
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="mb-2">Quality Assured</CardTitle>
              <CardDescription>
                Rigorous testing and quality assurance processes ensure 
                your project meets the highest standards.
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="mb-2">Ongoing Support</CardTitle>
              <CardDescription>
                Comprehensive post-launch support and maintenance 
                to keep your solution running smoothly.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* Technologies */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'Node.js', 'Python', 'Flutter', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'TypeScript', 'Next.js', 'Express', 'Firebase'].map(tech => <Badge key={tech} variant="outline" className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors">
                {tech}
              </Badge>)}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted/50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Services;