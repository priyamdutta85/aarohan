# QA Audit

## Route Audit

Verified route files exist for:

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

The production build prerenders all public routes.

## Content Audit

Repository scans confirmed:

- Aarohan established in 2024 is represented.
- Hyderabad, Telangana, India identity is represented.
- Current 2026 Executive Committee is used.
- Registration No. 353 of 2024 is used.
- Older `353/2004` discrepancy is documented.
- Durgotsab 2025 is archival.
- 27 September to 2 October 2025 is not shown as upcoming.
- PSR Garden, Narsingi is represented for the archival page.
- No future event dates are invented.
- No impact totals are invented.
- Tree target is phrased as a target, not an achievement.
- Social-impact organizations are referenced carefully.
- Gallery placeholders do not identify people or present themselves as event photographs.

## Accessibility Audit

Implemented:

- semantic landmarks
- skip navigation
- visible focus states
- accessible mobile menu labels
- meaningful image alt text
- reduced-motion CSS
- accessible gallery lightbox labels
- Escape and arrow-key lightbox behavior
- focus return after lightbox close
- external-link new-tab text for screen readers

Manual browser/device QA should still be completed in Vercel Preview at 320px, 375px, 390px, 768px, 1024px, 1280px and 1440px+.

## E2E Limitation

Automated browser E2E was not configured in this repository during this phase, so no Playwright/Cypress E2E pass is claimed. Route coverage, interaction helpers, security checks, lint, typecheck, unit tests and production build were run instead.
