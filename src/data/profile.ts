import { assetPath } from '@/lib/asset-path';
import profilePicture from '../../public/profile.png';

export interface Profile {
  name: string;
  initials: string;
  headline?: string;
  roles: string[];
  bio?: string;
  location?: string;
  previousLocation?: string;
  timeZone?: string;
  emails: string[];
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
  headline: 'Building toward Applied AI Engineering.',
  bio: 'I develop Python-based software and am working to strengthen my foundations in backend engineering, machine learning, and intelligent systems. My long-term goal is to build reliable, privacy-conscious AI applications grounded in sound engineering, evaluation, and practical usefulness. I enjoy learning about computers and programming and am looking for a junior opportunity where I can grow with training and guidance. My projects include a Python simulation and an English institute website in development with AI assistance.',
  roles: ['Python Developer', 'Computer Engineering Graduate'],
  location: 'Barrie, Canada',
  previousLocation: 'Mashhad, Iran',
  timeZone: 'America/Toronto',
  emails: ['amirrezahajizadeh2002@gmail.com', 'amirreza.haji.0926264710@gmail.com'],
  academicResume: assetPath('/Academic_CV.pdf'),
  // Static imports produce a new asset URL whenever the image contents change.
  photo: profilePicture.src,
};

export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [];
