export enum Lang {
  kor = 'https://res.cloudinary.com/dobbtfy4u/image/upload/v1686730909/qdm-pzl/forms/GirlGroupAssembleForm_KOR_hw0umv.png',
  eng = 'https://res.cloudinary.com/dobbtfy4u/image/upload/v1686730909/qdm-pzl/forms/GirlGroupAssembleForm_ENG_dmmbzp.png'
}

export type Idol = {
  nameEng: string;
  nameKor: string;
  url: string;
  //urlAlt: string;
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
