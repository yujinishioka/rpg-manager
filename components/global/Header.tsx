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
    <div className="py-4 bg-secondary">
      <div className="container flex items-center justify-between text-white">
        <Link href="/">RPG maker</Link>
        <p>logo</p>
        <Menu items={menuItens} />
      </div>
    </div>
  );
}
