import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstallmentOption } from '../models/installmentOption';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class InstallmentOptionService {
  apiUrl = 'http://localhost:2294/api/';
  constructor(private httpClient: HttpClient) {}

  getInstallmentOptions(): Observable<ListResponseModel<InstallmentOption>> {
    let newPath = this.apiUrl + 'InstallmentOptions/GetAll';
    return this.httpClient.get<ListResponseModel<InstallmentOption>>(newPath);
  }

  findInstallmentOption(
    installmentOptionId: number
  ): Observable<SingleResponseModel<InstallmentOption>> {
    let newPath =
      this.apiUrl + 'InstallmentOptions/Find?itemId=' + installmentOptionId;
    return this.httpClient.get<SingleResponseModel<InstallmentOption>>(newPath);
  }
}
