import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiTrendingUp, FiDollarSign, FiShield, FiPieChart, FiUsers, FiTarget } from 'react-icons/fi';

const InvestWithUs = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [investorType, setInvestorType] = useState('');

  const investmentOpportunities = [
    {
      title: 'Seed Investment',
      minAmount: '$10,000',
      expectedReturns: '15-25% annually',
      riskLevel: 'Medium',
      description: 'Early-stage investment in our core technology development',
      icon: FiTarget
    },
    {
      title: 'Growth Capital',
      minAmount: '$50,000',
      expectedReturns: '20-35% annually',
      riskLevel: 'Medium-High',
      description: 'Scale our operations and expand market presence',
      icon: FiTrendingUp
    },
    {
      title: 'Strategic Partnership',
      minAmount: '$100,000+',
      expectedReturns: '25-40% annually',
      riskLevel: 'High',
      description: 'Joint ventures and strategic market expansion',
      icon: FiUsers
    }
  ];

  const companyMetrics = [
    { label: 'Revenue Growth', value: 85, color: 'bg-green-500' },
    { label: 'Client Retention', value: 92, color: 'bg-blue-500' },
    { label: 'Market Share', value: 68, color: 'bg-purple-500' },
    { label: 'Profit Margin', value: 74, color: 'bg-orange-500' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Invest with Gorilla Tech Solution - Investment Opportunities</title>
        <meta name="description" content="Explore investment opportunities with Gorilla Tech Solution. High-growth potential, proven returns, and strategic partnerships in digital technology." />
        <meta name="keywords" content="investment opportunity, digital technology investment, startup investment, Gorilla Tech Solution, funding, venture capital" />
        <meta property="og:title" content="Invest with Gorilla Tech Solution - High Growth Investment Opportunities" />
        <meta property="og:description" content="Join our growth journey with proven returns and strategic investment opportunities in digital technology." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/invest" />

        {/* Page Header */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Investment Opportunities with <span className="text-primary">Gorilla Tech</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with us in building the future of digital technology. Explore strategic investment opportunities with proven returns and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Company Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{metric.value}%</span>
                        <FiTrendingUp className="w-6 h-6 text-green-500" />
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Investment Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentOpportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <opportunity.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <CardDescription>{opportunity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Minimum Investment:</span>
                      <span className="font-bold text-primary">{opportunity.minAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Expected Returns:</span>
                      <span className="font-bold text-green-600">{opportunity.expectedReturns}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Risk Level:</span>
                      <Badge variant={opportunity.riskLevel === 'Medium' ? 'secondary' : 
                                   opportunity.riskLevel === 'Medium-High' ? 'default' : 'destructive'}>
                        {opportunity.riskLevel}
                      </Badge>
                    </div>
                    <Button className="w-full mt-4">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Express Your Interest</CardTitle>
                  <CardDescription>
                    Let us know about your investment interests and we'll get back to you with detailed information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Full Name" required />
                      <Input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Phone Number" />
                      <Input placeholder="Company (Optional)" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select value={investorType} onValueChange={setInvestorType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Investor Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual Investor</SelectItem>
                          <SelectItem value="institutional">Institutional Investor</SelectItem>
                          <SelectItem value="angel">Angel Investor</SelectItem>
                          <SelectItem value="vc">Venture Capital</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input 
                        placeholder="Investment Amount ($)" 
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <FiDollarSign className="w-4 h-4 mr-2" />
                      Submit Investment Interest
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Invest Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Invest with Gorilla Tech?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <FiShield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">5+ years of consistent growth and successful project delivery</p>
                </div>
                <div className="text-center">
                  <FiTrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">High Growth Potential</h3>
                  <p className="text-muted-foreground">Rapidly expanding market with innovative solutions</p>
                </div>
                <div className="text-center">
                  <FiPieChart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Diversified Portfolio</h3>
                  <p className="text-muted-foreground">Multiple revenue streams across different sectors</p>
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

export default InvestWithUs;