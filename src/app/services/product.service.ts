import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:2294/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'Products/GetAll';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  findProduct(productId: number): Observable<SingleResponseModel<Product>> {
    let newPath = this.apiUrl + 'Products/Find?itemId=' + productId;
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }
}
