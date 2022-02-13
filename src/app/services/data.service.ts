import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private installmentOptionName = new BehaviorSubject<string>('default');
  private productName = new BehaviorSubject<string>('default');
  private productPrice = new BehaviorSubject<any>(0);
  private finalPrice = new BehaviorSubject<any>(0);

  currentProductName = this.productName.asObservable();
  currentinstallmentOptionName = this.installmentOptionName.asObservable();
  currentProductPrice = this.productPrice.asObservable();
  currentFinalPrice = this.finalPrice.asObservable();

  constructor() {}

  changeProductName(productName: string) {
    this.productName.next(productName);
  }

  changeProductPrice(productPrice: number) {
    this.productPrice.next(productPrice);
  }

  changePrice(price: number) {
    this.finalPrice.next(price);
  }

  changeInstallmentOptionName(installmentOptionName: string) {
    this.installmentOptionName.next(installmentOptionName);
  }
}
