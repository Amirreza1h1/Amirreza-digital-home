import { assetPath } from '@/lib/asset-path';
import type { Project } from '@/types/project';

export const projects: Project[] = [
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
