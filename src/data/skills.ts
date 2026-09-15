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
  { name: 'Java', category: 'Languages', iconFile: 'java.svg', context: 'Learning · Master’s studies' },
  { name: 'JavaScript', category: 'Languages', iconSlug: 'javascript', context: 'Coursework' },
  {
    name: 'Arcade',
    category: 'Desktop & Games',
    iconFile: 'arcade.jpg',
    context: 'Professional use · Ongoing learning',
  },
  {
    name: 'PySide6 (Qt)',
    category: 'Desktop & Games',
    iconFile: 'GUI.jpg',
    context: 'Professional use · Ongoing learning',
  },
  { name: 'HTML', category: 'Frontend', iconFile: 'html.svg', context: 'Coursework' },
  { name: 'CSS', category: 'Frontend', iconFile: 'css.svg', context: 'Coursework' },
  { name: 'Next.js', category: 'Frontend', iconSlug: 'nextjs', context: personalWebsite },
  { name: 'Django', category: 'Backend Frameworks', iconSlug: 'django', context: personalWebsite },
  {
    name: 'DRF (Django REST Framework)',
    category: 'Backend Frameworks',
    iconSlug: 'django-rest-framework',
  },
  { name: 'SQLite', category: 'Databases', iconFile: 'sqlite.svg', context: 'Coursework' },
  { name: 'PostgreSQL', category: 'Databases', iconSlug: 'postgresql', context: personalWebsite },
  { name: 'Docker', category: 'DevOps & Cloud', iconSlug: 'docker', context: personalWebsite },
  { name: 'Git', category: 'Build & Version Control', iconFile: 'git.svg', context: 'Learning · Self-study' },
  {
    name: 'Maven',
    category: 'Build & Version Control',
    iconFile: 'maven.svg',
    context: 'Learning · Master’s studies',
  },
  {
    name: 'JADE',
    category: 'Multi-Agent Systems',
    iconFile: 'jade.svg',
    context: 'Learning · Master’s studies',
  },
];

export const skillGroups: SkillGroup[] = [...new Set(skills.map(skill => skill.category))].map(category => ({
  category,
  skills: skills.filter(skill => skill.category === category),
}));
