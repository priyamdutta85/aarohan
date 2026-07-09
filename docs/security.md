# Security Hardening

## Summary

This is a public content site with a Google Forms-based membership renewal bridge. It does not include a database, authentication, payments, native membership persistence, admin dashboard or server-side form submission.

## Implemented Protections

- Membership form destination is read only from `NEXT_PUBLIC_MEMBERSHIP_FORM_URL`.
- Membership URL validation rejects malformed URLs and non-HTTPS production URLs.
- No membership redirect target is accepted from query parameters.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- No `dangerouslySetInnerHTML` is used.
- Google Forms iframe appears only for reliably convertible `docs.google.com/forms/d/e/.../viewform` URLs.
- Missing membership configuration shows a polished safe message instead of a blank iframe.
- Security headers are configured in `next.config.ts`.

## Headers

Configured headers include:

- `Content-Security-Policy`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `Strict-Transport-Security`

## CSP Tradeoff

The CSP allows `frame-src https://docs.google.com` so the approved Google Form can be embedded when the configured URL is suitable. Removing that source would break the intended membership embed.

The CSP currently allows inline scripts/styles because Next.js and Tailwind-generated app output may require inline runtime/style behavior. Revisit this after deployment if a stricter nonce-based policy is introduced.

## Audit Findings

Repository scans found no real API keys, service credentials, bank account numbers, IFSC details, payment QR details, personal phone numbers, passport details or private addresses. Privacy documentation intentionally names sensitive data types only to state that they should not be collected.

## Dependency Notes

Dependencies are managed with pnpm. Run `pnpm install`, `pnpm lint`, `pnpm typecheck`, `pnpm test` and `pnpm build` before deployment. Review dependency advisories as part of release operations.
