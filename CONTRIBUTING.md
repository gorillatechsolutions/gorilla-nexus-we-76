# Contributing to Gorilla Tech Solution

## Coding Standards & Best Practices

### Component Structure

Each component should follow this structure:

```tsx
/**
 * ComponentName - Brief description of what this component does
 * 
 * @example
 * <ComponentName prop="value" />
 */

// React imports first
import React from 'react';

// Third-party library imports
import { Button } from '@/components/ui/button';

// Internal imports (hooks, utils, etc.)
import { useSEO } from '@/hooks/useSEO';

// Type definitions
interface ComponentNameProps {
  /** Description of the prop */
  prop: string;
  /** Optional prop with default */
  optional?: boolean;
}

/**
 * ComponentName renders a [brief description]
 * Used in: [list main pages/components that use this]
 */
const ComponentName: React.FC<ComponentNameProps> = ({ 
  prop, 
  optional = false 
}) => {
  // SEO setup (if applicable)
  useSEO({
    title: "Page Title",
    description: "Page description",
    // ... other SEO props
  });

  return (
    <section className="semantic-container-class">
      {/* Main content with semantic HTML */}
      <header>
        <h1>Semantic heading</h1>
      </header>
      
      <main>
        {/* Component content */}
      </main>
    </section>
  );
};

export default ComponentName;
```

### Semantic HTML Requirements

Always use semantic HTML5 elements:

- `<header>` - Site header or section header
- `<nav>` - Navigation menus
- `<main>` - Primary page content (once per page)
- `<section>` - Distinct content sections
- `<article>` - Self-contained content
- `<aside>` - Sidebar or supplementary content
- `<footer>` - Site footer or section footer

### Design System Usage

**DO NOT use direct colors in components:**

```tsx
// ❌ BAD - Direct color usage
<div className="bg-blue-500 text-white">

// ✅ GOOD - Use design tokens
<div className="bg-primary text-primary-foreground">
```

**Always use semantic design tokens from `index.css`:**

```css
/* Define in index.css */
:root {
  --primary: 222.2 84% 4.9%;
  --primary-foreground: 210 40% 98%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

### File Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`, `ContactForm.tsx`)
- **Pages**: PascalCase (`Index.tsx`, `About.tsx`) 
- **Hooks**: camelCase with `use` prefix (`useSEO.tsx`, `usePerformanceMonitor.tsx`)
- **Utils**: camelCase (`utils.ts`, `formatDate.ts`)
- **Assets**: kebab-case (`hero-image.jpg`, `company-logo.png`)

### Component Documentation

Every component must have:

1. **JSDoc comment** explaining purpose and usage
2. **TypeScript interfaces** for all props
3. **Inline comments** for complex logic
4. **Usage examples** in JSDoc

### SEO Requirements

All pages must implement SEO:

```tsx
import { useSEO } from '@/hooks/useSEO';

// In component
useSEO({
  title: "Page Title - Gorilla Tech Solution",
  description: "Page description (150-160 chars)",
  keywords: "relevant, seo, keywords",
  canonicalUrl: "https://yoursite.com/page-url",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    // ... structured data
  }
});
```

### Performance Best Practices

1. **Lazy load images**: Use loading="lazy" attribute
2. **Code splitting**: Use React.lazy() for large components  
3. **Optimize imports**: Import only what you need
4. **Memoization**: Use useMemo/useCallback for expensive operations

### Accessibility Requirements

1. **Alt text**: All images must have descriptive alt attributes
2. **ARIA labels**: Interactive elements need aria-label or aria-labelledby
3. **Keyboard navigation**: All interactive elements must be keyboard accessible
4. **Color contrast**: Meet WCAG AA standards (4.5:1 ratio minimum)
5. **Focus management**: Proper focus indicators and logical tab order

### Testing Guidelines

Before submitting:

1. **Visual testing**: Check in both light and dark modes
2. **Responsive testing**: Test on mobile, tablet, and desktop
3. **Accessibility testing**: Use screen reader or accessibility tools
4. **Performance testing**: Check Core Web Vitals
5. **SEO testing**: Verify meta tags and structured data

### Git Commit Standards

Use conventional commits:

```
feat: add contact form validation
fix: resolve mobile menu closing issue  
docs: update component documentation
style: improve button hover animations
refactor: extract reusable modal component
perf: optimize image loading performance
```

### Code Review Checklist

- [ ] Semantic HTML elements used appropriately
- [ ] Design tokens used instead of direct colors
- [ ] Component has proper TypeScript interfaces
- [ ] SEO implemented for pages
- [ ] Accessibility attributes included
- [ ] Performance considerations addressed
- [ ] Documentation and comments added
- [ ] Responsive design tested
- [ ] Dark/light mode compatibility verified
