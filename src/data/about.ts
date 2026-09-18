export interface WorkArea {
  title: string;
  description: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export const workAreas: WorkArea[] = [
  {
    title: 'Python development',
    description:
      'Experience with Python, Arcade, and PySide6 (Qt), with continued practice in independent programming.',
  },
  {
    title: 'Web applications',
    description:
      'Personal English institute website experience using Django, Next.js, PostgreSQL, and Docker with AI-assisted coding.',
  },
  {
    title: 'Applied AI direction',
    description:
      'Planned learning in AI agents, local models, retrieval, and memory, leading toward a Local AI Companion.',
  },
];
export const quickFacts: QuickFact[] = [
  { label: 'Career direction', value: 'Python / Applied AI development' },
  { label: 'Project goal', value: 'Privacy-first Local AI Companion' },
];
export const coreStack: string[] = ['Python', 'Django', 'Next.js', 'PostgreSQL', 'Docker'];
