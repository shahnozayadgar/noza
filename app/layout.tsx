import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahnoza Yadgarova",
  description: "Personal site of Shahnoza Yadgarova.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="mx-auto flex min-h-full max-w-[1440px] flex-col bg-white px-6 pt-6 text-neutral-900 lg:flex-row lg:px-16 lg:pt-18">
        <Header />
        <main className="w-full max-w-4xl flex-1 pb-12 lg:pt-8 lg:pb-16 lg:pl-16">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
