import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';
import { useState, useMemo } from 'react';

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      company: "EcoFriendly Goods",
      rating: 5,
      text: "Gorilla Tech Solutions completely transformed our online presence. Their SEO strategy was a game-changer, tripling our organic traffic in just six months. We couldn't be happier with the results!"
    },
    {
      id: 2,
      name: "Mark G.",
      company: "Innovate SaaS",
      rating: 5,
      text: "The PPC team is phenomenal. They slashed our cost-per-acquisition by 40% while improving lead quality. Their data-driven approach is second to none. Highly recommended for any B2B company."
    },
    {
      id: 3,
      name: "Alex Johnson",
      company: "Tech Solutions Inc.",
      rating: 5,
      text: "An absolutely outstanding experience. The team is professional, knowledgeable, and delivered results that far exceeded our expectations. Their SEO work put us on the map!"
    },
    {
      id: 4,
      name: "Tom Wilson",
      company: "Global Exports",
      rating: 5,
      text: "We needed a complete digital marketing overhaul, and Gorilla Tech Solutions delivered. Their strategic approach to content and PPC has been instrumental in our growth this year."
    },
    {
      id: 5,
      name: "Lisa Chen",
      company: "StartupXYZ",
      rating: 5,
      text: "Amazing work on our mobile app development. The team understood our vision perfectly and delivered a product that exceeded our expectations. Highly professional!"
    },
    {
      id: 6,
      name: "David Kumar",
      company: "RetailPro",
      rating: 5,
      text: "Their e-commerce solution boosted our online sales by 250%. The platform is user-friendly and the ongoing support has been excellent."
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedTestimonials = testimonials.slice(startIndex, endIndex);

  return (
    <>
      {/* JSON-LD Structured Data for Testimonials */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Gorilla Tech Solution",
          "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": 5
            },
            "reviewBody": testimonial.text,
            "publisher": {
              "@type": "Organization",
              "name": testimonial.company
            }
          }))
        })
      }} />
      
      <section className="py-12 lg:py-16 bg-background" aria-labelledby="testimonials-heading">
        <div className="mx-auto w-full px-8 max-w-8xl">
          {/* Section Header */}
          <header className="text-center mb-10">
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-accent bg-clip-text text-transparent px-4">
              What Our Clients Say
            </h2>
            
            <p className="text-lg text-muted-foreground dark:text-white max-w-3xl mx-auto">
              We're proud to have partnered with amazing businesses across India. Read authentic reviews from our satisfied clients.
            </p>
          </header>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {paginatedTestimonials.map((testimonial) => (
              <article key={testimonial.id} className="bg-card rounded-lg p-6 shadow-sm border" itemScope itemType="https://schema.org/Review">
                {/* Rating Stars */}
                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-card-foreground mb-6 leading-relaxed text-sm" itemProp="reviewBody">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center space-x-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="https://placehold.co/40x40" 
                      alt={`${testimonial.name}, client from ${testimonial.company} - Gorilla Tech Solution testimonial`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground text-sm" itemProp="name">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs" itemProp="worksFor">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                  <span itemProp="ratingValue">{testimonial.rating}</span>
                  <span itemProp="bestRating">5</span>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mb-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Read More Button */}
          <div className="text-center">
            <Button variant="outline" size="lg" aria-label="Read more client testimonials and reviews">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;