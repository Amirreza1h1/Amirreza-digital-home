export type EducationStatus = 'completed' | 'ongoing';

export interface Coursework {
  title: string;
  grade: string;
}

export interface TeachingRole {
  institution: string;
  course: string;
  semester: string;
  instructor: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  gpa: string | null;
  gpaScale: string | null;
  startDate: string;
  endDate: string | null;
  status: EducationStatus;
  coursework: Coursework[];
  labResults?: Coursework[];
  project?: { title: string; url: string };
}
