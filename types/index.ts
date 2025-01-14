export type AbilityScores = {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
};

export type Character = {
  id: number;
  name: string;
  level: number;
  races: Race[];
  classes: ClassT[];
};

export type ClassT = {
  id: number;
  name: string;
  level: number;
}

export type Detail = {
  title: string;
  description: string;
};

export type ItemMenu = {
  name: string;
  href: string;
};

export type Race = {
  id: number;
  name: string;
  subrace: string | null;
}

export type SkillsProficiency = {
  acrobatics: boolean;
  animal_handling: boolean;
  arcana: boolean;
  athletics: boolean;
  deception: boolean;
  history: boolean;
  insight: boolean;
  intimidation: boolean;
  investigation: boolean;
  medicine: boolean;
  nature: boolean;
  perception: boolean;
  performance: boolean;
  persuasion: boolean;
  religion: boolean;
  sleight_of_hand: boolean;
  stealth: boolean;
  survival: boolean;
};
