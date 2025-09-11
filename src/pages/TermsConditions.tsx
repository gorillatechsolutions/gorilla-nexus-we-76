import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  const lastUpdated = "January 10, 2025";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Terms & Conditions - Gorilla Tech Solution Service Agreement</title>
        <meta name="description" content="Read Gorilla Tech Solution's terms and conditions. Understand our service agreements, payment terms, intellectual property rights, and user responsibilities." />
        <meta name="keywords" content="terms and conditions, service agreement, payment terms, intellectual property, user agreement, Gorilla Tech Solution" />
        <meta property="og:title" content="Terms & Conditions - Gorilla Tech Solution Service Agreement" />
        <meta property="og:description" content="Comprehensive terms and conditions governing the use of Gorilla Tech Solution services." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/terms" />

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Important Notice:</strong> By using our services, you agree to be bound by these terms and conditions. 
                Please read them carefully before engaging our services.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Welcome to Gorilla Tech Solution. These Terms and Conditions ("Terms") constitute a legally binding 
                agreement between you ("Client" or "you") and Gorilla Tech Solution ("we," "us," or "our"). 
                These Terms apply to all services, products, and interactions with our company, including but not 
                limited to web development, digital marketing, consulting, and related services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Service Agreement</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All services are provided according to agreed specifications and timelines</li>
                <li>• Project scope and deliverables are defined in individual service agreements</li>
                <li>• Changes to project scope may affect pricing and delivery timelines</li>
                <li>• We reserve the right to refuse service at our discretion</li>
                <li>• Client cooperation and timely feedback are required for project success</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Payment schedules are outlined in individual project agreements</li>
                <li>• Late payments may result in project delays or suspension</li>
                <li>• All prices are in USD unless otherwise specified</li>
                <li>• Additional work beyond agreed scope will be charged separately</li>
                <li>• Payment disputes must be raised within 30 days of invoice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Client owns final deliverables upon full payment completion</li>
                <li>• We retain rights to use project work in our portfolio and marketing</li>
                <li>• Third-party assets require proper licensing by the client</li>
                <li>• We maintain ownership of our proprietary tools and methodologies</li>
                <li>• Client must provide necessary rights for any content they supply</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide accurate information and requirements in timely manner</li>
                <li>• Review and approve deliverables within agreed timeframes</li>
                <li>• Maintain confidentiality of any proprietary information shared</li>
                <li>• Ensure compliance with applicable laws and regulations</li>
                <li>• Backup and secure their own data and systems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Service Delivery & Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Our Commitments</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Deliver services according to agreed specifications</li>
                    <li>• Maintain professional standards and quality</li>
                    <li>• Provide regular project updates and communication</li>
                    <li>• Meet agreed deadlines and milestones</li>
                    <li>• Offer support during agreed warranty periods</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Force Majeure</h3>
                  <p className="text-muted-foreground">
                    We are not liable for delays or failures caused by circumstances beyond our reasonable control, 
                    including but not limited to natural disasters, government actions, internet outages, 
                    or third-party service failures.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to refuse or terminate services for the following activities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Illegal activities or violation of any laws</li>
                    <li>• Harassment, abuse, or harmful content</li>
                    <li>• Spam, malware, or malicious code distribution</li>
                    <li>• Unauthorized access to systems or data</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Copyright or trademark infringement</li>
                    <li>• Adult content or explicit material</li>
                    <li>• Gambling or gaming services</li>
                    <li>• High-risk financial services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Liability & Warranties</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service Warranties</h3>
                  <p className="text-muted-foreground">
                    We warrant that our services will be performed with reasonable skill and care in accordance 
                    with industry standards. This warranty is limited to re-performance of defective services 
                    at no additional cost.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    Our total liability for any claims arising from our services shall not exceed the total 
                    amount paid by you for the specific service giving rise to the claim. We are not liable 
                    for indirect, consequential, or punitive damages.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Data Protection & Confidentiality</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Your Data</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You retain ownership of all your data</li>
                    <li>• We implement security measures to protect your data</li>
                    <li>• Data processing complies with applicable privacy laws</li>
                    <li>• You can request data deletion upon service termination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Confidentiality</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We maintain strict confidentiality of your information</li>
                    <li>• Confidential information is protected during and after service</li>
                    <li>• NDAs can be executed for sensitive projects</li>
                    <li>• Staff are bound by confidentiality agreements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Termination of Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">By Client</h3>
                  <p className="text-muted-foreground">
                    You may terminate services with written notice. Fees for completed work remain due.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">By Us</h3>
                  <p className="text-muted-foreground">
                    We may terminate for breach of terms, non-payment, or violation of acceptable use policies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Effect of Termination</h3>
                  <p className="text-muted-foreground">
                    Upon termination, both parties' obligations cease except for payment obligations and confidentiality.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                We prefer to resolve disputes amicably through direct communication:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Direct discussion to understand and resolve issues</li>
                <li>• Mediation with neutral third party if needed</li>
                <li>• Legal proceedings governed by laws of Tripura, India</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground mb-4">
                Contact us if you have any questions about these terms and conditions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium">Legal Inquiries</h3>
                  <p className="text-muted-foreground">legal@gorillatechsolution.com</p>
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
                  <h3 className="font-medium">Governing Law</h3>
                  <p className="text-muted-foreground">Laws of Tripura, India</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Terms Updates</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms and Conditions at any time. Significant changes 
                will be communicated to existing clients via email. Continued use of our services after 
                modifications constitutes acceptance of the updated terms. We encourage you to review 
                these terms periodically.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsConditions;