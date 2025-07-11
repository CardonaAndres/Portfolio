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