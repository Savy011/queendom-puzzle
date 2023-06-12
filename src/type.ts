export enum Lang {
  eng = 'https://raw.githubusercontent.com/Savy011/queendom-puzzle/main/.github/images/Forms/GirlGroupAssembleForm_ENG.png',
  kor = 'https://raw.githubusercontent.com/Savy011/queendom-puzzle/main/.github/images/Forms/GirlGroupAssembleForm_KOR.png'
}

export type Idol = {
  nameEng: string;
  nameKor: string;
  url: string;
};

export type Background = {
  name: string;
  eng: string;
  kor: string;
};

export type ParsedData = {
  name: string;
  language: Lang;
  first: Idol;
  second: Idol;
  third: Idol;
  forth: Idol;
  fifth: Idol;
  sixth: Idol;
  seventh: Idol;
};
