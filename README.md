# PinPulse AI

PinPulse AI is a demo-ready SaaS MVP for Pinterest creators who want to ideate, draft, preview, and publish pins from a single dashboard. The project is built with Next.js, TypeScript, Tailwind CSS, and a demo-first architecture that works without paid external APIs.

## Product overview

- Public marketing website and SaaS landing pages
- Demo-mode generator with sample AI output
- Dashboard scaffolding for overview, credits, settings, and publishing
- Configurable subscription and plan setup
- Clear separation between demo content and real integrations

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub-ready repo structure

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Demo mode

The application ships in demo mode by default. This means the app uses labeled mock AI and Pinterest flows instead of live API calls until real credentials are configured.

## Available public pages

- Home
- Features
- Pricing
- How It Works
- AI Pinterest Pin Generator overview
- Help Center
- About
- Contact
- Privacy Policy
- Terms
- Cookie preferences
- Login
- Sign Up

## Project phases

1. Phase 1: scaffold, branding, public website, responsive layout
2. Phase 2: authentication, Supabase schema, protected dashboard, demo seed data
3. Phase 3: AI generator, editing, preview, and saved pins
4. Phase 4: credit wallet, atomic deductions, usage history, plan limits
5. Phase 5: Pinterest OAuth, boards, publishing, and error handling
6. Phase 6: subscription integration, billing, and admin controls
7. Phase 7: security review, testing, accessibility, deployment documentation

## Notes

This repository intentionally keeps demo content clearly labeled and avoids claiming live API results when external providers are not configured.
