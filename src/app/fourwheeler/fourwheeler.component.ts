import { Component, OnInit } from '@angular/core';
import { Validate } from './validate';
import { Insurance } from './Insurance';
import { ServiceOneService } from '../service-one.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-fourwheeler',
  templateUrl: './fourwheeler.component.html',
  styleUrls: ['./fourwheeler.component.css']
})
export class FourwheelerComponent implements OnInit {
  licence;
  carsData;
  cars;
  models;
  purDate;
  engineNumber;
  chassisNumber;
  brandNo;
  carsList:[]=[];
  modelList;
  carModelList;

  ins : Insurance = new Insurance();

  validate : Validate = new Validate();
  
  constructor(private service: ServiceOneService) { }

  ngOnInit() {
    this.service.getCarDetails().subscribe((date=>{
      this.carsData = date;
      this.carsData.find( x => x.carId)
     }));  
  }
 
  changeCars(value){
    this.ins.brand = value;

  
    console.log(value);
   
    this.carModelList = this.cars.find(con=> con.name == value).models;
  }
  changeModels(value){
      this.ins.model=value;
   
      console.log(value)
   }
    changeVariant(value){

      }


  showData(){
   
    console.log(this.carsList)
    //console.log(this.purDate);
    /*
    if(this.validate.validateDate(this.purDate)){

      this.vPurchaseDate= false
    }else{this.vPurchaseDate = true;}
    if(this.validate.validateChasisNumber(this.chassisNumber)){
     
       this.vChasisNumber = true;
    }
    else {this.vChasisNumber = false;}
    if(this.validate.validateLicence(this.licence)){
      this.vLicence = true;
    }
    else {this.vLicence= false;}
    if(this.validate.validateEngine(this.engineNumber)){
     
        this.vEngineNumber = true;
    }
    else{this.vEngineNumber = false;}
    alert(JSON.stringify(this.cm))
    */
   /*this.carsData=this.service.getCarDetails();
    alert(JSON.stringify(this.carsData))
  this.carsData.forEach(element => {  
    });
*/
  alert(JSON.stringify(this.ins)) 
  this.service.addInsuranceDetails(this.ins);
   }
}
