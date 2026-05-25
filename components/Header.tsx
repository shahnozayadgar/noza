"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/cv.pdf", label: "CV", external: true },
];



export default function Header() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-neutral-200 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:border-b-0">
      <div className="flex h-full flex-col justify-between gap-8 p-8">
        <div className="space-y-6">
          <div className="hidden aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-neutral-100 lg:flex">
            <User className="h-16 w-16 text-neutral-400" strokeWidth={1.25} />
          </div>
          <Link href="/" className="block">
            <h1 className="text-xl font-semibold tracking-tight">
              Shahnoza Yadgarova
            </h1>
            <h2 className="text-sm font-normal text-neutral-500 pt-2">
              HCI Researcher & Software Engineer
            </h2>
          </Link>
        </div>

        <nav className="flex flex-row flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
          {nav.map((item) => {
            const active =
              !item.external &&
              !item.href.includes("#") &&
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
          <p>© {new Date().getFullYear()} Shahnoza Yadgarova</p>
        </div>
      </div>
    </aside>
  );
}
