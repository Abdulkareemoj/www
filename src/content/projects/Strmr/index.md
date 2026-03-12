---
title: "Strmr"
description: "Video streaming platform for educational content and learning"
date: "Mar 18 2024"
demoURL: "https://strmr.vercel.app"
repoURL: "https://github.com/Abdulkareemoj/Strmr"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321228/www/Screenshot_2025-09-30_at_22-08-35_Strmr_-_Learn_Anything_Anytime_-_strmr_gyyfew.png"
altText: "Strmr Video Streaming Platform"
---

# Strmr: Video Streaming Platform

A modern video streaming platform built with the T3 Stack, designed for educational content, courses, and learning resources. Strmr provides a complete solution for hosting, managing, and streaming videos to your audience.

## Overview

Strmr is a fully-featured video streaming platform that allows creators to upload, organize, and stream video content. Built with modern web technologies and cloud infrastructure, Strmr provides a scalable, reliable platform for video distribution with user authentication, content management, and beautiful video playback.

## Features

- **Video Streaming**: Stream videos with adaptive bitrate using Vidstack player
- **User Authentication**: Secure login and user management via Supabase
- **Video Management**: Upload, organize, and manage video content
- **Content Categorization**: Organize videos by topics and courses
- **User Profiles**: Personalized user profiles and watch history
- **Responsive Design**: Beautiful UI that works seamlessly across all devices
- **Secure Storage**: Files stored securely in Supabase cloud storage
- **Search Functionality**: Find videos and content easily

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework with server-side rendering
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Backend & Auth**: [Supabase](https://supabase.com/) - PostgreSQL database and authentication
- **ORM**: [Prisma](https://www.prisma.io/) - Type-safe database operations
- **Video Player**: [Vidstack](https://www.vidstack.io/) - Modern web video player
- **Language**: TypeScript - Type-safe JavaScript
- **Project Setup**: [create-t3-app](https://create.t3.gg/) - T3 Stack scaffold

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm package manager
- Supabase account for backend and authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abdulkareemoj/Strmr.git
   cd Strmr
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   # Add your Supabase URL and API keys
   ```

4. Set up the database:

   ```bash
   pnpm run prisma:push
   ```

5. Start the development server:

   ```bash
   pnpm run dev
   ```

6. Open `http://localhost:3000` in your browser

## Database Setup

Run Prisma migrations to set up your database schema:

```bash
pnpm run prisma:generate
pnpm run prisma:push
```

## Key Features

### Video Management

- **Upload & Processing**: Secure video upload with automatic transcoding
- **Metadata Management**: Rich video descriptions, tags, and categorization
- **Thumbnail Generation**: Automatic thumbnail creation and custom uploads
- **Video Organization**: Course structure and playlist management
- **Privacy Controls**: Public, private, and password-protected content

### User Experience

- **Adaptive Streaming**: Optimized playback based on connection speed
- **Watch History**: Track viewing progress across devices
- **Bookmarks**: Save favorite moments and timestamps
- **Search & Discovery**: Advanced search with filters and recommendations
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing

### Creator Tools

- **Analytics Dashboard**: View engagement metrics and viewer statistics
- **Content Management**: Bulk operations and content scheduling
- **Monetization Options**: Integration with payment processors
- **Community Features**: Comments, ratings, and viewer interaction
- **Live Streaming**: Real-time broadcast capabilities

## Technical Architecture

### Frontend Stack

- **Next.js 14**: React framework with App Router for optimal performance
- **TypeScript**: Type-safe development with enhanced IDE support
- **Tailwind CSS**: Utility-first styling with custom design system
- **shadcn/ui**: Modern, accessible component library
- **Vidstack**: Advanced video player with HLS support

### Backend Infrastructure

- **Supabase**: Backend-as-a-Service providing:
  - PostgreSQL database with real-time subscriptions
  - Authentication system with social providers
  - File storage with CDN optimization
  - Edge functions for serverless API endpoints
- **Prisma**: Type-safe ORM with database migrations
- **Zod**: Runtime validation and TypeScript schema inference

### Video Processing Pipeline

- **Upload Handler**: Multipart file upload with progress tracking
- **Transcoding Service**: FFmpeg-based video processing
- **CDN Integration**: Global content delivery for fast streaming
- **Thumbnail Generation**: Automatic preview image creation
- **Metadata Extraction**: Video information and duration analysis

## Database Schema

The platform uses a well-structured PostgreSQL schema:

- **users**: Authentication profiles and preferences
- **videos**: Video metadata, URLs, and engagement metrics
- **courses**: Structured learning paths and collections
- **categories**: Hierarchical content organization
- **watch_history**: User viewing progress and bookmarks
- **comments**: User engagement and discussion threads

## Performance Optimizations

- **Lazy Loading**: Component and video thumbnail lazy loading
- **Code Splitting**: Route-based bundle optimization
- **Image Optimization**: Next.js Image component with WebP support
- **Database Indexing**: Optimized queries for fast content retrieval
- **CDN Caching**: Global edge caching for static assets

## Security Features

- **Authentication**: Secure JWT-based auth with refresh tokens
- **Authorization**: Role-based access control for content management
- **Input Validation**: Comprehensive validation with Zod schemas
- **File Security**: Virus scanning and type validation for uploads
- **Rate Limiting**: API protection against abuse

## Development Workflow

### Environment Setup

1. Clone repository and install dependencies
2. Configure Supabase project and obtain credentials
3. Set up database schema with Prisma migrations
4. Configure environment variables for local development
5. Start development servers with hot reload

### Database Operations

```bash
# Generate Prisma client
pnpm run prisma:generate

# Push schema changes to database
pnpm run prisma:push

# View database in browser
pnpm run prisma:studio
```

### Deployment Strategy

- **Frontend**: Vercel deployment with automatic SSL and CDN
- **Backend**: Supabase edge functions for serverless API
- **Database**: Managed PostgreSQL with automatic backups
- **Storage**: Supabase storage with global CDN
- **Monitoring**: Built-in analytics and error tracking

## Future Enhancements

- **Live Streaming**: Real-time broadcast with chat integration
- **Mobile Apps**: Native iOS and Android applications
- **AI Features**: Automated content tagging and recommendations
- **Advanced Analytics**: Detailed viewer behavior insights
- **Monetization**: Subscription models and pay-per-view content
- **Social Features**: User profiles and social sharing

## Troubleshooting

### Common Issues

- **Video Upload Failures**: Check file size limits and format support
- **Playback Issues**: Verify CDN configuration and browser compatibility
- **Database Connection**: Ensure Supabase credentials are correct
- **Authentication Problems**: Clear browser cookies and check OAuth setup

### Debug Tools

- Next.js development server with detailed error reporting
- Supabase dashboard for database inspection
- Prisma Studio for data management
- Browser DevTools for performance analysis

This platform showcases modern web development with a focus on video delivery, user experience, and scalable architecture.
