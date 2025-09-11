import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, Search, Download, ChevronLeft, ChevronRight, Share2, Copy, Check } from 'lucide-react';
import { FaAppStoreIos, FaGlobe } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareMenu from '@/components/ShareMenu';
import { useSEO } from '@/hooks/useSEO';

const AppSuite = () => {
  const [activeFilter, setActiveFilter] = useState('All Apps');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [shareMenuAppId, setShareMenuAppId] = useState<number | null>(null);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 8;

  // SEO Configuration
  const currentUrl = `${window.location.origin}/apps`;
  const ogImage = `${window.location.origin}/placeholder.svg`;
  
  useSEO({
    title: 'App Suite - Gorilla Tech Solution | 11+ Premium Business & Productivity Apps',
    description: 'Discover 11+ powerful business and productivity applications designed to boost efficiency. Mobile apps, web apps, and desktop solutions for analytics, project management, CRM, and more.',
    keywords: 'business apps, productivity apps, mobile applications, web apps, desktop software, analytics hub, project management, CRM software, SEO tools, invoice generator, time tracker, password manager, finance tracker, design studio, fitness coach, Gorilla Tech Solution',
    ogTitle: 'App Suite - 11+ Premium Business Apps | Gorilla Tech Solution',
    ogDescription: 'Powerful business and productivity tools designed to drive growth. Explore premium mobile apps, web applications, and desktop solutions.',
    ogImage: ogImage,
    ogUrl: currentUrl,
    twitterTitle: 'App Suite - Premium Business & Productivity Apps',
    twitterDescription: 'Discover 11+ powerful business apps designed to boost your productivity and drive growth.',
    twitterImage: ogImage,
    canonicalUrl: currentUrl,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Gorilla Tech Solution App Suite",
      "description": "A comprehensive suite of 11+ premium business and productivity applications including analytics, CRM, project management, and more",
      "url": currentUrl,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": ["Web", "iOS", "Android", "Windows", "macOS"],
      "offers": [
        {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "category": "Free Trial"
        },
        {
          "@type": "Offer",
          "priceRange": "$9.99-$99.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "category": "Premium"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "Gorilla Tech Solution",
        "url": window.location.origin
      },
      "publisher": {
        "@type": "Organization",
        "name": "Gorilla Tech Solution",
        "url": window.location.origin
      }
    }
  });

  const filters = ['All Apps', 'Mobile Apps', 'Web Apps', 'Desktop Apps'];

  const applications = [
    {
      id: 1,
      name: 'Analytics Hub',
      category: 'Business',
      rating: 4.8,
      downloads: '1M+',
      description: 'Monitor your key business metrics in real-time with our powerful analytics hub. Visualize data and g...',
      platforms: ['Web'],
      premium: true,
      badge: 'Premium',
      badgeVariant: 'premium'
    },
    {
      id: 2,
      name: 'Social Scheduler',
      category: 'Productivity',
      rating: 4.7,
      downloads: '500K+',
      description: 'Plan, schedule, and publish your social media content across all major platforms from a single, intu...',
      platforms: ['Play Store', 'App Store'],
      premium: false
    },
    {
      id: 3,
      name: 'SEO Keyword Finder',
      category: 'Marketing',
      rating: 4.9,
      downloads: '250K+',
      description: 'Discover high-impact keywords and track your search rankings to dominate the SERPs and drive organic...',
      platforms: ['Web'],
      premium: true,
      badge: 'Gold',
      badgeVariant: 'gold'
    },
    {
      id: 4,
      name: 'Project Pilot',
      category: 'Productivity',
      rating: 4.6,
      downloads: '750K+',
      description: 'Manage projects, assign tasks, and collaborate with your team to deliver projects on time and within...',
      platforms: ['Play Store', 'App Store', 'Web'],
      premium: false
    },
    {
      id: 5,
      name: 'Invoice Generator',
      category: 'Business',
      rating: 4.5,
      downloads: '300K+',
      description: 'Create professional invoices quickly and easily. Track payments and manage your billing process...',
      platforms: ['Web', 'Play Store'],
      premium: true,
      badge: 'Premium',
      badgeVariant: 'premium'
    },
    {
      id: 6,
      name: 'Time Tracker Pro',
      category: 'Productivity',
      rating: 4.7,
      downloads: '400K+',
      description: 'Track time across projects and tasks. Generate detailed reports and improve your productivity...',
      platforms: ['Web', 'App Store', 'Play Store'],
      premium: false
    },
    {
      id: 7,
      name: 'Customer CRM',
      category: 'Business',
      rating: 4.8,
      downloads: '800K+',
      description: 'Manage customer relationships, track leads, and boost sales with our comprehensive CRM solution...',
      platforms: ['Web', 'Play Store'],
      premium: true,
      badge: 'Premium',
      badgeVariant: 'premium'
    },
    {
      id: 8,
      name: 'Password Vault',
      category: 'Security',
      rating: 4.9,
      downloads: '2M+',
      description: 'Secure password manager with military-grade encryption. Store and autofill passwords safely...',
      platforms: ['App Store', 'Play Store', 'Web'],
      premium: true,
      badge: 'Gold',
      badgeVariant: 'gold'
    },
    {
      id: 9,
      name: 'Finance Tracker',
      category: 'Finance',
      rating: 4.6,
      downloads: '600K+',
      description: 'Track expenses, manage budgets, and achieve your financial goals with smart insights and alerts...',
      platforms: ['App Store', 'Play Store'],
      premium: false
    },
    {
      id: 10,
      name: 'Design Studio',
      category: 'Creative',
      rating: 4.7,
      downloads: '350K+',
      description: 'Create stunning graphics, logos, and designs with professional tools and templates...',
      platforms: ['Web', 'App Store'],
      premium: true,
      badge: 'Premium',
      badgeVariant: 'premium'
    },
    {
      id: 11,
      name: 'Fitness Coach',
      category: 'Health',
      rating: 4.5,
      downloads: '1.2M+',
      description: 'Personalized workout plans, nutrition tracking, and health monitoring for a healthier lifestyle...',
      platforms: ['App Store', 'Play Store'],
      premium: false
    }
  ];

  const filteredApps = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'All Apps') return matchesSearch;
    if (activeFilter === 'Mobile Apps') return matchesSearch && (app.platforms.includes('Play Store') || app.platforms.includes('App Store'));
    if (activeFilter === 'Web Apps') return matchesSearch && app.platforms.includes('Web');
    if (activeFilter === 'Desktop Apps') return matchesSearch && app.platforms.includes('Desktop');
    
    return matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredApps.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentApps = filteredApps.slice(startIndex, endIndex);

  // Reset to first page when filter or search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchTerm]);

  // Platform icon mapping function
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Play Store': return IoLogoGooglePlaystore;
      case 'App Store': return FaAppStoreIos;
      case 'Web': return FaGlobe;
      default: return Download;
    }
  };

  const handleDownload = (platform: string, appName: string) => {
    // Simulate download functionality
    console.log(`Downloading ${appName} from ${platform}`);
    // In a real app, you would redirect to the actual store or download link
    if (platform === 'Play Store') {
      window.open('https://play.google.com/store', '_blank');
    } else if (platform === 'App Store') {
      window.open('https://apps.apple.com/', '_blank');
    } else if (platform === 'Web') {
      window.open('#', '_blank');
    }
  };

  const handleShare = (app: any) => {
    setShareMenuAppId(shareMenuAppId === app.id ? null : app.id);
  };

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShareMenuAppId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12" role="main">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Premium App Suite - 11+ Business & Productivity Applications
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Discover powerful business tools designed to boost productivity and drive growth. 
            Premium mobile apps, web applications, and desktop solutions for modern businesses.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search our apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "secondary"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </header>

        {/* Apps Grid */}
        <section aria-labelledby="apps-heading">
          <h2 id="apps-heading" className="sr-only">Available Applications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {currentApps.map((app, index) => (
              <article 
                key={app.id} 
                className="relative hover:shadow-lg transition-all duration-300 overflow-hidden group"
                itemScope 
                itemType="https://schema.org/SoftwareApplication"
              >
                <Card className="h-full">
                  {/* Left side app icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt={`${app.name} application icon`}
                      className="w-8 h-8 object-cover rounded-lg"
                      loading={index < 4 ? "eager" : "lazy"}
                      itemProp="image"
                    />
                  </div>
                
                {/* Right side content area with fit screen design */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-10" ref={shareMenuAppId === app.id ? shareMenuRef : null}>
                  {/* Share button */}
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare(app)}
                      className="w-8 h-8 p-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      title="Share app"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    
                    {/* Share Menu */}
                    {shareMenuAppId === app.id && (
                      <ShareMenu 
                        app={app} 
                        onClose={() => setShareMenuAppId(null)} 
                      />
                    )}
                  </div>
                  
                  {/* Badge */}
                  {app.badge && (
                    <Badge variant={app.badgeVariant as any} className="shadow-sm">
                      {app.badge}
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-4 pt-20">
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-xl mb-1 font-bold" itemProp="name">{app.name}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium" itemProp="applicationCategory">{app.category}</p>
                    </div>
                    <div className="flex items-center gap-3" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                      <div className="flex items-center gap-1.5">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" aria-hidden="true" />
                        <span className="text-sm font-semibold" itemProp="ratingValue">{app.rating}</span>
                      </div>
                      <div className="h-1 w-1 bg-muted-foreground rounded-full" aria-hidden="true"></div>
                      <span className="text-sm text-muted-foreground font-medium">{app.downloads} downloads</span>
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed" itemProp="description">
                    {app.description}
                  </p>

                  {/* Download Buttons */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {app.platforms.map((platform) => {
                        const IconComponent = getPlatformIcon(platform);
                        return (
                          <Button
                            key={platform}
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(platform, app.name)}
                            className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <IconComponent className="h-4 w-4" />
                            {platform === 'Play Store' ? 'Play Store' : 
                             platform === 'App Store' ? 'App Store' : 
                             'Web App'}
                          </Button>
                        );
                      })}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 group"
                        variant="secondary"
                        onClick={() => console.log(`Downloading ${app.name}`)}
                      >
                        <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                        {app.premium ? 'Try Free' : 'Download Free'}
                      </Button>
                      <Button 
                        className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300"
                        onClick={() => console.log(`Purchasing ${app.name}`)}
                      >
                        BUY NOW
                      </Button>
                    </div>
                  </div>
                </CardContent>
                </Card>
              </article>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No apps found matching your search criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="App suite pagination" className="flex justify-center items-center mt-8 space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="min-w-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          )}
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="text-center mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-12 border border-primary/10">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ready to Boost Your Productivity?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover how our suite of applications can transform your business operations and drive growth.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Features
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppSuite;