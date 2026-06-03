import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="space-y-3 rounded-lg p-4 transition-colors hover:bg-blue-200/10">
        <h2 className="font-medium">
          {project.cardtitle}
        </h2>
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
      </article>
    </Link>
  );
}
