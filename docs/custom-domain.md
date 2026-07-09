# Custom Domain

## Step 1

Choose or acquire the final domain.

## Step 2

In Vercel project settings, add the custom domain. Add apex and/or `www` according to the chosen public hostname strategy.

## Step 3

At the DNS provider, add exactly the records currently instructed by Vercel. Do not hardcode stale DNS targets in project documentation.

## Step 4

Choose the canonical hostname:

- apex, or
- `www`

## Step 5

Configure redirects so one hostname is canonical.

## Step 6

Set:

```bash
NEXT_PUBLIC_SITE_URL=https://chosen-domain.example
```

## Step 7

Redeploy if required.

## Step 8

Verify:

- HTTPS
- certificate status
- apex route
- `www` redirect
- canonical metadata
- Open Graph metadata
- sitemap
- robots
- membership route
- privacy page
- mobile layout

The public membership route remains `/membership`. Adding the Google Form later must not require a new route, new QR code or changed campaign URL.
