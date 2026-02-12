---
title: 'node-react-ts-docker'
description: 'Containerized full-stack template with React frontend and Node.js/Express backend'
date: 'Mar 18 2024'
demoURL: 'https://github.com/Abdulkareemoj/node-react-ts-docker'
repoURL: 'https://github.com/Abdulkareemoj/node-react-ts-docker'
imageUrl: 'https://res.cloudinary.com/dcc1yy1zv/image/upload/v1759321228/www/Screenshot_2025-09-30_at_22-13-14_Create_TanStack_App_-_node-client_a5xsa8.png'
altText: 'Node React TypeScript Docker'
---

# Node React TypeScript Docker

A modern full-stack application template with containerized frontend and backend services. Perfect for developers looking to quickly scaffold a production-ready full-stack application with best practices built-in.

## Overview

This repository provides a complete template for building full-stack applications using modern JavaScript/TypeScript technologies. It includes a React frontend with Vite for fast development, a Node.js/Express backend with TypeScript for type safety, and Docker containerization for consistent development and production environments. The setup follows industry best practices with proper linting, code quality tools, and a well-organized project structure.

## Features

- **Frontend**: React with TypeScript and Vite for lightning-fast development and builds
- **Backend**: RESTful API built with Node.js, Express, and TypeScript for type-safe server code
- **Database**: MongoDB with Mongoose for flexible data persistence
- **Containerization**: Docker setup for both frontend and backend ensuring consistency across environments
- **Code Quality**: ESLint configuration for TypeScript and React to maintain code quality
- **Type Safety**: Full TypeScript support for both frontend and backend code
- **Development Ready**: Hot reload and debugging capabilities for productive development

## Tech Stack

- **Frontend**:
  - [React](https://reactjs.org/) - UI library
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
  - [Vite](https://vitejs.dev/) - Next-generation bundler
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling (optional)

- **Backend**:
  - [Node.js](https://nodejs.org/) - JavaScript runtime
  - [Express](https://expressjs.com/) - Web framework
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe code
  - [MongoDB](https://www.mongodb.com/) - NoSQL database
  - [Mongoose](https://mongoosejs.com/) - ODM for MongoDB

- **DevOps**:
  - [Docker](https://www.docker.com/) - Containerization
  - [ESLint](https://eslint.org/) - Code linting and quality

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (v16 or higher) for local development
- MongoDB for database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulkareemoj/node-react-ts-docker.git
   cd node-react-ts-docker
   ```

2. Using Docker (recommended):
   ```bash
   docker-compose up --build
   ```
   This will start both frontend (http://localhost:3000) and backend (http://localhost:5000)

3. Local development without Docker:
   ```bash
   # Install dependencies
   npm install

   # Start backend
   cd server && npm run dev

   # In another terminal, start frontend
   cd client && npm run dev
   ```

## Project Structure

```
node-react-ts-docker/
├── client/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Express backend
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── README.md
```
