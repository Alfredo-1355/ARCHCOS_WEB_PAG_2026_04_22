export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServicePageData {
  id: string; // The URL slug (e.g., 'residential')
  heroImage: string;
  title: string;
  whatSection: {
    title: string;
    description: string;
    hook: string;
  };
  howSection: {
    title: string;
    steps: ServiceProcessStep[];
  };
  gallery: string[];
}
