import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../../hotels/models/hotel";
import {City} from "../models/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  cityUrl: string = `${environment.appUrl}cities`

  constructor(private http: HttpClient) {
  }

  public findCities(): Observable<City[]> {
    return this.http.get<Hotel[]>(`${this.cityUrl}`);
  }
}
