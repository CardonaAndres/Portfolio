export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  role: string;
  duration: string;
  teamSize: string;
  impact: string;
  color: string;
  url: string;
  images_urls : string[];
  private: boolean;
};

export type ProjectSecondary = {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  color: string;
  github: string;
  demo: string;
  features: string[];
}

export interface TimelineItem {
  id: number;
  type: ItemType;
  title: string;
  company: string;
  location: string;
  date: string;
  current?: boolean;
  description: string;
  achievements: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface FilterType {
  id: ItemType | 'all';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export type ItemType = 'work' | 'education' | 'achievement';