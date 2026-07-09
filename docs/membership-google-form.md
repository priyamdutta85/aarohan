# Membership Google Form Configuration

The public membership route is permanently `/membership`. The current phase uses a configurable Google Form URL and must not hardcode the form in source code.

## Setup Checklist

1. Create or finalize the official Aarohan membership renewal Google Form.
2. Obtain the approved public form URL from the form owner.
3. Confirm whether the URL is a Google Forms `/forms/d/e/.../viewform` URL. The app can derive a reliable embed only for that shape.
4. Set `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` in local `.env.local`.
5. Run `/membership` locally and verify the direct-link CTA.
6. Configure `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` in Vercel Preview environment variables.
7. Configure `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` in Vercel Production environment variables.
8. Redeploy after environment configuration changes.
9. Test `/membership` on desktop.
10. Test `/membership` on mobile.
11. Test the direct-link fallback even when an embedded form appears.
12. Preserve the `/membership` URL for future native membership functionality.

## Safe Behavior

- Missing URL: the page shows "Online membership renewal will be available here shortly."
- Malformed URL: the page shows a review-needed message.
- Non-Google or unknown URL: the page shows only a direct external link.
- Reliable Google Forms URL: the page shows a direct link and an embedded iframe.

The form destination is read only from trusted environment configuration. It is not accepted from query parameters.
