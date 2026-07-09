# Content Sources

This document records the source status for Prompt 1 content decisions.

## Source Availability

No source PDFs were found in the working repository during implementation.

Expected source files:

- `New General Body_letter_15 June 2026.pdf`
- `Sarbojonin Durgotsab 2025.pdf`

PDF page-level traceability is pending source-file verification. No PDF page numbers, extracted text blocks or source images were fabricated.

## Prompt-Provided Authoritative Content

| Source | Page | Content extracted or provided | Where used | Status | Ambiguity or conflict |
| --- | --- | --- | --- | --- | --- |
| Prompt text, 2026 General Body communication summary | Pending PDF verification | Current Executive Committee list for 2026 | `/leadership`, `src/content/leadership.ts` | Current | Must supersede older 2025 committee material if found later. |
| Prompt text, 2026 General Body communication summary | Pending PDF verification | Aarohan Cultural Society; Hyderabad, Telangana, India; Registration No. 353 of 2024; governance, bye-laws, roles and responsibilities | Footer, `/leadership`, `src/content/site.ts`, `src/content/leadership.ts` | Current | Older material reportedly contains `353/2004`; current site uses `Registration No. 353 of 2024`. |
| Prompt text | Pending PDF verification | Hero headline, supporting text and calls to action | `/`, `src/content/site.ts` | Current | None. |
| Prompt text | Pending PDF verification | Aarohan established in 2024, meaning "upwards", platform for art, language, folklore, literature, music, celebrations and community connection | `/about`, homepage, `src/content/about.ts` | Current | PDF confirmation pending. |
| Prompt text, Sarbojonin Durgotsab 2025 summary | Pending PDF verification | Durgotsab 2025 dates, venue and program concepts | `/events/durgotsab-2025`, homepage archive section, `src/content/events.ts` | Archival | Must never be presented as upcoming. |
| Prompt text, historical activity list | Pending PDF verification | Historical activities including Bhasha Divas, Saraswati Puja, Holi, Poila Boishakh, Tobu Mone Rekho, Matri Divas, East Bengal-Mohun Bagan engagement, Awabhan, Mahalaya, Durga Puja, Lakshmi Puja, Kali Puja, Orphanage Visit, Governor engagement, Annual Day and social activities | `/events`, homepage, `src/content/events.ts` | Historical | No future dates invented. |
| Prompt text, social-impact references | Pending PDF verification | Helping Hand Humanity, Indian Red Cross Society, Goonj, Telangana government approval, target of 1,000 trees each year, Akshaya Patra in relation to Annadanam | `/social-impact`, homepage, `src/content/social-impact.ts` | Mixed current/historical pending PDF verification | Partnership status, beneficiary totals and achieved impact numbers are not overstated. |
| Prompt text | Pending PDF verification | Women of Aarohan theme: Professional. Powerful. Passionate. Proactive. | Homepage, `/social-impact`, `src/content/social-impact.ts` | Current narrative | No names or biographies inferred from images. |
| Prompt 2 text | Pending approval | Membership route must use configurable Google Form URL via `NEXT_PUBLIC_MEMBERSHIP_FORM_URL` | `/membership`, `src/lib/env/config.ts`, `src/components/membership/membership-panel.tsx` | Current implementation architecture | No Google Form URL supplied; missing state is safe. |
| Prompt 2 text | Pending approval | Participation pathways: Become a Member, Renew Membership, Volunteer, Perform, Collaborate, Support a Social Initiative, Partner With Us | `/join`, `src/content/participation.ts` | Current narrative | Pathways without approved forms route to safe contact or existing internal pages. |
| Prompt 2 text | Pending Aarohan review | Privacy page principles for external membership form and Google Forms processing | `/privacy`, `src/content/privacy.ts`, `docs/privacy-review.md` | Draft policy copy | Requires Aarohan review before production publication. |

## Known Conflict

Registration reference conflict:

- Older material reportedly contains `353/2004`.
- Latest 2026 communication states `Registration No. 353 of 2024`.

Implementation uses `Registration No. 353 of 2024` everywhere.

## Pending Verification

When the PDFs are available, verify:

- exact page references for all leadership, registration and governance claims
- exact Durgotsab 2025 program text and venue presentation
- any authentic Aarohan logo or photo assets
- whether social-impact organizations are partners, collaborators, references or beneficiaries
- whether historical event titles require spelling adjustments
- approved Google Form URL for membership renewal
- approved public contact email and address, if any
- official gallery photographs and captions
