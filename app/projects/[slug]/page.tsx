import { notFound } from "next/navigation";
import Image from "next/image";
import { getProject, getAllProjects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

// Required for static export - tells Next.js which pages to build
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        {project.title}
      </h1>

      {project.cover && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-200">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <p className="text-lg text-neutral-700">{project.summary}</p>
    </article>
  );
}
