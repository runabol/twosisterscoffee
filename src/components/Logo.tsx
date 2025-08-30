import Link from "next/link";

export function Logo() {
  return (
    <Link
      className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
      href="/"
      aria-label="Two Sisters Coffee"
    >
      <img src="/logo.png" alt="Two Sisters Coffee" className="h-14 w-auto" />
    </Link>
  );
}
