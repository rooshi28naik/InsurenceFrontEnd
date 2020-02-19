export class Validate{
     
    PASS_REGEXP= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/;
  
    MAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    constructor() { }
    validateName(name){
        if(name==null){
     
          return false;   
        }
        else       
      
        return true;
      }
      validateEmail(email){
        if( !this.MAIL_REGEXP.test(email) ){return false;
        alert("reached")}
        else {return true;}
      }
    
      validateAddress(address){
          if(address==""){return false;}
        else{return true;}
      }
       
      validateDate(date){
        if(!date){return false;}
        else{return true;
        }
      }
      validatePass(password){
        if(this.PASS_REGEXP.test(password)){
          return true;}
        else{ return false; }
      }
      validateContact(contact){
       
        if(contact!=10){return false;}
        else{return true;}
        }
}