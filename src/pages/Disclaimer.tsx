import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  const lastUpdated = "January 10, 2025";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* SEO Meta Tags */}
        <title>Disclaimer - Gorilla Tech Solution Legal Disclaimers</title>
        <meta name="description" content="Read Gorilla Tech Solution's legal disclaimers regarding service limitations, information accuracy, and liability exclusions for our digital services." />
        <meta name="keywords" content="disclaimer, legal notice, service limitations, liability exclusion, information accuracy, Gorilla Tech Solution" />
        <meta property="og:title" content="Disclaimer - Gorilla Tech Solution Legal Disclaimers" />
        <meta property="og:description" content="Important legal disclaimers and limitations regarding Gorilla Tech Solution services." />
        <meta property="og:image" content="https://placehold.co/1200x630" />
        <link rel="canonical" href="/disclaimer" />

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Legal Disclaimer</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Important Notice:</strong> This disclaimer forms part of our terms of service and should be read 
                in conjunction with our Terms & Conditions and Privacy Policy. By using our services, you acknowledge 
                and accept these disclaimers.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This disclaimer outlines important limitations regarding the services provided by Gorilla Tech Solution. 
                While we strive to deliver high-quality services and accurate information, various factors beyond our 
                control can affect outcomes. This disclaimer helps set realistic expectations and clarifies our 
                responsibilities and limitations in providing digital marketing, web development, and related services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Service Results</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Results may vary based on individual circumstances and market conditions</li>
                <li>• Past performance does not guarantee future results</li>
                <li>• Digital marketing outcomes depend on multiple factors beyond our control</li>
                <li>• Timeline estimates are approximate and subject to change</li>
                <li>• Third-party platform changes may affect service delivery</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Information Accuracy</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Website content is provided for informational purposes only</li>
                <li>• Information may not be current or complete at all times</li>
                <li>• We strive for accuracy but errors may occur</li>
                <li>• External links are provided for convenience and may be outdated</li>
                <li>• Professional advice should be sought for specific situations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Limitations</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Technology solutions depend on third-party services and platforms</li>
                <li>• Internet connectivity and server issues may affect performance</li>
                <li>• Software updates may require service adjustments</li>
                <li>• Cross-browser compatibility cannot be guaranteed for all features</li>
                <li>• Mobile device variations may affect display and functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">External Factors</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Search engine algorithm changes affect SEO results</li>
                <li>• Social media platform policy changes impact marketing strategies</li>
                <li>• Economic conditions may influence campaign performance</li>
                <li>• Competitor actions and market dynamics affect outcomes</li>
                <li>• Regulatory changes may require service modifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">No Warranties</h2>
              <p className="text-muted-foreground mb-4">
                We disclaim all warranties, express or implied, including but not limited to warranties of 
                merchantability, fitness for a particular purpose, and non-infringement. While we strive 
                to provide high-quality services, we cannot guarantee:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Specific performance metrics or results</li>
                <li>• Compatibility with all systems or platforms</li>
                <li>• Uninterrupted or error-free service</li>
                <li>• Security from all possible threats</li>
                <li>• Accuracy of all third-party integrations</li>
                <li>• Future availability of current features</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Maximum Liability:</strong> Our total liability for any claims shall not exceed 
                the amount paid for the specific service giving rise to the claim.
              </p>
              <p className="text-muted-foreground mb-4">We are not liable for:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Excluded Damages</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Lost profits or revenue</li>
                    <li>• Business interruption costs</li>
                    <li>• Data loss or corruption</li>
                    <li>• Consequential damages</li>
                    <li>• Punitive damages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Issues</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Platform policy changes</li>
                    <li>• Service provider outages</li>
                    <li>• Algorithm modifications</li>
                    <li>• Regulatory changes</li>
                    <li>• Force majeure events</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Professional Advice Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The information and services we provide are for general business purposes only and should not 
                be considered as professional advice in legal, financial, or regulatory matters. You should 
                consult with qualified professionals for:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Legal matters: Compliance requirements, contracts, intellectual property issues</li>
                <li>• Financial advice: Investment decisions, tax implications, financial planning</li>
                <li>• Regulatory compliance: Industry-specific regulations, data protection laws</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Client Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Your use of our services in violation of our terms</li>
                <li>• Content you provide that infringes third-party rights</li>
                <li>• Your violation of applicable laws or regulations</li>
                <li>• Unauthorized modifications to our deliverables</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Questions About This Disclaimer?</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Disclaimer Updates</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify this disclaimer at any time. Material changes will be 
                communicated to clients, and continued use of our services constitutes acceptance of 
                the updated disclaimer. This disclaimer is effective as of the last updated date shown above.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Disclaimer;