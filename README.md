# Gorilla Tech Solution - Digital Marketing Agency Website

## Project Overview

**URL**: https://lovable.dev/projects/14612794-678a-4e7a-be31-4b3c50bff88b

A comprehensive digital marketing agency website built with modern web technologies, featuring responsive design, SEO optimization, and professional business functionality.

## Features

- 🎨 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🌙 **Dark/Light Mode**: Complete theme switching capability
- 📱 **Progressive Web App**: Optimized performance and caching
- 🔍 **SEO Optimized**: Meta tags, structured data, and semantic HTML
- 📧 **Contact Forms**: Integrated contact and inquiry forms
- 📊 **Case Studies**: Detailed project showcases
- 💼 **Service Pages**: Comprehensive service descriptions
- 🔔 **Notifications**: Real-time notification system
- 📱 **Social Integration**: Share buttons and social media links

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/14612794-678a-4e7a-be31-4b3c50bff88b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Technology Stack

### Core Technologies
- **React 18** - Frontend framework with hooks and modern features
- **TypeScript** - Type-safe JavaScript with enhanced developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **shadcn/ui** - Accessible and customizable React components

### Routing & State Management  
- **React Router DOM** - Client-side routing with nested routes
- **TanStack Query** - Server state management and data fetching
- **React Hook Form** - Form handling with validation

### UI & Styling
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React** - Beautiful and consistent icon library
- **React Icons** - Popular icon libraries (Fi, Fa, etc.)
- **Class Variance Authority** - Type-safe component variants

### Performance & SEO
- **Custom SEO Hook** - Dynamic meta tags and structured data
- **Performance Monitoring** - Real-time performance tracking
- **Image Optimization** - Lazy loading and responsive images

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Header.tsx       # Main navigation header
│   ├── Footer.tsx       # Site footer with links
│   ├── HeroSection.tsx  # Landing page hero
│   └── ...              # Other feature components
├── pages/               # Page components (routes)
│   ├── Index.tsx        # Home page
│   ├── About.tsx        # About page  
│   ├── Services.tsx     # Services showcase
│   ├── CaseStudy.tsx    # Portfolio/case studies
│   └── ...              # Other pages
├── hooks/               # Custom React hooks
│   ├── useSEO.tsx       # SEO management hook
│   ├── usePerformanceMonitor.tsx # Performance tracking
│   └── use-mobile.tsx   # Mobile device detection
├── lib/                 # Utility functions
│   └── utils.ts         # Common helper functions
├── assets/              # Static assets
│   ├── *.png           # Images and graphics
│   └── *.jpg           # Photos and illustrations
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and design tokens
```

### Key Architecture Patterns

- **Component Composition**: Each UI section is a focused, reusable component
- **Custom Hooks**: Business logic abstracted into reusable hooks
- **Design System**: Centralized design tokens in index.css and tailwind.config.ts
- **Semantic HTML**: All components use proper HTML5 semantic elements
- **Accessibility First**: ARIA labels, keyboard navigation, and screen reader support

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/14612794-678a-4e7a-be31-4b3c50bff88b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
