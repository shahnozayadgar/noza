import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Shahnoza Yadgar",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <FadeIn>
      <section className="space-y-8">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        {projects.length === 0 ? (
          <p className="text-neutral-500">No projects yet.</p>
        ) : (
          <ul className="space-y-6">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-medium group-hover:underline">
                      {p.title}
                    </h2>
                    <span className="text-sm text-neutral-500">{p.year}</span>
                  </div>
                  <p className="mt-1 text-neutral-600">{p.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </FadeIn>
  );
}
