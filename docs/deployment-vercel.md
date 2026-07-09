# Vercel Deployment

## Deployment Steps

1. Ensure code is pushed to GitHub.
2. Open Vercel.
3. Import repository: `https://github.com/priyamdutta85/aarohan`.
4. Verify Next.js framework detection.
5. Verify the root directory is the repository root.
6. Configure Preview environment variables.
7. Configure Production environment variables.
8. Configure Development variables if needed.
9. Deploy Preview.
10. Test Preview.
11. Deploy or promote Production.
12. Verify all public routes.
13. Verify membership configuration.
14. Verify no secret leakage.
15. Verify mobile experience.

## Build Settings

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output: standard Next.js/Vercel output
- Package manager: pnpm `11.7.0`

## Environment Variables

Required:

- `NEXT_PUBLIC_SITE_URL` for production canonical URLs, sitemap and Open Graph URLs.

Optional:

- `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` for Google Form membership renewal.
- `NEXT_PUBLIC_CONTACT_EMAIL` for public contact email.
- `NEXT_PUBLIC_CONTACT_ADDRESS` for approved public address text.

Do not configure Supabase, database, fake credentials or payment variables for this phase.

## Preview

Set `NEXT_PUBLIC_SITE_URL` to the Vercel Preview URL if canonical testing is needed. Configure `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` only after the Google Form URL is approved.

## Production

Set `NEXT_PUBLIC_SITE_URL` to the production origin, for example the chosen custom domain after DNS is ready. Redeploy after changing environment variables.
