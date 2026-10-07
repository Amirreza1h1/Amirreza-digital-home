import { assetPath } from '@/lib/asset-path';
import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'mashhad-ielts-house-website',
    title: 'Mashhad IELTS House Website',
    category: 'professional',
    tags: ['freelance'],
    featured: true,
    status: 'ongoing',
    overview:
      'An ongoing website project for Mashhad IELTS House, combining a public IELTS-focused website with an administrative workspace.',
    problem:
      'Give an IELTS institute a focused public presence while supporting key day-to-day institute workflows in one web product.',
    solution:
      'A responsive public website and administrative workspace, with the supplied screens showing content discovery, placement-session booking, teacher presentation, and administration views.',
    architecture: 'An ongoing web project built with Next.js, Django, PostgreSQL, and Docker.',
    techStack: ['Next.js', 'Django', 'PostgreSQL', 'Docker'],
    challenges: [],
    outcomes: [
      'A live public website with a responsive landing experience.',
      'Screens for an administrative workspace, search, placement-session booking, and teacher presentation.',
      'Ongoing development with further refinement planned before the project is complete.',
    ],
    lessonsLearned: [],
    teamSize: null,
    role: 'Developer',
    collaborators: [],
    endDate: null,
    links: {},
    demo: {
      title: 'Project Screens',
      image: assetPath('/projects/mashhad-ielts-house/01-landing.png'),
      caption:
        'Selected screens from the ongoing project. Administrative names, contact details, counts, and profiles shown in the supplied screens are clearly marked as fake data.',
      note: 'These screenshots show the current public and administrative interfaces. The project is ongoing.',
      instructions: [],
      screenshots: [
        {
          src: assetPath('/projects/mashhad-ielts-house/01-landing.png'),
          alt: 'Mashhad IELTS House public landing page on desktop',
        },
        {
          src: assetPath('/projects/mashhad-ielts-house/02-admin-dashboard.png'),
          alt: 'Mashhad IELTS House administrative dashboard using fake data',
        },
        {
          src: assetPath('/projects/mashhad-ielts-house/03-global-search.png'),
          alt: 'Mashhad IELTS House global search interface using fake data',
        },
        {
          src: assetPath('/projects/mashhad-ielts-house/04-booking-calendar.png'),
          alt: 'Mashhad IELTS House placement-session booking interface using fake data',
        },
        {
          src: assetPath('/projects/mashhad-ielts-house/05-teachers.png'),
          alt: 'Mashhad IELTS House teacher presentation page using fake data',
        },
        {
          src: assetPath('/projects/mashhad-ielts-house/06-mobile-landing.png'),
          alt: 'Mashhad IELTS House responsive public landing page on mobile',
        },
      ],
    },
  },
  {
    slug: 'cowards-game-simulation',
    title: "Cowards' Game Simulation",
    category: 'academic',
    featured: true,
    status: 'completed',
    overview:
      'A bachelor’s project with a downloadable Python desktop simulation, Bot Society, for exploring how six bot strategies interact under configurable game rules.',
    problem:
      'Explore how payoff rules, reproduction, and strategy choices affect a population of interacting bots over repeated rounds.',
    solution:
      'A PySide6 interface brings simulation settings, live charts, pause/resume controls, and saved game history into one window. Users can configure 2–5,000 bots and repeat runs with the same seed and settings.',
    architecture:
      'The documented desktop application separates the interface (app.py), simulation rules (engine.py), plotting (charts.py), local SQLite history (storage.py), and styling (theme.py). PyInstaller bundles Python and Qt into a Windows executable.',
    techStack: ['Python', 'PySide6 (Qt)', 'SQLite', 'PyInstaller'],
    challenges: [],
    outcomes: [
      'Downloadable Windows desktop application with no separate Python installation required.',
      'Four result charts show population, crashes, offspring, and survivor scores.',
      'Local history preserves settings, round results, final statistics, and plot images.',
    ],
    lessonsLearned: [],
    teamSize: null,
    role: null,
    collaborators: [],
    endDate: null,
    links: {
      github: 'https://github.com/Amirreza1h1/University/tree/main/Bachelor%20(BS)/Final%20Project',
      download: assetPath('/software.exe'),
    },
    demo: {
      image: assetPath('/game-result.png'),
      caption:
        'Example exported run: population by strategy, crashes per round, offspring, and surviving-bot scores. This run ends with no survivors; outcomes depend on settings and seed.',
      downloadLabel: 'Download for Windows (.exe · 47 MiB)',
      note: 'The executable is not code-signed. Python and Qt are bundled; no account or internet connection is required according to the project README.',
      instructions: [
        'Download software.exe and open it on Windows. Initial startup may take a few seconds.',
        'Choose New game and select between 2 and 5,000 bots across the six strategies.',
        'Adjust the round limit, starting score, random seed, payoffs, and reproduction rules, then choose Start simulation.',
        'Use Pause / Resume or Stop & save. Inspect Game details, Export plot, or reopen saved runs from Game history.',
      ],
    },
  },
];
export const featuredProjects = projects.filter(project => project.featured);
