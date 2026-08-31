export type DeckLanguage = 'english' | 'portuguese' | 'french' | 'chinese';
export type DeckLine = 'children' | 'adults' | 'exams';
export type DeckStatus = 'available' | 'comingSoon';

export interface Deck {
  id: string;
  titleKey: string;
  imageAltKey: string;
  image: string | null;
  imageClass: string;
  language: DeckLanguage;
  line: DeckLine;
  theme: string;
  age: string;
  ageOrder: number;
  cardCount: number;
  status: DeckStatus;
  premium?: boolean;
}