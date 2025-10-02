export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  objectives: string[],
  activities?: string[],
  category: 'education' | 'healthcare' | 'development' | 'environment' | 'STEM' | 'STEM for Girls' | 'kiddie-stem';
  image: string;
  icon: string;
  gallery?: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  gallery?: string[];

  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  status: 'completed' | 'ongoing' | 'planned';
  beneficiaries: number;
  startDate: string;
  endDate?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  category?: string;
  linkedin?: string;
  twitter?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  thumbnail: string;
  alt: string;
  category: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
}

export interface SuccessStory {
  id: string;
  name: string;
  age: number;
  location: string;
  story: string;
  program: string;
  achievement: string;
  image: string;
  quote: string;
  date?: string;
}
