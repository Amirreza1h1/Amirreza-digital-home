import type { Skill, SkillGroup } from '@/types/skill';

const personalWebsite = 'Personal project · English institute website · AI-assisted coding';

export const skills: Skill[] = [
  {
    name: 'Python',
    category: 'Languages',
    iconSlug: 'python',
    context: 'Professional use · Ongoing learning',
  },
  { name: 'C++', category: 'Languages', iconSlug: 'cplusplus', context: 'Learning · Bachelor’s studies' },
  { name: 'Java', category: 'Languages', icon: 'Coffee', context: 'Learning · Master’s studies' },
  { name: 'JavaScript', category: 'Languages', iconSlug: 'javascript', context: 'Coursework' },
  {
    name: 'Arcade',
    category: 'Desktop & Games',
    icon: 'Gamepad2',
    context: 'Professional use · Ongoing learning',
  },
  {
    name: 'PySide6 (Qt)',
    category: 'Desktop & Games',
    icon: 'PanelsTopLeft',
    context: 'Professional use · Ongoing learning',
  },
  { name: 'HTML', category: 'Frontend', icon: 'Code', context: 'Coursework' },
  { name: 'CSS', category: 'Frontend', icon: 'Palette', context: 'Coursework' },
  { name: 'Next.js', category: 'Frontend', iconSlug: 'nextjs', context: personalWebsite },
  { name: 'Django', category: 'Backend Frameworks', iconSlug: 'django', context: personalWebsite },
  {
    name: 'DRF (Django REST Framework)',
    category: 'Backend Frameworks',
    iconSlug: 'django-rest-framework',
  },
  { name: 'SQLite', category: 'Databases', icon: 'Database', context: 'Coursework' },
  { name: 'PostgreSQL', category: 'Databases', iconSlug: 'postgresql', context: personalWebsite },
  { name: 'Docker', category: 'DevOps & Cloud', iconSlug: 'docker', context: personalWebsite },
  { name: 'Git', category: 'Build & Version Control', icon: 'GitBranch', context: 'Learning · Self-study' },
  {
    name: 'Maven',
    category: 'Build & Version Control',
    icon: 'Package',
    context: 'Learning · Master’s studies',
  },
  { name: 'JADE', category: 'Multi-Agent Systems', icon: 'Network', context: 'Learning · Master’s studies' },
];

export const skillGroups: SkillGroup[] = [...new Set(skills.map(skill => skill.category))].map(category => ({
  category,
  skills: skills.filter(skill => skill.category === category),
}));
