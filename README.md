# Aarohan Cultural Society Website

Production-ready phase-one public website foundation for Aarohan Cultural Society, Hyderabad, Telangana, India.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS with CSS design tokens
- Zod for public environment validation
- ESLint, TypeScript typechecking and Vitest
- Vercel-compatible configuration

## Prerequisites

- Node.js 20 or newer
- pnpm

No lockfile existed in the repository, so this phase uses pnpm and should not be mixed with npm or Yarn lockfiles.

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The default public site URL is:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MEMBERSHIP_FORM_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CONTACT_ADDRESS=
```

`NEXT_PUBLIC_MEMBERSHIP_FORM_URL` is optional. When it is missing, `/membership` shows a safe availability message instead of a broken form. Do not hardcode a Google Form URL in source code.

## Scripts

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Routes

- `/`
- `/about`
- `/culture`
- `/events`
- `/events/durgotsab-2025`
- `/social-impact`
- `/leadership`
- `/gallery`
- `/membership`
- `/join`
- `/contact`
- `/privacy`

The `/membership` route is permanent and currently supports a configurable Google Forms renewal flow. It can later host a native form without changing the public URL.

## Deployment

Deploy on Vercel as a standard Next.js project. Set `NEXT_PUBLIC_SITE_URL` to the deployed origin, for example the Vercel preview or production URL. No Supabase, database, auth or payment variables are required in this phase.

## Source Notes

PDF source files were not present in this working checkout. Source-level traceability and asset extraction notes are documented in:

- `docs/content-sources.md`
- `docs/asset-extraction.md`
- `docs/membership-google-form.md`
- `docs/privacy-review.md`
