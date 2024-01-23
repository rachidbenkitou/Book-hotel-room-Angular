import {Phone} from "./phone";

export interface Hotel {
  id: number
  name: string;
  address: string;
  description: string;
  status: string;
  cityId: number;
  cityName: string;
  defaultImage: string;
  images: File[];
  emails: string[];
  phoneNumbers: Phone[];
}
