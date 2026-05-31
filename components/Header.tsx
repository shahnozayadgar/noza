"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Contacts from "@/components/Contacts";
import { withBasePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Publications", href: "/#publications" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  const pathname = usePathname();

  const [currentHash, setCurrentHash] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash;
    }
    return "";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");

      if (pathname === path && hash) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        window.history.pushState(null, "", href);
        setCurrentHash(`#${hash}`);
      }
    }
  };

  return (
    <aside className="w-full shrink-0 border-b border-neutral-200 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:border-b-0">
      <div className="flex h-full flex-col gap-8 p-8">
        <div className="space-y-4">
          <div className="h-32 w-32 overflow-hidden rounded-md bg-white lg:h-72 lg:w-full">
            <Image
              src={withBasePath("/images/profile/profile.jpeg")}
              alt="Shahnoza Yadgarova"
              width={320}
              height={320}
              className="h-full w-full object-cover"
              priority
              unoptimized
            />
          </div>
          <Link href="/" className="block">
            <h1 className="text-xl font-semibold tracking-tight">
              Shahnoza Yadgarova
            </h1>
            <h2 className="pt-1 text-sm font-normal text-neutral-500">
              HCI Researcher & Software Engineer
            </h2>
          </Link>
          <Contacts vertical className="pt-2" />
        </div>

        <div className="border-t border-neutral-200" />

        <div className="flex flex-col gap-3">
          <p className="text-xs text-neutral-400">Jump To</p>
          <nav className="flex flex-row flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
          {nav.map((item) => {
            const isHashLink = item.href.includes("#");
            let active = false;

            if (isHashLink) {
              const [path, hash] = item.href.split("#");
              active = pathname === path && currentHash === `#${hash}`;
            } else {
              active = pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
            }

            const className = cn(
              "text-sm transition-colors",
              active
                ? "font-semibold text-blue-900"
                : "text-neutral-600 hover:text-neutral-900",
            );
            return (
              <Link
                key={item.href}
                href={item.href}
                className={className}
                onClick={(e) => handleHashClick(e, item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        </div>

        <div className="mt-auto hidden flex-col gap-1 text-xs text-neutral-500 lg:flex">
          <p>© {new Date().getFullYear()} Shahnoza Yadgarova</p>
          <p>Last edited May 25, 2026</p>
        </div>
      </div>
    </aside>
  );
}
