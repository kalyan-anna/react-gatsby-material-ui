export enum CardFace {
  FACE_UP = "faceup",
  FACE_DOWN = "facedown",
}

export enum CardSuit {
  CLUB = "club",
  DIAMOND = "diamond",
  HEART = "heart",
  SPADE = "spade",
}

export type CardRank = 'A' | 'K' | 'Q' | 'J' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'

export interface Card {
  readonly id: string;
  readonly suit: CardSuit;
  readonly rank: CardRank;
  face: CardFace;
}

export enum Player {
  COMPUTER = "computer",
  HUMAN = "human"
}

export interface SnapGameState {
  winner: Player | null;
  whoseTurn: Player | null;
  whoSnapped: Player | null;
  isPlaying: boolean;
  centerPile: {
    cards: Card[];
    matching: boolean;
  };
  computer: {
    cards: Card[];
  };
  human: {
    cards: Card[];
  };
}

export const PACK_OF_CARDS: Card[] = [
  { id: 'd1', suit: CardSuit.DIAMOND, rank: 'A', face: CardFace.FACE_DOWN },
  { id: 'd2', suit: CardSuit.DIAMOND, rank: '2', face: CardFace.FACE_DOWN },
  { id: 'd3', suit: CardSuit.DIAMOND, rank: '3', face: CardFace.FACE_DOWN },
  { id: 'd4', suit: CardSuit.DIAMOND, rank: '4', face: CardFace.FACE_DOWN },
  { id: 'd5', suit: CardSuit.DIAMOND, rank: '5', face: CardFace.FACE_DOWN },
  { id: 'd6', suit: CardSuit.DIAMOND, rank: '6', face: CardFace.FACE_DOWN },
  { id: 'd7', suit: CardSuit.DIAMOND, rank: '7', face: CardFace.FACE_DOWN },
  { id: 'd8', suit: CardSuit.DIAMOND, rank: '8', face: CardFace.FACE_DOWN },
  { id: 'd9', suit: CardSuit.DIAMOND, rank: '9', face: CardFace.FACE_DOWN },
  { id: 'd10', suit: CardSuit.DIAMOND, rank: '10', face: CardFace.FACE_DOWN },
  { id: 'd11', suit: CardSuit.DIAMOND, rank: 'J', face: CardFace.FACE_DOWN },
  { id: 'd12', suit: CardSuit.DIAMOND, rank: 'Q', face: CardFace.FACE_DOWN },
  { id: 'd13', suit: CardSuit.DIAMOND, rank: 'K', face: CardFace.FACE_DOWN },

  { id: 'h1', suit: CardSuit.HEART, rank: 'A', face: CardFace.FACE_DOWN },
  { id: 'h2', suit: CardSuit.HEART, rank: '2', face: CardFace.FACE_DOWN },
  { id: 'h3', suit: CardSuit.HEART, rank: '3', face: CardFace.FACE_DOWN },
  { id: 'h4', suit: CardSuit.HEART, rank: '4', face: CardFace.FACE_DOWN },
  { id: 'h5', suit: CardSuit.HEART, rank: '5', face: CardFace.FACE_DOWN },
  { id: 'h6', suit: CardSuit.HEART, rank: '6', face: CardFace.FACE_DOWN },
  { id: 'h7', suit: CardSuit.HEART, rank: '7', face: CardFace.FACE_DOWN },
  { id: 'h8', suit: CardSuit.HEART, rank: '8', face: CardFace.FACE_DOWN },
  { id: 'h9', suit: CardSuit.HEART, rank: '9', face: CardFace.FACE_DOWN },
  { id: 'h10', suit: CardSuit.HEART, rank: '10', face: CardFace.FACE_DOWN },
  { id: 'h11', suit: CardSuit.HEART, rank: 'J', face: CardFace.FACE_DOWN },
  { id: 'h12', suit: CardSuit.HEART, rank: 'Q', face: CardFace.FACE_DOWN },
  { id: 'h13', suit: CardSuit.HEART, rank: 'K', face: CardFace.FACE_DOWN },

  { id: 's1', suit: CardSuit.SPADE, rank: 'A', face: CardFace.FACE_DOWN },
  { id: 's2', suit: CardSuit.SPADE, rank: '2', face: CardFace.FACE_DOWN },
  { id: 's3', suit: CardSuit.SPADE, rank: '3', face: CardFace.FACE_DOWN },
  { id: 's4', suit: CardSuit.SPADE, rank: '4', face: CardFace.FACE_DOWN },
  { id: 's5', suit: CardSuit.SPADE, rank: '5', face: CardFace.FACE_DOWN },
  { id: 's6', suit: CardSuit.SPADE, rank: '6', face: CardFace.FACE_DOWN },
  { id: 's7', suit: CardSuit.SPADE, rank: '7', face: CardFace.FACE_DOWN },
  { id: 's8', suit: CardSuit.SPADE, rank: '8', face: CardFace.FACE_DOWN },
  { id: 's9', suit: CardSuit.SPADE, rank: '9', face: CardFace.FACE_DOWN },
  { id: 's10', suit: CardSuit.SPADE, rank: '10', face: CardFace.FACE_DOWN },
  { id: 's11', suit: CardSuit.SPADE, rank: 'J', face: CardFace.FACE_DOWN },
  { id: 's12', suit: CardSuit.SPADE, rank: 'Q', face: CardFace.FACE_DOWN },
  { id: 's13', suit: CardSuit.SPADE, rank: 'K', face: CardFace.FACE_DOWN },
  
  { id: 'c1', suit: CardSuit.CLUB, rank: 'A', face: CardFace.FACE_DOWN },
  { id: 'c2', suit: CardSuit.CLUB, rank: '2', face: CardFace.FACE_DOWN },
  { id: 'c3', suit: CardSuit.CLUB, rank: '3', face: CardFace.FACE_DOWN },
  { id: 'c4', suit: CardSuit.CLUB, rank: '4', face: CardFace.FACE_DOWN },
  { id: 'c5', suit: CardSuit.CLUB, rank: '5', face: CardFace.FACE_DOWN },
  { id: 'c6', suit: CardSuit.CLUB, rank: '6', face: CardFace.FACE_DOWN },
  { id: 'c7', suit: CardSuit.CLUB, rank: '7', face: CardFace.FACE_DOWN },
  { id: 'c8', suit: CardSuit.CLUB, rank: '8', face: CardFace.FACE_DOWN },
  { id: 'c9', suit: CardSuit.CLUB, rank: '9', face: CardFace.FACE_DOWN },
  { id: 'c10', suit: CardSuit.CLUB, rank: '10', face: CardFace.FACE_DOWN },
  { id: 'c11', suit: CardSuit.CLUB, rank: 'J', face: CardFace.FACE_DOWN },
  { id: 'c12', suit: CardSuit.CLUB, rank: 'Q', face: CardFace.FACE_DOWN },
  { id: 'c13', suit: CardSuit.CLUB, rank: 'K', face: CardFace.FACE_DOWN },
];
