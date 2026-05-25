import FadeIn from "@/components/motion/FadeIn";

export default function HomePage() {
  return (
    <FadeIn>
      <section className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Shahnoza Yadgar
        </h1>
        <p className="text-lg text-neutral-600">
          Short tagline goes here — what you do, where you are.
        </p>
      </section>
    </FadeIn>
  );
}
