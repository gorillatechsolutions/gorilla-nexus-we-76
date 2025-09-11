import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const SiteMap = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page with company overview' },
        { name: 'About Us', url: '/about', description: 'Company information, team, and history' },
        { name: 'Services', url: '/services', description: 'Our digital marketing and web development services' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      category: 'Products & Solutions',
      pages: [
        { name: 'App', url: '/app', description: 'Mobile application solutions' },
        { name: 'Apps Suite', url: '/apps', description: 'Complete application suite overview' },
        { name: 'Plans & Pricing', url: '/plans', description: 'Service packages and pricing information' },
        { name: 'Case Study', url: '/case-study', description: 'Success stories and project showcases' }
      ]
    },
    {
      category: 'Business',
      pages: [
        { name: 'Collaborate with Us', url: '/collab', description: 'Partnership and collaboration opportunities' },
        { name: 'Invest with Us', url: '/invest', description: 'Investment opportunities and business growth' },
        { name: 'Website Roadmap', url: '/roadmap', description: 'Development timeline and future features' },
        { name: 'Reviews', url: '/reviews', description: 'Client testimonials and feedback' }
      ]
    },
    {
      category: 'Legal & Policies',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy information' },
        { name: 'Terms & Conditions', url: '/terms', description: 'Service terms and usage conditions' },
        { name: 'Refund Policy', url: '/refund', description: 'Refund and cancellation policies' },
        { name: 'Disclaimer', url: '/disclaimer', description: 'Legal disclaimers and limitations' }
      ]
    },
    {
      category: 'Navigation',
      pages: [
        { name: 'Site Map', url: '/sitemap', description: 'Complete website structure and navigation' }
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Site Map - Gorilla Tech Solution Website Structure</title>
        <meta name="description" content="Complete site map of Gorilla Tech Solution website. Find all pages, services, policies, and navigation structure in one place." />
        <meta name="keywords" content="site map, website structure, navigation, Gorilla Tech Solution pages, website index, site navigation" />
        <meta property="og:title" content="Site Map - Gorilla Tech Solution Website Structure" />
        <meta property="og:description" content="Explore the complete structure of our website with easy navigation to all pages and services." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/sitemap" />

        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Site Map</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Navigate through our complete website structure. Find exactly what you're looking for with our organized site map.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">15+</h2>
              <p className="text-muted-foreground">Total Pages</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">5</h2>
              <p className="text-muted-foreground">Main Categories</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">8+</h2>
              <p className="text-muted-foreground">Services</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Jan 2025</h2>
              <p className="text-muted-foreground">Last Updated</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Complete Website Structure</h2>
              
              <div className="space-y-8">
                {siteStructure.map((section, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-xl font-bold">{section.category}</h3>
                      <span className="text-muted-foreground">({section.pages.length} pages)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-semibold mb-2">
                            <a 
                              href={page.url} 
                              className="hover:text-primary transition-colors"
                              aria-label={`Navigate to ${page.name} page`}
                            >
                              {page.name}
                            </a>
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">{page.url}</p>
                          <p className="text-muted-foreground">{page.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Navigation Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use the main navigation menu for quick access to key pages</li>
                    <li>• Footer contains quick links to all important pages</li>
                    <li>• Mobile menu provides full navigation on smaller screens</li>
                    <li>• Search functionality available on relevant pages</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All pages are mobile-responsive and accessible</li>
                    <li>• Keyboard navigation supported throughout</li>
                    <li>• Screen reader friendly with proper ARIA labels</li>
                    <li>• High contrast mode available for better visibility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center py-12 border border-border rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                If you can't find a specific page or information, our team is here to help you navigate to the right place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </Link>
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SiteMap;