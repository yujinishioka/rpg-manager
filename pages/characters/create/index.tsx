import BlockCharacterCreate from "@/components/blocks/BlockCharacterCreate";
import alignments from "@/data/alignments.json";
import classes from "@/data/classes.json";
import races from "@/data/races.json";

export default function CharacterCreate(): any {
  const attitude = ["Good", "Neutral", "Evil"];
  const morality = ["Lawful", "Neutral", "Chaotic"];

  const data = {
    alignments,
    attitude,
    classes,
    morality,
    races,
  };

  return (
    <div className="custom-min-margin my-6">
      <BlockCharacterCreate data={data} />
    </div>
  );
}
