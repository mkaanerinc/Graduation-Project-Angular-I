import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss'],
})
export class FormCustomerComponent implements OnInit {
  customerAddForm: FormGroup;

  today: any;
  dd: any;
  mm: any;
  yyyy: any;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCustomerAddForm();
    this.setDateAttritubeFormat();
  }

  createCustomerAddForm() {
    this.customerAddForm = this.formBuilder.group({
      customerFirstName: ['', Validators.required],
      customerLastName: ['', Validators.required],
      customerIdentityNo: ['', Validators.required],
      customerGender: ['', Validators.required],
      customerBirthdate: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerGSM: ['', Validators.required],
      customerCity: ['', Validators.required],
      customerAddress: ['', Validators.required],
    });
  }

  // Post işleminde hata alınıyor. Sorun çözülemedi.
  // addCustomer() {
  //   if (this.customerAddForm.valid) {
  //     let customerModel = Object.assign({}, this.customerAddForm.value);
  //     console.log(customerModel);
  //     this.customerService.addCustomer(customerModel).subscribe(
  //       (response) => {
  //         this.toastrService.success(response.message, 'Başarılı');
  //       },
  //       (responseError) => {
  //         console.log(responseError);
  //       }
  //     );
  //   } else {
  //     this.toastrService.error('Formunuz hatalıdır', 'Dikkat');
  //   }
  // }

  addCustomer() {
    if (this.customerAddForm.valid) {
      this.toastrService.success('İşlem Başarılı', 'Başarılı');
      this.router.navigate(['sigortalı-girişi']);
    } else {
      this.toastrService.error('Formunuz hatalıdır', 'Dikkat');
    }
  }

  setDateAttritubeFormat() {
    this.today = new Date();
    this.dd = this.today.getDate();
    this.mm = this.today.getMonth() + 1; //January is 0!
    this.yyyy = this.today.getFullYear();

    if (this.dd < 10) {
      this.dd = '0' + this.dd;
    }

    if (this.mm < 10) {
      this.mm = '0' + this.mm;
    }

    this.today = this.yyyy + '-' + this.mm + '-' + this.dd;
  }
}
