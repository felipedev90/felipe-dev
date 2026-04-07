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
  text: string;
  included: boolean;
}

export interface Service {
  title: string;
  subtitle: string;
  plans: ServicePlan[];
  slug: string;
  description: string;
  oldPrice?: string;
  price: string;
  duration: string;
  highlight: boolean;
  features: ServiceFeature[];
}

export interface ServicePlan {
  name: string;
  slug: string;
  description: string;
  oldPrice?: string;
  price: string;
  duration: string;
  highlight: boolean;
  features: ServiceFeature[];
}

export interface AboutContent {
  image: string;
  title: string;
  subtitle: string;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  cta?: {
    label: string;
    href: string;
  };
}
