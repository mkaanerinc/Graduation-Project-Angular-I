import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstallmentOption } from 'src/app/models/installmentOption';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { InstallmentOptionService } from 'src/app/services/installment-option.service';
import { ProductService } from 'src/app/services/product.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  productAddForm: FormGroup;
  products: Product[] = [];
  installmentOptions: InstallmentOption[] = [];
  constructor(
    private productService: ProductService,
    private installmentOptionService: InstallmentOptionService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
    this.getProducts();
    this.getInstallmentOptions();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      installmentOptionName: ['', Validators.required],
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }

  getInstallmentOptions() {
    this.installmentOptionService
      .getInstallmentOptions()
      .subscribe((response) => {
        this.installmentOptions = response.data;
      });
  }

  nextPage() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      console.log(productModel);
      this.toastrService.success('İşlem Başarılı', 'Başarılı');
      this.newInstallmentOptionName(productModel.installmentOptionName);
      this.newProductName(productModel.productName);
      this.newProductPrice(
        this.products.find((a) => a.productName == productModel.productName)
          ?.productPrice
      );
      this.router.navigate(['pirim-bilgileri']);
    } else {
      this.toastrService.error('Formunuz hatalıdır', 'Dikkat');
    }
  }

  newProductName(productName: string) {
    this.dataService.changeProductName(productName);
  }
  newInstallmentOptionName(installmentOptionName: string) {
    this.dataService.changeInstallmentOptionName(installmentOptionName);
  }
  newProductPrice(productPrice: any) {
    this.dataService.changeProductPrice(productPrice);
  }
}
