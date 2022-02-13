import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { FormMainComponent } from './components/form-main/form-main.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { FormInsuredPersonComponent } from './components/form-insured-person/form-insured-person.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormPriceComponent } from './components/form-price/form-price.component';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    FormMainComponent,
    FormCustomerComponent,
    FormInsuredPersonComponent,
    FormProductComponent,
    FormPriceComponent,
    FormPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
