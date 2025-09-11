import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiCheckCircle, FiClock, FiCalendar, FiTarget, FiTrendingUp, FiSettings } from 'react-icons/fi';

const WebsiteRoadmap = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('q1');

  const roadmapData = {
    q1: {
      title: 'Q1 2025 - Foundation & Core Features',
      progress: 85,
      items: [
        { title: 'Website Redesign', status: 'completed', description: 'Modern, responsive design implementation' },
        { title: 'SEO Optimization', status: 'completed', description: 'Complete SEO audit and optimization' },
        { title: 'Mobile App Development', status: 'in-progress', description: 'iOS and Android app development' },
        { title: 'Client Portal', status: 'planned', description: 'Dedicated client management portal' }
      ]
    },
    q2: {
      title: 'Q2 2025 - Advanced Features',
      progress: 45,
      items: [
        { title: 'AI-Powered Analytics', status: 'in-progress', description: 'Advanced analytics dashboard with AI insights' },
        { title: 'Multi-language Support', status: 'planned', description: 'Support for 5+ languages' },
        { title: 'API Integration', status: 'planned', description: 'Third-party service integrations' },
        { title: 'Real-time Chat', status: 'planned', description: 'Live customer support chat system' }
      ]
    },
    q3: {
      title: 'Q3 2025 - Expansion & Optimization',
      progress: 15,
      items: [
        { title: 'E-commerce Platform', status: 'planned', description: 'Full e-commerce solution integration' },
        { title: 'Advanced Security', status: 'planned', description: 'Enhanced security measures and compliance' },
        { title: 'Performance Optimization', status: 'planned', description: 'Speed and performance improvements' },
        { title: 'User Experience Enhancement', status: 'planned', description: 'UX/UI improvements based on feedback' }
      ]
    },
    q4: {
      title: 'Q4 2025 - Innovation & Future',
      progress: 5,
      items: [
        { title: 'AR/VR Integration', status: 'planned', description: 'Augmented and virtual reality features' },
        { title: 'Blockchain Integration', status: 'planned', description: 'Blockchain-based security and transactions' },
        { title: 'Machine Learning Features', status: 'planned', description: 'AI-driven personalization and recommendations' },
        { title: 'Global Expansion', status: 'planned', description: 'International market expansion features' }
      ]
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <FiClock className="w-5 h-5 text-blue-500" />;
      default:
        return <FiCalendar className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-500">In Progress</Badge>;
      default:
        return <Badge variant="outline">Planned</Badge>;
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Website Roadmap - Gorilla Tech Solution Development Timeline</title>
        <meta name="description" content="Explore Gorilla Tech Solution's website development roadmap, upcoming features, and technology milestones for 2025 and beyond." />
        <meta name="keywords" content="website roadmap, development timeline, future features, technology roadmap, Gorilla Tech Solution, web development" />
        <meta property="og:title" content="Website Roadmap - Gorilla Tech Solution Development Timeline" />
        <meta property="og:description" content="Discover our planned features, improvements, and technological advancements for 2025." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/roadmap" />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-primary">Development</span> Roadmap
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover what's coming next in our journey to provide cutting-edge digital solutions and innovative technologies.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="https://placehold.co/800x400" 
                alt="Technology roadmap and development timeline visualization for Gorilla Tech Solution"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
                loading="lazy"
                width={800}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Overall Progress */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">2025 Development Progress</CardTitle>
                  <CardDescription>
                    Overall progress across all planned features and improvements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {Object.entries(roadmapData).map(([quarter, data]) => (
                        <div key={quarter} className="text-center">
                          <h3 className="font-semibold mb-2">{quarter.toUpperCase()}</h3>
                          <Progress value={data.progress} className="h-2 mb-2" />
                          <span className="text-sm text-muted-foreground">{data.progress}% Complete</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Roadmap */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16">Detailed Timeline</h2>
              
              <Tabs value={selectedQuarter} onValueChange={setSelectedQuarter}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="q1">Q1 2025</TabsTrigger>
                  <TabsTrigger value="q2">Q2 2025</TabsTrigger>
                  <TabsTrigger value="q3">Q3 2025</TabsTrigger>
                  <TabsTrigger value="q4">Q4 2025</TabsTrigger>
                </TabsList>

                {Object.entries(roadmapData).map(([quarter, data]) => (
                  <TabsContent key={quarter} value={quarter} className="mt-8">
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle className="text-xl">{data.title}</CardTitle>
                            <CardDescription>Progress: {data.progress}% Complete</CardDescription>
                          </div>
                          <Progress value={data.progress} className="w-32 h-2" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {data.items.map((item, index) => (
                            <Card key={index} className="border-l-4 border-l-primary/20">
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-lg flex items-center gap-2">
                                    {getStatusIcon(item.status)}
                                    {item.title}
                                  </CardTitle>
                                  {getStatusBadge(item.status)}
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16">Technology Stack Evolution</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <FiSettings className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Current Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• React & TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Node.js & Express</li>
                      <li>• MongoDB</li>
                      <li>• AWS Cloud Services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <FiTarget className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Upcoming Tech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Next.js 14</li>
                      <li>• GraphQL</li>
                      <li>• Microservices</li>
                      <li>• Redis Caching</li>
                      <li>• Docker & Kubernetes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <FiTrendingUp className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Future Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AI/ML Integration</li>
                      <li>• Blockchain Technology</li>
                      <li>• Edge Computing</li>
                      <li>• IoT Connectivity</li>
                      <li>• Quantum Computing Ready</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Have Suggestions?</h2>
              <p className="text-muted-foreground mb-8">
                We value your input! If you have ideas for features or improvements you'd like to see, 
                let us know and help shape our roadmap.
              </p>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-muted-foreground">Share your ideas:</span>
                    <Badge variant="outline">feedback@gorillatechsolution.com</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WebsiteRoadmap;