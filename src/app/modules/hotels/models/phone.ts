import {Hotel} from "./hotel";

export interface Phone {
  id: number;
  phone: string;
  hotelId: number;
  hotelName: string;
  hotelCity: string;
  hotel: Hotel;
}
