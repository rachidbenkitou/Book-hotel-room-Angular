import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}cities`;

  constructor(private http: HttpClient) {
  }

  public findCities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.Url}`);
  }

  public findCityById(id: number): Observable<any> {
    return this.http.get<any>(`${this.Url}/` + id);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post<any>(`${this.Url}`, category);
  }

  public updateCategory(id: number, category: any): Observable<any> {
    return this.http.put<any>(`${this.Url}/${id}`, category);
  }

  public deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }


  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private categoryId: number;

  setCategoryId(id: number) {
    this.categoryId = id;
  }

  getCategoryId(): number {
    return this.categoryId;
  }
}
