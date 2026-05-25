export type Publication = {
  slug: string;
  title: string;
  venue: string;
  year: number;
  authors: string[];
  image?: string;
  links?: { label: string; href: string }[];
  award?: string;
};

export const publications: Publication[] = [
  {
    slug: "plantogether",
    title:
      "PlanTogether: Facilitating AI Application Planning Using Information Graphs and Large Language Models",
    venue: "CHI",
    year: 2025,
    authors: [
      "Dae Hyun Kim*",
      "Daeheon Jeong*",
      "Shakhnozakhon Yadgarova",
      "Hyungyu Shin",
      "Jinho Son",
      "Hariharan Subramonyam",
      "Juho Kim",
    ],
    image: "/images/publications/plantogether.png",
    links: [
      { label: "Paper", href: "#" },
      { label: "Video", href: "#" },
      { label: "Webpage", href: "#" },
    ],
  },
  {
    slug: "aineedsplanner",
    title:
      "AINeedsPlanner: A Workbook to Support Effective Collaboration Between AI Experts and Clients",
    venue: "DIS",
    year: 2024,
    authors: ["Dae Hyun Kim", "Hyungyu Shin", "Shakhnozakhon Yadgarova", "Jinho Son", "Hariharan Subramonyam", "Juho Kim"],
    image: "/images/publications/aineedsplanner.png",
    links: [
      { label: "Paper", href: "#" },
      { label: "Video", href: "#" },
      { label: "Webpage", href: "#" },
    ],
  },
  {
    slug: "areca",
    title: "Areca: A Design Speculation on Everyday Products Having Minds",
    venue: "DIS",
    year: 2023,
    authors: [
      "Hyungjun Cho",
      "Jiyeon Lee",
      "Bonhee Ku",
      "Yunwoo Jeong",
      "Shakhnozakhon Yadgarova",
      "Tek-Jin Nam",
    ],
    image: "/images/publications/areca.png",
    award: "Best Paper Honorable Mention Award (Top 5% of submissions)",
    links: [
      { label: "Paper", href: "#" },
    ],
  },
];
