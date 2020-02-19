import { Component, OnInit } from '@angular/core';
import {  User } from '../User';
import { Validate } from './validate';
import { Router, RouterLink } from '@angular/router';
import { ServiceOneService } from '../service-one.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User = new User();
  validate : Validate;
 // service : ServiceOneService;
  
  nameV = false;
  emailV = false;
  dateV= false;
  passV = false;
  addrV = false;
  contactV = false;
 
  constructor(private router: Router, private service: ServiceOneService) { }

  ngOnInit() {

  }
  
 
show(){

   this.validate = new Validate();
  if(this.validate.validateName(this.user.name)){
    this.nameV=false;
  }
  else
  this.nameV=true;
  if(this.validate.validateContact((String)(this.user.contact).length)){
    this.contactV=false;
  }
  else
  this.contactV=true;
  if(this.validate.validatePass(this.user.password)){
    this.passV=false;
  }
  else
  this.passV=true;

  if(this.validate.validateDate(this.user.dob)){
    this.dateV=false;
  }
  else
  this.dateV=true;

  if(this.validate.validateEmail(this.user.email)){
    this.emailV=false;
  }
  else
  this.emailV=true;

  
  if(this.validate.validateAddress((String)(this.user.address).length)){
    this.addrV=false;
  }
  else
  this.addrV=true;

    


  if(this.validate.validateName(this.user.name) 
  && this.validate.validateContact((String)(this.user.contact).length)
  && this.validate.validateEmail(this.user.email)
  && this.validate.validateAddress((String)(this.user.address).length)
  && this.validate.validateDate(this.user.dob)
  && this.validate.validatePass(this.user.password)) {
    alert("*************");
    this.service.addUser(this.user)
    this.router.navigate(['/login']);

  }

}

}
    
  







