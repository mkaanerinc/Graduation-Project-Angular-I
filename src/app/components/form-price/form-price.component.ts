import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-price',
  templateUrl: './form-price.component.html',
  styleUrls: ['./form-price.component.scss'],
})
export class FormPriceComponent implements OnInit {
  product: string = '';
  installmentOptionName: string = '';
  productPrice: any = '';
  price: number = 0;
  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.currentProductName.subscribe((productName) => {
      this.product = productName;
    });
    this.dataService.currentinstallmentOptionName.subscribe(
      (installmentOptionName) => {
        this.installmentOptionName = installmentOptionName;
      }
    );
    this.dataService.currentProductPrice.subscribe((productPrice) => {
      this.productPrice = productPrice;
    });
    this.calculatePrice(this.installmentOptionName);
    this.newFinalPrice(this.price);
  }

  calculatePrice(installmentOptionName: string) {
    if (installmentOptionName != 'Peşin') {
      let intInstallmentOptionName = +installmentOptionName;
      this.price = this.productPrice + 15 * intInstallmentOptionName;
    } else {
      this.price = this.productPrice;
    }
  }

  newFinalPrice(finalPrice: any) {
    this.dataService.changePrice(finalPrice);
  }

  nextPage() {
    this.toastrService.success('Onaylandı', 'Başarılı');
    this.router.navigate(['ödeme']);
  }

  prevPage() {
    this.toastrService.warning('Paket Seçim Ekranına Geçildi');
    this.router.navigate(['ürün-seçimi']);
  }
}
