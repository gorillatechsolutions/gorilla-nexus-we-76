import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiStar, FiThumbsUp, FiMessageCircle, FiFilter, FiTrendingUp } from 'react-icons/fi';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [newReview, setNewReview] = useState({ name: '', email: '', rating: 5, comment: '' });

  const overallRating = {
    average: 4.8,
    total: 156,
    distribution: {
      5: 78,
      4: 65,
      3: 10,
      2: 2,
      1: 1
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://placehold.co/40x40',
      rating: 5,
      date: '2025-01-05',
      title: 'Exceptional Digital Marketing Results',
      comment: 'Gorilla Tech Solution transformed our online presence completely. Their strategic approach to digital marketing increased our lead generation by 300% in just 3 months.',
      likes: 23,
      helpful: true,
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, Global Corp',
      avatar: 'https://placehold.co/40x40',
      rating: 5,
      date: '2024-12-28',
      title: 'Outstanding Web Development',
      comment: 'The team delivered a stunning website that perfectly represents our brand. The attention to detail and technical expertise is remarkable.',
      likes: 18,
      helpful: true,
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Studios',
      avatar: 'https://placehold.co/40x40',
      rating: 5,
      date: '2024-12-15',
      title: 'Professional and Reliable',
      comment: 'Working with Gorilla Tech has been a game-changer. Their professionalism, timely delivery, and innovative solutions exceeded our expectations.',
      likes: 31,
      helpful: true,
      verified: true
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'E-commerce Manager',
      avatar: 'https://placehold.co/40x40',
      rating: 4,
      date: '2024-12-10',
      title: 'Great Results, Minor Issues',
      comment: 'Very satisfied with the overall service. Had some minor communication delays initially, but the final results were excellent.',
      likes: 12,
      helpful: false,
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Small Business Owner',
      avatar: 'https://placehold.co/40x40',
      rating: 5,
      date: '2024-11-25',
      title: 'Transformed My Business',
      comment: 'As a small business owner, I was hesitant about digital marketing. Gorilla Tech made it simple and effective. My sales have doubled!',
      likes: 27,
      helpful: true,
      verified: true
    }
  ];

  const renderStars = (rating: number, size = 'w-4 h-4') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            className={`${size} ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Client Reviews & Testimonials - Gorilla Tech Solution</title>
        <meta name="description" content="Read authentic client reviews and testimonials about Gorilla Tech Solution's digital marketing, web development, and technology services." />
        <meta name="keywords" content="client reviews, testimonials, customer feedback, Gorilla Tech Solution reviews, digital marketing reviews, web development testimonials" />
        <meta property="og:title" content="Client Reviews & Testimonials - Gorilla Tech Solution" />
        <meta property="og:description" content="Discover why clients love working with Gorilla Tech Solution. Read authentic reviews and success stories." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/reviews" />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Client <span className="text-primary">Reviews</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover what our clients say about their experience working with Gorilla Tech Solution.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="https://placehold.co/800x400" 
                alt="Happy clients and positive testimonials showcase for Gorilla Tech Solution services"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
                loading="lazy"
                width={800}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Overall Rating Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Overall Rating</CardTitle>
                  <CardDescription>{overallRating.total} verified reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-4xl font-bold">{overallRating.average}</span>
                        {renderStars(Math.floor(overallRating.average), 'w-6 h-6')}
                      </div>
                      <p className="text-muted-foreground">Based on {overallRating.total} reviews</p>
                    </div>
                    
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2">
                          <span className="text-sm w-8">{rating} ★</span>
                          <Progress 
                            value={(overallRating.distribution[rating as keyof typeof overallRating.distribution] / overallRating.total) * 100} 
                            className="h-2 flex-1" 
                          />
                          <span className="text-sm text-muted-foreground w-8">
                            {overallRating.distribution[rating as keyof typeof overallRating.distribution]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Client Reviews</h2>
                <div className="flex items-center gap-2">
                  <FiFilter className="w-4 h-4" />
                  <select 
                    value={selectedRating} 
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="border rounded px-3 py-1 text-sm"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} alt={review.name} />
                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{review.name}</h3>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">
                                  Verified Client
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{review.role}</p>
                            <div className="flex items-center gap-2 mt-1">
                              {renderStars(review.rating)}
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">{review.title}</h4>
                      <p className="text-muted-foreground mb-4">{review.comment}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                          <FiThumbsUp className="w-4 h-4" />
                          Helpful ({review.likes})
                        </button>
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                          <FiMessageCircle className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Write Review Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Share Your Experience</CardTitle>
                  <CardDescription>
                    Help others by writing a review about your experience with our services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Your Name" 
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        required 
                      />
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        value={newReview.email}
                        onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Rating</label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview({...newReview, rating: star})}
                            className="p-1"
                          >
                            <FiStar
                              className={`w-6 h-6 ${
                                star <= newReview.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300 hover:text-yellow-400'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <Textarea
                      placeholder="Share your experience with our services..."
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      rows={4}
                      required
                    />
                    
                    <Button type="submit" className="w-full">
                      Submit Review
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <FiTrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">98%</h3>
                  <p className="text-muted-foreground">Client Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <FiStar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
                <div className="text-center">
                  <FiMessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">156+</h3>
                  <p className="text-muted-foreground">Verified Reviews</p>
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

export default Reviews;