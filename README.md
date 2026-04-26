# Flash Narrative Frontend

Enterprise-grade **PR Intelligence Dashboard** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

This application provides real-time narrative intelligence, reputation monitoring, reporting workflows, and API management for communications teams.

---

## 🧠 Overview

Flash Narrative is a multi-module dashboard designed to:

* Monitor brand sentiment and media coverage
* Analyze share of voice and crisis signals
* Generate executive-level reports
* Manage API access and integrations
* Configure workspace identity and branding

The frontend is **fully componentized**, **design-system driven**, and structured for **API-first integration**.

---

## 🏗️ Tech Stack

| Layer         | Technology                             |
| ------------- | -------------------------------------- |
| Framework     | Next.js (App Router)                   |
| Language      | TypeScript                             |
| Styling       | Tailwind CSS + Design Tokens           |
| UI System     | shadcn/ui + Radix UI                   |
| Icons         | lucide-react                           |
| State/Data    | Ready for React Query (TanStack Query) |
| Notifications | sonner                                 |
| Charts        | recharts                               |

---

## 📁 Project Structure

```
temp-next/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles + design tokens
│   │
│   ├── login/
│   │   └── page.tsx
│   │
│   └── dashboard/
│       ├── layout.tsx       # Dashboard wrapper (Toaster, layout shell)
│       ├── page.tsx         # Command Center
│       ├── intelligence/    # Analytics module
│       ├── reports/         # Reporting module
│       ├── api/             # API management
│       └── settings/        # Workspace configuration
│
├── components/
│   ├── dashboard/           # Feature components (charts, tables, cards)
│   ├── layout/              # Layout components (DashboardShell)
│   └── ui/                  # Reusable UI primitives (Button, Input, etc.)
│
├── lib/
│   ├── constants.ts         # Static/mock data (KPIs, reports, API keys)
│   ├── api-client.ts        # (TO BE IMPLEMENTED) API layer
│   ├── types.ts             # Shared TypeScript types
│   └── utils.ts             # Helpers (cn, formatters, etc.)
│
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind config
├── postcss.config.js        # PostCSS config
├── tsconfig.json            # TypeScript config
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run development server

```bash
pnpm dev
```

Open:

```
http://localhost:3000
```

---

## 📊 Application Modules

### 1. Command Center (`/dashboard`)

* Global KPI overview
* Crisis radar
* Portfolio monitoring

---

### 2. Intelligence (`/dashboard/intelligence`)

* Sentiment analysis
* Share of voice charts
* Mentions tracking
* AI-generated executive summaries

---

### 3. Reports (`/dashboard/reports`)

* Campaign-based reporting
* Report generation workflows
* Export and download actions

---

### 4. API Hub (`/dashboard/api`)

* API key management
* Request metrics (latency, usage)
* Webhook configuration

---

### 5. Settings (`/dashboard/settings`)

* Workspace identity
* Brand customization
* Visual theme configuration

---

## 🎨 Design System

The app uses a **token-based design system** defined in:

```
app/globals.css
```

Key concepts:

* CSS variables (OKLCH color space)
* Semantic tokens (`--background`, `--primary`, etc.)
* Utility classes layered via Tailwind
* Custom utilities (e.g. `.gradient-amber`, `.panel`)

---

## 🔌 API Integration (FOR BACKEND ENGINEERS)

Currently, the frontend uses **mock/static data** from:

```
lib/constants.ts
```

### 🔧 Integration Entry Point

Implement API logic inside:

```
lib/api-client.ts
```

Suggested pattern:

```ts
export async function getDashboardKPIs() {
  const res = await fetch("/api/kpis")
  return res.json()
}
```

---

### 🔁 Replace Mock Data

Example:

```ts
// BEFORE
import { COMMAND_KPIS } from "@/lib/constants"

// AFTER
const data = await getDashboardKPIs()
```

---

### Recommended Stack

* React Query (`@tanstack/react-query`) for data fetching
* Axios or Fetch API
* Zod for validation (already installed)

---

## Routing Architecture

Next.js App Router structure:

```
/dashboard/layout.tsx → wraps all dashboard pages
/dashboard/page.tsx → main dashboard
/dashboard/* → nested routes
```

Equivalent to TanStack:

```
Outlet → children
Routes → file-based routing
```

---

## Important Notes

### 1. Tailwind

* Configured via `tailwind.config.ts`
* Uses CSS variables for theming
* Ensure content paths include `/app`, `/components`, `/lib`

---

### 2. Client Components

Files using:

* hooks
* event handlers
* interactivity

must include:

```ts
"use client"
```

---

### 3. Dependencies

If you see errors like:

```
Module not found
```

Install missing packages:

```bash
pnpm add <package>
```

---

### 4. Turbopack

Disabled due to instability in complex setups.

---

## Testing & Validation Checklist

Before deployment:

* [ ] All routes load without 404
* [ ] No console errors
* [ ] UI fully styled (Tailwind working)
* [ ] Components render correctly
* [ ] Navigation works across dashboard

---

## 🚀 Deployment

Deploy via Vercel:

1. Push to GitHub
2. Import repo in Vercel
3. Ensure build command:

```bash
pnpm build
```

---

## Future Improvements

* Full API integration
* Authentication system
* Role-based access control
* Real-time updates (WebSockets)
* Data caching (React Query)
* Error boundaries and logging

---

## Contribution Notes

If you're continuing this project:

1. Start from `lib/api-client.ts`
2. Replace static constants with real endpoints
3. Maintain component modularity
4. Follow existing design tokens
5. Avoid hardcoding values in components

---

## Summary

This frontend is:

* Structurally complete 
* UI complete 
* Routing complete 
* Ready for backend integration 

---
