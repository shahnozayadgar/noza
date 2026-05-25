import FadeIn from "@/components/motion/FadeIn";

export const metadata = {
  title: "About — Shahnoza Yadgar",
};

export default function AboutPage() {
  return (
    <FadeIn>
      <section className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-neutral-600">Bio goes here.</p>
      </section>
    </FadeIn>
  );
}
