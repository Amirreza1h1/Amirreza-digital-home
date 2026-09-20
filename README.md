# Personal portfolio

A sanitized, data-driven portfolio starter built with the Next.js App Router, React, TypeScript, Tailwind CSS,
Framer Motion, MDX, and reusable UI primitives.

The application intentionally contains neutral placeholders and empty content collections. Add owner data in
`src/data/`, site metadata in `src/config/site.ts`, blog posts in `src/content/blog/`, and public assets in
`public/`.

## Local development

Requires Node.js 22 or newer and npm. GitHub Actions uses Node.js 24.

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

`npm run build` creates a static site in `out/`. Deploy the contents of that directory; no Node.js server,
backend, or database is needed. `npm start` (`next start`) and the legacy Docker setup are not compatible with
static export. For local preview, serve `out/` with a static HTTP server instead.

The post-build script corrects Windows-only navigation payload filenames emitted by Next.js 16.3.3. It leaves
Linux builds unchanged and does not modify dependencies or application content.

### GitHub Pages

In the GitHub repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**. The
workflow in `.github/workflows/deploy-pages.yml` builds with `npm ci` and deploys on pushes to `main` or a
manual workflow run. No deployment happens merely by editing these local files.

The workflow obtains `base_path` and `base_url` from `actions/configure-pages` and passes them as
`NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL`. This keeps Next.js routes, public downloads/images,
canonical URLs, robots, and sitemap consistent without hardcoding the repository name or mutating the
TypeScript config in CI. An empty base path also supports a user site or a custom domain.

To reproduce this repository's project-site build in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/Amirreza-digital-home'
$env:NEXT_PUBLIC_SITE_URL = 'https://amirreza1h1.github.io/Amirreza-digital-home'
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH, Env:NEXT_PUBLIC_SITE_URL
```

For this build, mount `out/` at `/Amirreza-digital-home/` when previewing. A build without these variables
uses root-relative paths and the existing localhost metadata default. Keep `out/`, `.next/`, and
`node_modules/` untracked. Search indexing remains disabled. Everything in `public/` is exported, including
certificates, the IELTS image, CV, and executable; review these files before publishing personal information.

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
