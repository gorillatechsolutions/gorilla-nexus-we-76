import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const lastUpdated = "January 10, 2025";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Privacy Policy - Gorilla Tech Solution Data Protection</title>
        <meta name="description" content="Read Gorilla Tech Solution's privacy policy. Learn how we collect, use, and protect your personal information and data." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, personal information, data security, Gorilla Tech Solution" />
        <meta property="og:title" content="Privacy Policy - Gorilla Tech Solution Data Protection" />
        <meta property="og:description" content="Transparent privacy practices and data protection policies at Gorilla Tech Solution." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/privacy" />

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Gorilla Tech Solution, we understand that your privacy is paramount. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website, use our 
                services, or interact with us. We are committed to maintaining the highest standards of data protection 
                and comply with applicable privacy laws including GDPR, CCPA, and other relevant regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Personal information you provide (name, email, phone number)</li>
                <li>• Usage data and website analytics</li>
                <li>• Cookies and tracking technologies</li>
                <li>• Communication records and preferences</li>
                <li>• Payment and billing information (processed securely)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide and improve our services</li>
                <li>• Communicate with you about projects and services</li>
                <li>• Process payments and manage accounts</li>
                <li>• Send marketing communications (with consent)</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Data Protection & Security</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Industry-standard encryption for data transmission</li>
                <li>• Secure servers with regular security updates</li>
                <li>• Limited access to personal data on need-to-know basis</li>
                <li>• Regular security audits and vulnerability assessments</li>
                <li>• Secure backup and disaster recovery procedures</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access your personal data we hold</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your data</li>
                <li>• Object to processing of your data</li>
                <li>• Data portability and transfer rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                These technologies help us understand how you use our site and improve our services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    Required for basic website functionality and security
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    Help us understand website usage and improve performance
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    Used to deliver relevant advertisements (with consent)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services to provide better functionality and services. 
                These partners have their own privacy policies:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Google Analytics (Website analytics)</li>
                <li>• Payment processors (Secure payment handling)</li>
                <li>• Email service providers (Communication)</li>
                <li>• Cloud hosting services (Data storage)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information only for as long as necessary to provide our services 
                and comply with legal obligations:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Account Information</span>
                  <span className="text-muted-foreground">Duration of service + 3 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Transaction Records</span>
                  <span className="text-muted-foreground">7 years (legal requirement)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Marketing Data</span>
                  <span className="text-muted-foreground">Until consent withdrawn</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Website Analytics</span>
                  <span className="text-muted-foreground">26 months maximum</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure adequate protection through approved mechanisms such as Standard Contractual 
                Clauses and adequacy decisions. All transfers comply with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Questions About Privacy?</h2>
              <p className="text-muted-foreground mb-4">
                Contact us if you have any questions about this privacy policy or your data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium">Data Protection Officer</h3>
                  <p className="text-muted-foreground">privacy@gorillatechsolution.com</p>
                </div>
                <div>
                  <h3 className="font-medium">General Inquiries</h3>
                  <p className="text-muted-foreground">business@gorillatechsolution.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">0381 359 9517</p>
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    Agartala, Tripura (W), India<br />
                    Pin: 799006
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
              <p className="text-muted-foreground">
                We will notify you of any significant changes to this Privacy Policy by posting the new policy 
                on this page and updating the "Last updated" date. We encourage you to review this policy 
                periodically to stay informed about how we protect your information.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;