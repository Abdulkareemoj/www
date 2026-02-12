---
title: "DonationsApp"
description: "Self-hosted donation platform similar to Ko-fi, Buy Me a Coffee, and Patreon"
date: "Mar 26 2024"
demoURL: "https://donations-app-nine.vercel.app/"
repoURL: "https://github.com/Abdulkareemoj/DonationsApp"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321224/www/Screenshot_2025-10-01_at_13-19-41_yyg0ob.png"
altText: "DonationsApp Platform"
---

# DonationsApp: Self-Hosted Donations Platform

A modern, self-hostable platform for creators, artists, and content creators to accept donations directly from their supporters. DonationsApp provides a Ko-fi or Patreon-like experience with full control over your data and branding.

## Overview

DonationsApp is a lightweight yet powerful donation platform designed for independent creators who want to monetize their work while maintaining complete control. Unlike traditional platforms, DonationsApp can be self-hosted, giving you full ownership of your donation system, supporter data, and customization options.

## Features

- **Donation Management**: Accept one-time and recurring donations from supporters
- **Payment Processing**: Secure payment handling via Paystack
- **Creator Dashboard**: View donation history, analytics, and supporter information
- **Customizable Pages**: Create personalized supporter pages with custom branding
- **Form Validation**: Client-side and server-side validation with Zod
- **Supporter Tracking**: Store and manage supporter information
- **Receipt Management**: Automatic receipt generation for donors
- **Responsive Design**: Beautiful UI that works across all devices

## Tech Stack

- **Frontend**:
  - [SvelteKit](https://kit.svelte.dev/) - Modern web framework
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
  - [shadcn-svelte](https://www.shadcn-svelte.com/) - UI component library
  - [Superforms](https://superforms.rocks/) - Form handling and validation

- **Backend**:
  - SvelteKit API routes for server-side logic
  - [Zod](https://zod.dev/) - TypeScript-first schema validation

- **Payments**:
  - [Paystack](https://paystack.com/) - Payment gateway for African markets

- **Data Storage**:
  - [Airtable](https://www.airtable.com/) - Flexible database for supporter data

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm or npm package manager
- Paystack account for payment processing
- Airtable account for data storage

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulkareemoj/DonationsApp.git
   cd DonationsApp
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Add your Paystack API key and Airtable credentials
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   ```

5. Open `http://localhost:5173` in your browser

## Configuration

Configure your donation platform by setting:
- Paystack API keys for payment processing
- Airtable base and table IDs for data storage
- Custom branding and page styling
- Donation tiers and amounts

## Deployment

DonationsApp can be deployed on:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://www.netlify.com/)
- Any Node.js hosting platform with SvelteKit support
