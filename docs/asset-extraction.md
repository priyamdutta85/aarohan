# Asset Extraction

## Source PDFs

No source PDFs were present in the working repository, so no official image, logo or photo assets were extracted.

Expected files:

- `New General Body_letter_15 June 2026.pdf`
- `Sarbojonin Durgotsab 2025.pdf`

## Generated Placeholder Artwork

| Output filename | Method | Source | Quality limitations | Use |
| --- | --- | --- | --- | --- |
| `public/images/aarohan/hero-cultural-artwork.png` | AI-generated bitmap artwork using the image generation tool | Prompt-derived visual direction; no official Aarohan logo or photos | Not official, not source-verified, no identifiable real people, no logo | Homepage hero and Open Graph image |
| `public/images/aarohan/aarohan-official-logo.png` | User-supplied official PNG, resized with `sips -Z 1000` for web delivery | `/Users/arpitasamanta/Downloads/aarohan logo PNG.png` | Official artwork supplied after initial build; web copy is 1000 x 648 PNG | Navigation, footer and structured data logo |
| `public/images/gallery/*-placeholder.svg` | Hand-authored SVG placeholder artwork | Prompt-derived category structure; no official photos available | Not official event photography, not source-verified, no identifiable real people, no logo | `/gallery` placeholder grid and lightbox |

## Official Asset Requirement

The supplied official Aarohan PNG is now used for site branding. A vector SVG or transparent high-resolution master would still be useful for future print and layout variants.

Official source-verified gallery photography is still required. The current gallery visuals are placeholders and must not be described as photographs or evidence of attendance.

When PDFs are available:

1. Inspect embedded assets visually and programmatically.
2. Prefer reliable vector extraction for any official logo.
3. Preserve aspect ratio and original colors.
4. Store verified assets under `public/images/aarohan/`, `public/images/events/`, `public/images/culture/` or `public/images/gallery/`.
5. Update this document with source filename, page number, extraction method and quality limitations.
