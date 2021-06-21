import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private url = "https://60d040937de0b20017108146.mockapi.io/myShopApi/cart";
  constructor(private http:HttpClient) { }

  getListCart(): Observable<any>{
    return this.http.get(`${this.url}`);
  }

  getProductCart(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  addProductCart(product: Object): Observable<Object> {
    return this.http.post(`${this.url}`, product);
  }

  deleteProductCart(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
