import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = 'http://localhost:2294/api/';

  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<ListResponseModel<Order>> {
    let newPath = this.apiUrl + 'Orders/GetAll';
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }

  findOrder(orderId: number): Observable<SingleResponseModel<Order>> {
    let newPath = this.apiUrl + 'Orders/Find?itemId=' + orderId;
    return this.httpClient.get<SingleResponseModel<Order>>(newPath);
  }

  addOrder(order: Order): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'Orders/Add';
    return this.httpClient.post<ResponseModel>(newPath, order);
  }
}
