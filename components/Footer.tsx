export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-neutral-200">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} Shahnoza Yadgar
      </div>
    </footer>
  );
}
