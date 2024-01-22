import {Image} from "../../shared/models/image";
import {Email} from "./email";
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
  images: Image[];
  emails: Email[];
  phoneNumbers: Phone[];
}
