# Membership Google Form Configuration

The public membership route is permanently `/membership`. The current phase uses a configurable Google Form URL and must not hardcode the form in source code.

## Setup Checklist

1. Receive the approved Google Form URL.
2. Verify public access settings.
3. Verify whether login is required.
4. Verify whether the form accepts the intended audience.
5. Verify mobile usability.
6. Test the direct link.
7. Test embed suitability. The app can derive a reliable embed only for Google Forms `/forms/d/e/.../viewform` URLs.
8. Set locally: `NEXT_PUBLIC_MEMBERSHIP_FORM_URL=`.
9. Set `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` in Vercel Preview.
10. Redeploy Preview.
11. Test `/membership`.
12. Set `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` in Vercel Production.
13. Redeploy Production.
14. Test `/membership` in Production.
15. Preserve the same public URL: `/membership`.

## Safe Behavior

- Missing URL: the page shows "Online membership renewal will be available here shortly."
- Malformed URL: the page shows a review-needed message.
- Non-Google or unknown URL: the page shows only a direct external link.
- Reliable Google Forms URL: the page shows a direct link and an embedded iframe.

The form destination is read only from trusted environment configuration. It is not accepted from query parameters.
