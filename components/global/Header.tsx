import Link from "next/link";
import { ItemMenu } from "@/types";
import Menu from "@/components/nav/Menu";

export default function Header() {
  const menuItens: ItemMenu[] = [
    { name: "Characters", href: "characters" },
    { name: "Campaigns", href: "campaigns" },
    { name: "Wiki", href: "wiki" },
    { name: "Notes", href: "notes" },
    { name: "Seetings", href: "seetings" },
  ];

  return (
    <>
      <div className="fixed w-[90vw] top-2 py-4 rounded-3xl bg-secondary/80">
        <div className="container flex items-center justify-between gap-3 text-white lg:flex-col">
          <Link href="/" className="flex flex-col items-center gap-1">
            <p>logo</p>
            <p>RPG maker</p>
          </Link>
          <Menu items={menuItens} />
        </div>
      </div>
      <div className="w-full h-24 lg:h-32"/>
    </>
  );
}
