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

export type SkillLevel = 'Experto' | 'Avanzado' | 'Intermedio' | 'Básico' | 'Expert' | 'Advanced' | 'Intermediate' | 'Basic';

export interface TechSkill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: SkillLevel;
  color: string;
}

export type LevelColors = {
  [K in SkillLevel]: string;
};

export interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: TechSkill[];
}

export interface TechSkill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: SkillLevel;
  color: string;
}