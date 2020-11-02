export type ItemProp = ImgProp & TitleProp & ExtraProp & LinkProp;

export type ImgProp = {
  bgUrl: string;
};

export type TitleProp = {
  title: string;
};

export type ExtraProp = {
  rating: number;
  year: Date;
};

export type LinkProp = {
  id: number;
};
