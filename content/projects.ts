export type Project = {
  slug: string;
  title: string;
  cardtitle?: string;
  role?: string;
  period?: string;
  collaborators?: string[];
  summary: string;
  myrole?: string;
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
    myrole: "This project was completed as part of CS473: Introduction to Social Computing, where it received an outstanding award among 10+ competing teams. The implementation was a collaborative team effort, and I led the UI design, including concept development and visual graphics.",
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
  },
  {
    slug: "urp",
    cardtitle: "Learning From Mistakes",
    title: "Designing a Human-Guided Knowledge Distillation Powered by Large Language Models for Chart Question Answering",
    cover: "/images/projects/urp/urp-1.png",
    role: "Project Lead",
    period: "Sep 2024 - Dec 2024",
    collaborators: ["Dae Hyun Kim", "Hyunwoo Kim", "Juho Kim"],
    summary: "Charts are essential tools for analyzing data, answering questions, and conveying critical information. Therefore researchers strive to develop base chart question-answering models to help with these tasks. While these work primarily focus on generating accurate results based on a given training dataset, they do not explore the potential for further improvement with continued training based on inaccurate results. To address this gap we explore ways to utilize feedback about inaccurate results to guide the improvement of the base chart question-answering model based on the principles of reinforcement learning with human feedback (RLHF) and reinforcement learning with AI feedback (RLAIF). The primary objective of this research is to develop a taxonomy of errors in Table QA models, which can be further utilized to classify errors happening in models and generate additional dataset queries based on inaccuracies. The scope of the study is confined to single-table SQL queries, with the goal of establishing a generalizable framework for learning from inaccuracies in other domains.\n\nWe developed a taxonomy of Table QA error types through a systematic analysis of erroneous queries produced by a state-of-the-art model, SmBoP. Errors were categorized into two primary classes: (1) Operating Matching Errors and (2) Table Reference Errors. Using this taxonomy, a rule-based classification module was implemented to categorize errors, and a large language model (LLM) was employed to generate additional data queries and paraphrased natural language questions tailored to these error types.\n\nThis work also proposes an experimental framework to evaluate the impact of error-specific augmentations by comparing models trained on datasets enriched with such augmentations against those trained on standard datasets. While experiments are ongoing, the preliminary taxonomy provides valuable insights for guiding future improvements in Table QA models and highlights the potential for generalizing this approach to other tasks and domains. Future efforts will validate these methods further and explore the integration of dynamic user feedback to refine the taxonomy and improve error-specific learning.",
    myrole: "This project was completed as part of an individually funded undergraduate research program at KAIST, where only a select number of proposals receive funding each semester. I led the project under the guidance of Professor Dae Hyun Kim and Professor Juho Kim, driving the overall research direction and conducting all experiments independently. The project culminated in a final report and a set of defined future directions. My contributions spanned the full research pipeline — from implementation and experimentation to report writing.",
    // images: [
    //   "/images/projects/roomie/roomie-1.png",

    // ],
    tags: ["Deep Learning", "3D Reconstruction", "Computer Vision"],
    links: [
      { label: "Paper", href: "https://example.com/paper" },
      { label: "Code", href: "https://example.com/code" },
    ],
  }
];
