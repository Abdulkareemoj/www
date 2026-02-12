---
title: "Foreum"
description: "Modern forum platform built with SvelteKit, tRPC, and Drizzle ORM for developers and community managers"
date: "Mar 26 2024"
demoURL: "https://foreum.vercel.app/"
repoURL: "https://github.com/Abdulkareemoj/foreum"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321228/www/Screenshot_2025-09-30_at_21-58-49_Foreum_-_Modern_Forum_Platform_for_Your_Website_scnops.png"
altText: "Foreum Forum Platform"
---

# Foreum: Modern Forum Platform

An all-in-one, production-ready forum platform that combines enterprise-grade features with exceptional developer experience. Foreum is perfect for building community spaces, product support forums, or internal discussion boards with a modern tech stack.

## Overview

Foreum is a comprehensive forum solution designed for both users and developers. It provides everything needed to build engaging community spaces with modern authentication, rich discussion tools, and flexible customization options. Built with the latest technologies, Foreum delivers lightning-fast performance, beautiful UI, and strong type safety across the entire stack.

## Features

### Core Features

- **Advanced Authentication**:
  - Email/Password authentication with optional username support
  - Email verification and password reset flows
  - OAuth/SSO integration ready
  - Secure session management

- **Rich Discussion Tools**:
  - Markdown and rich text editor for posts and replies
  - Thread organization with categories and tags
  - Upvotes, reactions, and engagement tracking
  - File attachments and media support
  - Full-text search capabilities

- **User Management**:
  - Customizable user profiles with avatars
  - Role-based access control (RBAC)
  - Moderation and content management tools
  - User activity tracking and analytics
  - Private messaging between users

- **Community Features**:
  - Bookmarks and saved threads
  - Real-time notifications
  - User reputation system
  - Community guidelines enforcement

### Technical Excellence

- **Performance**: Server-side rendering and optimized database queries for blazing-fast load times
- **Type Safety**: End-to-end type safety with TypeScript across frontend and backend
- **Architecture**: Extensible component design for easy feature additions
- **UX**: Responsive design, skeleton loaders, mobile-friendly navigation, and smooth animations
- **Accessibility**: WCAG compliant components and semantic HTML
- **Code Quality**: Well-documented, maintainable codebase with helpful comments

## Tech Stack

- **Frontend**:
  - [SvelteKit](https://kit.svelte.dev/) - Modern, fast web framework
  - [shadcn-svelte](https://www.shadcn-svelte.com/) - High-quality UI components
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
  - TypeScript - Type-safe code

- **Backend**:
  - [tRPC](https://trpc.io/) - Type-safe RPC framework
  - [Drizzle ORM](https://orm.drizzle.team/) - Type-safe database operations
  - [Better Auth](https://www.better-auth.com/) - Secure authentication
  - PostgreSQL - Reliable database

- **Real-time**:
  - WebSockets for live updates and notifications

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- pnpm or npm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulkareemoj/foreum.git
   cd foreum
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database and auth credentials
   ```

4. Set up the database:
   ```bash
   pnpm run db:push
   ```

5. Start the development server:
   ```bash
   pnpm run dev
   ```

6. Open `http://localhost:5173` in your browser

## Use Cases

- Public community forums (product support, hobbyist communities, fan clubs)
- Internal company discussion boards and knowledge-sharing hubs
- Discussion layer for existing applications
- MVP for validating social/community features
- Learning resource for modern full-stack development with SvelteKit
