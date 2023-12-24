export type Viaje = {
  client: Cliente;
  driver: Conductor;
  money: number;
  distance: number;
  date: string;
  status: string;
};
export type Conductor = {
  name: string;
  email: string;
  username: string;
  travels: Viaje[];
};
export type Trajeta = {
  number: number;
  cvv: number;
  expirity: string;
  money: number;
};
export type Cliente = {
  name: string;
  email: string;
  cards: Trajeta[];
  travels: Viaje[];
};