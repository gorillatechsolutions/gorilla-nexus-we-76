import { FiHeadphones } from 'react-icons/fi';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { useState, useEffect } from 'react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactOptions = [
    { 
      icon: FiHeadphones, 
      label: 'Live Support', 
      time: '24/7 Available',
      gradient: 'from-emerald-500 to-emerald-600',
      href: '#support',
      delay: 100
    },
    { 
      icon: FaWhatsapp, 
      label: 'WhatsApp', 
      time: 'Quick Response',
      gradient: 'from-green-500 to-green-600',
      href: 'https://wa.me/1234567890',
      delay: 200
    },
    { 
      icon: FaTelegramPlane, 
      label: 'Telegram', 
      time: 'Instant Chat',
      gradient: 'from-blue-500 to-blue-600',
      href: 'https://t.me/gorillatech',
      delay: 300
    },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end">
      {/* Contact Options - Left Side */}
      <div className={`mr-4 space-y-3 transition-all duration-500 ease-out transform ${
        isOpen 
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 ease-out"
            style={{ 
              transitionDelay: isOpen ? `${option.delay}ms` : '0ms',
              transform: isOpen ? 'translateX(0)' : 'translateX(100px)'
            }}
          >
            <a
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : '_self'}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`group flex items-center gap-3 p-3 pr-4 rounded-2xl bg-gradient-to-r ${option.gradient} 
                        text-white transition-all duration-300 hover:scale-105 transform-gpu
                        relative overflow-hidden min-w-[280px] backdrop-blur-sm`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon container */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <option.icon className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-1 relative z-10">
                <div className="font-semibold text-base">{option.label}</div>
                <div className="text-sm text-white/80">{option.time}</div>
              </div>
              
              {/* Pulse indicator */}
              <div className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
              
              {/* Hover arrow */}
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      {/* Main FAB with enhanced projection */}
      <div className="relative">
        {/* Projection shadow layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-floating-button to-floating-button opacity-30 blur-xl scale-110 animate-pulse" style={{ background: 'hsl(89 39% 49%)' }} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-floating-button to-floating-button opacity-20 blur-2xl scale-125" style={{ background: 'hsl(89 39% 49%)' }} />
        
        <button
          className={`group relative rounded-full transition-all duration-500 transform-gpu
                     hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary/30
                     ${isOpen ? 'rotate-180 scale-110' : 'hover:rotate-12 hover:shadow-2xl'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
          aria-expanded={isOpen}
          style={{ 
            width: '30px', 
            height: '30px',
            background: 'var(--gradient-floating)',
            boxShadow: `
              0 20px 40px -12px rgba(124, 180, 65, 0.4),
              0 8px 25px -8px rgba(124, 180, 65, 0.3),
              0 4px 12px -4px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2)
            `,
          }}
        >
          {/* Animated glow ring */}
          <div className={`absolute -inset-2 rounded-full opacity-75 blur-md transition-all duration-700 ${
            isOpen ? 'scale-150 opacity-30' : 'scale-100 opacity-0 group-hover:opacity-50'
          }`} style={{ background: 'hsl(89 39% 49%)' }} />
          
          {/* Main button surface */}
          <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-floating)' }}>
            {/* Inner highlight */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            
            {/* Icon */}
            <MdOutlineSupportAgent className="text-white relative z-10" style={{ width: '25px', height: '25px' }} />
            
            {/* Rotating gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${
              isOpen ? 'rotate-180' : 'group-hover:rotate-90'
            }`} />
          </div>
          
          {/* Ripple effect */}
          <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-700 ${
            isOpen ? 'scale-150 opacity-0' : 'scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100'
          }`} />
        </button>
      </div>
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FloatingActionButton;