import type { Project } from '@/types/project';

export const projects: Project[] = [];
export const featuredProjects = projects.filter(project => project.featured);
