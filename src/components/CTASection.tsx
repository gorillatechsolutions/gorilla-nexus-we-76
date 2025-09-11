import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-12 lg:py-16 bg-accent/5">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Ready to Elevate Your Digital Presence?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Let's discuss how we can help you achieve your business goals. Schedule a 
          free, no-obligation consultation with our experts today.
        </p>
        
        {/* CTA Button */}
        <Button size="lg" className="px-8 py-3 text-lg">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;