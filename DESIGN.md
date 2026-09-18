# A friendly digital home

The portfolio uses warm paper and forest green in light mode, deep green and mint in dark mode. Soft sans-serif headings,
organic portrait framing, and gently flowing SVG paths make the space welcoming. Warm peach and blue accents
highlight decorative floating panels and connected shapes. All content remains in `src/data/`; the
design adds no services or invented achievements.

## Where to customize

- **Colors:** `src/styles/globals.css`. Edit the `:root` values for light mode and `.dark` values for dark
  mode. `--primary` controls accents and main buttons; `--primary-foreground` is their text color.
  `--background`, `--card`, `--surface`, `--border`, and `--muted-foreground` control the surfaces and
  supporting text.
- **Heading style and decorative effects:** the “Digital field notes” section at the bottom of that
  stylesheet. `.editorial-title` controls headings; `.portrait-orbit` controls the slow decorative
  rotation. `--flow-warm` and `--flow-cool` control secondary accents. The `.flow-*` rules control flowing
  paths and floating shapes; their SVG geometry lives in `src/components/shared/FlowArtwork.tsx`.
- **Home composition:** `src/features/home/Hero.tsx`, `FeaturedProjects.tsx`, and `ContactCTA.tsx`.
- **Inner-page headings:** `src/components/shared/PageHero.tsx` and `SectionHeader.tsx`.
- **Navigation and branding:** `src/components/layout/Navbar.tsx` and `Logo.tsx`.
- **Project cards:** `src/features/projects/ProjectCard.tsx`. Preview images come from each project's existing
  `demo.image` field.
- **Skills layout:** `src/features/skills/SkillsGrid.tsx`; each category has a side label on wide screens.
  Icons remain top-aligned in their cards.
- **Motion:** `src/app/providers.tsx` applies the visitor's reduced-motion preference to Framer Motion. The
  CSS reduced-motion rule disables decorative animations and smooth scrolling.

Keep the foreground/background pairs readable in both themes. No new font downloads or animation packages are
required.
