---
title: "I Finally Made ReadrSync Ship Itself"
description: "Making a Test → Build → Relase Pipline for a monorepo setup"
publishDate: "02 Aug 2026"
tags: ["buidling", "react", "bookmarks", "rss", "drizzle-orm", "forum", "webdev"]
draft: false
---

# Making a Test → Build → Relase Pipline for a monorepo setup

I've been working on **ReadrSync**, a local-first bookmark and RSS reader that I've been building for desktop, web, and mobile.

It's probably one of the bigger side projects I've worked on recently. What started as a bookmark app has turned into a Turborepo monorepo with a React web app, a Tauri desktop app, an Expo/React Native mobile app, shared packages, a local SQLite database, and a bunch of things I didn't originally plan for.

One of those things was CI/CD.

And after putting it off for a while, I finally got it working.

## The goal

I wanted to be able to do this:

```bash
git tag desktop-v0.0.1
git push --tags
```

and have GitHub take care of everything else.

Run the tests.

Build the desktop app.

Generate the installers.

Create the release.

Then do the same thing for mobile and get an APK out of EAS.

It sounds pretty simple when you put it like that. Thankfully i found a repo with my sort of setup that already automated theirs so i just went through to try recreate everything.

## The first problem was the monorepo

ReadrSync uses Turborepo and pnpm, with a few shared packages for things like the database and application logic.

The desktop app also reuses a lot of the web application's code, so the dependency graph isn't exactly straightforward. 

But it also means i dont have to rewrite a lot of stuff.

My first attempt at CI tried to be clever and only install the workspaces I thought the desktop build needed. Turns out you still need the specific folders depndencies installed when building ina monorepo in github actions.

```bash
pnpm install --filter desktop --frozen-lockfile
```

Much less exciting.

Much more reliable.

## Then mobile broke

This was probably my favorite bug.

The mobile application worked perfectly on my machine.

EAS Build disagreed.

After several minutes, the build failed with:

```text
Failed to construct transformer:
Error: Cannot find module 'babel-preset-expo'
```

The weird part was that `babel-preset-expo` was available locally.

It turned out my local setup was using a hoisted node linker, which made dependencies available that the package hadn't actually declared directly.

EAS was doing a clean install.

So the dependency wasn't there.

The fix was literally adding it to `package.json`.

```json
{
  "devDependencies": {
    "babel-preset-expo": "~57.0.6"
  }
}
```

**A clean CI environment is really good at telling you what your project actually depends on.**

## I also managed to break my own git hook

I have Biome running as a pre-push hook because apparently I enjoy having my own tools tell me I'm wrong.

At one point it started rejecting a push because a file wasn't formatted correctly.

I fixed the file.

It still rejected the push.

Git showed a clean working tree.

Biome still said the file was different.

Eventually I found out it was a line-ending issue between CRLF and LF.

Sigh...

## Eventually it worked

After fixing the dependency issues, identifiers, formatting problems, and a bunch of smaller things, I finally had two workflows I was happy with.

For desktop:

```text
desktop-v0.0.1
        ↓
     tests
        ↓
   Tauri build
        ↓
   installers
        ↓
 GitHub Release
```

And for mobile:

```text
mobile-v0.0.1
        ↓
     tests
        ↓
    EAS Build
        ↓
      APK
        ↓
 GitHub Release
```

The first desktop release produced **8 installer assets**.

The mobile workflow produced a **122 MB Android APK** and attached it directly to the GitHub release.

And the best part is that I don't have to manually do any of it.

I push a tag.

Then I walk away.

## Why I bothered

This probably sounds like a lot of work just to avoid running a few commands myself.

And honestly, it is.

But ReadrSync is supposed to be a real application that I can eventually distribute to people.

The repository currently supports desktop, web, and mobile, with shared application logic and a local-first SQLite setup.

Once you have multiple platforms, "I'll just build it locally" stops being a very good release strategy.

With this i can just automate the build process and focus on code.

## What I learned

The biggest thing I learned wasn't really GitHub Actions.

It was that **development environments hide problems**.

My machine had dependencies that CI didn't.

My local dependency layout was different from EAS.

Git was normalizing line endings that Biome didn't like.

That's actually one of the things I like about setting up CI for personal projects. You get a very honest answer to the question:

**"Can someone else build this?"**

If the answer is no, you probably haven't finished setting up the project yet.

## What's next?

ReadrSync is still very much a work in progress.

The core idea is still pretty simple: a place for bookmarks and RSS feeds that works across my devices while keeping the data local by default.

There's still a lot I want to build around it, better sync, a browser extension, full-text search, notifications and plenty of smaller things.

But now there's one less thing I have to worry about.

When I'm ready to release a new desktop or mobile version, I don't have to remember how to build it.

I just create a tag.

And the machines take it from there.

---

The whole project is open source if you want to poke around:

**[ReadrSync on GitHub](https://github.com/Abdulkareemoj/ReadrSync)**

I'm sure the CI pipeline will break again the moment I change something important.

But at least now it'll break on GitHub instead of 20 minutes into a release I was trying to do manually. 😄
