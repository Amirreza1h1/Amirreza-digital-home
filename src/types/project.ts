export type ProjectCategory = 'professional' | 'academic' | 'freelance';
export type ProjectStatus = 'completed' | 'ongoing';

/** A person who contributed to a project. The owner is added automatically from the profile. */
export interface Collaborator {
  /** Full name (first + last). */
  name: string;
  /** Main area of expertise, e.g. 'Frontend Engineer', 'ML Researcher'. */
  specialty: string;
  /** Role on this specific project, e.g. 'Mobile Developer'. */
  role: string;
  /** LinkedIn profile — full URL or just the username/vanity slug. */
  linkedin?: string;
  /** Path to a photo under /public (e.g. '/images/team/name.jpg'). Falls back to initials. */
  photo?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  status: ProjectStatus;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  challenges: string[];
  outcomes: string[];
  lessonsLearned: string[];
  teamSize: number | null;
  role: string | null;
  /** Teammates on this project. The owner is prepended automatically — do not list them here. */
  collaborators: Collaborator[];
  startDate: string;
  endDate: string | null;
  links: {
    github?: string;
    live?: string;
  };
}
