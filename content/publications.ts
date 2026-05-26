export type Publication = {
  slug: string;
  title: string;
  venue: string;
  year: number;
  authors: string[];
  image?: string;
  links?: { label: string; href: string }[];
  award?: string;
  video?: string;
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
    video: "/videos/publications/plantogether.mp4",
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/full/10.1145/3706598.3714044" },
      { label: "Webpage", href: "https://plantogether.kixlab.org/" },
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
    video: "/videos/publications/aineedsplanner.mp4",
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/abs/10.1145/3643834.3661577" },
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
    award: "Best Paper Honorable Mention Award (5%)",
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/abs/10.1145/3563657.3596002" },
      { label: "Video", href: "https://www.youtube.com/watch?v=7ZBoIbG43ys" },
    ],
  },
];
