import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of as ObservableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}
    
    getProduct(query:string): Observable<Product[]> {
      return this.http.get<Product[]>('/api/product', {
        params: {q: query}
      });
    }
  
  
    changeQuantity(id: number, changeInQuantity: number): Observable<Product> {
     return this.http.patch<Product>('/api/product/' + id,
        {
          changeInQuantity:  changeInQuantity
        });
    }

    createProduct(product: Product): Observable<any> {
      return this.http.post<Product>('/api/product', product);
    }

  
  }


