import {Hotel} from "./hotel";

export interface Email {
  id: number;
  email: string;
  hotelId: number;
  hotel: Hotel;
}
