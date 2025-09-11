import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Gorilla Tech Solution - Digital Media Excellence",
            "description": "Leading digital media agency specializing in innovative tech solutions, web development, and digital transformation services in Agartala, Tripura.",
            "url": "https://gorillatechsolution.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Gorilla Tech Solution",
              "description": "Professional digital media and technology solutions provider",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Agartala",
                "addressRegion": "Tripura",
                "addressCountry": "India",
                "postalCode": "799006"
              },
              "telephone": "0381 359 9517"
            }
          })
        }}
      />

      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Passionate digital innovators transforming businesses through cutting-edge technology solutions.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Team</div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <Target className="h-16 w-16 text-primary mb-6 mx-auto md:mx-0" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value in the digital landscape.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <Award className="h-16 w-16 text-primary mb-6 mx-auto md:mx-0" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading digital media agency in Northeast India, 
                recognized for excellence, innovation, and transformative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Our Story</h2>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2021 in Agartala, Tripura, we emerged from a vision to bridge the digital 
                divide in Northeast India. What started as a small team of passionate developers has 
                evolved into a comprehensive digital agency.
              </p>
              <p>
                We pride ourselves on being digital partners who deliver solutions that are 
                technically excellent, culturally relevant, and business-focused.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Embracing cutting-edge technologies to deliver exceptional results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-muted-foreground">
                Delivering projects on time with the highest standards of quality.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                Striving for perfection in every project we undertake.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-12">Technologies We Master</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'Flutter', 'Next.js'].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-6 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;