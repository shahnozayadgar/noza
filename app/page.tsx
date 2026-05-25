import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { publications } from "@/content/publications";

const AUTHOR_NAME = "Shakhnozakhon Yadgarova";

export default function HomePage() {
  return (
    <FadeIn>
      <div className="max-w-2xl space-y-39">
        <section id="about" className="scroll-mt-16 space-y-6">
          <p className="text-sm leading-relaxed text-neutral-900">
            I&apos;m a software engineer at NEOALI and a creative technologist
            exploring new interactions and observing human sense-making in
            human–AI interaction.
          </p>
          <p className="text-sm leading-relaxed text-neutral-900">
            I previously studied at KAIST School of Computing, where I worked
            as an HCI researcher with Prof. Juho Kim.
          </p>
        </section>

        <section id="publications" className="scroll-mt-16 space-y-8">
          <h2 className="text-l font-semibold tracking-tight">
            Publications
          </h2>
          {publications.length === 0 ? (
            <p className="text-neutral-500">No publications yet.</p>
          ) : (
            <ul className="space-y-16">
              {publications.map((p) => (
                <li key={p.slug} className="flex gap-8">
                  <div className="relative h-24 w-40 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 space-y-2">
                    <p className="text-xs text-neutral-600">
                      {p.venue}, {p.year}
                    </p>
                    <h3 className="text-sm font-medium text-neutral-900">
                      {p.title}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {p.authors.map((author, i) => (
                        <span key={author}>
                          {author === AUTHOR_NAME ? (
                            <strong className="font-medium text-neutral-900">
                              {author}
                            </strong>
                          ) : (
                            author
                          )}
                          {i < p.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                    {p.links && p.links.length > 0 && (
                      <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs">
                        {p.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-600 transition-colors hover:text-neutral-900 hover:underline hover:underline-offset-4"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </FadeIn>
  );
}
