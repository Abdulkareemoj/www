---
title: "🧩 Building a Scalable Forum Platform"
description: "🧩 Building a Scalable Forum Platform with SvelteKit, tRPC, and Drizzle ORM"
publishDate: "22 Oct 2025"
tags: ["buidling", "sveltekit", "trpc", "drizzle-orm", "forum", "webdev"]
draft: true
---

# Building a Scalable Forum Platform with SvelteKit, tRPC, and Drizzle ORM

“I'm genuinely bored, Lemme try building something actually useful and possibly monetizable.”
That’s what I told myself when I started this project, part learning experience, part portfolio piece, and part real community platform.
I wanted to understand what it really takes to build a system that multiple users can interact with accounts, roles, threads, categories, moderation, logging, yup the whole full-stack deal.

## 🚀 Why Build a Forum?

This project started as a mix of goals:

- A learning project to get hands-on with SvelteKit, tRPC, and Drizzle
- A portfolio piece to demonstrate real-world architecture and design
- A potential community platform that could evolve into something functional

Forums are deceptively simple, they involve users, posts, categories, threads, roles, and moderation, all connected by a complex web of relationships.
It’s the perfect test for managing data flow, permissions, and scalability.

## ⚙️ The Stack

Initially I was using Next.js for this project but felt it was a bit too much for something like this because I also had another requirement for it. The whole project should be self-hostable in one click, whether on a VPS, Cloud Provider or built locally and just uploaded to a Shared Hosting platform. Inspiration for it came from Open-source projects like [Apache Answers](https://answers.apache.org/) and [Flarum](https://flarum.org).

While Next.js can definitely do that performance can be iffy with it so after about a week of having started with Next I decided to move to a different framework for the project

| Layer              | Tech            | Why                                                                 |
| ------------------ | --------------- | ------------------------------------------------------------------- |
| Frontend Framework | **SvelteKit**   | Great DX, file-based routing, server + client rendering flexibility |
| API Layer          | **tRPC**        | End-to-end type safety between frontend and backend                 |
| Database ORM       | **Drizzle ORM** | Schema-first, lightweight migrations, type-safe queries             |
| UI Components      | **Shadcn UI**   | Accessible and consistent design system                             |
| Auth System        | **Better-Auth** | Handles sessions, roles, and permissions cleanly                    |

## 🧠 Architecture Overview

The platform is structured around user roles and modular routes:

```bash
routes
├───(admin)
│   ├───appearance
│   ├───categories
│   ├───dashboard
│   ├───feature-flags
│   ├───moderation-logs
│   ├───reports
│   ├───settings
│   ├───themes
│   ├───threads
│   └───users
├───(auth)
│   ├───forgot-password
│   ├───login
│   ├───reset-password
│   ├───signup
│   └───verify-email
├───(client-area)
│   ├───bookmarks
│   ├───categories
│   │   └───[slug]
│   ├───embed
│   │   └───thread
│   │       └───[threadId]
│   ├───events
│   │   ├───new
│   │   └───[eventId]
│   ├───groups
│   │   └───[slug]
│   │       ├───forum
│   │       └───members
│   ├───messages
│   │   └───[conversationId]
│   ├───notifications
│   ├───profile
│   │   ├───badges
│   │   └───[username]
│   │       └───edit
│   ├───resources
│   │   ├───new
│   │   └───[resourceId]
│   ├───search
│   ├───settings
│   ├───tags
│   │   └───[slug]
│   └───threads
│       ├───new
│       └───[threadId]
│           ├───delete
│           ├───edit
│           └───reply
│               └───[replyId]
│                   ├───delete
│                   └───edit
├───(landing)
│   ├───cookies
│   ├───features
│   ├───pricing
│   ├───privacy
│   ├───solution
│   │   ├───collaboration
│   │   ├───design
│   │   ├───freelancers
│   │   ├───management
│   │   ├───organizations
│   │   ├───startups
│   │   └───students
│   └───terms
└───api
    ├───auth
    │   └───[...all]
    └───trpc
        └───[...procedure]
```

SvelteKit’s grouped routes (e.g., (admin), (moderator)) make it easy to enforce role-based access control using layout guards and hooks.
Each group has its own layout, navigation, and dashboard context.

## 🔐 Handling Roles and Permissions

Authentication and role management were core from day one.
I used Better-Auth, a simple but flexible library, to manage session tokens, user roles, and protected routes. The plugins make it easy to extend functionality.

Example snippet:

```ts
export const auth = betterAuth({
  appName: "Foreum",
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
});
```

so in the client area routes I can just add a simple guard in the layout to make sure only authenticated users can access those routes.

```ts
// src/routes/(client-area)/+layout.server.ts
import { redirect } from "@sveltejs/kit";

import { auth } from "$server/auth";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ request, url }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  const isProfilePage = url.pathname.match(/^\/profile\/[^\\/]+$/);

  if (!session?.user && !isProfilePage) {
    throw redirect(
      303,
      `/login?redirectTo=${encodeURIComponent(url.pathname)}`
    );
  }

  return {
    user: session?.user,
  };
};
```

And in the admin routes I can do the same but also check if the user has the admin role.

```ts
// src/routes/(admin)/+layout.server.ts
import { redirect } from "@sveltejs/kit";

import { auth } from "$server/auth";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ request, url }) => {
  const session = await auth.api.getSession({ headers: request.headers });

  if (!session?.user) {
    throw redirect(
      303,
      `/login?redirectTo=${encodeURIComponent(url.pathname)}`
    );
  }

  const hasAdminPermission = await auth.api.userHasPermission({
    body: {
      userId: session.user.id,
      permissions: {
        user: [
          "create",
          "list",
          "set-role",
          "ban",
          "impersonate",
          "delete",
          "set-password",
          "get",
          "update",
        ], //add admin-specific permissions
      },
    },
  });

  if (!hasAdminPermission) {
    throw redirect(303, "/");
  }

  return {
    user: session.user,
  };
};
```

I can repeat this for any other route group, then build out specific admin features like user management, category controls, and moderation tools within this protected route group.

## 🧩 Backend Integration with tRPC

tRPC acts as the bridge between frontend and backend, no REST endpoints, no GraphQL overhead, just fully typed procedures.

Example:

```ts
import { initTRPC, TRPCError } from "@trpc/server";
import pino from "pino";
import superjson from "superjson";

import type { Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

// Structured pino logger (development: pretty print)
const logger = (() => {
  if (process.env.NODE_ENV === "development") {
    // pretty-print transport for dev
    return pino({
      transport: {
        target: "pino-pretty",
        options: { colorize: true },
      },
    });
  }
  return pino();
})();

// Development-only request/response logger middleware
const devLogger = t.middleware(async ({ path, type, input, next }) => {
  if (process.env.NODE_ENV !== "development") return next();

  const start = Date.now();
  try {
    const result = await next();
    const duration = Date.now() - start;
    logger.debug(
      { path, type, duration, input, output: result.ok ? result.data : null },
      "trpc call"
    );
    return result;
  } catch (err) {
    const duration = Date.now() - start;
    logger.error({ path, type, duration, err }, "trpc error");
    throw err;
  }
});

// Export a devProcedure that routers can opt into for extra logging in development
export const devProcedure = t.procedure.use(devLogger);
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
// Use a base procedure that includes the devLogger in development so all procedures
// log request/response automatically without requiring opt-in.
const baseProcedure =
  process.env.NODE_ENV === "development"
    ? t.procedure.use(devLogger)
    : t.procedure;
export const publicProcedure = baseProcedure;

const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user as NonNullable<typeof ctx.user>,
    },
  });
});

export const protectedProcedure = baseProcedure.use(isAuthed);
```

## 🗃️ Managing Data with Drizzle ORM

One of the biggest lessons was data modeling.
Forums involve lots of relationships:

- users → threads → replies
- users → roles
- tags ↔ threads (many-to-many)
- categories → threads
- users ↔ threads (many-to-many)

Drizzle made it easy to define schemas with clarity:

## 🧩 Lessons Learned

- Plan your routes early. Nested layouts and multiple dashboards can get messy fast without structure.
- Use typed APIs. tRPC and Drizzle together drastically reduce runtime errors.
- Design for users, not just yourself. Think about roles, edge cases, and permissions from day one.
- Logging > Debugging. Logs are your best friend once multiple users start interacting.
- Consistency over cleverness. Simple, predictable patterns scale better than fancy one-off solutions.

## 🧭 What’s Next

- The next steps for the platform:
- Add reporting tools for community moderation
- Implement notifications for replies and mentions
- Deploy with Vercel + Neon (for Postgres)
- Possibly open it for small community testing
