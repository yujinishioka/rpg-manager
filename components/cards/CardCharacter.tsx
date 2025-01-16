import Link from "next/link";
import classes from "@/data/classes.json";
import races from "@/data/races.json";

export default function CardCharacter({ data }: any) {
  return (
    <div className="flex flex-col relative bg-white rounded-b-lg text-black/70">
      <div className="w-full flex p-2">
        <div className="w-1/2">
          <h2>Races:</h2>
          {data?.races &&
            data.races.length > 0 &&
            data.races.map((race: any) => {
              const userRace = races.find(({ id }: any) => id === race.id);
              const userSubrace = userRace?.subrace?.division.find(({ id }: any) => id === race?.subrace);
              return (
                <p key={`race-${race.id}`}>
                  {userRace?.name}
                  {race.subrace !== null ? " - " + userSubrace?.name : ""}
                </p>
              )
            })}
        </div>
        <div className="ml-2">
          <h2>Class:</h2>
          {data?.classes &&
            data.classes.length > 0 &&
            data.classes.map((classe: any) => {
              const userClasse = classes.find(({ id }: any) => id === classe.id);
              return (
                <p key={`class-${classe.id}`}>
                  {userClasse?.name}: {classe.level}
                </p>
              )
            })}
        </div>
      </div>
      <Link
        href={`/characters/${data.id}`}
        className="flex justify-center bg-blue-400 rounded-b-lg px-4 py-2 text-white"
      >
        Character
      </Link>
    </div>
  );
}
