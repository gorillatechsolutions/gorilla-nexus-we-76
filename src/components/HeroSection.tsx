import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiArrowRight, FiPlay, FiStar, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import { FaMeta } from 'react-icons/fa6';
import { LiaAws } from 'react-icons/lia';
import { PiCertificateDuotone } from 'react-icons/pi';
const HeroSection = () => {
  const stats = [{
    icon: FiUsers,
    label: 'Happy Clients',
    value: '500+'
  }, {
    icon: FiAward,
    label: 'Projects Completed',
    value: '1000+'
  }, {
    icon: FiStar,
    label: 'Client Rating',
    value: '4.9/5'
  }];
  return <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Gorilla Tech Solution",
        "description": "Leading digital marketing and web development agency providing exceptional digital experiences that drive growth and innovation.",
        "url": "https://gorillatech.com",
        "logo": "https://placehold.co/600x600",
        "sameAs": ["https://facebook.com/gorillatech", "https://linkedin.com/company/gorillatech"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service"
        },
        "areaServed": "India",
        "service": ["Web Development", "Digital Marketing", "Technology Consulting"]
      })
    }} />
      
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 min-h-[85vh] sm:min-h-[90vh] lg:h-[93vh] flex items-center py-4 sm:py-8" role="banner" aria-label="Hero section introducing Gorilla Tech Solution">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="w-[95%] sm:w-[93%] mx-auto px-2 sm:px-4 py-2 sm:py-4 relative">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8 items-center min-h-full">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <Badge variant="secondary" className="w-fit">
                🚀 Leading Digital Solutions Provider
              </Badge>
              
              <h1 className="text-3xl font-bold tracking-tight text-gradient-animated sm:text-5xl lg:text-6xl xl:text-7xl">Transform Your Digital Presence with Us.</h1>
              
              <p className="text-sm text-muted-foreground sm:text-base lg:text-lg max-w-2xl leading-tight">
                At Gorilla Tech Solution, we craft exceptional digital experiences 
                that drive growth and innovation. From web development to digital marketing, 
                we're your trusted technology partner.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="group w-full sm:w-auto">
                Get Started Today
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="hidden sm:inline-flex group">
                <FiPlay className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trusted Badges */}
            <div className="pt-2 sm:pt-3">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl">
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100 shadow-inset-2xs">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <FaMeta className="w-6 h-3 sm:w-8 sm:h-4 text-[#1877F2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs sm:text-sm text-[#1877F2] truncate">Meta Business</div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[8px] sm:text-[10px] font-bold">✓</span>
                      </div>
                      <span className="text-green-600 font-medium truncate">Verified Partner</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100 shadow-inset-2xs">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <LiaAws className="w-6 h-4 sm:w-8 sm:h-5 text-[#FF9900]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs sm:text-sm text-gray-800 truncate">
                      <span className="text-[#FF9900]">AWS</span> Startup
                    </div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[8px] sm:text-[10px] font-bold">✓</span>
                      </div>
                      <span className="text-green-600 font-medium truncate">Verified Partner</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100 shadow-inset-2xs sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <PiCertificateDuotone className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs sm:text-sm text-gray-800 truncate">ISO 9001:2015</div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[8px] sm:text-[10px] font-bold">✓</span>
                      </div>
                      <span className="text-green-600 font-medium truncate">Trusted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Trust Indicators */}
            <div className="pt-2 sm:pt-3">
              <p className="text-sm font-medium text-muted-foreground mb-3 text-center sm:text-left">
                Trusted by businesses across India
              </p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((stat, index) => <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 mx-auto mb-1 bg-primary/10 rounded-lg">
                      <stat.icon className="h-4 w-4 text-primary dark:text-white" />
                    </div>
                    <div className="text-xl font-bold text-foreground dark:text-white">{stat.value}</div>
                    <div className="text-xs text-muted-foreground dark:text-gray-300">{stat.label}</div>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[350px] lg:h-full max-w-full overflow-hidden order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] xl:max-w-[480px] mx-auto">
              {/* Main Hero Image */}
              <div className="aspect-square w-full rounded-full bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 p-1 lg:p-2 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/15 to-primary/5 rounded-full flex items-center justify-center relative border border-primary/5">
                  <img src="https://placehold.co/600x600" alt="Gorilla Tech Solution - Leading Digital Marketing and Web Development Agency Team" width={600} height={600} loading="eager" className="w-full h-full object-cover rounded-full relative z-10" data-ai-hint="professional digital agency team or modern technology workspace" />
                </div>
              </div>
              
              {/* Floating Cards - Positioned within bounds */}
              <div className="absolute top-2 left-2 sm:top-1 sm:left-1 lg:-top-1 lg:-left-1 z-20 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-accent/10 via-card to-accent/20 border-2 border-accent/30 rounded-2xl shadow-xl backdrop-blur-lg hover:scale-110 transition-all duration-300 cursor-pointer group">
                <div className="w-full h-full bg-gradient-to-br from-accent/5 to-transparent rounded-2xl p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 rounded-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-xs sm:text-sm lg:text-base font-bold text-accent dark:text-white group-hover:text-accent/90 dark:group-hover:text-white/90 transition-colors duration-300">24/7</div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground dark:text-gray-300 font-medium group-hover:text-foreground/70 dark:group-hover:text-white/70 transition-colors duration-300">Support</div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/30 rounded-full blur-sm group-hover:bg-accent/50 transition-colors duration-300"></div>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 sm:bottom-1 sm:right-1 lg:-bottom-1 lg:-right-1 z-20 w-20 h-16 sm:w-28 sm:h-20 lg:w-36 lg:h-24 bg-gradient-to-br from-primary/5 via-card to-primary/10 border-2 border-primary/20 rounded-3xl shadow-2xl backdrop-blur-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-3xl p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <div className="p-1 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors duration-300">
                        <FiAward className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-primary dark:text-white group-hover:text-primary/90 dark:group-hover:text-white/90 transition-colors duration-300">
                      Award Winning
                    </div>
                    <div className="text-[8px] sm:text-[10px] lg:text-xs text-muted-foreground dark:text-gray-300 font-medium group-hover:text-foreground/70 dark:group-hover:text-white/70 transition-colors duration-300">
                      Digital Agency
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/30 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        
      </div>
      </section>
    </>;
};
export default HeroSection;