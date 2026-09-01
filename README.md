# Personal portfolio

A sanitized, data-driven portfolio starter built with the Next.js App Router, React, TypeScript, Tailwind CSS,
Framer Motion, MDX, and reusable UI primitives.

The application intentionally contains neutral placeholders and empty content collections. Add owner data in
`src/data/`, site metadata in `src/config/site.ts`, blog posts in `src/content/blog/`, and public assets in
`public/`.

## Local development

Requires Node.js 22 and npm.

```bash
npm install
npm run dev
```

## Checks

```bash
npm run type-check
npm run format:check
npm run build
```

There is no lint or automated test script in this starter. TypeScript, Prettier, and the production build are
the available quality gates.

## Deployment

The included Docker configuration uses the standard Node.js 22 image and exposes the application on port 3000.
`docker compose up --build` runs it locally. `nginx/portfolio.conf.example` is a domain-neutral host
reverse-proxy example; choose the real domain and TLS setup before production use.

## Structure

- `src/app/`: routes, layouts, metadata, sitemap, and robots
- `src/components/`: layout, shared components, and UI primitives
- `src/features/`: feature-oriented portfolio sections
- `src/data/`: typed portfolio content
- `src/content/blog/`: MDX articles
- `src/config/`: site-wide configuration
- `src/lib/`: blog and SEO helpers
- `src/theme/`: design tokens and animation definitions
- `src/types/`: shared content types
- `src/hooks/` and `src/utils/`: reusable behavior and helpers
