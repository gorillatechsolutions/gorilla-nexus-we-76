// View Components for Gorilla Tech Solution
// Defines reusable UI components and templates

export interface ViewComponent {
  name: string;
  props: Record<string, any>;
  template: string;
  styles?: string;
}

export const headerComponent: ViewComponent = {
  name: 'Header',
  props: {
    logo: 'https://placehold.co/600x400@2x.png',
    companyName: 'Gorilla Tech Solution',
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  template: `
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img src="{logo}" alt="{companyName} Logo" className="h-10 w-10 rounded-md" />
          <h1 className="text-xl font-bold">{companyName}</h1>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map(item => (
            <a key={item.name} href={item.href} className="text-sm font-medium hover:text-primary">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  `
};

export const heroComponent: ViewComponent = {
  name: 'HeroSection',
  props: {
    title: 'Transform Your Digital Presence',
    subtitle: 'Leading Digital Solutions Provider',
    description: 'At Gorilla Tech Solution, we craft exceptional digital experiences that drive growth and innovation.',
    ctaText: 'Get Started Today',
    image: 'https://placehold.co/600x400@2x.png'
  },
  template: `
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto max-w-7xl px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl">
              <span className="block">{title}</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {description}
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
              {ctaText}
            </button>
          </div>
          <div className="relative">
            <img src="{image}" alt="Hero" className="w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  `
};

export const footerComponent: ViewComponent = {
  name: 'Footer',
  props: {
    companyInfo: {
      name: 'Gorilla Tech Solution',
      phone: '0381 359 9517',
      address: 'Agartala, Tripura (w) India, pin 799006',
      email: 'Business@GorillaTechSolution.com',
      domain: 'GorillaTechSolution.com'
    },
    services: [
      'Web Development',
      'Digital Marketing',
      'Mobile App Development',
      'UI/UX Design',
      'Brand Strategy',
      'E-commerce Solutions'
    ],
    socialLinks: [
      { name: 'Facebook', icon: 'facebook', href: '#' },
      { name: 'Instagram', icon: 'instagram', href: '#' },
      { name: 'Twitter', icon: 'twitter', href: '#' },
      { name: 'LinkedIn', icon: 'linkedin', href: '#' },
      { name: 'YouTube', icon: 'youtube', href: '#' }
    ]
  },
  template: `
    <footer className="bg-card border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-sm text-muted-foreground">{companyInfo.address}</p>
            <p className="text-sm text-muted-foreground">{companyInfo.phone}</p>
            <p className="text-sm text-muted-foreground">{companyInfo.email}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service} className="text-sm text-muted-foreground">{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `
};

export const cardComponent: ViewComponent = {
  name: 'ServiceCard',
  props: {
    title: 'Service Title',
    description: 'Service description',
    icon: 'icon-name',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  template: `
    <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
          <i className="{icon} text-primary"></i>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map(feature => (
          <li key={feature} className="text-sm flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  `
};

export const allComponents = {
  header: headerComponent,
  hero: heroComponent,
  footer: footerComponent,
  serviceCard: cardComponent
};