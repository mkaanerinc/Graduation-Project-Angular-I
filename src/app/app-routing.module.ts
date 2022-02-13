import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { FormInsuredPersonComponent } from './components/form-insured-person/form-insured-person.component';
import { FormMainComponent } from './components/form-main/form-main.component';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';
import { FormPriceComponent } from './components/form-price/form-price.component';
import { FormProductComponent } from './components/form-product/form-product.component';

const routes: Routes = [
  {
    path: '',
    component: FormMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'sigorta-ettiren',
        pathMatch: 'full',
      },
      { path: 'sigorta-ettiren', component: FormCustomerComponent },
      { path: 'sigortalı-girişi', component: FormInsuredPersonComponent },
      { path: 'ürün-seçimi', component: FormProductComponent },
      { path: 'pirim-bilgileri', component: FormPriceComponent },
      { path: 'ödeme', component: FormPaymentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
