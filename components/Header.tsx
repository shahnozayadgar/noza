"use client";

import Link from "next/link";
import Image from "next/image";
import Contacts from "@/components/Contacts";

export default function Header() {

  return (
    <aside className="w-full shrink-0 border-b border-neutral-200 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:border-b-0">
      <div className="flex h-full flex-col justify-between gap-8 p-8">
        <div className="space-y-4">
          <div className="hidden w-full overflow-hidden rounded-md bg-white lg:block lg:h-72">
            <Image
              src="/images/profile/profile.jpeg"
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

        {/* <nav className="flex flex-row flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
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
        </nav> */}

        <div className="hidden flex-col gap-1 text-xs text-neutral-500 lg:flex">
          <p>© {new Date().getFullYear()} Shahnoza Yadgarova</p>
          <p>Last edited May 25, 2026</p>
        </div>
      </div>
    </aside>
  );
}
