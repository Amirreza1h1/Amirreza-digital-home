import type { Education, TeachingRole } from '@/types/education';

export interface Certificate {
  title: string;
  issuer: string;
  duration?: string;
  issuedDate?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
}

export const education: Education[] = [
  {
    institution: 'Islamic Azad University, Mashhad Branch',
    degree: 'Master of Science',
    field: 'Computer Engineering — Artificial Intelligence',
    startDate: '2025-09',
    endDate: null,
    status: 'ongoing',
    gpa: null,
    gpaScale: null,
    coursework: [],
  },
  {
    institution: 'Quchan University of Technology',
    degree: 'Bachelor’s degree',
    field: 'Computer Engineering',
    startDate: '2020-09',
    endDate: '2025-07-20',
    status: 'completed',
    gpa: '14.69',
    gpaScale: '20',
    // Verified against the supplied transcript, pages 1–3.
    coursework: [
      { title: 'Project', grade: '20 / 20' },
      { title: 'Discrete Mathematics', grade: '16.73 / 20' },
      { title: 'Algorithm Design', grade: '16.40 / 20' },
    ],
    labResults: [
      { title: 'Logic Circuits Lab', grade: '20 / 20' },
      { title: 'Electrical and Electronic Circuits Lab', grade: '20 / 20' },
      { title: 'Microprocessor I Lab', grade: '18.75 / 20' },
      { title: 'Computer Architecture Lab', grade: '18.50 / 20' },
    ],
    project: {
      title: "Cowards' Game Simulation",
      url: 'https://github.com/Amirreza1h1/University/tree/main/Bachelor%20(BS)/Final%20Project',
    },
  },
];
export const teachingRoles: TeachingRole[] = [];
export const certificates: Certificate[] = [
  {
    title: 'Python Intermediate',
    issuer: 'Sololearn',
    issuedDate: '21 October 2024',
    status: 'completed',
    image: '/Intermediate.jpg',
    description:
      'Completed the Python Intermediate course, demonstrating theoretical and practical understanding.',
  },
  {
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    issuedDate: '26 August 2023',
    status: 'completed',
    image: '/begginer.jpg',
    description:
      'Completed the Introduction to Python course, demonstrating theoretical and practical understanding.',
  },
  {
    title: 'Fundamentals of Agents',
    issuer: 'Hugging Face',
    duration: 'Planned learning goal',
    status: 'planned',
    description:
      'Target credential in my Applied AI roadmap, through the AI Agents Course. Not yet earned; verification details will be added after completion.',
  },
];
