import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.scss'],
})
export class FormPaymentComponent implements OnInit {
  paymentAddForm: FormGroup;
  price: number = 0;
  constructor(
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.createPaymentAddForm();
    this.dataService.currentFinalPrice.subscribe((finalPrice) => {
      this.price = finalPrice;
    });
  }

  createPaymentAddForm() {
    this.paymentAddForm = this.formBuilder.group({
      paymentCardName: ['', Validators.required],
      paymentCardNo: ['', Validators.required],
      paymentCardExpiry: ['', Validators.required],
      paymentCardCVV: ['', Validators.required],
    });
  }

  prevPage() {
    this.toastrService.warning('Pirim Bilgisi Ekranına Geçildi');
    this.router.navigate(['pirim-bilgileri']);
  }

  complete() {
    if (this.paymentAddForm.valid) {
      this.toastrService.success('İşlem Başarılı', 'Başarılı');
    } else {
      this.toastrService.error('Bilgiler hatalıdır', 'Dikkat');
    }
  }
}
