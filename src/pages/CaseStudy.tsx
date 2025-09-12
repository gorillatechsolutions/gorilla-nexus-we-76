import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';
import { ArrowRight, Calendar, Clock, User, Tag, ExternalLink, TrendingUp, Users, Star, Target, Zap, Award, Eye, MessageSquare, Share2, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
const CaseStudy = () => {
  const {
    toast
  } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const caseStudies = [{
    id: 1,
    title: "E-commerce Platform Transformation for Local Retailer",
    excerpt: "How we helped a traditional retail store increase online sales by 300% with a custom e-commerce solution.",
    category: "E-commerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Raj Sharma",
    image: "https://placehold.co/600x300",
    views: 1250,
    likes: 89,
    featured: true,
    results: {
      metric1: {
        label: "Sales Increase",
        value: "300%"
      },
      metric2: {
        label: "Page Load Time",
        value: "2.1s"
      },
      metric3: {
        label: "Conversion Rate",
        value: "4.2%"
      }
    }
  }, {
    id: 2,
    title: "Mobile App Development for Healthcare Startup",
    excerpt: "Building a telemedicine app that connected 10,000+ patients with healthcare providers during the pandemic.",
    category: "Mobile Development",
    tags: ["Flutter", "Firebase", "WebRTC", "Healthcare"],
    readTime: "12 min read",
    date: "2024-01-10",
    author: "Priya Devi",
    image: "https://placehold.co/600x300",
    views: 890,
    likes: 67,
    featured: false,
    results: {
      metric1: {
        label: "Active Users",
        value: "10K+"
      },
      metric2: {
        label: "Consultations",
        value: "25K+"
      },
      metric3: {
        label: "App Rating",
        value: "4.8/5"
      }
    }
  }, {
    id: 3,
    title: "Digital Marketing Campaign for Tourism Board",
    excerpt: "Comprehensive digital strategy that boosted tourist inquiries by 250% and increased social media engagement.",
    category: "Digital Marketing",
    tags: ["SEO", "Social Media", "Google Ads", "Analytics"],
    readTime: "6 min read",
    date: "2024-01-05",
    author: "Amit Kumar",
    image: "https://placehold.co/600x300",
    views: 2100,
    likes: 156,
    featured: true,
    results: {
      metric1: {
        label: "Inquiry Increase",
        value: "250%"
      },
      metric2: {
        label: "Social Engagement",
        value: "400%"
      },
      metric3: {
        label: "Website Traffic",
        value: "180%"
      }
    }
  }, {
    id: 4,
    title: "Enterprise Web Application for Manufacturing Company",
    excerpt: "Custom inventory management system that streamlined operations and reduced manual work by 70%.",
    category: "Web Development",
    tags: ["React", "PostgreSQL", "Docker", "AWS"],
    readTime: "10 min read",
    date: "2023-12-28",
    author: "Sarah Johnson",
    image: "https://placehold.co/600x300",
    views: 756,
    likes: 43,
    featured: false,
    results: {
      metric1: {
        label: "Efficiency Gain",
        value: "70%"
      },
      metric2: {
        label: "Error Reduction",
        value: "85%"
      },
      metric3: {
        label: "Cost Savings",
        value: "₹15L/year"
      }
    }
  }, {
    id: 5,
    title: "UI/UX Redesign for Financial Services App",
    excerpt: "Complete user experience overhaul that improved user satisfaction scores by 45% and reduced support tickets.",
    category: "UI/UX Design",
    tags: ["Figma", "User Research", "Prototyping", "Usability Testing"],
    readTime: "7 min read",
    date: "2023-12-20",
    author: "Raj Sharma",
    image: "https://placehold.co/600x300",
    views: 1180,
    likes: 92,
    featured: false,
    results: {
      metric1: {
        label: "User Satisfaction",
        value: "+45%"
      },
      metric2: {
        label: "Support Tickets",
        value: "-60%"
      },
      metric3: {
        label: "Task Completion",
        value: "92%"
      }
    }
  }, {
    id: 6,
    title: "Cloud Migration for Educational Institution",
    excerpt: "Seamless migration to AWS cloud infrastructure, improving system reliability and reducing costs by 40%.",
    category: "Cloud Solutions",
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
    readTime: "9 min read",
    date: "2023-12-15",
    author: "Priya Devi",
    image: "https://placehold.co/600x300",
    views: 634,
    likes: 38,
    featured: false,
    results: {
      metric1: {
        label: "Cost Reduction",
        value: "40%"
      },
      metric2: {
        label: "Uptime",
        value: "99.9%"
      },
      metric3: {
        label: "Performance",
        value: "+65%"
      }
    }
  }, {
    id: 7,
    title: "AI-Powered Chatbot for Customer Support",
    excerpt: "Intelligent chatbot implementation that reduced response time by 80% and handled 90% of customer queries automatically.",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "NLP", "DialogFlow"],
    readTime: "11 min read",
    date: "2024-01-25",
    author: "Dr. Ananya Singh",
    image: "https://placehold.co/600x300",
    views: 1450,
    likes: 112,
    featured: true,
    results: {
      metric1: {
        label: "Response Time",
        value: "-80%"
      },
      metric2: {
        label: "Query Resolution",
        value: "90%"
      },
      metric3: {
        label: "Customer Satisfaction",
        value: "4.7/5"
      }
    }
  }, {
    id: 8,
    title: "Blockchain Supply Chain Management",
    excerpt: "Revolutionary blockchain solution for tracking products from farm to table, ensuring transparency and authenticity.",
    category: "Blockchain",
    tags: ["Ethereum", "Smart Contracts", "Solidity", "Web3"],
    readTime: "15 min read",
    date: "2024-01-20",
    author: "Vikram Patel",
    image: "https://placehold.co/600x300",
    views: 890,
    likes: 67,
    featured: false,
    results: {
      metric1: {
        label: "Transparency",
        value: "100%"
      },
      metric2: {
        label: "Fraud Reduction",
        value: "95%"
      },
      metric3: {
        label: "Cost Savings",
        value: "₹25L/year"
      }
    }
  }, {
    id: 9,
    title: "Progressive Web App for Food Delivery",
    excerpt: "Lightning-fast PWA that works offline and increased user engagement by 200% with push notifications.",
    category: "Mobile Development",
    tags: ["PWA", "Service Workers", "React", "Firebase"],
    readTime: "9 min read",
    date: "2024-01-18",
    author: "Sanya Reddy",
    image: "https://placehold.co/600x300",
    views: 1680,
    likes: 134,
    featured: true,
    results: {
      metric1: {
        label: "User Engagement",
        value: "+200%"
      },
      metric2: {
        label: "Load Time",
        value: "1.8s"
      },
      metric3: {
        label: "Offline Usage",
        value: "45%"
      }
    }
  }, {
    id: 10,
    title: "IoT Smart Office Solution",
    excerpt: "Connected office ecosystem that optimized energy consumption by 35% and improved workplace productivity.",
    category: "IoT",
    tags: ["IoT", "Arduino", "MQTT", "Dashboard"],
    readTime: "13 min read",
    date: "2024-01-12",
    author: "Rahul Gupta",
    image: "https://placehold.co/600x300",
    views: 720,
    likes: 48,
    featured: false,
    results: {
      metric1: {
        label: "Energy Savings",
        value: "35%"
      },
      metric2: {
        label: "Productivity",
        value: "+28%"
      },
      metric3: {
        label: "ROI",
        value: "250%"
      }
    }
  }, {
    id: 11,
    title: "Machine Learning Recommendation Engine",
    excerpt: "Personalized recommendation system that increased sales by 150% through intelligent product suggestions.",
    category: "AI/ML",
    tags: ["Python", "Scikit-learn", "Pandas", "Collaborative Filtering"],
    readTime: "14 min read",
    date: "2024-01-08",
    author: "Dr. Meera Joshi",
    image: "https://placehold.co/600x300",
    views: 1290,
    likes: 98,
    featured: false,
    results: {
      metric1: {
        label: "Sales Increase",
        value: "150%"
      },
      metric2: {
        label: "Click-through Rate",
        value: "12.5%"
      },
      metric3: {
        label: "User Retention",
        value: "+85%"
      }
    }
  }, {
    id: 12,
    title: "Real-time Data Analytics Dashboard",
    excerpt: "Interactive dashboard providing real-time business insights, reducing decision-making time by 60%.",
    category: "Data Analytics",
    tags: ["D3.js", "React", "WebSocket", "PostgreSQL"],
    readTime: "10 min read",
    date: "2024-01-03",
    author: "Arjun Nair",
    image: "https://placehold.co/600x300",
    views: 980,
    likes: 72,
    featured: false,
    results: {
      metric1: {
        label: "Decision Speed",
        value: "+60%"
      },
      metric2: {
        label: "Data Accuracy",
        value: "99.8%"
      },
      metric3: {
        label: "User Adoption",
        value: "95%"
      }
    }
  }, {
    id: 13,
    title: "Cybersecurity Audit Platform",
    excerpt: "Comprehensive security platform that identified and resolved 200+ vulnerabilities across client systems.",
    category: "Cybersecurity",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Python", "OWASP"],
    readTime: "12 min read",
    date: "2023-12-30",
    author: "Neha Sharma",
    image: "https://placehold.co/600x300",
    views: 654,
    likes: 41,
    featured: false,
    results: {
      metric1: {
        label: "Vulnerabilities Fixed",
        value: "200+"
      },
      metric2: {
        label: "Security Score",
        value: "98%"
      },
      metric3: {
        label: "Compliance",
        value: "100%"
      }
    }
  }];
  const categories = ["All", "E-commerce", "Mobile Development", "Web Development", "UI/UX Design", "Digital Marketing", "Cloud Solutions", "AI/ML", "Blockchain", "IoT", "Data Analytics", "Cybersecurity"];

  // Filter and search logic
  const filteredCaseStudies = useMemo(() => {
    let filtered = caseStudies;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(cs => cs.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(cs => cs.title.toLowerCase().includes(query) || cs.excerpt.toLowerCase().includes(query) || cs.category.toLowerCase().includes(query) || cs.tags.some(tag => tag.toLowerCase().includes(query)) || cs.author.toLowerCase().includes(query));
    }
    return filtered;
  }, [searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCaseStudies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);
  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);

  // Share function
  const handleShare = async (caseStudy: any) => {
    const shareData = {
      title: caseStudy.title,
      text: caseStudy.excerpt,
      url: `${window.location.origin}/case-study/${caseStudy.id}`
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copied!",
          description: "Case study link has been copied to clipboard."
        });
      }
    } catch (error) {
      toast({
        title: "Share failed",
        description: "Unable to share this case study.",
        variant: "destructive"
      });
    }
  };
  return <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Gorilla Tech Solution Case Studies",
        "description": "Real-world case studies and success stories from Gorilla Tech Solution's digital projects. Learn how we've helped businesses grow with our technology solutions.",
        "url": "https://gorillatechsolution.com/case-study",
        "publisher": {
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
        "blogPost": caseStudies.map(cs => ({
          "@type": "BlogPosting",
          "headline": cs.title,
          "description": cs.excerpt,
          "datePublished": cs.date,
          "author": {
            "@type": "Person",
            "name": cs.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Gorilla Tech Solution"
          }
        }))
      })
    }} />

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Case Studies & Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across various industries achieve their digital transformation goals. 
            Real projects, real results, real impact.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-16">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="text" placeholder="Search case studies by title, category, technology, or author..." value={searchQuery} onChange={e => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }} className="pl-10 h-12 text-base" />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => <Button key={category} variant={category === selectedCategory ? "default" : "outline"} size="sm" className="rounded-full" onClick={() => {
            setSelectedCategory(category);
            setCurrentPage(1); // Reset to first page when filtering
          }}>
                <Tag className="h-3 w-3 mr-1" />
                {category}
              </Button>)}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            
          </div>
        </section>


        {/* All Case Studies Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">All Case Studies</h2>
            <p className="text-muted-foreground">Filtered results based on your search and category selection</p>
          </div>

          {/* All Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {paginatedCaseStudies.length > 0 ? paginatedCaseStudies.map(caseStudy => <Link key={caseStudy.id} to={`/case-study/${caseStudy.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                    <Badge className="absolute top-3 left-3 text-xs">{caseStudy.category}</Badge>
                    {caseStudy.featured && <Star className="absolute top-3 right-3 h-5 w-5 text-yellow-500 fill-current" />}
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span>{new Date(caseStudy.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{caseStudy.readTime}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {caseStudy.views}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {caseStudy.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.tags.slice(0, 3).map(tag => <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                          {tag}
                        </Badge>)}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="h-3 w-3" />
                        </div>
                        <span className="text-xs text-muted-foreground">{caseStudy.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span className="text-xs">{Math.floor(caseStudy.likes / 10)}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => handleShare(caseStudy)}>
                          <Share2 className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs hover:text-primary">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>) : <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No case studies found</h3>
                  <p>Try adjusting your search query or filters to find more results.</p>
                </div>
              </div>}
          </div>

          {/* Pagination */}
          {totalPages > 1 && <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" onClick={e => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }} className={currentPage === 1 ? "pointer-events-none opacity-50" : ""} />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                const isCurrentPage = page === currentPage;

                // Show first page, last page, current page, and pages around current
                if (page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1) {
                  return <PaginationItem key={page}>
                          <PaginationLink href="#" isActive={isCurrentPage} onClick={e => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}>
                            {page}
                          </PaginationLink>
                        </PaginationItem>;
                }

                // Show ellipsis
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>;
                }
                return null;
              })}
                  
                  <PaginationItem>
                    <PaginationNext href="#" onClick={e => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }} className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>}
        </section>

        {/* Success Metrics */}
        

        {/* Newsletter Signup */}
        
      </main>

      <Footer />
    </div>;
};
export default CaseStudy;