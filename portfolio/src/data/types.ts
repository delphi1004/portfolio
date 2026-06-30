export interface Resource {
  image?: string;
  movie?: string;
  text?: string | null;
  height?: string;
  caption?: string | null;
  url?: string;
  urlLabel?: string;
}

export interface Project {
  title: string;
  description?: string | null;
  containerColumn: string;
  maxResourceWidth?: string;
  tools: string;
  main_image?: Resource | null;
  resources?: Resource[];
}

export interface WorkDescription {
  category: {
    name: string;
    description: string;
  };
  project: Project[];
}
