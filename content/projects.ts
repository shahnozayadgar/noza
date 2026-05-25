export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: number;
  links?: { label: string; href: string }[];
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-assistant-platform",
    title: "AI Assistant Platform",
    summary: "A comprehensive platform for building and deploying AI-powered assistants with natural language processing capabilities. Features include real-time conversation handling, context management, and integration with multiple LLM providers.",
    tags: ["TypeScript", "React", "Node.js", "OpenAI API", "WebSockets"],
    year: 2024,
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Live Demo", href: "https://example.com" },
      { label: "Documentation", href: "https://docs.example.com" }
    ],
    cover: "/images/projects/ai-assistant.png"
  },
  {
    slug: "data-visualization-toolkit",
    title: "Interactive Data Visualization Toolkit",
    summary: "A modular toolkit for creating interactive data visualizations with D3.js. Supports various chart types, real-time data updates, and responsive design for seamless cross-device experience.",
    tags: ["D3.js", "JavaScript", "Data Viz", "SVG", "Canvas"],
    year: 2024,
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Examples", href: "https://examples.com" }
    ],
    cover: "/images/projects/data-viz.png"
  },
  {
    slug: "hci-research-tools",
    title: "HCI Research Tools Suite",
    summary: "A collection of tools designed to facilitate human-computer interaction research. Includes experiment builders, data collection modules, and analysis pipelines for user studies.",
    tags: ["Python", "React", "Research", "HCI", "User Studies"],
    year: 2023,
    links: [
      { label: "Paper", href: "https://dl.acm.org" },
      { label: "Code", href: "https://github.com" },
      { label: "Video Demo", href: "https://youtube.com" }
    ],
    cover: "/images/projects/hci-tools.png"
  }
];
