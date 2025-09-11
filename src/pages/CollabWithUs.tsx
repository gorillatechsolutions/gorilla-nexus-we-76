import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiUsers, FiTarget, FiTrendingUp, FiAward, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const CollabWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Collaboration form submitted:', formData);
  };

  const collaborationTypes = [
    {
      title: 'Strategic Partnership',
      description: 'Long-term business partnerships for mutual growth',
      icon: FiTarget,
      benefits: ['Shared Resources', 'Market Expansion', 'Risk Mitigation']
    },
    {
      title: 'Technology Integration',
      description: 'Integrate our solutions with your existing systems',
      icon: FiTrendingUp,
      benefits: ['Seamless Integration', 'Enhanced Functionality', 'Technical Support']
    },
    {
      title: 'Joint Ventures',
      description: 'Collaborate on innovative projects and solutions',
      icon: FiUsers,
      benefits: ['Shared Investment', 'Combined Expertise', 'Market Reach']
    },
    {
      title: 'Affiliate Program',
      description: 'Earn commissions by referring our services',
      icon: FiAward,
      benefits: ['Competitive Rates', 'Marketing Support', 'Regular Payouts']
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Collaborate with Gorilla Tech Solution - Partnership Opportunities</title>
        <meta name="description" content="Partner with Gorilla Tech Solution for strategic collaborations, joint ventures, and business growth opportunities. Explore our partnership programs." />
        <meta name="keywords" content="partnership, collaboration, joint venture, strategic partnership, affiliate program, Gorilla Tech Solution" />
        <meta property="og:title" content="Collaborate with Gorilla Tech Solution - Partnership Opportunities" />
        <meta property="og:description" content="Partner with Gorilla Tech Solution for strategic collaborations and business growth opportunities." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/collab" />

        {/* Page Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Collaborate with Gorilla Tech Solution
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join forces with us to create innovative solutions, expand your reach, and achieve mutual success through strategic partnerships. We believe in building lasting relationships that drive growth for all parties involved.
              </p>
            </div>
          </div>
        </section>

        {/* Collaboration Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Partnership Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore different ways we can work together to achieve mutual success and growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collaborationTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-card">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{type.title}</CardTitle>
                    <CardDescription className="text-sm">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4">Start a Collaboration</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Ready to explore partnership opportunities? Get in touch with our collaboration team and let's discuss how we can work together.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="border-0 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Send us a Message</CardTitle>
                    <CardDescription>
                      Tell us about your collaboration ideas and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                      <Input
                        placeholder="Company/Organization"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                      <Input
                        placeholder="Project/Partnership Type"
                        value={formData.project}
                        onChange={(e) => setFormData({...formData, project: e.target.value})}
                      />
                      <Textarea
                        placeholder="Tell us about your collaboration ideas..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        required
                      />
                      <Button type="submit" className="w-full">
                        Submit Collaboration Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="border-0 bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">Direct Contact</CardTitle>
                      <CardDescription>
                        Prefer to reach out directly? Here are our contact details.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FiMail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">partnerships@gorillatechsolution.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FiPhone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-muted-foreground">0381 359 9517</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FiMapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">Agartala, Tripura, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">Why Partner with Us?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">5+ years of industry experience</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Proven track record of successful partnerships</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Dedicated partnership support team</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Flexible collaboration models</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Transparent communication and reporting</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CollabWithUs;