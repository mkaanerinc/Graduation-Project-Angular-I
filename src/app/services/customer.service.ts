import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'http://localhost:2294/api/';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'Customers/GetAll';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  findCustomer(customerId: number): Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + 'Customers/Find?itemId=' + customerId;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }

  addCustomer(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'Customers/Add',
      customer
    );
  }
}
