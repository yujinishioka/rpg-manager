import Link from "next/link";
import BlockCharacterAccordion from "@/components/blocks/BlockCharacterAccordion";
import characters from "@/data/characters.json";

export default function Characters(): any {
  return (
    <div className="container custom-min-margin my-6">
      <div className="flex mb-6 items-start justify-between">
        <h1 className="uppercase">Characters</h1>
        <Link
          href="/characters/create"
          className="bg-primary text-white rounded-lg px-2 py-1"
        >
          + new character
        </Link>
      </div>
      <BlockCharacterAccordion data={characters} />
    </div>
  );
}
