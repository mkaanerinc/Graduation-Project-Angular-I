import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { PaymentMethod } from '../models/paymentMethod';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  apiUrl = 'http://localhost:2294/api/';
  constructor(private httpClient: HttpClient) {}

  getPaymentMethods(): Observable<ListResponseModel<PaymentMethod>> {
    let newPath = this.apiUrl + 'PaymentMethods/GetAll';
    return this.httpClient.get<ListResponseModel<PaymentMethod>>(newPath);
  }

  findPaymentMethod(
    paymentMethodId: number
  ): Observable<SingleResponseModel<PaymentMethod>> {
    let newPath = this.apiUrl + 'PaymentMethods/Find?itemId=' + paymentMethodId;
    return this.httpClient.get<SingleResponseModel<PaymentMethod>>(newPath);
  }
}
