import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { InsuredPerson } from '../models/insuredPerson';

@Injectable({
  providedIn: 'root',
})
export class InsuredPersonService {
  apiUrl = 'http://localhost:2294/api/';

  constructor(private httpClient: HttpClient) {}

  getInsuredPersons(): Observable<ListResponseModel<InsuredPerson>> {
    let newPath = this.apiUrl + 'InsuredPersons/GetAll';
    return this.httpClient.get<ListResponseModel<InsuredPerson>>(newPath);
  }

  findInsuredPerson(
    insuredPersonId: number
  ): Observable<SingleResponseModel<InsuredPerson>> {
    let newPath = this.apiUrl + 'InsuredPersons/Find?itemId=' + insuredPersonId;
    return this.httpClient.get<SingleResponseModel<InsuredPerson>>(newPath);
  }

  addInsuredPerson(insuredPerson: InsuredPerson): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'InsuredPersons/Add';
    return this.httpClient.post<ResponseModel>(newPath, insuredPerson);
  }
}
