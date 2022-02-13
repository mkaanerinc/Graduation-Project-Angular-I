import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { InsuredPersonRelationship } from '../models/insuredPersonRelationShip';

@Injectable({
  providedIn: 'root',
})
export class InsuredPersonRelationshipService {
  apiUrl = 'http://localhost:2294/api/';

  constructor(private httpClient: HttpClient) {}

  getInsuredPersonRelationships(): Observable<
    ListResponseModel<InsuredPersonRelationship>
  > {
    let newPath = this.apiUrl + 'InsuredPersonRelationships/GetAll';
    return this.httpClient.get<ListResponseModel<InsuredPersonRelationship>>(
      newPath
    );
  }

  findInsuredPersonRelationship(
    insuredPersonRelationshipId: number
  ): Observable<SingleResponseModel<InsuredPersonRelationship>> {
    let newPath =
      this.apiUrl +
      'InsuredPersonRelationships/Find?itemId=' +
      insuredPersonRelationshipId;
    return this.httpClient.get<SingleResponseModel<InsuredPersonRelationship>>(
      newPath
    );
  }
}
