import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://60d040937de0b20017108146.mockapi.io/myShopApi/myShop';

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
