import FadeIn from "@/components/motion/FadeIn";
import { publications } from "@/content/publications";

export const metadata = {
  title: "Publications — Shahnoza Yadgar",
};

export default function PublicationsPage() {
  return (
    <FadeIn>
      <section className="space-y-8">
        <h1 className="text-3xl font-semibold tracking-tight">Publications</h1>
        {publications.length === 0 ? (
          <p className="text-neutral-500">No publications yet.</p>
        ) : (
          <ul className="space-y-6">
            {publications.map((p) => (
              <li key={p.slug} className="space-y-1">
                <h2 className="text-lg font-medium">{p.title}</h2>
                <p className="text-sm text-neutral-600">
                  {p.authors.join(", ")} · {p.venue}, {p.year}
                </p>
                {p.links && p.links.length > 0 && (
                  <ul className="flex flex-wrap gap-3 text-sm">
                    {p.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-700 underline underline-offset-4 hover:text-neutral-900"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </FadeIn>
  );
}
