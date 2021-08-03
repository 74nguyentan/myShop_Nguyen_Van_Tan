import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeclaresService {
  private url = "https://tokhaiyte.net/api/declares";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.url}`)
  }
}
