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
    <article className="space-y-8">
      <h1 className="text-2xl font-medium tracking-tight text-center">
        {project.title}
      </h1>

      {(project.role || project.period) && (
        <div className="grid grid-cols-2 gap-4 text-sm text-center">
          {project.role && (
            <div>
              <span className="text-neutral-500">Role</span>
              <p >{project.role}</p>
            </div>
          )}
          {project.period && (
            <div>
              <span className="text-neutral-500">Period</span>
              <p>{project.period}</p>
            </div>
          )}
        </div>
      )}

      <p>{project.summary}</p>

      {project.description && <p>{project.description}</p>}

      {/* {project.cover && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-200">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )} */}

      {project.images && project.images.length > 0 && (
        <div className="space-y-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-200"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

    </article>
  );
}
