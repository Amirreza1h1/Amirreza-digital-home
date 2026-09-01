export type SkillCategory =
  | 'Languages'
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
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}
