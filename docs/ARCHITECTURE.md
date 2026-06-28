
# 🏗️ Architecture

## Project Overview

**Suryapura Gram Vikas Portal** is a frontend-only React + Vite application that demonstrates a modern, bilingual, responsive, and accessible rural development portal.

The project follows a **component-based architecture**, where reusable UI components, centralized global state, and route-based page organization make the application scalable and easy to maintain.

---

# High-Level Architecture

```text
                    User
                      │
                      ▼
               React Router DOM
                      │
                      ▼
                Main Layout
        (Navbar • Footer • Layout)
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
      Pages       Global Context   SEO
                      │
                      ▼
           Reusable UI Components
                      │
                      ▼
             Tailwind CSS Styling
                      │
                      ▼
                  Browser UI
```

---

# Folder Structure

```text
src/

├── assets/            # Images & static assets
├── components/
│   ├── common/        # Reusable UI Components
│   ├── home/          # Homepage Sections
│   ├── layout/        # Navbar, Footer, Container
│   └── navigation/    # Navigation Components
│
├── config/            # Global constants
├── context/           # Theme, Language & Accessibility
├── hooks/             # Custom React Hooks
├── layouts/           # Main Layout
├── pages/             # Route Pages
├── routes/            # React Router Configuration
├── utils/             # Utility Functions
│
├── App.jsx
└── main.jsx
```

---

# Application Flow

```text
Browser

↓

main.jsx

↓

App.jsx

↓

Global Providers

↓

React Router

↓

Main Layout

↓

Page Component

↓

Reusable Components

↓

Rendered UI
```

---

# Routing

The application uses **React Router DOM** with route-based navigation.

Current pages:

* Home
* Initiatives
* Transparency
* Services
* Connect
* Not Found (404)

---

# Global State Management

The project uses **React Context API** to manage application-wide settings.

Available contexts include:

* 🌙 Theme (Light / Dark)
* 🌐 Language (English / Hindi)
* ♿ Accessibility Preferences

These settings are shared across all pages without prop drilling.

---

# Component Architecture

The UI is built using reusable components.

### Common Components

* Button
* Card
* Badge
* Typography
* SEO
* Container

### Homepage Components

* Hero Section
* Demo Showcase
* Stats
* Story
* Development Pillars
* Social Posts
* Testimonials
* Notice Board
* Gallery
* FAQ
* Contact CTA

This modular approach keeps the codebase clean and maintainable.

---

# Styling System

The design system is powered by:

* Tailwind CSS
* Custom Color Palette
* Shared Typography
* Shared Components
* Responsive Utility Classes

Features include:

* Mobile-First Design
* Dark Mode
* Consistent Spacing
* Reusable UI Patterns

---

# Animations

The project enhances user experience using:

* Framer Motion
* GSAP
* Lenis Smooth Scroll

Animations are lightweight and accessibility-friendly.

---

# Data Flow

```text
Static Data

↓

Page Components

↓

Props

↓

Reusable Components

↓

Rendered UI
```

Currently, all content is static and stored within the frontend.

---

# Current Architecture

```
Frontend (React + Vite)

✔ React Components
✔ Routing
✔ Global Context
✔ Responsive UI
✔ SEO
✔ Animations
✔ Accessibility

Backend

✘ Not Implemented

Database

✘ Not Connected
```

---

# Future Architecture

The current structure is designed so that a backend can be integrated later without major changes.

Possible future additions:

* Node.js + Express API
* MongoDB / PostgreSQL
* Authentication
* Admin Dashboard
* CMS Integration
* Dynamic Content Management

---

# Design Principles

The project follows these principles:

* Component-Based Architecture
* Reusability
* Separation of Concerns
* Responsive Design
* Accessibility First
* Maintainability
* Scalable Folder Structure
* Clean Code Practices

---

# Summary

**Suryapura Gram Vikas Portal** uses a clean and modular React architecture built around reusable components, global context, responsive layouts, and modern UI practices. The application is frontend-focused today while remaining well-structured for future backend and database integration.
