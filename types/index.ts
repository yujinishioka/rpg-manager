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
  exp: number;
  alignment: string;
  races: {
    id: number;
    subrace: number | null;
  }[];
  classes: {
    id: number;
    level: number;
  }[];
  status: AbilityScores;
  proficiency?: string[];
  languages?: string[];
  background?: string | null;
  details?: {
    age: number | null,
    height: number | null,
    weight: number | null,
    eyes_color: string | null,
    skin_color: string | null,
    hair_color: string | null,
    personality_traits: string | null,
    ideals: string | null,
    flaws: string | null,
    bonds: string | null,
    allies_and_organizations: {
      name: string | null,
      url_symbol: string | null
    },
    character_history: string | null,
    features_and_talents: string | null,
    treasures: string | null
  }
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
  subrace: number | null;
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
