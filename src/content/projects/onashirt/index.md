---
title: 'onashirt'
description: 'Full-stack web app built with Next.js that allows users to customize a 3D model of a t-shirt and visualize the changes in real-time.'
date: 'Mar 26 2024'
demoURL: 'https://onashirt.vercel.app'
repoURL: 'https://github.com/Abdulkareemoj/shirt'
imageUrl: 'https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321229/www/Screenshot_2025-09-30_at_21-56-08_u10swc.png'
altText: '3D T-shirt Customizer'
---

# onashirt - 3D T-Shirt Customizer

A full-stack web application that brings customization to life with an interactive 3D t-shirt editor. Users can design custom t-shirts with real-time visualization, save their designs, and manage their profile—all with a modern, responsive interface.

## Overview

onashirt is a cutting-edge e-commerce platform that combines 3D visualization with web technology. Built with Next.js and Three.js, it allows users to customize t-shirt designs in real-time, providing an immersive shopping and design experience. The application includes user authentication, a design dashboard, and an admin panel for managing products and user content.

## Features

- **3D Shirt Customizer**: Interactive 3D t-shirt customizer powered by React Three Fiber and Three.js for realistic visualization
- **Real-time Customization**: Change colors, apply textures, and add custom designs with instant visual feedback
- **User Authentication**: Secure registration and login with session management
- **Design Dashboard**: View, organize, and manage saved t-shirt designs
- **Admin Area**: Administrative interface for managing products, users, and orders
- **Data Persistence**: PostgreSQL database with Drizzle ORM for reliable data storage
- **Accessible UI**: Built with Radix UI and shadcn/ui for consistent and inclusive design

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production applications
- **3D Rendering**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) - React renderer for Three.js
- **3D Library**: [Three.js](https://threejs.org/) - JavaScript 3D library
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- **Database**: [PostgreSQL](https://www.postgresql.org/) - Reliable relational database
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) - Type-safe database operations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/) - High-quality React components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Code Quality**: [Biome](https://biomejs.dev/) - Fast linter and formatter
- **Package Manager**: [pnpm](https://pnpm.io/) - Efficient package management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm package manager
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulkareemoj/shirt.git
   cd shirt
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open `http://localhost:3000` in your browser
