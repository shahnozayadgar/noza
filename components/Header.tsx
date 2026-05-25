"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/cv.pdf", label: "CV", external: true },
];

const socials = [
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
  { href: "https://github.com/shahnozayadgar", label: "GitHub" },
  { href: "mailto:dzhuraevmunir@gmail.com", label: "Email" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-neutral-200 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:border-b-0">
      <div className="flex h-full flex-col justify-between gap-8 p-8">
        <div className="space-y-6">
          <Link href="/" className="block">
            <h1 className="text-xl font-semibold tracking-tight">
              Shahnoza Yadgar
            </h1>
          </Link>
          <div className="hidden aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-neutral-100 lg:flex">
            <User className="h-16 w-16 text-neutral-400" strokeWidth={1.25} />
          </div>
        </div>

        <nav className="flex flex-row flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
          {nav.map((item) => {
            const active =
              !item.external &&
              (pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href)));
            const className = cn(
              "text-sm transition-colors",
              active
                ? "font-semibold text-neutral-900"
                : "text-neutral-600 hover:text-neutral-900",
            );
            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden flex-col gap-3 text-xs text-neutral-500 lg:flex">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-neutral-900"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Shahnoza Yadgar</p>
        </div>
      </div>
    </aside>
  );
}
