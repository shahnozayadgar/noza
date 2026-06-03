export type Project = {
  slug: string;
  title: string;
  cardtitle?: string;
  role?: string;
  period?: string;
  summary: string;
  description?: string;
  tags: string[];
  links?: { label: string; href: string }[];
  cover?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "roomie",
    cardtitle: "Roomie",
    title: "Roomie - Most Compatible Roommate Finder",
    cover: "/images/projects/roomie/roomie-1.png",
    role: "UI/UX Design, Visual Graphics",
    period: "Sep 2023 - Dec 2023",
    summary: "Roomie is a mobile application that helps college students find compatible dormitory roommates through a structured, personality-driven matching process. At its core, the app guides users through a lifestyle survey that captures key habits — sleep schedules, noise tolerance, smoking preferences, and social tendencies — then translates those responses into a unique roommate archetype represented by a playful character. Students can browse potential matches through a familiar swipe-based interface, view detailed compatibility scores, and connect directly through in-app chat. By making personal habits visible and comparable upfront, Roomie removes the guesswork from the roommate search and replaces it with informed, confidence-based decisions. Rather than leaving students to navigate awkward conversations or random assignments, Roomie turns the process of finding a roommate into an approachable, even enjoyable experience — one that sets the foundation for a more harmonious and fulfilling college life.",
    description: "This project was completed as part of CS473: Introduction to Social Computing, where it received an outstanding award among 10+ competing teams. The implementation was a collaborative team effort, and I led the UI design, including concept development and visual graphics.",
    images: [
      "/images/projects/roomie/roomie-1.png",
      "/images/projects/roomie/roomie-2.png",
      "/images/projects/roomie/roomie-3.png",
      "/images/projects/roomie/roomie-4.png",
      "/images/projects/roomie/roomie-5.png",
      "/images/projects/roomie/roomie-6.png",
      "/images/projects/roomie/roomie-7.png",
      "/images/projects/roomie/roomie-8.png",
    ],
    tags: ["Deep Learning", "3D Reconstruction", "Computer Vision"],
    links: [
      { label: "Paper", href: "https://example.com/paper" },
      { label: "Code", href: "https://example.com/code" },
    ],
  }
];
