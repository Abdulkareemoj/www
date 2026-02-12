---
title: 'Strmr'
description: 'Video streaming platform for educational content and learning'
date: 'Mar 18 2024'
demoURL: 'https://strmr.vercel.app'
repoURL: 'https://github.com/Abdulkareemoj/Strmr'
imageUrl: 'https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321228/www/Screenshot_2025-09-30_at_22-08-35_Strmr_-_Learn_Anything_Anytime_-_strmr_gyyfew.png'
altText: 'Strmr Video Streaming Platform'
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

## Deployment

Deploy to Vercel with one click:
```bash
vercel deploy
```

Or deploy to any Node.js hosting platform with Next.js support.
