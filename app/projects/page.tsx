import FadeIn from "@/components/motion/FadeIn";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Shahnoza Yadgar",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <FadeIn>
      <section className="space-y-8">
        <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
        {projects.length === 0 ? (
          <p className="text-neutral-500">Coming soon.</p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </FadeIn>
  );
}
