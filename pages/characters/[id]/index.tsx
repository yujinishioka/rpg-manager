import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Character as TCharacter } from "@/types";
import characters from "@/data/characters.json";
import BlockCharacter from "@/components/blocks/BlockCharacter";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState<TCharacter | null>(null);

  useEffect(() => {
    if(id) {
      const IdNumber = Number(id);
      const data = characters.find(({ id }) => id == IdNumber);
      data && setCharacter(data);
    }
  }, [router.isReady, id]);

  return (
    <div className="container custom-min-margin my-6">
      <BlockCharacter character={character}/>
      <div className="w-full my-4 px-3 py-2 bg-yellow-300">
        <p className="font-bold">note:</p>
        <p>information editing</p>
      </div>
    </div>
  );
}
