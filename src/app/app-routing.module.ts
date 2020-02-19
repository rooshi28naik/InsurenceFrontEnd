import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { TwowheelerComponent } from './twowheeler/twowheeler.component';
import { FourwheelerComponent } from './fourwheeler/fourwheeler.component';
import { RenewComponent } from './renew/renew.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimComponent } from './claim/claim.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'reg', component:RegistrationComponent},
  {path:'twowheeler' ,component:TwowheelerComponent},
  {path:'fourwheeler' ,component:FourwheelerComponent},
  {path:'renew' ,component:RenewComponent},
  {path:'plans' ,component:PlansComponent},
  {path: 'login',component: LoginComponent},
  {path: 'bic', component: BuyInsuranceComponent},
  {path: 'claim', component: ClaimComponent},
  {path: 'fgtPassword', component: ForgetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
