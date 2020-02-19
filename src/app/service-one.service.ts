import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';
import { CarModel } from './fourwheeler/CarModel';
import { Insurance } from './fourwheeler/Insurance';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor(private http:HttpClient) { }
  cars;
  addUser(user : User){
    let url="http://192.168.14.81:8989/insurance-web/insurance/register";
    
    this.http.post(url,user).subscribe((data)=>{
      console.log(data);
    })
  }

  addInsuranceDetails( ins : Insurance){
    let url = "http://192.168.14";

    this.http.post(url,ins).subscribe((data)=>{
      console.log(data);
    })
  }

   getCarDetails( ){
    let url = "http://192.168.14.81:8989/insurance-web/insurance/carList";

      return this.http.get(url);
     
  }
}
