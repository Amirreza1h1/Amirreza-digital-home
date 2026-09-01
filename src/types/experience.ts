export type EmploymentType = 'full-time' | 'freelance' | 'internship';

export interface Experience {
  company: string;
  role: string;
  type: EmploymentType;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  techStack: string[];
}
