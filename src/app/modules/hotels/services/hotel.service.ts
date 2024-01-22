import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Hotel} from "../models/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelUrl: string = `${environment.appUrl}hotels`

  constructor(private http: HttpClient) {
  }

  public findHotels(id?: number, name?: string, address?: string, cityId?: number): Observable<Hotel[]> {
    let params: any = new HttpParams();
    if (id != null) {
      params = params.set("id", id);
    }
    if (name != null && name !== "") {
      params = params.set("name", name);
    }
    if (address != null && address !== "") {
      params = params.set("address", address);
    }
    if (cityId != null) {
      params = params.set("cityId", cityId);
    }
    return this.http.get<Hotel[]>(`${this.hotelUrl}`, {params});
  }

  public findHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.hotelUrl}/${id}`);
  }

  public addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.hotelUrl}`, hotel);
  }

  public updateHotel(id: number, hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.hotelUrl}/${id}`, hotel);
  }

  public deleteHotel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.hotelUrl}/${id}`);
  }

  public hotel = new BehaviorSubject(false)

  editFormList(hotel: any) {
    this.hotel.next(hotel)
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private hotelId: number;

  setHotelId(id: number) {
    this.hotelId = id;
  }

  getHotelId(): number {
    return this.hotelId;
  }
}
