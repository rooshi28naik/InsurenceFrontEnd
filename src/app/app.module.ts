import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { TwowheelerComponent } from './twowheeler/twowheeler.component';
import { FourwheelerComponent } from './fourwheeler/fourwheeler.component';
import { PlansComponent } from './plans/plans.component';
import { RenewComponent } from './renew/renew.component';
import { ClaimComponent } from './claim/claim.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyInsuranceComponent,
    TwowheelerComponent,
    FourwheelerComponent,
    PlansComponent,
    RenewComponent,
    ClaimComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,RouterModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
