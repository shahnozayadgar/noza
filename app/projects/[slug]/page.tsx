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

      {(project.role || project.period || project.collaborators) && (
        <div className={`grid gap-4 text-sm text-center ${project.collaborators && project.collaborators.length > 0 ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {project.role && (
            <div>
              <span className="text-neutral-500">Role</span>
              <p>{project.role}</p>
            </div>
          )}
          {project.period && (
            <div>
              <span className="text-neutral-500">Period</span>
              <p>{project.period}</p>
            </div>
          )}
          {project.collaborators && project.collaborators.length > 0 && (
            <div>
              <span className="text-neutral-500">Collaborators</span>
              <p>{project.collaborators.join(", ")}</p>
            </div>
          )}
        </div>
      )}

      <p className="whitespace-pre-line">{project.summary}</p>

      {project.myrole && <p>{project.myrole}</p>}

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
