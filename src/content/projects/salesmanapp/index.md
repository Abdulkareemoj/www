---
title: 'SalesManApp'
description: 'Comprehensive CRM and sales management application for businesses'
date: 'Mar 26 2024'
demoURL: 'https://sales-man-app.vercel.app'
repoURL: 'https://github.com/Abdulkareemoj/SalesManApp'
imageUrl: 'https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321225/www/Screenshot_2025-09-30_at_22-09-54_SalesCRM_-_Boost_Your_Sales_with_Smart_CRM_abgs0e.png'
altText: 'SalesManApp CRM'
---

# SalesManApp: Sales Management & CRM

A comprehensive Customer Relationship Management (CRM) and sales management application designed to help businesses streamline their sales operations. SalesManApp provides complete visibility into your customer interactions, sales pipeline, inventory, and business performance.

## Overview

SalesManApp is an all-in-one solution for managing your sales team, customers, and inventory. Built with modern web technologies, it provides intuitive interfaces for tracking deals, managing customer relationships, monitoring inventory, and generating actionable reports to drive business growth.

## Features

- **User Authentication**: Secure login and user account management
- **Role-Based Access**: Define user roles with different permission levels
- **Customer Management**: 
  - Maintain detailed customer profiles
  - Track customer interactions and communication history
  - Manage customer contact information
  - Customer segmentation and categorization
- **Sales Management**:
  - Track sales opportunities and deals
  - Monitor sales pipeline progression
  - Set and track sales targets and goals
  - Sales forecasting and performance tracking
  - Deal closure tracking and analytics
- **Inventory Management**:
  - Real-time inventory tracking
  - Stock level monitoring and alerts
  - Inventory movement history
  - Product catalog management
  - Low stock notifications
- **Reporting & Analytics**:
  - Sales performance reports
  - Customer analytics and insights
  - Inventory reports
  - Revenue tracking and projections
  - Customizable dashboards
- **User Dashboard**: Personalized dashboard with key metrics and insights
- **User Notifications**: Real-time alerts for important events
- **User Profiles**: Manage user information and preferences
- **User Settings**: Customize application behavior and preferences

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework with App Router
- **Frontend**: React with modern component architecture
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Backend**: Next.js API Routes
- **Database**: [Supabase](https://supabase.com/) - PostgreSQL with built-in auth
- **Authentication**: Supabase Auth
- **Language**: TypeScript - For type safety throughout the application

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm package manager
- Supabase account for backend and database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulkareemoj/SalesManApp.git
   cd SalesManApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Add your Supabase URL and API keys
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser

## User Roles

- **Admin**: Full access to all features and user management
- **Manager**: Can manage team members and view all reports
- **Sales Rep**: Can manage own customers and deals
- **Viewer**: Read-only access to relevant data

## Key Workflows

1. **Customer Onboarding**: Add new customers and build their profiles
2. **Sales Pipeline**: Track deals from lead to closure
3. **Inventory Control**: Monitor stock levels and create purchase orders
4. **Reporting**: Generate insights and track KPIs
5. **Team Collaboration**: Share customer information and deal notes

## Deployment

Deploy to Vercel (recommended):
```bash
vercel deploy
```

The application will automatically integrate with your Supabase backend upon deployment.
