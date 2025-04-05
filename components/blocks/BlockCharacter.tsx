import races from '@/data/races.json';
import classes from '@/data/classes.json';

export default function BlockCharacter({ character }: any) {

  const skills = [
    { name: "acrobatics", type: "dex" },
    { name: "animal handling", type: "wis"},
    { name: "arcana", type: "int"},
    { name: "athletics", type: "str"},
    { name: "deception", type: "cha"},
    { name: "history", type: "int"},
    { name: "insight", type: "wis"},
    { name: "intimidation", type: "cha"},
    { name: "investigation", type: "int"},
    { name: "medicine", type: "wis"},
    { name: "nature", type: "int"},
    { name: "perception", type: "wis"},
    { name: "performance", type: "cha"},
    { name: "persuasion", type: "cha"},
    { name: "religion", type: "int"},
    { name: "sleigth of hand", type: "dex"},
    { name: "stealth", type: "dex"},
    { name: "survival", type: "wis"}
  ]

  function modifierCalculator(type: string, proficiency: boolean, level: number) {
    let value = 10;

    switch(type) {
      case "str":
        value = character?.status?.str;
        break;
      case "dex":
        value = character?.status?.dex;
        break;
      case "con":
        value = character?.status?.con;
        break;
      case "int":
        value = character?.status?.int;
        break;
      case "wis":
        value = character?.status?.wis;
        break;
      case "cha":
        value = character?.status?.cha;
        break;
    }
        
    value = Math.floor((value - 10)/2);

    if(proficiency) {
      value += Math.ceil(level/4) + 1;
    }

    return value;
  }

  return (character != null) ? (
    <div className="grid gap-8 bg-white/75 p-6 rounded-3xl lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-bold">Character sheets</p>
          <p className="font-bold">id: {character?.id}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className="uppercase font-bold">{character?.name}</p>
          <p>level: {character?.level}</p>
          <p>exp: {character?.exp}</p>
          <p>alignment: {character?.alignment}</p>
          <div>
            <p className='font-bold'>races:</p>
            <div>
              {character?.races.length > 0 && character.races.map((race: any) => {
                let userRace = races.find(({ id }: any) => id === race.id);
                return (
                  <div
                    key={`race-${character.id}${race.id}`}
                  >
                    {userRace?.name}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <p className='font-bold'>class:</p>
            <div>
              {character?.classes.length > 0 && character.classes.map((classe: any) => {
                let userClasse = classes.find(({ id }: any) => id === classe.id);
                return (
                  <div
                    key={`classe-${character.id}${classe.id}`}
                  >
                    {userClasse?.name} | Level: {classe?.level}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold">status:</p>
          <div className="grid grid-cols-2 my-2 px-2 py-1 border border-solid border-black/20 lg:grid-cols-6">
            <p>str: {character?.status?.str || 10}</p>
            <p>dex: {character?.status?.dex || 10}</p>
            <p>con: {character?.status?.con || 10}</p>
            <p>int: {character?.status?.int || 10}</p>
            <p>wis: {character?.status?.wis || 10}</p>
            <p>cha: {character?.status?.cha || 10}</p>
          </div>
        </div>
        <div>
          <p className="font-bold">skills:</p>
          <div className="grid my-2 px-2 py-1 gap-1 text-sm text-black/80 border border-solid border-black/20 lg:grid-cols-2">
            {skills.map((skill: any) => {
              return (
                <p
                  key={`${character.id}-${skill.name}`}
                  className={`
                    ${character?.proficiency?.includes(skill.name) ? 'font-bold' : ''}
                  `}
                >
                  {skill.name}: {modifierCalculator(skill.type, character?.proficiency?.includes(skill.name), character.level) || 0}
                </p>
              )
            })}
          </div>
          <p className="text-xs italic">text in bold are with proficiency</p>
        </div>
        <div>
          <p className="font-bold">combat</p>
          <p>armor</p>
          <p>initiative</p>
          <p>walking speed</p>
          <p>hp - max | current (campaign) | bonus (campaign)</p>
          <p>hp dice - bonus</p>
          <p>saves - success e failure (campaign)</p>
        </div>
        <div>
          <p className="font-bold">bag</p>
          <p>equipment - weapon, armor, etc</p>
          <p className="font-bold">currency</p>
          <p>CP - copper coin - 1</p>
          <p>SP - silver coin - 10</p>
          <p>EP - electrum coin - 50</p>
          <p>GP - gold coin - 100</p>
          <p>PP - platinum coin - 1000</p>
        </div>
        <div>
          <p className="font-bold">attack / spells</p>
          <p>
            normal attacks - name | damage | type | bonus damage | description
            (optional)
          </p>
          <p>spells - levels: 0 to 9</p>
          <p>casting time | range | duration | description</p>
          <p>components: Voice</p>
          <p>saving throw | damage (scales)</p>
        </div>
        <div>
          <p className="font-bold">more:</p>
          <p>other proficiencies</p>
          <p>languages</p>
        </div>
        <div>
          <p className="font-bold">about:</p>
          <p>age</p>
          <p>height</p>
          <p>weight</p>
          <p>eyes color</p>
          <p>skin color</p>
          <p>hair color</p>
          <p>appearance - image needed</p>
          <p>personality traits</p>
          <p>ideals</p>
          <p>flaws</p>
          <p>bonds</p>
          <p>allies and organizations - name and symbol</p>
          <p>character history</p>
          <p>features and talents</p>
          <p>treasures</p>
        </div>
      </div>
      <div>image</div>
    </div>
  ) : (
    <div>
      <p className="font-bold">This character do not exist, try something else:</p>
    </div>
  )
}
