export type SkillCategory =
  | 'Languages'
  | 'Desktop & Games'
  | 'Build & Version Control'
  | 'Multi-Agent Systems'
  | 'Backend Frameworks'
  | 'Frontend'
  | 'Databases'
  | 'Message Brokers & Task Queues'
  | 'DevOps & Cloud'
  | 'AI & Machine Learning';

export interface Skill {
  name: string;
  category: SkillCategory;
  iconSlug?: string;
  iconFile?: string;
  context?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}
