---
title: "Foreum"
description: "A powerful, modern forum platform built with SvelteKit, tRPC, and Drizzle ORM — designed for both developers and community managers."
date: "Mar 26 2024"
demoURL: "https://foreum.vercel.app/"
repoURL: "https://github.com/Abdulkareemoj/foreum"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321228/www/Screenshot_2025-09-30_at_21-58-49_Foreum_-_Modern_Forum_Platform_for_Your_Website_scnops.png"
altText: "Alt text for image"
---

# Foreum 🚀

Foreum is an all-in-one solution for building engaging community spaces. Whether you're creating a product support forum, an internal discussion board, or a vibrant community platform, Foreum provides everything you need out of the box:

- 🔒 **Enterprise-grade Authentication** with Better Auth
- 🎨 **Beautiful UI** powered by shadcn-svelte components
- 🚄 **Lightning-fast Performance** with SvelteKit
- 🔧 **Type-safe Backend** using tRPC and Drizzle ORM
- 📱 **Responsive Design** for all devices
- 🌓 **Dark/Light Themes** built-in, also customizable in the admin section

## Features

### Core Features

- 🔐 **Advanced Authentication**

  - Email/Password with username support
  - Email verification & password reset
  - OAuth/SSO integration ready

- 📝 **Rich Discussion Tools**

  - Markdown/Rich text editor
  - Thread categories and tags
  - Upvotes and reactions
  - File attachments

- 👥 **User Management**
  - Customizable profiles
  - Role-based permissions
  - Moderation tools
  - Activity tracking

### Technical Features

- ⚡ **Performance-First Architecture**

  - Server-side rendering with SvelteKit
  - Type-safe APIs with tRPC
  - Efficient database queries with Drizzle ORM

  - **Modern UI/UX** Responsive design with customizable Dark/light themes and Loading states & animations

  - **Modern stack**: SvelteKit + tRPC + Drizzle + Better Auth, great DX and strong type-safety across the stack.
  - **Plug-and-play authentication**: email/password with optional username support, email OTP for verification and reset flows, and social sign-in support hooks.
  - **User profiles & settings**: per-user settings (theme, privacy, notification preferences) with Drizzle schemas and a router to manage them.
  - **Bookmarks & Notifications**: built-in systems with pagination/infinite scroll and server-side routers.
  - **Excellent UX**: skeleton loaders, mobile-friendly navbar that collapses sidebars into a single sheet, avatar uploader, toast + alert patterns for different message types.
  - **Extensible design**: clearly split components (LeftSidebar, Mainbar, RightSidebar, ThreadCard, etc.) to make adding features easy and localized.
  - **Open-source friendly**: intentionally readable code, helpful comments and a focus on community contribution.

## Use Cases

Foreum can be used for:

- A public community forum (product support, hobbyist communities, fan clubs).
- Internal company discussion board or knowledge-sharing hub.
- A feature-rich comment + discussion layer for an existing app.
- An MVP for social/community features when validating product-market fit.
- A teaching template for modern full-stack SvelteKit + tRPC apps.
