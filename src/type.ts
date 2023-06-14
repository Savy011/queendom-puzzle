export enum Lang {
  eng = '../.github/images/Forms/GirlGroupAssembleForm_ENG.png',
  kor = '../.github/images/Forms/GirlGroupAssembleForm_KOR.png'
}

export type Idol = {
  nameEng: string;
  nameKor: string;
  url: string;
};

export type userData = {
  hashedAddress: string;
  lastVisitedAt: Date;
  firstVisitedAt: Date;
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
