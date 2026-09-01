export interface Profile {
  name: string;
  initials: string;
  tagline: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  phoneAlt: string;
  github: string;
  linkedin: string;
  currentRole: string;
  academicRole: string;
  institution: string;
  researchStatement: string;
  openToWork: boolean | null;
  openToResearch: boolean | null;
  languageTest: string;
  photo: string;
  workResume: string;
  academicResume: string;
}

export const profile: Profile = {
  name: 'Portfolio Owner',
  initials: 'PO',
  tagline: 'Professional headline to be added',
  headline: 'Portfolio introduction will appear here after the owner provides their information.',
  bio: 'Biography to be added.',
  location: '',
  email: '',
  phone: '',
  phoneAlt: '',
  github: '',
  linkedin: '',
  currentRole: '',
  academicRole: '',
  institution: '',
  researchStatement: 'Research interests and goals will be added after the owner provides them.',
  openToWork: null,
  openToResearch: null,
  languageTest: '',
  photo: '',
  workResume: '',
  academicResume: '',
};

export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [];
