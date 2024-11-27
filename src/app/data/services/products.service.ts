import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  selectedProducts: any[] = [];
  totalDeduction = 0;

  getProducts(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products');
  }
}
