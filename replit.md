# MOLEX Foundation Africa Website

## Overview

This is a comprehensive React-based website for MOLEX Foundation Africa, a nonprofit organization dedicated to empowering African communities through education, healthcare, and sustainable development programs. The website serves as the primary digital presence for the foundation, showcasing their mission, programs, events, leadership team, news, and ways for visitors to get involved.

The application is built as a full-stack web application with a frontend-focused architecture, featuring a modern React SPA (Single Page Application) with server-side rendering capabilities through Vite, and a minimal Express.js backend for potential API endpoints and static file serving.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Updates (January 2025)

- Updated hero carousel on home page with 4 slides reflecting MOLEX Foundation's actual mission
- Updated mission statement across site to focus on empowering girls, women, and youth
- Updated core values to: Excellent Service, Teamwork, Volunteerism, Person Focused, Respect, Servant Leadership
- Updated programs to align with STEM education, gender equality, SGBV prevention, and climate resilience focus
- Added Programs dropdown menu to navbar with hover functionality showing all individual programs
- Created individual program detail pages accessible via /programs/:id routes
- Added comprehensive history section to About page detailing foundation's 2021 origins in Nyanfeku Ekroful
- Combined Gallery and News into "Media" dropdown menu in navigation
- Combined About and Leadership into "About" dropdown while maintaining "About" as main label
- Added collapsible mobile navigation with animated expand/collapse for dropdown sections
- Updated vision statement to: "To shape an inclusive Africa where every child is empowered with opportunity, mentorship, and resources to rise, lead with purpose, and drive global transformation through STEM, innovation, and resilient leadership"
- Separated Mission, Vision, and Core Values into distinct sections on About page for better readability and organization
- Added SHEROES in STEM feature section to home page highlighting Chronicle newspaper recognition with engaging image layout and call-to-action buttons
- Added "Our Priorities" section to home page with five key focus areas displayed in card grid layout
- Added "Impactful Approach" section to home page highlighting foundation's commitment to vulnerable and marginalized youth with supporting visual elements
- Added success stories modal functionality that appears when the home page opens, featuring real transformation stories with navigation and call-to-action
- Created dedicated Success Stories page with 9 comprehensive stories featuring filtering by program, responsive card layout, and detailed story content
- Added Success Stories to Media dropdown navigation and updated modal call-to-action to link to the dedicated page
- Updated primary color scheme to dark red (hsl(0, 75%, 30%)) for bold and impactful brand identity
- Added comprehensive gallery functionality to all program detail pages with 6 curated images per program, modal lightbox viewing, and navigation controls
- Added "Why Robotics & AI Clubs?" section to home page highlighting STEM innovation initiative with engaging visual elements and call-to-action buttons
- Created frontend-only admin interface at /admin route with comprehensive dashboard, contact management, volunteer applications, content management, events, and projects tabs using mock data and local state management
- Enhanced board of directors page with modal bio functionality, comprehensive professional biographies, and LinkedIn profile integration
- Added modal bio functionality to executives page with detailed professional backgrounds and social media links
- Updated navigation structure to include both Executive Team and Board of Directors in the About dropdown menu for better content organization
- Fixed accessibility warnings by adding DialogDescription components to all modal dialogs
- Created separate Advisory Council page with 6 distinguished advisors featuring expertise in environmental policy, education technology, gender equality, youth development, public health, and innovation
- Added Advisory Council to About dropdown navigation with comprehensive modal bio functionality and detailed professional backgrounds
- Created comprehensive Organogram page showcasing organizational structure, governance hierarchy, departmental divisions, and governance principles
- Added Organogram to About dropdown navigation with detailed visual representation of foundation structure from board level to implementation network
- Added prominent impact banner section to home page featuring large-scale statistics, gradient background, and compelling call-to-action buttons highlighting foundation achievements
- Added programs impact banner to programs page with category-specific statistics, program portfolio highlights, and focused call-to-action buttons for volunteering and funding
- Added individual program impact banners to all program detail pages featuring program-specific statistics, "Making a Real Difference" messaging, and engagement call-to-action buttons
- **MAJOR CODE RESTRUCTURING**: Completely reorganized home page architecture by extracting reusable components into organized structure:
  - Created `client/src/components/home/` directory with 8 specialized components: HeroCarousel, SuccessStoriesNotification, ImpactBanner, SHEROESSection, OurPriorities, RoboticsAISection, ImpactfulApproach
  - Created `client/src/components/shared/` directory for reusable components like ImpactStats
  - Created `client/src/components/programs/` and `client/src/components/events/` directories with respective card components
  - Converted success story modal from large overlay to small bottom-right notification popup (320px width, non-intrusive)
  - Reduced home page from 800+ lines to under 50 lines by using component-based architecture
  - Improved maintainability, reusability, and code organization across the entire application

## System Architecture

### Frontend Architecture
The frontend is built using modern React with TypeScript, following a component-based architecture:

- **Framework**: React 18 with TypeScript for type safety and better developer experience
- **Routing**: Wouter for lightweight client-side routing with 14 main routes (home, about, programs, events, executives, board, gallery, news, projects, contact, etc.)
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme Support**: Built-in dark/light theme switching with persistent user preferences

### Backend Architecture
Minimal Express.js server designed primarily for development and potential API expansion:

- **Framework**: Express.js with TypeScript
- **Development**: Hot module replacement and development middleware through Vite integration
- **API Structure**: Prepared for RESTful API endpoints with `/api` prefix routing
- **Storage Interface**: Abstract storage interface with in-memory implementation, designed for easy database integration

### Component Organization
- **Layout Components**: Header with navigation, footer with newsletter signup, and main layout wrapper
- **UI Components**: Comprehensive shadcn/ui component library including forms, dialogs, cards, buttons, etc.
- **Page Components**: Individual page components for each route with SEO optimization
- **Custom Hooks**: Mobile detection, toast notifications, and theme management

### Data Management
- **Static Data**: Comprehensive mock data for programs, events, news articles, team members, projects, and gallery items
- **Type Definitions**: Structured TypeScript interfaces for all data models (Event, Program, NewsArticle, Project, TeamMember, GalleryItem)
- **Client-Side Storage**: TanStack Query for caching and optimistic updates

### SEO and Performance
- **SEO Head Component**: Custom SEO component for meta tags, titles, and descriptions on each page
- **Responsive Design**: Mobile-first responsive design using Tailwind CSS breakpoints
- **Image Optimization**: Unsplash integration for high-quality images with proper sizing
- **Performance**: Lazy loading, optimized bundle splitting, and efficient re-renders

### User Experience Features
- **Interactive Elements**: Lightbox for gallery images, filtering for programs/news/events
- **Form Handling**: Contact forms, newsletter signup, volunteer registration with validation
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## External Dependencies

### Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation resolvers
- **Icons**: Lucide React icon library

### Development Dependencies
- **Build Tools**: Vite with React plugin, TypeScript compiler
- **Database ORM**: Drizzle ORM configured for PostgreSQL (currently using in-memory storage)
- **Validation**: Zod for schema validation and type inference
- **Development Environment**: Replit-specific plugins for development experience

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Prepared for PostgreSQL with Neon Database serverless driver
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Third-Party Services
- **Image CDN**: Unsplash for high-quality stock photography
- **Font Loading**: Google Fonts (Inter) with preconnect optimization
- **Database Provider**: Configured for Neon Database PostgreSQL hosting
- **Development Platform**: Replit environment with specialized tooling

### Database Schema
Prepared PostgreSQL schema using Drizzle ORM with:
- **Users Table**: Basic user authentication structure with UUID primary keys
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Type Safety**: Automatic TypeScript type generation from database schema

The architecture is designed to be scalable and maintainable, with clear separation of concerns between frontend presentation, backend API logic, and data persistence layers.