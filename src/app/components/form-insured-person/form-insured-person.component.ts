import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InsuredPersonService } from 'src/app/services/insured-person.service';

@Component({
  selector: 'app-form-insured-person',
  templateUrl: './form-insured-person.component.html',
  styleUrls: ['./form-insured-person.component.scss'],
})
export class FormInsuredPersonComponent implements OnInit {
  insuredPersonAddForm: FormGroup;

  today: any;
  dd: any;
  mm: any;
  yyyy: any;

  constructor(
    private insuredPersonService: InsuredPersonService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createInsuredPersonAddForm();
    this.setDateAttritubeFormat();
  }

  createInsuredPersonAddForm() {
    this.insuredPersonAddForm = this.formBuilder.group({
      insuredPersonRelationshipId: ['', Validators.required],
      insuredPersonFirstName: ['', Validators.required],
      insuredPersonLastName: ['', Validators.required],
      insuredPersonIdentityNo: ['', Validators.required],
      insuredPersonGender: ['', Validators.required],
      insuredPersonBirthdate: ['', Validators.required],
      insuredPersonHeight: ['', Validators.required],
      insuredPersonWeight: ['', Validators.required],
      insuredPersonJob: ['', Validators.required],
      insuredPersonEmail: ['', Validators.required],
      insuredPersonGSM: ['', Validators.required],
      insuredPersonCity: ['', Validators.required],
      insuredPersonAddress: ['', Validators.required],
    });
  }

  addInsuredPerson() {
    if (this.insuredPersonAddForm.valid) {
      this.toastrService.success('İşlem Başarılı', 'Başarılı');
      this.router.navigate(['ürün-seçimi']);
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
