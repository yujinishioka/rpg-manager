export default function BlockCharacter({ character }: any) {
  return (character != null) ? (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-bold">Character sheets</p>
          <p className="font-bold">id: {character?.id}</p>
        </div>
        <div>
          <p className="uppercase">{character?.name}</p>
          <p>level: {character.level}</p>
          <p>exp</p>
          <div>
            <p>races</p>
            <p>class and level</p>
          </div>
          <p>alignment</p>
        </div>
        <div>
          <p className="font-bold">status:</p>
          <div className="grid grid-cols-2 lg:grid-cols-6">
            <p>str: 10</p>
            <p>dex: 10</p>
            <p>con: 10</p>
            <p>int: 10</p>
            <p>wis: 10</p>
            <p>cha: 10</p>
          </div>
          <p className="font-bold">obs 1: modifier</p>
          <p className="font-bold">obs 2: saving throws - boolean</p>
        </div>
        <div>
          <p className="font-bold">skills</p>
          <div className="grid my-1 text-sm lg:grid-cols-2">
            <p>acrobatics: 10 (DEX)</p>
            <p>animal handling: 10 (WIS)</p>
            <p>arcana: 10 (INT)</p>
            <p>athletics: 10 (STR)</p>
            <p>deception: 10 (CHA)</p>
            <p>history: 10 (INT)</p>
            <p>insight: 10 (WIS)</p>
            <p>intimidation: 10 (CHA)</p>
            <p>investigation: 10 (INT)</p>
            <p>medicine: 10 (WIS)</p>
            <p>nature: 10 (INT)</p>
            <p>perception: 10 (WIS)</p>
            <p>performance: 10 (CHA)</p>
            <p>persuasion: 10 (CHA)</p>
            <p>religion: 10 (INT)</p>
            <p>sleigth of hand: 10 (DEX)</p>
            <p>stealth: 10 (DEX)</p>
            <p>survival: 10 (WIS)</p>
          </div>
          <p className="font-bold">obs 1: relacionado aos status</p>
          <p className="font-bold">obs 2: bonus - boolean</p>
          <p className="font-bold">
            obs 3: inspiration - boolean (apenas campanha)
          </p>
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
