import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
  const lastUpdated = "January 10, 2025";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Refund Policy - Gorilla Tech Solution Service Refunds</title>
        <meta name="description" content="Read Gorilla Tech Solution's refund policy. Understand our refund terms, conditions, and process for web development, digital marketing, and other services." />
        <meta name="keywords" content="refund policy, money back guarantee, service refunds, cancellation policy, Gorilla Tech Solution refunds" />
        <meta property="og:title" content="Refund Policy - Gorilla Tech Solution Service Refunds" />
        <meta property="og:description" content="Transparent refund policy for all Gorilla Tech Solution services. Know your rights and our refund process." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/refund" />

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Important Notice:</strong> All refund requests must be submitted in writing via email or through our 
                official contact form. Verbal requests will not be processed.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                At Gorilla Tech Solution, we are committed to client satisfaction. Our refund policy is designed 
                to be fair and reasonable while protecting both parties' interests. We encourage open communication 
                about any concerns before requesting a refund, as many issues can be resolved through collaboration 
                and adjustment of deliverables.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Refund Eligibility by Service</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Timeline: 14 days from project start</li>
                    <li>• Conditions: Before final deployment and approval</li>
                    <li>• Refund Amount: 100% if no substantial work completed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Digital Marketing</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Timeline: 7 days from campaign initiation</li>
                    <li>• Conditions: Campaign not started or minimal spend</li>
                    <li>• Refund Amount: 100% minus any ad spend costs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Consultation Services</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Timeline: 24 hours before scheduled session</li>
                    <li>• Conditions: Session not yet conducted</li>
                    <li>• Refund Amount: 100% of consultation fee</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Monthly Subscriptions</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Timeline: Within current billing cycle</li>
                    <li>• Conditions: Cancel before next renewal</li>
                    <li>• Refund Amount: Prorated for unused time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Submit written refund request via email or contact form</li>
                <li>• Provide project details and reason for refund request</li>
                <li>• Our team reviews request within 1-2 business days</li>
                <li>• Decision communicated within 2-3 business days</li>
                <li>• Approved refunds processed within 5-10 business days</li>
                <li>• Refunds issued to original payment method</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Conditions & Exclusions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Eligible for Refund</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Request submitted within eligible timeframe</li>
                    <li>• Work has not been delivered or deployed</li>
                    <li>• No substantial work completed on project</li>
                    <li>• Original payment method available for refund</li>
                    <li>• Valid reason provided for refund request</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Not Eligible for Refund</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Completed and delivered projects</li>
                    <li>• Projects with substantial work completed</li>
                    <li>• Change of mind after approval</li>
                    <li>• Third-party service costs incurred</li>
                    <li>• Domain and hosting fees paid to providers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Partial Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Partial refunds may be considered in specific situations:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Subscription services: Prorated for unused portions</li>
                <li>• Project modifications: When scope significantly changes</li>
                <li>• Service downgrades: Difference when downgrading before work starts</li>
                <li>• Mutual agreement: When both parties agree due to circumstances</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Questions About Refunds?</h2>
              <p className="text-muted-foreground mb-4">
                Contact us if you have any questions about this refund policy:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium">Refund Inquiries</h3>
                  <p className="text-muted-foreground">refunds@gorillatechsolution.com</p>
                </div>
                <div>
                  <h3 className="font-medium">General Questions</h3>
                  <p className="text-muted-foreground">business@gorillatechsolution.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">0381 359 9517</p>
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify this refund policy at any time. Changes will be communicated 
                to existing clients and posted on our website. The updated policy will apply to services 
                purchased after the effective date of the changes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RefundPolicy;