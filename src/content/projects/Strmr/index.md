---
title: "Strmr"
description: "Video streaming platform for educational content and learning"
date: "Mar 18 2024"
demoURL: "https://strmr.vercel.app"
repoURL: "https://github.com/Abdulkareemoj/Strmr"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321228/www/Screenshot_2025-09-30_at_22-08-35_Strmr_-_Learn_Anything_Anytime_-_strmr_gyyfew.png"
altText: "Strmr Video Streaming Platform"
---

# Strmr - Web

Web frontend and API server for Strmr. This project serves both the browser-based web app and the API consumed by the mobile app [strmr-mb](https://github.com/abdulkareemoj/strmr-rn).

## Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL + Drizzle ORM
- **Auth:** Better Auth (email/password + OAuth)
- **State:** Zustand
- **UI:** shadcn/ui
- **Media Playback:** Vidstack
- **Email:** Resend + React Email
- **File storage:** AWS S3 (presigned URLs)

## Relationship to Mobile App

This project is the **backend and API server** for `strmr-mb` (the React Native mobile app). Both projects are in this monorepo.

| What             | How                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------ |
| **API**          | All `/api/*` routes are consumed by the mobile app                                   |
| **Auth**         | Both apps use Better Auth against the same database; sessions are shared via cookies |
| **Database**     | Single PostgreSQL database shared by both apps                                       |
| **File uploads** | Mobile app uploads via presigned S3 URLs (API provides the presigned URL)            |

The mobile app depends on this server running:

```bash
pnpm dev   # must be running before starting strmr-mb
```

## Getting Started

```bash
pnpm install
cp .env.template .env   # fill in your env vars
pnpm db:push            # push schema to database
pnpm dev                # start dev server at http://localhost:3000
```

## Scripts

| Command            | Description                 |
| ------------------ | --------------------------- |
| `pnpm dev`         | Start Next.js dev server    |
| `pnpm build`       | Production build            |
| `pnpm start`       | Start production server     |
| `pnpm db:push`     | Push Drizzle schema to DB   |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:migrate`  | Run migrations              |
| `pnpm db:studio`   | Open Drizzle Studio         |
| `pnpm lint`        | Biome check                 |
| `pnpm format`      | Biome format                |

## Environment Variables

See `.env.template` for all required variables.

