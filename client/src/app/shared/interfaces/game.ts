export interface Game {
  id: string;
  winner: string; //id
  bluePlayer: string;
  redPlayer: string;
  datetime: number;
  details: string[];
}
