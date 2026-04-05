export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  github?: string;
  image: string;
}

export interface ServiceFeature {
  label: string;
  included: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: ServiceFeature[];
  highlighted?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
