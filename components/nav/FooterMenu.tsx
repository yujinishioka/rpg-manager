import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface FooterMenuProps {
  readonly className?: string;
}

export default function FooterMenu({ className }: FooterMenuProps) {
  const standardClassName = "text-sm text-white hover:text-black/90";
  
  return (
    <div className={twMerge("flex flex-col gap-x-4 gap-y-2 items-end justify-center md:justify-end", className)}>
      <Link href="/characters" className={standardClassName}>Characters</Link>
      <Link href="/campaigns" className={standardClassName}>Campaigns</Link>
      <Link href="/wiki" className={standardClassName}>Wiki</Link>
      <Link href="/notes" className={standardClassName}>Notes</Link>
      <Link href="/seetings" className={standardClassName}>Seetings</Link>
    </div>
  );
}
