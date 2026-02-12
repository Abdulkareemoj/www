---
title: "ImgSaaS"
description: "Comprehensive SaaS platform for image editing, document manipulation, and file conversion"
date: "Mar 26 2024"
demoURL: "https://imgsaas.vercel.app"
repoURL: "https://github.com/Abdulkareemoj/imgsaas"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321227/www/Screenshot_2025-09-30_at_22-21-44_gfkzpc.png"
altText: "ImgSaaS Platform"
---

# ImgSaaS: Image and Document Editing Platform

A comprehensive SaaS platform for image editing, document manipulation, and file conversion. ImgSaaS provides professional-grade tools for managing and transforming your media files with an intuitive, modern interface.

## Overview

ImgSaaS is a full-featured SaaS platform that combines image editing, document processing, and file conversion capabilities in one powerful application. Similar to iLovePDF and Canva, it empowers users to manipulate images and documents without installing desktop software. The platform includes user authentication, secure file storage, AI-powered features, and flexible subscription plans.

## Features

- **User Authentication**: Secure user registration, login, and profile management with JWT tokens
- **Image Editing Tools**:
  - Crop, resize, rotate, and flip images
  - Adjust brightness, contrast, saturation, and hue
  - Apply filters and visual effects
  - Add text, shapes, and annotations
  - Remove backgrounds with AI-powered tools
  - Batch processing for multiple files
- **Document Processing Tools**:
  - Merge, split, and compress PDF files
  - Convert between PDF, Word, Excel, and PowerPoint formats
  - Add watermarks, signatures, and password protection
  - Extract text and images from PDF documents
  - OCR capabilities for document scanning
- **File Conversion**:
  - Convert images between formats (JPG, PNG, GIF, WebP, etc.)
  - Convert documents between multiple formats
  - Batch conversion for efficiency
- **AI-Powered Features**:
  - Generate images from text prompts
  - Create variations of existing images
  - Intelligent background removal
- **Storage Management**:
  - Upload, store, and organize files
  - Cloud storage integration (AWS S3, Google Cloud)
  - File versioning and recovery
- **Subscription Plans**: Multiple tiers with varying features and storage limits
- **Responsive Design**: Works seamlessly across all devices and screen sizes

## Tech Stack

- **Frontend**:
  - [SvelteKit](https://kit.svelte.dev/) - Modern web framework for building user interfaces
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [shadcn-svelte](https://www.shadcn-svelte.com/) - High-quality Svelte components

- **Backend**:
  - [.NET Core](https://dotnet.microsoft.com/) - Robust C# framework for server-side logic
  - [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/) - Modern ORM for .NET
  - [PostgreSQL](https://www.postgresql.org/) - Reliable relational database

- **Authentication**:
  - JWT (JSON Web Tokens) with refresh token rotation for secure sessions

- **Infrastructure**:
  - Cloud storage integration for scalable file management
  - API rate limiting and security measures

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- .NET 6 or higher
- PostgreSQL database
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulkareemoj/imgsaas.git
   cd imgsaas
   ```

2. Frontend setup:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Backend setup:
   ```bash
   cd backend
   dotnet restore
   dotnet run
   ```

4. Access the application:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## Environment Configuration

Create a `.env.local` file in the frontend directory with:
```
VITE_API_URL=http://localhost:5000
VITE_JWT_SECRET=your_jwt_secret
```

And configure your backend with database connection strings and cloud storage credentials.
