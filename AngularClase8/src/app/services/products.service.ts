import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseApiUrl = 'https://localhost:7147/api';
  private apiUrl = `${this.baseApiUrl}/products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl + '/page/1/size/20');
  }
}
