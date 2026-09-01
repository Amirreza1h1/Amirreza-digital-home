export interface Profile {
  name: string;
  initials: string;
  headline?: string;
  roles: string[];
  bio?: string;
  location?: string;
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
  initials: 'Amh',
  headline: 'Constant resilience to improve',
  roles: ['AI - Python', 'Vibe Coder - Web site', 'Software Engineer'],
  location: 'Mashhad, Iran',
  timeZone: 'Asia/Tehran',
  emails: ['amirreza.haji.0926264710@gmail.com', 'amirrezahajizadeh2002@gmail.com'],
  phones: ['+98-930 634 1814', '+98-915 228 8744'],
  photo: '/profile.png',
};

export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [];
