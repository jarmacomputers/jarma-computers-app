export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Issue {
  id: string;
  title: string;
  category: string;
  description: string;
  diagnostics: string[];
  recommendations: string[];
  solutions: string[];
}

export interface AiSearchResult {
  answer: string;
  summary: string;
  externalSources: string[];
}
