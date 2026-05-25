export type Publication = {
  slug: string;
  title: string;
  venue: string;
  year: number;
  authors: string[];
  links?: { label: string; href: string }[];
};

export const publications: Publication[] = [];
