# Klajdi Portfolio

Production-ready portfolio website built with **Next.js + TypeScript + Tailwind CSS**.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint

## Project Structure

```txt
app/
  layout.tsx            # Global layout + SEO metadata
  page.tsx              # Portfolio sections UI
  globals.css           # Global styles
content/
  portfolio.ts          # ✅ Single editable content/config source
```

## Edit Personal Content (Single File)

All personal/profile content is centralized in:

- `content/portfolio.ts`

Edit this file to update:

- Hero text and CTAs
- About section
- Skills
- Projects & experience
- Contact links/email
- SEO/site metadata (title, description, keywords, canonical URL)

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

- <http://localhost:3000>

## Production Checks

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

## Deploy to Vercel

From project root:

```bash
npx vercel --prod
```

If first-time setup is needed, Vercel CLI will prompt for auth/project linking.

## Accessibility + SEO Defaults Included

- Semantic sections (`header`, `main`, `section`, `footer`)
- Skip link for keyboard users
- Focus-visible styles on interactive elements
- Responsive layout across mobile/tablet/desktop
- Metadata configured in `app/layout.tsx`:
  - title + description
  - Open Graph
  - Twitter card
  - robots
  - metadataBase
