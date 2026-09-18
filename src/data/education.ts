import type { Education, TeachingRole } from '@/types/education';

export interface Certificate {
  title: string;
  issuer: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
}

export const education: Education[] = [];
export const teachingRoles: TeachingRole[] = [];
export const certificates: Certificate[] = [
  {
    title: 'Fundamentals of Agents',
    issuer: 'Hugging Face',
    duration: 'Planned learning goal',
    status: 'planned',
    description:
      'Target credential in my Applied AI roadmap, through the AI Agents Course. Not yet earned; verification details will be added after completion.',
  },
];
