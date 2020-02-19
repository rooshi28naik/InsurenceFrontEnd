import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {
  showTwo=false;
  showFour=false;
  constructor() { }

  ngOnInit() {
  }
  twoWheeler(){
    this.showTwo=true;
    
    this.showFour=false;

  }
  fourWheeler(){
    this.showTwo = false;
    
    this.showFour=true;
  

  }


}
