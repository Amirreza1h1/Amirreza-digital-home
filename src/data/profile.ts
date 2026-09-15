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
  headline: 'Constant resilience to improve',
  roles: ['Software Engineer', 'M.Sc. Artificial Intelligence'],
  location: 'Mashhad, Iran',
  plannedLocation: 'Toronto, Canada (in process)',
  timeZone: 'Asia/Tehran',
  emails: ['amirrezahajizadeh2002@gmail.com', 'amirreza.haji.0926264710@gmail.com'],
  phones: ['+98-930 634 1814', '+98-915 228 8744'],
  // Static imports produce a new asset URL whenever the image contents change.
  photo: profilePicture.src,
};

export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [];
