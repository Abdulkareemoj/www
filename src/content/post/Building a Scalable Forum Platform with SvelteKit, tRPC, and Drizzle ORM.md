---
title: "Building a Modern Scalable self-hostable Forum app"
description: "Building a Scalable Forum Platform with TanStack Start, tRPC, and Drizzle ORM"
publishDate: "02 Dec 2025"
tags: ["buidling", "react", "bookmarks", "rss", "drizzle-orm", "forum", "webdev"]
draft: false
---
# Building a Scalable Forum Platform with TanStack Start, tRPC, and Drizzle ORM

> “I'm genuinely bored, Lemme try building something actually useful and possibly monetizable.”

That’s what I told myself when I started this project, part learning experience, part portfolio piece, and part real community platform.

I wanted to understand what it really takes to build a system that multiple users can interact with accounts, roles, threads, categories, moderation, logging, yup, the whole full-stack deal.

That project eventually became **Foreum**.

---

## 🚀 Why Build a Forum?

This project started as a mix of goals:

* A learning project to get hands-on with TanStack Start, tRPC, and Drizzle
* A portfolio piece to demonstrate real-world architecture and design
* A potential community platform that could evolve into something functional

Forums are deceptively simple. They involve users, posts, categories, threads, roles, and moderation, all connected by a complex web of relationships.

It’s the perfect test for managing data flow, permissions, and scalability.

---

## ⚙️ The Stack

Initially I was using Next.js for this project but felt it was a bit too much for something like this because I also had another requirement for it.

The whole project should be self-hostable in one click, whether on a VPS, cloud provider, or built locally and deployed wherever you want.

Inspiration for it came from open-source projects like Apache Answers and Flarum.

While Next.js can definitely do this, after about a week of having started with Next I decided to move to a different framework for the project.

I eventually settled on **TanStack Start**.

The current stack looks like this:

| Layer              | Tech                       | Why                                                            |
| ------------------ | -------------------------- | -------------------------------------------------------------- |
| Frontend Framework | **React + TanStack Start** | Modern React framework with SSR and a great routing experience |
| Routing            | **TanStack Router**        | Type-safe routing with a powerful route structure              |
| API Layer          | **tRPC**                   | End-to-end type safety between frontend and backend            |
| Database ORM       | **Drizzle ORM**            | Schema-first, lightweight, type-safe database queries          |
| Database           | **PostgreSQL**             | Reliable relational database for the forum's data              |
| UI Components      | **shadcn/ui**              | Accessible and consistent design system                        |
| Auth System        | **Better Auth**            | Handles sessions, authentication, roles, and permissions       |

The combination has worked really well for this project.

The biggest thing I like is that I can keep the frontend, backend, and database types connected without having to maintain a separate API contract manually.

---

## 🧠 Architecture Overview

The platform is structured around user roles and modular routes.

The application has separate areas for authentication, the main client experience, and administration.

The current route structure covers things like:

```text
routes
├── auth
│   ├── forgot-password
│   ├── login
│   ├── reset-password
│   ├── signup
│   └── verify-email
│
├── client-area
│   ├── bookmarks
│   ├── categories
│   │   └── [slug]
│   ├── events
│   │   ├── new
│   │   └── [eventId]
│   ├── groups
│   │   └── [slug]
│   ├── messages
│   │   └── [conversationId]
│   ├── notifications
│   ├── profile
│   │   ├── badges
│   │   └── [username]
│   ├── resources
│   ├── search
│   ├── settings
│   ├── tags
│   │   └── [slug]
│   └── threads
│       ├── new
│       └── [threadId]
│           ├── delete
│           ├── edit
│           └── reply
│
├── admin
│   ├── appearance
│   ├── categories
│   ├── dashboard
│   ├── feature-flags
│   ├── moderation-logs
│   ├── reports
│   ├── settings
│   ├── themes
│   ├── threads
│   └── users
│
└── api
    └── trpc
```

The exact implementation has evolved as the project grew, but the idea has stayed the same: keep different areas of the application isolated and give each area its own context.

TanStack Router makes this especially nice because routes can be organized into nested layouts and protected sections.

Instead of repeating authentication logic everywhere, I can put the relevant checks at the appropriate route boundary.

That becomes especially useful once you have multiple dashboards and different permission levels.

---

## 🔐 Handling Roles and Permissions

Authentication and role management were core from day one.

I use **Better Auth** to manage authentication, sessions, user roles, and permissions.

The configuration stays relatively simple:

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

From there, protected parts of the application can check the current session before allowing access.

The important part for me wasn't just making a login page.

It was thinking about what happens **after** someone logs in.

Who can create something?

Who can edit it?

Who can delete it?

Who can moderate it?

Who gets access to the admin dashboard?

Those questions start becoming much more interesting once you have an actual community application.

For example, authenticated routes can check whether a session exists before continuing:

```ts
const session = await auth.api.getSession({
  headers: request.headers,
});

if (!session?.user) {
  throw redirect({
    to: "/login",
    search: {
      redirectTo: location.href,
    },
  });
}
```

And administrative routes can go a step further by checking permissions before allowing access.

That gives me a central place to enforce access instead of relying on hiding buttons in the UI.

---

## 🧩 Backend Integration with tRPC

tRPC acts as the bridge between the frontend and backend.

No REST endpoints, no GraphQL overhead, just fully typed procedures.

One of the things I wanted to experiment with in this project was how far I could take end-to-end type safety.

The routers are split into smaller, single-purpose modules rather than having one massive API definition.

There are routers for things like:

* Threads
* Categories
* Tags
* Users
* Bookmarks
* Notifications
* Settings

This makes it much easier to find where a particular piece of functionality belongs.

I also added structured logging around tRPC calls during development using **Pino**.

That gives me useful information when debugging things like:

```text
procedure
request type
input
duration
result
error
```

It's one of those things that seems unnecessary until something breaks.

Then suddenly your logs become your best friend.

---

## 🗃️ Managing Data with Drizzle ORM

One of the biggest lessons was data modeling.

Forums involve lots of relationships:

* users → threads → replies
* users → roles
* tags ↔ threads (many-to-many)
* categories → threads
* users ↔ threads (many-to-many)
* users → bookmarks
* users → notifications
* users → settings

Drizzle made it easy to define these schemas while keeping the database layer strongly typed.

This was probably one of the areas where the project taught me the most.

When you're building something simple, you can get away with not thinking too much about the data model.

A forum doesn't really let you do that.

Almost everything is connected to something else.

And once you add features like bookmarks, notifications, moderation, profiles, and permissions, those relationships start becoming important very quickly.

---

## 🐳 Making It Self-Hostable

One of the original reasons I moved away from my initial setup was that I wanted Foreum to be easy to deploy.

The current project supports Docker Compose with the application, PostgreSQL, and Caddy handling the reverse proxy and automatic TLS.

A basic deployment can be started with:

```bash
docker compose up -d
```

The project can also be deployed manually on a VPS or through supported cloud/serverless platforms.

That was always one of the goals for Foreum.

I don't want it to be a project that only works when deployed to one specific platform.

If someone wants to run their own community, they should be able to take the code and host it themselves.

---

## 🧩 Lessons Learned

* **Plan your routes early.** Nested routes, layouts, and multiple dashboards can get messy fast without structure.
* **Use typed APIs.** tRPC and Drizzle together drastically reduce runtime errors.
* **Design for users, not just yourself.** Think about roles, edge cases, and permissions from day one.
* **Logging > Debugging.** Logs are your best friend once multiple users start interacting with the application.
* **Think about the database early.** Forums have a lot of relationships, and changing the data model later can become painful.
* **Consistency over cleverness.** Simple, predictable patterns scale better than fancy one-off solutions.
* **Make deployment part of the project.** If the goal is self-hosting, deployment shouldn't be something you figure out after everything else is finished.

---

## 🧭 What’s Next

There are still quite a few things I want to work on:

* Better reporting and moderation tools
* More advanced notifications for replies and mentions
* Application-level rate limiting
* Watched words / automatic moderation
* More flexible permissions
* Better plugin and theme architecture
* Internationalization
* Digest emails
* Backup and restore
* Webhooks

Some of these are already on the roadmap, while others will probably change as the project evolves.

That's the nice thing about building something like this as an open-source project, I don't have to pretend the first version is going to get everything right.

For now, I'm mainly interested in continuing to improve the architecture and making Foreum easier to deploy, customize, and contribute to.

---

Foreum is open source and MIT licensed.

If you're interested in the project, you can find the source here:

**[github.com/Abdulkareemoj/foreum](https://github.com/Abdulkareemoj/foreum)**

It's still very much a work in progress, but that's also the point.

I'm building it to learn, to experiment, and hopefully eventually to have something that people can actually use.
