export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  readingTime: number;
  content?: string;
}

export interface TocItem {
  id: string;
  title: string;
  depth: number;
}
