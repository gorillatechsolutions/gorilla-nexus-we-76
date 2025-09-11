import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { CheckCircle, X, Star, Zap, Shield, Crown, Users, ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [{
    name: "Starter",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    icon: Zap,
    color: "text-blue-600",
    popular: false,
    features: {
      included: ["Up to 3 websites/apps", "Basic analytics dashboard", "Standard templates", "Email support", "Mobile responsive design", "Basic SEO optimization", "1GB storage", "SSL certificate included"],
      excluded: ["Custom domain", "Advanced analytics", "Priority support", "Custom integrations"]
    }
  }, {
    name: "Professional",
    description: "Best for growing businesses and teams",
    monthlyPrice: 2499,
    yearlyPrice: 24990,
    icon: Star,
    color: "text-primary",
    popular: true,
    features: {
      included: ["Up to 10 websites/apps", "Advanced analytics & reports", "Premium templates library", "Priority email & chat support", "Custom domain included", "Advanced SEO tools", "E-commerce functionality", "10GB storage", "Social media integration", "Basic API access", "Team collaboration (5 users)"],
      excluded: ["White-label solutions", "Custom integrations", "Dedicated account manager"]
    }
  }, {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 9999,
    yearlyPrice: 99990,
    icon: Crown,
    color: "text-purple-600",
    popular: false,
    features: {
      included: ["Unlimited websites/apps", "Custom analytics dashboard", "White-label solutions", "24/7 dedicated support", "Multiple custom domains", "Advanced SEO & marketing tools", "Full e-commerce suite", "Unlimited storage", "Custom API development", "Unlimited team members", "Custom integrations", "Dedicated account manager", "On-premise deployment option", "Advanced security features"],
      excluded: []
    }
  }];
  const addOns = [{
    name: "Extra Storage",
    description: "Additional 10GB storage space",
    price: 499,
    icon: Shield
  }, {
    name: "Priority Support",
    description: "24/7 phone and chat support",
    price: 999,
    icon: Phone
  }, {
    name: "Custom Integration",
    description: "One custom third-party integration",
    price: 4999,
    icon: Zap
  }, {
    name: "Advanced Analytics",
    description: "Detailed reports and insights",
    price: 1499,
    icon: Star
  }];
  const getPrice = (plan: typeof plans[0]) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };
  const getDiscount = (plan: typeof plans[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const savings = monthlyTotal - plan.yearlyPrice;
    return Math.round(savings / monthlyTotal * 100);
  };
  return <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gorilla Tech Solution Pricing Plans",
        "description": "Flexible pricing plans for web development, mobile apps, and digital solutions. Choose from Starter, Professional, or Enterprise packages.",
        "provider": {
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
        "offers": plans.map(plan => ({
          "@type": "Offer",
          "name": plan.name,
          "description": plan.description,
          "price": plan.monthlyPrice,
          "priceCurrency": "INR",
          "priceValidUntil": "2025-12-31"
        }))
      })
    }} />

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Flexible pricing plans designed to grow with your business. 
            Start with what you need today and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? 'font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-primary" />
            <span className={`text-sm ${isYearly ? 'font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && <Badge variant="secondary" className="ml-2">
                Save up to 17%
              </Badge>}
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-2 border-primary shadow-lg scale-105' : 'border hover:border-primary/50'}`}>
                {plan.popular && <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-${plan.color.split('-')[1]}-100 to-${plan.color.split('-')[1]}-200 flex items-center justify-center`}>
                    <plan.icon className={`h-8 w-8 ${plan.color}`} />
                  </div>
                  
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm px-2">{plan.description}</CardDescription>
                  
                  <div className="py-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">₹{getPrice(plan).toLocaleString()}</span>
                      <span className="text-muted-foreground ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && <div className="text-sm text-green-600 mt-2">
                        Save {getDiscount(plan)}% annually
                      </div>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Included Features */}
                  <div className="space-y-3">
                    {plan.features.included.map((feature, idx) => <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>)}
                  </div>

                  {/* Excluded Features */}
                  {plan.features.excluded.length > 0 && <div className="space-y-3 pt-4 border-t">
                      {plan.features.excluded.map((feature, idx) => <div key={idx} className="flex items-start gap-3 opacity-50">
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>}

                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'} size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Add-ons</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your plan with these powerful add-ons to get even more value from our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <addon.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg mb-2">{addon.name}</CardTitle>
                <CardDescription className="text-sm mb-4">{addon.description}</CardDescription>
                <div className="text-2xl font-bold text-primary mb-4">₹{addon.price}/month</div>
                <Button variant="outline" size="sm" className="w-full">
                  Add to Plan
                </Button>
              </Card>)}
          </div>
        </section>

        {/* Features Comparison */}
        

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardTitle className="text-lg mb-3">Can I change plans anytime?</CardTitle>
              <CardDescription>
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate the billing accordingly.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="text-lg mb-3">Is there a setup fee?</CardTitle>
              <CardDescription>
                No setup fees! All our plans include free setup and migration assistance 
                to get you started quickly.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="text-lg mb-3">What payment methods do you accept?</CardTitle>
              <CardDescription>
                We accept all major credit cards, debit cards, UPI, net banking, 
                and digital wallets for your convenience.
              </CardDescription>
            </Card>

            <Card className="p-6">
              <CardTitle className="text-lg mb-3">Do you offer refunds?</CardTitle>
              <CardDescription>
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied, 
                we'll refund your payment within 30 days of purchase.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-muted/50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have specific requirements? Our team can create a custom plan tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Phone className="mr-2 h-4 w-4" />
              Call: 0381 359 9517
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Clock className="mr-2 h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Plans;