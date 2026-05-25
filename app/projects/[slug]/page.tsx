import { notFound } from "next/navigation";
import FadeIn from "@/components/motion/FadeIn";
import { getAllProjects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <FadeIn>
      <article className="max-w-2xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm text-neutral-500">{project.year}</p>
        </header>
        <p className="text-neutral-700">{project.summary}</p>
        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {project.links && project.links.length > 0 && (
          <ul className="space-y-1">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-neutral-900 underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </article>
    </FadeIn>
  );
}
