import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Hotel} from "../models/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelUrl: string = `${environment.apiUrl}hotels`

  constructor(private http: HttpClient) {
  }
  public findHotels(id?: number, name?: string, address?: string, cityId?: number): Observable<Hotel[]> {
    let params: any = new HttpParams();
    if (id != null) {
      params = params.set("id", id);
    }
    if (name != null && name != "") {
      params = params.set("name", name);
    }
    if (address != null && address != "") {
      params = params.set("address", address);
    }
    if (cityId != null) {
      params = params.set("cityId", cityId);
    }
    return this.http.get<Hotel[]>(`${this.hotelUrl}`, {params});
  }
}
