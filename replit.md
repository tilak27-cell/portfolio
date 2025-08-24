# Overview

This is a modern, responsive personal portfolio website for Tilak Sorte, a tech enthusiast specializing in web development, AI automation, and hackathons. The application is built as a full-stack project using React for the frontend and Express.js for the backend, with a focus on showcasing technical skills, project portfolio, and hackathon achievements. The portfolio features a single-page design with smooth scrolling navigation and a premium aesthetic using green and black color themes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React 18 with TypeScript, utilizing a modern component-based architecture. Key design decisions include:

- **React Router Alternative**: Uses Wouter for lightweight client-side routing instead of React Router to reduce bundle size
- **UI Component System**: Implements shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling Strategy**: Combines Tailwind CSS for utility-first styling with CSS custom properties for theme management, enabling consistent design tokens
- **Animation Framework**: Integrates Framer Motion for smooth animations and transitions throughout the portfolio
- **State Management**: Uses React Query (@tanstack/react-query) for server state management and caching
- **Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence
- **Typography**: Uses Inter font family for modern, clean typography

## Backend Architecture
The backend follows a minimal Express.js architecture pattern:

- **Server Framework**: Express.js with TypeScript for type safety
- **Development Setup**: Custom Vite integration for hot module replacement during development
- **Route Organization**: Centralized route registration system with API prefix structure
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
The application implements a flexible storage architecture:

- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory using Drizzle and Zod for validation
- **Migration Strategy**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development and testing
- **Session Management**: PostgreSQL session store with connect-pg-simple for production-ready session handling

## Authentication and Authorization
Basic user management structure is implemented:

- **User Schema**: Simple user model with username/password fields
- **Session Storage**: PostgreSQL-backed session management
- **Security**: Uses bcrypt-compatible hashing and secure session configuration
- **Future Extensibility**: Modular storage interface allows for easy integration of additional auth providers

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database using @neondatabase/serverless driver
- **Connection Management**: Environment-based database URL configuration with connection pooling

## UI and Animation Libraries
- **Radix UI**: Complete set of accessible, unstyled UI primitives for building the component system
- **Framer Motion**: Production-ready motion library for React animations and page transitions
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for portfolio-specific design tokens
- **Lucide React**: Feather-inspired icon library for consistent iconography
- **Embla Carousel**: Lightweight carousel library for project showcases

## Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **Replit Integration**: Custom Replit plugins for development environment optimization

## Form and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Hookform Resolvers**: Validation resolver for React Hook Form
- **Zod**: Runtime type validation and schema validation for forms and API data
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for consistent validation

## Utility Libraries
- **date-fns**: Modern date utility library for date formatting and manipulation
- **clsx & class-variance-authority**: Utility libraries for conditional CSS class management
- **nanoid**: URL-safe unique ID generator for session management