import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Users, ArrowRight, CheckCircle, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  const contactInfo = [{
    icon: Phone,
    title: "Call Us",
    details: "0381 359 9517",
    description: "Mon-Fri 9AM-6PM",
    action: "tel:03813599517"
  }, {
    icon: Mail,
    title: "Email Us",
    details: "hello@gorillatechsolution.com",
    description: "We'll respond within 24 hours",
    action: "mailto:hello@gorillatechsolution.com"
  }, {
    icon: MapPin,
    title: "Visit Us",
    details: "Agartala, Tripura (w) India",
    description: "Pin: 799006",
    action: "https://maps.google.com"
  }, {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9AM - 6PM",
    description: "Sat: 10AM - 4PM",
    action: null
  }];
  const services = ["Web Development", "Mobile App Development", "UI/UX Design", "Digital Marketing", "E-commerce Solutions", "Cloud Solutions", "Custom Software", "Consulting Services"];
  const officeLocations = [{
    city: "Agartala",
    address: "Main Office, Tripura (w)",
    pin: "799006",
    isMain: true
  }, {
    city: "Guwahati",
    address: "Branch Office, Assam",
    pin: "781001",
    isMain: false
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };
  return <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Gorilla Tech Solution - Get In Touch",
        "description": "Contact Gorilla Tech Solution for digital services. Call 0381 359 9517 or visit our office in Agartala, Tripura. Expert web development and digital solutions.",
        "url": "https://gorillatechsolution.com/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "Gorilla Tech Solution",
          "telephone": "0381 359 9517",
          "email": "hello@gorillatechsolution.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Agartala",
            "addressRegion": "Tripura",
            "addressCountry": "India",
            "postalCode": "799006"
          },
          "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"]
        }
      })
    }} />

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? We'd love to hear from you. 
            Get in touch and let's discuss how we can help transform your business.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 p-6 text-center">
                <CardHeader className="pb-4">
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.action ? <a href={info.action} className="text-primary hover:underline font-medium block">
                      {info.details}
                    </a> : <div className="font-medium">{info.details}</div>}
                  <CardDescription className="text-sm">{info.description}</CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="mb-6">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a service</option>
                      {services.map(service => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us more about your project..." rows={6} required />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card className="p-6">
              <CardHeader className="mb-4">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="tel:03813599517">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://wa.me/03813599517">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card className="p-6">
              <CardHeader className="mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {officeLocations.map((location, index) => <div key={index} className="space-y-2 pb-4 border-b last:border-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{location.city}</h3>
                      {location.isMain && <Badge variant="secondary" className="text-xs">Main</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                    <p className="text-sm text-muted-foreground">Pin: {location.pin}</p>
                  </div>)}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="p-6">
              <CardHeader className="mb-4">
                <CardTitle className="text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about getting in touch</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardTitle className="text-lg mb-3 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                How quickly do you respond?
              </CardTitle>
              <CardDescription>
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="text-lg mb-3 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Do you offer free consultations?
              </CardTitle>
              <CardDescription>
                Yes! We offer free initial consultations to understand your requirements 
                and provide preliminary recommendations for your project.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="text-lg mb-3 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Can I visit your office?
              </CardTitle>
              <CardDescription>
                Absolutely! We welcome office visits. Please schedule an appointment 
                in advance to ensure our team is available to meet with you.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="text-lg mb-3 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                What information should I provide?
              </CardTitle>
              <CardDescription>
                Include your project requirements, timeline, budget range, and any 
                specific features you need. The more details, the better we can help!
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted/50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait! Get in touch today and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <a href="tel:03813599517">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: 0381 359 9517
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:hello@gorillatechsolution.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Contact;