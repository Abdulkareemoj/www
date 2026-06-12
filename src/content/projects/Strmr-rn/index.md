---
title: "Strmr-rn"
description: "Video streaming platform for educational content and learning"
date: "Mar 18 2024"
demoURL: "https://strmr.vercel.app"
repoURL: "https://github.com/Abdulkareemoj/Strmr"
imageUrl: "https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321228/www/Screenshot_2025-09-30_at_22-08-35_Strmr_-_Learn_Anything_Anytime_-_strmr_gyyfew.png"
altText: "Strmr Video Streaming Platform"
---

# Strmr — Mobile

React Native mobile app for Strmr, built with Expo. Consumes the API from [strmr-mb](https://github.com/abdulkareemoj/strmr) (the Next.js web server).

## Stack

- **Framework:** Expo SDK 56 + Expo Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 via Uniwind
- **UI:** React Native Reusables (shadcn-style components)
- **Auth:** Better Auth
- **State:** Zustand
- **Navigation:** Expo Router (file-based), React Navigation

## Relationship to Web App

This mobile app is a **client** of `strmr` (the Next.js web project). They share the same backend:

| What         | How                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------- |
| **API**      | Mobile calls [strmr](https://github.com/abdulkareemoj/strmr) `/api/*` routes for all data |
| **Auth**     | Uses the same Better Auth instance — sign-in works across web and mobile                  |
| **Database** | Single PostgreSQL database backing both apps                                              |
| **Uploads**  | Video uploads go through the same S3 presigned URL flow                                   |

The `strmr` dev server must be running for this app to work:

```bash
# Terminal 1: start the API server
cd ../strmr
pnpm dev

# Terminal 2: start the mobile app
cd ../strmr-mb
pnpm android
```

## Getting Started

```bash
pnpm install
```

Create a `.env` file:

```env
EXPO_PUBLIC_API_BASE_URL=http://10.0.2.2:3000/api
```

The API base URL depends on your device:

| Device               | URL                           | Notes                                  |
| -------------------- | ----------------------------- | -------------------------------------- |
| **Android emulator** | `http://10.0.2.2:3000/api`    | `10.0.2.2` routes to host machine      |
| **iOS simulator**    | `http://localhost:3000/api`   | Simulator shares host network          |
| **Physical device**  | `http://YOUR_LAN_IP:3000/api` | Use your machine's LAN IP (`ipconfig`) |

Start the app:

```bash
pnpm dev        # start Expo dev server (all platforms)
pnpm android    # + launch on Android
pnpm ios        # + launch on iOS (Mac only)
pnpm web        # + launch in browser
```

## Project Structure

```
app/                  # Expo Router pages
├── _layout.tsx       # Root layout (Uniwind, theme, error boundary)
├── index.tsx         # Landing page
├── (auth)/           # Auth screens (sign-in, sign-up, etc.)
├── (tabs)/           # Main app tabs (home, trending, shorts, music, profile)
└── search/           # Search results
components/           # Reusable components
├── ui/               # RN Reusables UI primitives
lib/                  # Helpers (api client, theme, utils, auth client)
store/                # Zustand stores
global.css            # Uniwind theme (CSS variables)
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start Expo dev server (clears cache) |
| `pnpm android` | Dev server + launch Android          |
| `pnpm ios`     | Dev server + launch iOS              |
| `pnpm web`     | Dev server + launch web              |

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
- Drizzle Studio for data management
- Browser DevTools for performance analysis

This platform showcases modern web development with a focus on video delivery, user experience, and scalable architecture.
