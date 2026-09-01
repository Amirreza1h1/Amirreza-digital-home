import type { Education, TeachingRole } from '@/types/education';

export interface Certificate {
  title: string;
  issuer: string;
  duration: string;
  status: 'completed' | 'in-progress';
  description: string;
}

export const education: Education[] = [];
export const teachingRoles: TeachingRole[] = [];
export const certificates: Certificate[] = [];
