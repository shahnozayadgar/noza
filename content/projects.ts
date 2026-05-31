export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: number;
  links?: { label: string; href: string }[];
  cover?: string;
};

export const projects: Project[] = [];
