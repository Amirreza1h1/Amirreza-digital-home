import profilePicture from '../../public/profile.png';

export interface Profile {
  name: string;
  initials: string;
  headline?: string;
  roles: string[];
  bio?: string;
  location?: string;
  plannedLocation?: string;
  timeZone?: string;
  emails: string[];
  phones: string[];
  photo?: string;
  workResume?: string;
  academicResume?: string;
  researchStatement?: string;
  openToWork?: boolean;
  openToResearch?: boolean;
  languageTest?: string;
}

export const profile: Profile = {
  name: 'Amirreza Hajizadeh',
  initials: 'Amirreza1h1',
  headline: 'Python developer focused on learning to build practical AI applications.',
  bio: 'My direction is Python and Applied AI, with a particular interest in AI agents and privacy-first, local applications. My experience includes Python work and an AI-assisted English institute website using Django and Next.js. My next project goal is a Local AI Companion with conversation history, memory, and private document retrieval.',
  roles: ['Software Engineer', 'M.Sc. Artificial Intelligence'],
  location: 'Mashhad, Iran',
  plannedLocation: 'Toronto, Canada (in process)',
  timeZone: 'Asia/Tehran',
  emails: ['amirrezahajizadeh2002@gmail.com', 'amirreza.haji.0926264710@gmail.com'],
  phones: ['+98-930 634 1814', '+98-915 228 8744'],
  academicResume: '/Academic_CV.pdf',
  // Static imports produce a new asset URL whenever the image contents change.
  photo: profilePicture.src,
};

export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [];
