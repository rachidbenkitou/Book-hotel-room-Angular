import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/products`;

  constructor(private http: HttpClient) {
  }

  public findProduct(productId?: number, productName?: string, categoryId?: number, visibilty?: string): Observable<Product[]> {
    let params: any = new HttpParams();

    if (productName != null && productName !== '') {
      params = params.set("productName", productName);
    }
    if (productId != null) {
      params = params.set("productId", productId);
    }
    if (categoryId != null) {
      params = params.set("categoryId", categoryId);
    }
    if (visibilty != null && visibilty !== '') {
      params = params.set("productVisibility", visibilty);
    }

    return this.http.get<Product[]>(`${this.Url}`, {params});
  }

  public findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.Url}/` + id);
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.Url}`, product);
  }

  public updateProduct(id: number, product: any): Observable<Product> {
    return this.http.put<Product>(`${this.Url}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  public product=new BehaviorSubject(false)
  editFormList(product: any){
    this.product.next(product)
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private tntProductId: number;

  setProductId(id: number) {
    this.tntProductId = id;
  }

  getProductId(): number {
    return this.tntProductId;
  }



  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
    "Bamboo Watch",
    "Black Watch",
    "Blue Band",
    "Blue T-Shirt",
    "Bracelet",
    "Brown Purse",
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
  ];
  
  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  getProducts() {
    return this.http.get<any>('assets/products.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/products-orders-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  generatePrduct(): Product {
    const product: Product =  {
      id: this.generateId(),
      name: this.generateName(),
      description: "Product Description",
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: "Product Category",
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating()
    };

    product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
    return product;
  }

  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299)+1);
  }

  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75)+1);
  }

  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
    return Math.floor(Math.random() * Math.floor(5)+1);
  }
}
