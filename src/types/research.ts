export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  icon: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint' | 'thesis';
  abstract: string;
  link?: string;
  doi?: string;
}
