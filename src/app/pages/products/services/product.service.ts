import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>('https://fakestoreapi.com/products');
  }

  showProduct( id: string ): Observable<Products>{
    return this.http.get<Products>(`https://fakestoreapi.com/products/${ id }`);
  }
}
