import { Component, OnInit } from '@angular/core';
import { Validate } from './validate';


@Component({
  selector: 'app-twowheeler',
  templateUrl: './twowheeler.component.html',
  styleUrls: ['./twowheeler.component.css']
})
export class TwowheelerComponent implements OnInit  {
  licence;
  purchase;
  engineNumber;
  chassis;
  validate : Validate;
  bikes = [
    { name: 'Hyudai', models: ['Tucson', 'Elantra', 'Kona'] },
    { name: 'Maruti Suzuki', models: ['Dzire','Baleno', 'Vitara Brezza'] },
    { name: 'Toyota', models: ['Dzire','Baleno', 'Vitara Brezza'] },
    { name: 'Renault', models: ['Dzire','Baleno', 'Vitara Brezza'] },
    { name: 'Tata-Motors', models: ['Dzire','Baleno', 'Vitara Brezza'] },
  ];
  ngOnInit(){
   
  }
  constructor() { }

  modelslist: Array<any>;
  changeBike(count) {
    console.log(count);
   this.modelslist = this.bikes.find(con => con.name == count).models;
 }
 
 changeModel(model){
   console.log(model);
 }
 data(){
   console.log(this.licence,this.purchase,this.engineNumber,this.chassis);
 }

 
  

}
