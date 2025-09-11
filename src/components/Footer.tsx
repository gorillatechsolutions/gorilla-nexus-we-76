import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiDownload,
  FiGithub
} from 'react-icons/fi';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp,
  FaTelegram,
  FaGoogle,
  FaWikipediaW
} from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';
import { LiaAws } from 'react-icons/lia';
import { PiCertificateDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const contactInfo = {
    name: "Gorilla Tech Solution",
    phone: "0381 359 9517",
    address: "Agartala, Tripura (w) India\nPin: 799006",
    email: "business@gorillatechsolution.com"
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#', color: '#1877F2' },
    { name: 'Instagram', icon: FaInstagram, href: '#', color: '#E4405F' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#', color: '#0A66C2' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: '#', color: '#25D366' },
    { name: 'Telegram', icon: FaTelegram, href: '#', color: '#0088CC' },
    { name: 'Google', icon: FaGoogle, href: '#', color: '#4285F4' },
    { name: 'GitHub', icon: FiGithub, href: '#', color: '#333' },
    { name: 'Wikipedia', icon: FaWikipediaW, href: '#', color: '#000' },
  ];

  const quickLinks = [
    'Collab with Us',
    'Invest with Us', 
    'Website Roadmap',
    'Reviews',
    'Site Map',
    'About Us',
    'Privacy Policy',
    'Refund Policy',
    'Terms & Conditions',
    'Disclaimer'
  ];

  return (
    <footer className="w-full bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Section - Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://placehold.co/192x96"
                  alt="Gorilla Tech Solution Logo" 
                  width={192}
                  height={96}
                  className="w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 object-cover rounded-lg shadow-lg shadow-inset-2xs inset-shadow-xs"
                  data-ai-hint="company logo for Gorilla Tech Solution"
                />
              </div>
              
              <p className="text-muted-foreground dark:text-gray-300 text-sm mb-6 leading-relaxed">
                Driving growth with data-driven digital marketing strategies that deliver results.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300"
                    style={{ backgroundColor: social.color }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Section - Quick Links */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-6 text-center">Quick Links</h2>
              <div className="text-center space-y-2">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                  <Link to="/collab" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Collaborate with Gorilla Tech Solution">
                    • Collab with Us
                  </Link>
                  <Link to="/invest" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Investment opportunities">
                    • Invest with Us
                  </Link>
                  <Link to="/roadmap" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="View our website development roadmap">
                    • Website Roadmap
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                  <Link to="/reviews" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    • Reviews
                  </Link>
                  <Link to="/sitemap" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    • Site Map
                  </Link>
                  <Link to="/about" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    • About Us
                  </Link>
                  <Link to="/privacy" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    • Privacy Policy
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                  <Link to="/refund" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    • Refund Policy
                  </Link>
                  <Link to="/terms" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    • Terms & Conditions
                  </Link>
                  <Link to="/disclaimer" className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    • Disclaimer
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Info */}
            <div className="lg:col-span-1 pl-8">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-6 text-center">Connect With Us</h2>
              <div className="space-y-4 pl-16">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-muted-foreground dark:text-gray-300 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground dark:text-gray-300 whitespace-pre-line">
                    {contactInfo.address}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5 text-muted-foreground dark:text-gray-300 flex-shrink-0" />
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5 text-muted-foreground dark:text-gray-300 flex-shrink-0" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                  <FiDownload className="w-5 h-5 text-muted-foreground dark:text-gray-300 flex-shrink-0" />
                  <a 
                    href="#"
                    className="text-sm text-muted-foreground dark:text-gray-300 hover:text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Download project source code"
                  >
                    Download Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-muted text-muted-foreground py-2">
        <div className="w-full px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center lg:text-left">
              © 2025 Gorilla Tech Solutions. All Rights Reserved.
            </p>
            
            {/* Trusted Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex items-center gap-1 bg-white rounded px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-center flex-shrink-0">
                  <FaMeta className="w-4 h-4 text-[#1877F2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[10px] text-primary truncate">Meta Business</div>
                  <div className="flex items-center gap-1 text-[8px] dark:text-green-700">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[6px] font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium truncate dark:text-green-800">Verified</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white rounded px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-center flex-shrink-0">
                  <LiaAws className="w-4 h-4 text-[#FF9900]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[10px] text-foreground truncate dark:text-black">
                    <span className="text-primary">AWS</span> Startup
                  </div>
                  <div className="flex items-center gap-1 text-[8px]">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[6px] font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium truncate dark:text-green-800">Verified</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white rounded px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-center flex-shrink-0">
                  <PiCertificateDuotone className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[10px] text-foreground truncate dark:text-green-800">ISO 9001:2015</div>
                  <div className="flex items-center gap-1 text-[8px]">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[6px] font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium truncate dark:text-green-800">Trusted</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-primary px-2 py-1 rounded text-[10px] font-semibold text-primary-foreground">
                <span className="text-sm">🛡️</span>
                <div className="text-center">
                  <div>Data Protected</div>
                  <div className="text-primary-foreground/90">GDPR Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;