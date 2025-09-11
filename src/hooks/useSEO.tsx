import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update title
    document.title = seoData.title;

    // Helper function to update meta tag
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Helper function to update link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      
      if (element) {
        element.setAttribute('href', href);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1');
    
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Gorilla Tech Solution', true);
    
    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
      updateMetaTag('og:image:alt', seoData.ogTitle || seoData.title, true);
    }
    
    if (seoData.ogUrl) {
      updateMetaTag('og:url', seoData.ogUrl, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    
    if (seoData.twitterImage) {
      updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Canonical URL
    if (seoData.canonicalUrl) {
      updateLinkTag('canonical', seoData.canonicalUrl);
    }

    // Structured Data
    if (seoData.structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      
      if (scriptElement) {
        scriptElement.textContent = JSON.stringify(seoData.structuredData);
      } else {
        scriptElement = document.createElement('script') as HTMLScriptElement;
        scriptElement.type = 'application/ld+json';
        scriptElement.textContent = JSON.stringify(seoData.structuredData);
        document.head.appendChild(scriptElement);
      }
    }

    // Additional performance and SEO meta tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('theme-color', '#000000');
    updateMetaTag('msapplication-TileColor', '#000000');

  }, [seoData]);
};