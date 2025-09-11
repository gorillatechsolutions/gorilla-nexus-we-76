import { 
  Search, 
  Target, 
  Play, 
  BarChart3 
} from 'lucide-react';
import processImageNew from '../assets/process-image-new.png';
import statsImageNew from '../assets/stats-image-new.png';
import placeholderImage from '../assets/placeholder-image.png';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: 'Discovery & Research',
      description: 'We dive deep into your brand, audience, and competitors to build a rock-solid foundation.',
    },
    {
      id: 2,
      icon: Target,
      title: 'Strategy & Planning',
      description: 'We craft a custom, data-driven strategy tailored to your unique business goals.',
    },
    {
      id: 3,
      icon: Play,
      title: 'Execution & Launch',
      description: 'Our expert team brings the strategy to life with precision and creativity across all channels.',
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Analysis & Optimization',
      description: 'We continuously monitor performance, providing transparent reports and optimizing for success.',
    }
  ];

  const commitmentPoints = [
    'Data-Driven Strategies',
    'Dedicated Experts',
    'Transparent Reporting',
    'Proven ROI'
  ];

  const stats = [
    {
      percentage: '98%',
      label: 'Client Satisfaction',
      description: 'We pride ourselves on building lasting partnerships.'
    },
    {
      percentage: '150%',
      label: 'Projects Completed',
      description: 'Successfully launched projects across various industries.'
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data for Process */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Gorilla Tech Solution Digital Marketing Process",
            "description": "Our proven 4-step process for digital marketing success: Discovery & Research, Strategy & Planning, Execution & Launch, and Analysis & Optimization.",
            "step": processSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description
            }))
          })
        }}
      />
      
      <section 
        className="py-12 lg:py-20 bg-gradient-to-br from-background via-background to-accent/5"
        aria-labelledby="process-heading"
        role="main"
      >
      <div className="max-w-8xl mx-auto px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 id="process-heading" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            <span className="block bg-gradient-to-r from-purple-600 to-accent bg-clip-text text-transparent font-bold">Our Proven Process</span>
            <span className="block text-muted-foreground dark:text-white text-2xl sm:text-3xl lg:text-4xl font-normal">
              Your Path to Digital Success
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground dark:text-white max-w-3xl mx-auto mt-6">
            We follow a strategic 4-step process to ensure every campaign is a success, from initial 
            research to ongoing optimization.
          </p>
        </header>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative pt-12">
              {/* Circular Avatar - absolutely positioned to overlap card */}
              <img
                src="https://placehold.co/128x128"
                alt={`${step.title} - Step ${index+1} of Gorilla Tech Solution's digital marketing process`}
                width={128}
                height={128}
                loading="lazy"
                className="absolute top-0 left-6 w-32 h-32 rounded-full border-8 border-[#f1f2f4] bg-blue-50 z-10 object-cover inset-shadow-xs"
                data-ai-hint={`process step ${index+1} icon for ${step.title}`}
              />
              
              {/* Card Content */}
              <div className="bg-card rounded-lg p-6 pt-16 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3 py-2 pl-4 text-primary dark:bg-gradient-to-r dark:from-purple-600 dark:to-accent dark:bg-clip-text dark:text-transparent text-center">
                  {step.title}
                </h3>
                
                <p className="text-card-foreground text-sm leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Commitment */}
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-accent bg-clip-text text-transparent mb-6">
              Our Commitment to You
            </h3>
            
            <p className="text-muted-foreground dark:text-white mb-8 leading-relaxed text-xl">
              We are committed to excellence. Our process is designed to deliver not just results, 
              but a partnership built on trust, transparency, and a relentless pursuit of your goals.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {commitmentPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-lg font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Statistics */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-6">
                {/* Circular Progress Visual */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full border-4 border-primary/20 bg-background flex items-center justify-center">
                    <img 
                      src="https://placehold.co/80x80" 
                      alt={`${stat.label} - ${stat.percentage} achievement icon`}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-20 h-20 rounded-full border-2 border-primary object-cover"
                      data-ai-hint="statistics or achievement icon"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-accent bg-clip-text text-transparent mb-1">
                    {stat.percentage}
                  </div>
                  <div className="font-semibold text-foreground mb-1 text-lg">
                    {stat.label}
                  </div>
                  <div className="text-base text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ProcessSection;